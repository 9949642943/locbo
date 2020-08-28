import React from "react";
import { View, Text, StyleSheet } from "react-native";

function SecondaryHeader({ content = "LOGIN" }) {
	return (
		<View>
			<Text style={styles.header}>{content}</Text>
		</View>
	);
}

const styles = StyleSheet.create({
	header: {
		color: "#E9EC6C",
		fontSize: 28,
		fontFamily: "Oleo-Script",
	},
});

export default SecondaryHeader;
