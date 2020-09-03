import firebase from "firebase";

var firebaseConfig = {
	apiKey: "AIzaSyAlglvZHYZ2pdVWFC1kRu1DzH5O9AWm_Dc",
	authDomain: "locbo-288019.firebaseapp.com",
	databaseURL: "https://locbo-288019.firebaseio.com",
	projectId: "locbo-288019",
	storageBucket: "locbo-288019.appspot.com",
	messagingSenderId: "291846193011",
	appId: "1:291846193011:web:dc9b826cc5dc045d99cf06",
	measurementId: "G-MFEK038MHT",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const auth = firebaseApp.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
