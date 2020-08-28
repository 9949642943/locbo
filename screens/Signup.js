import React, { useState, useEffect } from "react";
import { useStateValue } from "../Context/StateProvider";
import { View, Text, StyleSheet, Alert } from "react-native";
import { Button } from "react-native-elements";
import LOCBO from "../components/LOCBO";
import SecondaryHeader from "../components/SecondaryHeader";
import RoundInput from "../components/RoundInput";
import RoundButton from "../components/RoundButton";

function Signup({ navigation }) {
	const [{ user }, userdispatch] = useStateValue();

	const Gsignin = () => {
		console.log("Google sign in clicked");
		navigation.navigate("AddPass");
	};

	const Fsignin = () => {
		console.log("Facebook sign in clicked");
		navigation.navigate("AddPass");
	};

	const Msignin = () => {
		navigation.navigate("Mobconf");
	};

	return (
		<View style={styles.container}>
			<LOCBO />
			<SecondaryHeader content="SIGNUP" />
			<Button
				title="Sign in With Google"
				buttonStyle={{
					backgroundColor: "#de5246",
				}}
				containerStyle={{ width: 200, borderRadius: 10 }}
				onPress={Gsignin}
				width={60}
			/>
			<Button
				title="Sign in With Facebook"
				containerStyle={{ width: 200, borderRadius: 10 }}
				buttonStyle={{
					backgroundColor: "#3b5998",
				}}
				onPress={Fsignin}
			/>
			<Button
				title="Sign in With Mobile"
				containerStyle={{ width: 200, borderRadius: 10 }}
				buttonStyle={{ backgroundColor: "#999999" }}
				onPress={Msignin}
			/>
			<Text
				onPress={() => navigation.navigate("Login")}
				style={styles.textlink}
			>
				Back to Login
			</Text>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		backgroundColor: "#181515",
		flex: 1,
		display: "flex",
		alignItems: "center",
		justifyContent: "space-evenly",
	},
	textlink: {
		color: "#fff",
	},
});

export default Signup;
