import React, { useState } from "react";
import { View, TextInput, StyleSheet, ScrollView } from "react-native";

function RoundInput({
	placeholder,
	onChangeText,
	defaultValue,
	secureTextEntry = false,
}) {
	const [PH, setPH] = useState(placeholder);
	const [value, setvalue] = useState(defaultValue);

	return (
		<View style={styles.Container}>
			<TextInput
				style={{ color: "#fff", fontFamily: "Oleo-Script" }}
				placeholder={PH}
				placeholderTextColor="#fff"
				textAlign={"center"}
				onChangeText={(value) => {
					setvalue(value);
					onChangeText(value);
				}}
				defaultValue={defaultValue}
				secureTextEntry={secureTextEntry}
				onFocus={() => setPH("")}
				onBlur={() => {
					!value ? setPH(placeholder) : setPH("");
				}}
			/>
		</View>
	);
}

const styles = StyleSheet.create({
	Container: {
		borderColor: "#E9EC6C",
		display: "flex",
		justifyContent: "center",
		borderWidth: 2,
		borderRadius: 40,
		width: 261.8,
		height: 60,
	},
});

export default RoundInput;
