const R = require('ramda');
const { strategySelector } = require('../strategies.js');
const {
  addEventListener,
  removeEventListener,
  render,
  clean,
  cleanSVG
} = require('./utils.js');

function templateStrategySelection(listOfStrategy) {
  function transformStrategyList(list) {
    function group(element) {
      function transformOption(opt) {
        return `<option value="${R.prop('id', opt)}">${R.prop('name', opt)}</option>`;
      }

      return `<optgroup label="${R.prop('name', element)}">
                ${R.join(
    '',
    R.map(transformOption, R.prop('options', element))
  )}
              </optgroup>`;
    }

    return R.concat(
      '<option selected="selected" disabled="disabled">Select an offensive strategy</option>',
      R.join('', R.map(group, list))
    );
  }

  return `<form>
            <select id="offensivePlaySelect">
              ${transformStrategyList(listOfStrategy)}
            </select>
            <select id="offensivePlaySize">
              <option disabled="disabled" selected="selected">Select a display size</option>
              <option value="10">10</option>
              <option value="20">20 - Best mobile view</option>
              <option value="30">30</option>
              <option value="40">40</option>
              <option value="50">50</option>
              <option value="60">60</option>
              <option value="70">70</option>
            </select>
            <button id="runConfiguration" type="button">Run using configuration</button>
          </form>`;
}

function strategySelection(domElementToRenderTemplate, strategyList) {
  function changeStrategyToDisplay(event) {
    function lensForSelect(domId) {
      return R.lensPath(['target', 'parentElement', 'children', domId, 'value']);
    }
    const functionToLaunch = R.view(lensForSelect('offensivePlaySelect'), event);
    const sizeToDisplay = R.view(lensForSelect('offensivePlaySize'), event);

    if (
      R.and(
        R.equals(R.isNil(functionToLaunch), false),
        R.equals(R.isNil(sizeToDisplay), false)
      )
    ) {
      // Clean the body
      cleanSVG();
      // Run the strategy
      strategySelector(domElementToRenderTemplate, sizeToDisplay, functionToLaunch);
    }
  }

  removeEventListener('click', '#runConfiguration');
  clean(domElementToRenderTemplate);

  addEventListener('click', '#runConfiguration', changeStrategyToDisplay);
  render(domElementToRenderTemplate, templateStrategySelection, strategyList);
}

exports.strategySelection = strategySelection;
