const firebase = require("firebase");
const config = require('./config.js').config;


function startFirebase() {
	// Initialize Firebase
	return firebase.initializeApp(config());
}
