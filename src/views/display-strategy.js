function templateStrategySelection(listOfStrategy) {
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

function transformStrategyList(list) {
  return R.concat(
    '<option selected="selected" disabled="disabled">Choisis la combinaison à lancer</option>',
    R.join('', R.map(group, list))
  );
}

function group(element) {
  return `<optgroup label="${R.prop('name', element)}">
            ${R.join(
              '',
              R.map(transformOption, R.prop('options', element))
            )}
          </optgroup>`;
}

function transformOption(opt) {
  return `<option value="${R.prop('id', opt)}">${R.prop('name', opt)}</option>`;
}

function strategySelection(domElementToRenderTemplate, strategyList) {
  function changeStrategyToDisplay(event) {
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
      return strategySelector(domElementToRenderTemplate, sizeToDisplay, functionToLaunch);
    }
  }

  removeEventListener('click', '#runConfiguration');
  clean(domElementToRenderTemplate);

  addEventListener('click', '#runConfiguration', changeStrategyToDisplay);
  addEventListener('change', '#offensivePlaySelect', changeStrategyToDisplay);
  addEventListener('change', '#offensivePlaySize', changeStrategyToDisplay);

  return templateStrategySelection(strategyList);
}

function lensForSelect(domId) {
  return R.lensPath(['target', 'parentElement', 'children', domId, 'value']);
}
