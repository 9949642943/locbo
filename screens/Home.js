import React from "react";
import { actionTypes } from "../Context/reducer";
import { useStateValue } from "../Context/StateProvider";
import { ScrollView, View, Text, StyleSheet } from "react-native";
import RoundButton from "../components/RoundButton";
import { Header } from "react-native-elements";
import { SafeAreaView } from "react-native-safe-area-context";
import CarouselItem from "../components/CarouselItem";
import { SliderBox } from "react-native-image-slider-box";
function Home({ navigation }) {
	const [{ user }, userdispatch] = useStateValue();

	const images = [
		"https://i.ibb.co/hYjK44F/anise-aroma-art-bazaar-277253.jpg",
		"https://i.ibb.co/JtS24qP/food-inside-bowl-1854037.jpg",
		"https://i.ibb.co/JxykVBt/flat-lay-photography-of-vegetable-salad-on-plate-1640777.jpg",
	];

	const HandleLogout = () => {
		userdispatch({
			type: actionTypes.SET_USER,
			user: null,
		});
	};

	return (
		<SafeAreaView>
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
					sliderBoxHeight={200}
					onCurrentImagePressed={(index) =>
						console.warn(`image ${index} pressed`)
					}
					dotColor="#FFEE58"
					inactiveDotColor="#90A4AE"
					paginationBoxVerticalPadding={20}
					autoplay
					circleLoop
				/>
				<View style={styles.container}>
					<Text style={styles.text}>Hello,{user.nickname}</Text>
				</View>
			</ScrollView>
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
});
export default Home;
