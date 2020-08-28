import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function Loading() {
	return (
		<View style={styles.container}>
			<Text>Loading</Text>
			<StatusBar style="auto" />
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#181515",
		alignItems: "center",
		justifyContent: "center",
	},
});
