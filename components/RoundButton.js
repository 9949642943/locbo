import React from "react";
import { View, TextInput, StyleSheet } from "react-native";
import { Button } from "react-native-elements";

function RoundButton({ title, onPress }) {
	return (
		<View>
			<Button
				title={title}
				onPress={onPress}
				titleStyle={{ color: "#000", fontFamily: "poppins-regular" }}
				buttonStyle={styles.button}
				containerStyle={styles.container}
			/>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		borderRadius: 20,
		width: 204.89,
	},
	button: {
		backgroundColor: "#E9EC6C",
	},
});

export default RoundButton;
