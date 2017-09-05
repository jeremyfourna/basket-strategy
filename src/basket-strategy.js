const R = require('ramda');
const $ = require('jquery');
const cleanSVG = require('./utils.js').cleanSVG;
const strategySelector = require('./strategies.js').strategySelector;
const startFirebase = require('./database/firebase.js').startFirebase;
const initLogging = require('./views/logging.js').initLogging;
const renderLayout = require('./views/layout.js').renderLayout;
const renderCreateStrategy = require('./views/create-strategy.js').renderCreateStrategy;
const renderStrategySelection = require('./views/display-strategy.js').renderStrategySelection;


const db = startFirebase();


renderLayout(db, 'body');
initLogging(db, '#creation-lab');
renderStrategySelection(db, '#view-strategies');
renderCreateStrategy(db, '#creation-lab');
