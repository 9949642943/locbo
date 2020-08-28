import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { StateProvider } from "./Context/StateProvider";
import reducer, { initialState } from "./Context/reducer";
import MainNavigator from "./navigation/MainNavigator";
import * as font from "expo-font";
import { AppLoading } from "expo";
import { NavigationContainer } from "@react-navigation/native";

const getfonts = () => {
	return font.loadAsync({
		"Oleo-Script": require("./assets/fonts/OleoScript-Regular.ttf"),
		"lobster-regular": require("./assets/fonts/Lobster-Regular.ttf"),
		"poppins-regular": require("./assets/fonts/Poppins-Regular.ttf"),
	});
};

export default function App() {
	console.disableYellowBox = true;

	const [fontsLoaded, setfontsLoaded] = useState(false);

	if (!fontsLoaded) {
		return (
			<AppLoading startAsync={getfonts} onFinish={() => setfontsLoaded(true)} />
		);
	} else
		return (
			<NavigationContainer>
				<StateProvider initialState={initialState} reducer={reducer}>
					<MainNavigator />
					<StatusBar backgroundColor="#181515" />
				</StateProvider>
			</NavigationContainer>
		);
}
