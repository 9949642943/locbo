import React, { useState } from "react";
import { actionTypes } from "../Context/reducer";
import { useStateValue } from "../Context/StateProvider";
import { View, Text, StyleSheet, Dimensions, Alert } from "react-native";
import { Header, Button, Avatar, ButtonGroup } from "react-native-elements";
import { SafeAreaView } from "react-native-safe-area-context";
import { baseURL } from "../config";
import ImagePicker from "react-native-image-crop-picker";
import axios from "axios";
import FormData, { Object } from "form-data";
import RoundInput from "../components/RoundInput";
import RoundButton from "../components/RoundButton";

const { width, height } = Dimensions.get("window");

function Home({ navigation }) {
	const [{ user }, userdispatch] = useStateValue();
	const [imgs, setimgs] = useState([]);
	const [selectedIndex, setselectedIndex] = useState(null);
	const [title, settitle] = useState("");
	const [description, setdescription] = useState("");
	const [price, setprice] = useState("");
	const [category, setcategory] = useState("");

	const HandleLogout = () => {
		userdispatch({
			type: actionTypes.SET_USER,
			user: null,
		});
	};

	const HandlePOST = () => {
		if (description.length < 10) {
			Alert.alert("Description must be atleast 10 characters long");
		}
		if (description.length > 250) {
			Alert.alert("Description must be less than 250 characters long");
		}
		if (typeof price != Number) {
			Alert.alert("Price must be a number");
		}
		if (category.length > 30) {
			Alert.alert("Category must be less than 30 letters");
		}
		var data = {
			price: price,
			title: title,
			description: description,
			Category: category,
			pics: imgs,
			forsale: selectedIndex == 0,
			forrent: selectedIndex == 1,
		};

		axios
			.post(baseURL + "/posts", data, {
				headers: {
					"Content-type": "application/json",
					Authorization: "Bearer " + user.token,
				},
			})
			.then((response) => {
				if (response.status == 200) {
					Alert.alert("Your request has been posted");
					console.log(response.data);
					navigation.push("Home");
				}
			})
			.catch((err) => {
				console.log(err);
			});
		console.log("Handling post", imgs);
	};

	const ImageUpload = () => {
		setimgs([]);
		Alert.alert(
			"Select Source",
			"Where do you want to select your image from?",
			[
				{
					text: "Select From Device",
					onPress: () => {
						ImagePicker.openPicker({
							cropping: true,
							multiple: true,
							writeTempFile: true,
						}).then((images) => {
							images.map((image) => {
								console.log(image);
								const formData = new FormData();
								formData.append("photo", {
									name: image.path.split("/").pop(),
									type: image.mime,
									uri:
										Platform.OS === "android"
											? image.path
											: image.path.replace("file://", ""),
								});
								axios
									.post(baseURL + "/imageUpload", formData, {
										headers: {
											"Content-type": "multipart/form-data",
											Authorization: "Bearer " + user.token,
										},
									})
									.then((response) => {
										setimgs([...imgs, response.data.uri]);
										console.log("images are ", imgs);
									})
									.catch((error) => {
										Alert.alert("image Upload Post Failed  , Try again !");
									});
							});
						});
					},
					style: "default",
				},
				{
					text: "Open Camera?",
					onPress: () => {
						ImagePicker.openCamera({
							multiple: true,
							cropping: true,
						})
							.then((images) => {
								images.map((image) => {
									const formData = new FormData();
									formData.append("photo", {
										name: image.path.split("/").pop(),
										type: image.mime,
										uri:
											Platform.OS === "android"
												? image.path
												: image.path.replace("file://", ""),
									});
									axios
										.post(baseURL + "/imageUpload", formData, {
											headers: {
												"Content-type": "multipart/form-data",
												Authorization: "Bearer " + user.token(),
											},
										})
										.then((response) => {
											setimgs([...imgs, response.data.uri]);
										})
										.catch((error) => {
											Alert.alert("image Upload Post Failed  , Try again !");
										});
								});
							})
							.catch((err) => {
								console.log(err);
							});
					},
					style: "default",
				},
			],
			{ cancelable: true }
		);
	};

	const updateIndex = (selectedIndex) => {
		setselectedIndex(selectedIndex);
	};

	return (
		<SafeAreaView style={{ flex: 1, backgroundColor: "#181515" }}>
			<Header
				leftComponent={{
					text: "POST",
					style: { color: "#fff", fontFamily: "Oleo-Script", height: 70 },
				}}
				containerStyle={{
					backgroundColor: "#181515",
					height: 10,
				}}
			/>
			<View style={styles.formContainer}>
				<View style={styles.button_group}>
					<ButtonGroup
						onPress={updateIndex}
						selectedIndex={selectedIndex}
						buttons={["For Sale", "For Rent", "Request"]}
						buttonContainerStyle={{ backgroundColor: "#444" }}
						selectedButtonStyle={{ backgroundColor: "#000" }}
						innerBorderStyle={{ color: "#000" }}
						textStyle={{ color: "#fff" }}
						containerStyle={{
							width: 200,
							borderColor: "#555555",
						}}
					/>
				</View>
				<View style={styles.Group1}>
					<Avatar
						size="xlarge"
						rounded
						source={{
							uri: imgs[0]
								? baseURL + imgs[0]
								: "data:image/jpeg;base64,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",
						}}
						onPress={ImageUpload}
						activeOpacity={0.7}
					/>
				</View>
			</View>
			<View style={styles.inputContainer}>
				<RoundInput
					placeholder="Enter Title of Product"
					defaultValue={title}
					onChangeText={(value) => {
						settitle(value);
					}}
				/>
			</View>
			<View style={styles.inputContainer}>
				<RoundInput
					placeholder="Enter Description of Product"
					defaultValue={description}
					onChangeText={(value) => {
						setdescription(value);
					}}
				/>
			</View>
			<View style={styles.inputContainer}>
				<RoundInput
					placeholder="Enter Price of Product"
					defaultValue={price}
					onChangeText={(value) => {
						setprice(value);
					}}
				/>
			</View>
			<View style={styles.inputContainer}>
				<RoundInput
					placeholder="Enter Category of Product"
					defaultValue={category}
					onChangeText={(value) => {
						setcategory(value);
					}}
				/>
			</View>
			<View style={styles.inputContainer}>
				<RoundButton title="POST" onPress={HandlePOST} />
			</View>
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	inputContainer: {
		alignItems: "center",
		margin: 20,
	},
	formContainer: {
		display: "flex",
		backgroundColor: "#181515",
		flexDirection: "row",
		alignItems: "center",
	},
	button_group: {
		// borderColor: "#fff",
		// borderWidth: 1,
		backgroundColor: "#181515",
	},
	Group1: {
		padding: 40,
		flex: 1,
	},
});
export default Home;
