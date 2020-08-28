import React, { useState, useEffect } from "react";
import { useStateValue } from "../Context/StateProvider";
import { View, Text, StyleSheet, Alert } from "react-native";
import { Button } from "react-native-elements";
import LOCBO from "../components/LOCBO";
import SecondaryHeader from "../components/SecondaryHeader";
import RoundInput from "../components/RoundInput";
import RoundButton from "../components/RoundButton";

function Nickname({ navigation }) {
	const [{ user }, userdispatch] = useStateValue();
	const [Nickname, setNickname] = useState("");

	return (
		<View style={styles.container}>
			<LOCBO />
			<SecondaryHeader content="SIGNUP" />
			<RoundInput
				placeholder="Enter Nickname"
				defaultValue={Nickname}
				onChangeText={(value) => {
					setNickname(value);
				}}
			/>
			<RoundButton
				title="Lets Go!"
				onPress={() => navigation.navigate("Login")}
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

export default Nickname;
