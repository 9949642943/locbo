import React from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import { Avatar, Card, Button, Icon } from "react-native-elements";
import { baseURL } from "../config";

function PostCard({ post, onPress }) {
	console.log("card post is", post);
	if (post) {
		console.log("Returning Card");
		return (
			<TouchableOpacity style={styles.card_container} onPress={onPress}>
				<View style={styles.card_left}>
					<Text style={styles.title_style}>
						{post.title} (
						{post.forsale ? "For Sale" : post.forrent ? "For Rent" : "Request"})
					</Text>
					<Text style={styles.price_style}>{post.price} ₹/-</Text>
					<Text style={styles.user_style}>{post.user.nickname}</Text>
					<Text style={styles.description_style}>
						{post.description.slice(0, 20)}...
					</Text>
				</View>
				<View style={styles.card_right}>
					<Avatar
						size="xlarge"
						rounded
						source={{
							uri: baseURL + post.pics[0],
						}}
						activeOpacity={0.7}
					/>
				</View>
			</TouchableOpacity>
		);
	} else {
		return <View></View>;
	}
}
const styles = StyleSheet.create({
	card_container: {
		backgroundColor: "#181515",
		display: "flex",
		flexDirection: "row",
		padding: 10,
		height: 200,
		borderBottomWidth: 1,
		borderBottomColor: "#444444",
		justifyContent: "center",
	},
	card_left: {
		backgroundColor: "#181515",
		alignSelf: "flex-start",
		display: "flex",
		flex: 1,
		height: "100%",
	},
	card_right: {
		alignSelf: "flex-end",
		alignContent: "center",
		backgroundColor: "#181515",
		display: "flex",
		height: "100%",
		justifyContent: "center",
	},
	title_style: {
		color: "#fff",
		alignSelf: "flex-start",
		margin: 10,
		fontFamily: "Oleo-Script",
		fontSize: 20,
	},
	price_style: {
		color: "#ffe",
		margin: 10,
	},
	user_style: {
		color: "#ffe",
		margin: 10,
	},
	description_style: {
		color: "#ffe",
		margin: 10,
	},
});

export default PostCard;
