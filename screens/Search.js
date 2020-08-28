import React from "react";
import { actionTypes } from "../Context/reducer";
import { useStateValue } from "../Context/StateProvider";
import { ScrollView, View, Text, StyleSheet } from "react-native";
import RoundButton from "../components/RoundButton";
import { Header } from "react-native-elements";
import { SafeAreaView } from "react-native-safe-area-context";

function Search({ navigation }) {
	const [{ user }, userdispatch] = useStateValue();

	const HandleLogout = () => {
		userdispatch({
			type: actionTypes.SET_USER,
			user: null,
		});
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
			<ScrollView>
				<View style={styles.container}>
					<Text style={styles.text}>Search {user}</Text>
					<RoundButton title="Logout" onPress={HandleLogout} />
				</View>
				<View style={styles.container}>
					<Text style={styles.text}>Search {user}</Text>
					<RoundButton title="Logout" onPress={HandleLogout} />
				</View>
				<View style={styles.container}>
					<Text style={styles.text}>Search {user}</Text>
					<RoundButton title="Logout" onPress={HandleLogout} />
				</View>
				<View style={styles.container}>
					<Text style={styles.text}>Search {user}</Text>
					<RoundButton title="Logout" onPress={HandleLogout} />
				</View>
				<View style={styles.container}>
					<Text style={styles.text}>Search {user}</Text>
					<RoundButton title="Logout" onPress={HandleLogout} />
				</View>
				<View style={styles.container}>
					<Text style={styles.text}>Search {user}</Text>
					<RoundButton title="Logout" onPress={HandleLogout} />
				</View>
				<View style={styles.container}>
					<Text style={styles.text}>Search {user}</Text>
					<RoundButton title="Logout" onPress={HandleLogout} />
				</View>
				<View style={styles.container}>
					<Text style={styles.text}>Search {user}</Text>
					<RoundButton title="Logout" onPress={HandleLogout} />
				</View>
				<View style={styles.container}>
					<Text style={styles.text}>Search {user}</Text>
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
	},
	text: {
		color: "#fff",
		fontSize: 50,
	},
});
export default Search;
