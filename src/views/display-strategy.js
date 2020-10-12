const {
  and,
  concat,
  equals,
  isNil,
  join,
  lensPath,
  map,
  prop,
  view
} = require('ramda');
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
        return `<option value="${prop('id', opt)}">${prop('name', opt)}</option>`;
      }

      return `<optgroup label="${prop('name', element)}">
                ${join(
                  '',
                  map(transformOption, prop('options', element))
                )}
              </optgroup>`;
    }

    return concat(
      '<option selected="selected" disabled="disabled">Choisis la combinaison à lancer</option>',
      join('', map(group, list))
    );
  }

  return `<form>
            <select id="offensivePlaySelect">
              ${transformStrategyList(listOfStrategy)}
            </select>
            <select id="offensivePlaySize">
              <option disabled="disabled" selected="selected">Choisis la taille du terrain</option>
              <option value="10">10</option>
              <option value="20" selected="true">20 - Adapté aux mobiles</option>
              <option value="30">30</option>
              <option value="40">40</option>
              <option value="50">50</option>
              <option value="60">60</option>
              <option value="70">70</option>
            </select>
            <button id="runConfiguration" type="button">Lance la combinaison</button>
          </form>`;
}

function strategySelection(domElementToRenderTemplate, strategyList) {
  function changeStrategyToDisplay(event) {
    function lensForSelect(domId) {
      return lensPath(['target', 'parentElement', 'children', domId, 'value']);
    }
    const functionToLaunch = view(lensForSelect('offensivePlaySelect'), event);
    const sizeToDisplay = view(lensForSelect('offensivePlaySize'), event);

    if (
      and(
        equals(isNil(functionToLaunch), false),
        equals(isNil(sizeToDisplay), false)
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
  addEventListener('change', '#offensivePlaySelect', changeStrategyToDisplay);
  addEventListener('change', '#offensivePlaySize', changeStrategyToDisplay);
  render(domElementToRenderTemplate, templateStrategySelection, strategyList);
}

exports.strategySelection = strategySelection;
