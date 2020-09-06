import React, { useState } from "react";
import { View, Text, SafeAreaView, StyleSheet } from "react-native";
import {
	Card,
	CardTitle,
	CardContent,
	CardAction,
	CardButton,
	CardImage,
} from "react-native-material-cards";
import { baseURL } from "../config";
import { Header } from "react-native-elements";
import { ScrollView } from "react-native-gesture-handler";

function PostDetail({ navigation, route }) {
	const [post, setpost] = useState(route.params.post);
	return (
		<ScrollView style={styles.container}>
			<Header
				leftComponent={{
					text: "LOCBO",
					style: { color: "#fff", fontFamily: "Oleo-Script" },
				}}
				containerStyle={{
					backgroundColor: "#181515",
					height: 70,
				}}
			/>
			<View style={styles.container}>
				<Card isDark style={{ backgroundColor: "#181515" }}>
					<CardImage
						source={{ uri: baseURL + post.pics[0] }}
						title={"..." + post.user.nickname}
					/>
					<CardTitle
						title={post.title}
						subtitle={
							post.forsale
								? "For Sale @ " + post.price + " ₹ /-"
								: post.forrent
								? "For Rent @ " + post.price + " ₹ /day"
								: "Request @ " + post.price + " ₹ /day"
						}
					/>
					<CardContent text={post.description} />
					<CardAction separator={true} inColumn={false}>
						<CardButton onPress={() => {}} title="Push" color="#ECE96C" />
						<CardButton onPress={() => {}} title="Later" color="#ECE96C" />
					</CardAction>
				</Card>
			</View>
		</ScrollView>
	);
}

const styles = StyleSheet.create({
	container: {
		backgroundColor: "#181515",
	},
});

export default PostDetail;
