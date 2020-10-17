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
  function transformOption(opt) {
    return `<option data-parent="${element.name}" value="${opt.id}">${opt.name}</option>`;
  }

  return `<optgroup label="${element.name}">
            ${R.join(
              '',
              R.map(transformOption, element.options)
            )}
          </optgroup>`;
}



function strategySelection(domElementToRenderTemplate, strategyList) {
  function changeStrategyToDisplay(event) {
    const strategyToLaunch = R.view(lensForSelect('offensivePlaySelect'), event);
    const sizeToDisplay = R.view(lensForSelect('offensivePlaySize'), event);
    const parentStrategy = R.view(lensForSelectData('offensivePlaySelect', 'parent'), event);

    if (
      R.and(
        R.equals(R.isNil(strategyToLaunch), false),
        R.equals(R.isNil(sizeToDisplay), false)
      )
    ) {
      const strategyProperties = R.compose(
        R.prop('combination'),
        cur => R.find(R.propEq('id', strategyToLaunch), cur.options),
        R.find(R.propEq('name', parentStrategy))
      )(strategyList);
      // Clean the body
      cleanSVG();
      // Run the strategy
      return strategyCreator(
        domElementToRenderTemplate,
        sizeToDisplay,
        strategyProperties.defaultPlayersPositions,
        strategyProperties.ballHolder,
        strategyProperties.listOfMoves
      );
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

function lensForSelectData(domId, data) {
  return R.lensPath(['target', 'parentElement', 'children', domId, 'selectedOptions', 0, 'dataset', data]);
}
