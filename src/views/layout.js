const {
  clean,
  render
} = require('./utils.js');
const { strategySelection } = require('./display-strategy.js');

function templatePanes() {
  return `<div id="app">
            <h1>Basket-Ball Strategy</h1>
            <div id="view-strategies">
              ${strategySelection('#view-strategies')}
            </div>
          </div>`;
}

function renderLayout(domElement) {
  clean('#app');
  render(domElement, templatePanes);
}

exports.renderLayout = renderLayout;
