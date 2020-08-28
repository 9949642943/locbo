import React from "react";
import { View, Text, StyleSheet } from "react-native";

function LOCBO() {
	return (
		<View>
			<Text style={styles.logo}>LOCBO</Text>
		</View>
	);
}

const styles = StyleSheet.create({
	logo: {
		color: "#fff",
		fontSize: 50,
		fontFamily: "Oleo-Script",
	},
});

export default LOCBO;
