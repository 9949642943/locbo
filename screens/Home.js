import React, { useState, useEffect } from "react";
import { actionTypes } from "../Context/reducer";
import { useStateValue } from "../Context/StateProvider";
import { ScrollView, View, Text, StyleSheet, Dimensions } from "react-native";
import { Header, Button } from "react-native-elements";
import { SafeAreaView } from "react-native-safe-area-context";
import { SliderBox } from "react-native-image-slider-box";
import { baseURL } from "../config";
import { MaterialIcons } from "@expo/vector-icons";
import Axios from "axios";
import PostCard from "../components/PostCard";

const { width, height } = Dimensions.get("window");

function Home({ navigation }) {
	const [{ user }, userdispatch] = useStateValue();
	const [posts, setposts] = useState([]);

	useEffect(() => {
		Axios.get(baseURL + "/posts", {
			headers: {
				"Content-type": "application/json",
				Authorization: "Bearer " + user.token,
			},
		})
			.then((resp) => {
				setposts(resp.data);
			})
			.catch((err) => {
				console.log(err);
			});
	}, []);

	const images = [
		require("../assets/Logo.png"),
		baseURL + "/images/carousel/1.PNG",
		baseURL + "/images/carousel/2.PNG",
		baseURL + "/images/carousel/3.PNG",
	];

	const HandleLogout = () => {
		userdispatch({
			type: actionTypes.SET_USER,
			user: null,
		});
	};

	const HandlePOST = () => {
		navigation.push("Post");
	};

	return (
		<SafeAreaView
			style={{ flex: 1, marginTop: 10, backgroundColor: "#181515" }}
		>
			<Header
				leftComponent={{
					text: "LOCBO",
					style: { color: "#fff", fontFamily: "Oleo-Script", height: 50 },
				}}
				containerStyle={{
					backgroundColor: "#181515",
					height: 10,
				}}
			/>
			<ScrollView>
				<SliderBox
					images={images}
					sliderBoxHeight={280}
					dotStyle={{
						display: "none",
					}}
					backgroundColor="#181515"
					paginationBoxVerticalPadding={20}
					autoplay
					circleLoop
				/>
				<View style={styles.container}>
					{posts
						? posts.map((post) => {
								return (
									<PostCard
										post={post}
										onPress={() => {
											navigation.push("PostDetail", {
												post: post,
											});
										}}
									/>
								);
						  })
						: "No posts to display"}
				</View>
			</ScrollView>
			<View style={styles.iconContainer}>
				<Button
					icon={
						<MaterialIcons
							name="add-circle"
							size={50}
							color="gray"
							style={styles.iconStyle}
						/>
					}
					buttonStyle={{ backgroundColor: "rgba(0, 0, 0, 0)" }}
					onPress={HandlePOST}
				/>
			</View>
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#181515",
		display: "flex",
		minHeight: 1000,
	},
	text: {
		color: "#fff",
		fontSize: 50,
	},
	iconContainer: {
		position: "absolute",
		bottom: 0,
		alignSelf: "flex-end",
		padding: 20,
	},
});
export default Home;
