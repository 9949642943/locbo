import React, { useState } from "react";
import { actionTypes } from "../Context/reducer";
import { useStateValue } from "../Context/StateProvider";
import { ScrollView, View, Text, StyleSheet, Dimensions } from "react-native";
import RoundButton from "../components/RoundButton";
import { Header, SearchBar } from "react-native-elements";
import { SafeAreaView } from "react-native-safe-area-context";

const { width, height } = Dimensions.get("window");

function Search({ navigation }) {
	const [{ user }, userdispatch] = useStateValue();
	const [search, setsearch] = useState("");

	const HandleLogout = () => {
		userdispatch({
			type: actionTypes.SET_USER,
			user: null,
		});
	};

	const handleSearch = (value) => {
		setsearch(value);
	};

	return (
		<SafeAreaView>
			<Header
				leftComponent={{
					text: "LOCBO",
					style: { color: "#fff", fontFamily: "Oleo-Script", height: 70 },
				}}
				containerStyle={{
					backgroundColor: "#181515",
					height: 10,
				}}
			/>
			<SearchBar
				placeholder="Search Here..."
				onChangeText={handleSearch}
				value={search}
				inputStyle={{ color: "#fff" }}
			/>
			<ScrollView>
				<View style={styles.container}>
					<Text style={styles.text}>Search results for '{search}' go here</Text>
					<RoundButton title="Logout" onPress={HandleLogout} />
				</View>
			</ScrollView>
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#181515",
		display: "flex",
		alignItems: "center",
		justifyContent: "center",
		minHeight: height - 10,
	},
	text: {
		color: "#fff",
		fontSize: 20,
		marginBottom: 70,
	},
});
export default Search;
