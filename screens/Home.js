import React from "react";
import { actionTypes } from "../Context/reducer";
import { useStateValue } from "../Context/StateProvider";
import { ScrollView, View, Text, StyleSheet, Dimensions } from "react-native";
import { Header, Button } from "react-native-elements";
import { SafeAreaView } from "react-native-safe-area-context";
import { SliderBox } from "react-native-image-slider-box";
import { baseURL } from "../config";
import { MaterialIcons } from "@expo/vector-icons";

const { width, height } = Dimensions.get("window");





function Home({ navigation }) {
	const [{ user }, userdispatch] = useStateValue();

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
		navigation.navigate("Post");
	};

	return (
		<SafeAreaView style={{ flex: 1, backgroundColor: "#181515" }}>
			<Header
				leftComponent={{
					text: "LOCBO",
					style: { color: "#fff", fontFamily: "Oleo-Script", height: 70 },
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
					<Text style={styles.text}>Hello,{user.user.nickname}</Text>
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
		alignItems: "center",
		justifyContent: "center",
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
