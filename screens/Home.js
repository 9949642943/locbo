import React from "react";
import { actionTypes } from "../Context/reducer";
import { useStateValue } from "../Context/StateProvider";
import { View, Text, StyleSheet } from "react-native";
import RoundButton from "../components/RoundButton";

function Home({ navigation }) {
	const [{ user }, userdispatch] = useStateValue();

	const HandleLogout = () => {
		userdispatch({
			type: actionTypes.SET_USER,
			user: null,
		});
	};

	return (
		<View style={styles.container}>
			<Text style={styles.text}>Hello {user}</Text>
			<RoundButton title="Logout" onPress={HandleLogout} />
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#181515",
		display: "flex",
		alignItems: "center",
		justifyContent: "center",
	},
	text: {
		color: "#fff",
		fontSize: 50,
	},
});
export default Home;
