import React, { useState, useEffect } from "react";
import { useStateValue } from "../Context/StateProvider";
import { View, Text, StyleSheet, Alert } from "react-native";
import { Button } from "react-native-elements";
import LOCBO from "../components/LOCBO";
import SecondaryHeader from "../components/SecondaryHeader";
import RoundInput from "../components/RoundInput";
import RoundButton from "../components/RoundButton";

function AddPass({ navigation, route }) {
	const [{ user }, userdispatch] = useStateValue();
	const [Password, setPassword] = useState("");
	const [ConfPassword, setConfPassword] = useState("");
	const [err, seterr] = useState("");

	console.log("token is ", route.params.token);

	const HandleSubmit = () => {
		if (Password === ConfPassword) {
			navigation.push("Nickname", {
				token: route.params.token,
				password: Password,
			});
		} else {
			seterr("Password in both fields should be the same");
		}
	};

	return (
		<View style={styles.container}>
			<LOCBO />
			<SecondaryHeader content="SIGNUP" />
			<RoundInput
				placeholder="Password"
				defaultValue={Password}
				onChangeText={(value) => {
					setPassword(value);
				}}
				secureTextEntry={true}
			/>
			<RoundInput
				placeholder="Confirm Password"
				defaultValue={ConfPassword}
				onChangeText={(value) => {
					setConfPassword(value);
				}}
				secureTextEntry={true}
			/>
			<RoundButton title="Next" onPress={HandleSubmit} />
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

export default AddPass;
