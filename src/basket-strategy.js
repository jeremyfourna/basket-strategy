const { startFirebase } = require('./database/firebase.js');
const { initLogging } = require('./views/logging.js');
const { renderLayout } = require('./views/layout.js');
const { renderCreateStrategy } = require('./views/create-strategy.js');
const { renderStrategySelection } = require('./views/display-strategy.js');


const db = startFirebase();


renderLayout(db, 'body');
initLogging(db, '#creation-lab');
renderStrategySelection(db, '#view-strategies');
renderCreateStrategy(db, '#creation-lab');
