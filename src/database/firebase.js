const firebase = require("firebase");
const config = require('./config.js').config;
// Create a file named config.js
// In this file create a function named config that return an object
// with the following properties
// {
//		apiKey: "",
//		authDomain: "",
//		databaseURL: "",
//		projectId: "",
//		storageBucket: "",
//		messagingSenderId: ""
// };
// And export the function via
// exports.config = config;

exports.startFirebase = startFirebase;

function startFirebase() {
	// Initialize Firebase
	return firebase.initializeApp(config());
}
// Use this function like this
// const db = startFirebase();
