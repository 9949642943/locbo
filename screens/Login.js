import React, { useState } from "react";
import { actionTypes } from "../Context/reducer";
import { useStateValue } from "../Context/StateProvider";
import { View, Text, StyleSheet, Alert } from "react-native";
import LOCBO from "../components/LOCBO";
import SecondaryHeader from "../components/SecondaryHeader";
import RoundInput from "../components/RoundInput";
import RoundButton from "../components/RoundButton";
import { baseURL } from "../config";
import axios from "axios";

const api = axios.create({
	baseURL: baseURL,
});

function Login({ navigation }) {
	const [{ user }, userdispatch] = useStateValue();
	const [input1, setinput1] = useState("");
	const [input2, setinput2] = useState("");

	const HandleLogin = () => {
		api
			.post("/users/login", {
				username: input1,
				password: input2,
			})
			.then((res) => {
				if (res.data.success) {
					userdispatch({
						type: actionTypes.SET_USER,
						user: res.data,
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
			<SecondaryHeader content="LOGIN" />
			<RoundInput
				placeholder="Email or Phone No."
				defaultValue={input1}
				onChangeText={(value) => {
					setinput1(value);
				}}
			/>
			<RoundInput
				placeholder="Password"
				defaultValue={input2}
				onChangeText={(value) => {
					setinput2(value);
				}}
				secureTextEntry={true}
			/>
			<RoundButton title="Sign In" onPress={HandleLogin} />
			<View style={styles.textlinkcontainer}>
				<Text
					onPress={() => navigation.navigate("Signup")}
					style={styles.textlink}
				>
					SignUp
				</Text>
				<Text onPress={() => Alert.alert("Clicked")} style={styles.textlink}>
					Forgot Password
				</Text>
			</View>
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
	textlinkcontainer: {
		display: "flex",
		flexDirection: "row",
	},
	textlink: {
		color: "#fff",
		flex: 1,
		textAlign: "center",
	},
});

export default Login;
