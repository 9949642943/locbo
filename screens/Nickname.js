import React, { useState, useEffect } from "react";
import { actionTypes } from "../Context/reducer";
import { useStateValue } from "../Context/StateProvider";
import { View, Text, StyleSheet, Alert } from "react-native";
import { Button } from "react-native-elements";
import LOCBO from "../components/LOCBO";
import SecondaryHeader from "../components/SecondaryHeader";
import RoundInput from "../components/RoundInput";
import RoundButton from "../components/RoundButton";
import axios from "axios";
import { baseURL } from "../config";

function Nickname({ navigation, route }) {
	const [{ user }, userdispatch] = useStateValue();
	const [Nickname, setNickname] = useState("");

	console.log("nickname token is ", route.params.token);
	console.log("password is ", route.params.password);

	const HandleSubmit = () => {
		console.log("HAndling Submit");
		const config = {
			method: "post",
			url: baseURL + "/users/facebook/token",
			headers: {
				Authorization: "Bearer " + route.params.token,
				"Content-Type": "application/json",
			},
			data: {
				password: route.params.password,
				nickname: Nickname,
			},
		};
		console.log(config);
		axios(config)
			.then((res) => {
				if (res.data.success) {
					userdispatch({
						type: actionTypes.SET_USER,
						user: {
							token: res.data.token,
							username: Nickname,
							nickname: Nickname,
						},
					});
				}
			})
			.catch((err) => {
				console.log("err", err);
			});
	};

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
			<RoundButton title="Lets Go!" onPress={HandleSubmit} />
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
