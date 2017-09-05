const R = require('ramda');
const $ = require('jquery');
const addEventListener = require('./utils.js').addEventListener;
const removeEventListener = require('./utils.js').removeEventListener;
const clean = require('./utils.js').clean;
const render = require('./utils.js').render;
const hide = require('./utils.js').hide;
const show = require('./utils.js').show;

exports.initLogging = initLogging;


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
  function validateLogging(event) {
    const email = $('#email-address').val();
    const password = $('#password').val();

    const notDefined = R.equals('');

    if (R.any(notDefined, [email, password])) {
      console.log(email, password);
    } else {
      connectToAccount(db, email, password);
    }
  }

  function createAccount(db, email, password) {
    return db.auth()
      .createUserWithEmailAndPassword(email, password)
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
      });
  }

  function connectToAccount(db, email, password) {
    return db.auth()
      .signInWithEmailAndPassword(email, password)
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);

        if (error) {
          return createAccount(db, email, password);
        }
      });
  }

  function loggingState(db, loggingElement) {
    const user = R.prop('currentUser', db.auth());

    console.log(user);

    if (R.equals(R.isNil(user), false)) {
      // User is signed in.
      hide(loggingElement);
      show('#create-strategy');
      show('#strategy-creation-panes');
    } else {
      // No user is signed in.
      show(loggingElement);
      hide('#create-strategy');
      hide('#strategy-creation-panes');
    }
  }
  removeEventListener('click', '#logging');
  clean('#logging-component');

  addEventListener('click', '#logging', validateLogging);
  render(domElementToRenderTemplate, templateLogging);
  loggingState(db, '#logging-component');

  db.auth()
    .onAuthStateChanged((user) => {
      loggingState(db, '#logging-component');
    });
}
