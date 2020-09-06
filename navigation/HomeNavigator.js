import React, { useState, useEffect } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { useStateValue } from "../Context/StateProvider";

const HomeStack = createStackNavigator();

import Home from "../screens/Home";
import Post from "../screens/Post";
import PostDetail from "../screens/PostDetail";

function HomeNavigator() {
	return (
		<HomeStack.Navigator
			initialRouteName="Home"
			screenOptions={{
				headerShown: false,
			}}
		>
			<HomeStack.Screen name="Home" component={Home} />
			<HomeStack.Screen name="Post" component={Post} />
			<HomeStack.Screen name="PostDetail" component={PostDetail} />
		</HomeStack.Navigator>
	);
}

export default HomeNavigator;
