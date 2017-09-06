const R = require('ramda');
const $ = require('jquery');
const {
  addEventListener,
  removeEventListener,
  clean,
  render,
  hide,
  show
} = require('./utils.js');

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
  function createAccount(email, password) {
    return db.auth()
      .createUserWithEmailAndPassword(email, password)
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;

        throw new Error(`${errorCode} ${errorMessage}`);
      });
  }

  function connectToAccount(email, password) {
    return db.auth()
      .signInWithEmailAndPassword(email, password)
      .catch((error) => {
        // Handle Errors here.

        if (error) {
          return createAccount(email, password);
        }
        return true;
      });
  }

  function validateLogging() { // event
    const email = $('#email-address').val();
    const password = $('#password').val();

    const notDefined = R.equals('');

    if (R.any(notDefined, [email, password])) {
      throw new Error(`${email} ${password}`);
    } else {
      connectToAccount(email, password);
    }
  }

  function loggingState(loggingElement) {
    const user = R.prop('currentUser', db.auth());

    // console.log(user);

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
  loggingState('#logging-component');

  db.auth()
    .onAuthStateChanged(() => {
      loggingState('#logging-component');
    });
}

exports.initLogging = initLogging;
