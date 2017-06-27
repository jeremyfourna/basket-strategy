const R = require('ramda');
const $ = require("jquery");
const addEventListener = require('./utils.js').addEventListener;
const removeEventListener = require('./utils.js').removeEventListener;
const clean = require('./utils.js').clean;
const render = require('./utils.js').render;
const hide = require('./utils.js').hide;
const show = require('./utils.js').show;

exports.initLogging = initLogging;

function validateLogging(event) {
	const email = $('#email-address').val();
	const password = $('#password').val();

	const notDefined = R.equals('');

	if (R.any(notDefined, [email, password])) {
		console.log(email, password);
	} else {
		connectToAccount(email, password);
	}
}

function createAccount(db, email, password) {
	return db.auth()
		.createUserWithEmailAndPassword(email, password)
		.catch(function(error) {
			// Handle Errors here.
			var errorCode = error.code;
			var errorMessage = error.message;
			console.log(errorCode, errorMessage);
		});
}

function connectToAccount(db, email, password) {
	return db.auth()
		.signInWithEmailAndPassword(email, password)
		.catch(function(error) {
			// Handle Errors here.
			var errorCode = error.code;
			var errorMessage = error.message;
			console.log(errorCode, errorMessage);

			if (error) {
				return createAccount(db, email, password);
			}
		});
}

function templateLogging() {
	return `<div id="logging-component">
				<form>
					<div class="form-group">
						<label for="email-address">Email address</label>
						<input id="email-address" class="form-control" type="email", placeholder="Enter email"/>
					</div>
					<div class="form-group">
						<label for="password">Password</label>
						<input id="password" class="form-control" type="password", placeholder="Password"/>
					</div>
					<button id="logging" type="button" class="btn btn-primary">Submit</button>
				</form>
			</div>`;
}


function initLogging(db, domElementToRenderTemplate) {
	removeEventListener('click', '#logging');
	addEventListener('click', '#logging', validateLogging);

	clean('#logging-component');
	render(domElementToRenderTemplate, templateLogging);
	loggingState(db, '#logging-component');

	db.auth()
		.onAuthStateChanged(function(user) {
			loggingState(db, '#logging-component');
		});



}

function loggingState(db, loggingElement) {
	const user = R.prop('currentUser', db.auth());

	if (R.equals(R.isNil(user), false)) {
		// User is signed in.
		hide(loggingElement);
		//$('#create-strategy').show();
	} else {
		// No user is signed in.
		show(loggingElement);
		//$('#create-strategy').hide();
	}
}
