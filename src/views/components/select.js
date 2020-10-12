const {
  concat,
  head,
  join,
  last,
  lensPath,
  map,
  prop,
  values,
  view
} = require('ramda');
const $ = require('jquery');
const {
  addEventListener,
  removeEventListener
} = require('../utils.js');

function regularSelect(id, options) {
  return `<select id="${id}" class="custom-select mb-2 mr-sm-2 mb-sm-0 w-100">
        ${options}
      </select>`;
}

function initSelectForPlayers(playersList) {
  const options = join(
    '',
    values(map(cur => `<option value="${prop('className', cur)}" data-def="${prop('def', cur)}">${prop('def', cur)}</option>`, playersList))
  );

  return concat(
    '<option selected="selected" disabled="disabled">Select a player\'s position</option>',
    options
  );
}

function initSelectOptGrpForPlayers(playersList) {
  function group(element) {
    return `<optgroup label="${head(element)}">
              ${join(
                '',
                values(map(cur => `<option value="${prop('className', cur)}" data-def="${prop('def', cur)}">${prop('def', cur)}</option>`, last(element)))
              )}
            </optgroup>`;
  }

  return concat(
    '<option selected="selected" disabled="disabled">Select a player\'s position</option>',
    join('', map(group, playersList))
  );
}

function selectAndSeeSelection(idForSelect, labelText, listForSelectOptions) {
  function appendSelectedOption(event) {
    const selectValueLens = lensPath(['target', 'value']);
    const value = view(selectValueLens, event);
    const label = $(`#select-${idForSelect}-players option:selected`).text();

    const listItem = `<li class="list-group-item justify-content-between" data-player-position="${value}">${label}<button type="button" class="close remove-${idForSelect}-player float-right" aria-label="Close"><span aria-hidden="true">&times;</span></button></li>`;

    $(`#selected-${idForSelect}-players`).append(listItem);
  }

  function removeSelectedPlayer(event) {
    $(prop('currentTarget', event)).parent('li').remove();
  }

  removeEventListener('change', `#select-${idForSelect}-players`);
  removeEventListener('click', `.remove-${idForSelect}-player`);
  addEventListener('change', `#select-${idForSelect}-players`, appendSelectedOption);
  addEventListener('click', `.remove-${idForSelect}-player`, removeSelectedPlayer);

  return `<form>
        <div class="form-group">
          <label for="#select-${idForSelect}-players">${labelText}</label>
          ${regularSelect(
    `select-${idForSelect}-players`,
    initSelectForPlayers(listForSelectOptions)
  )}
        </div>
      </form>
      <ul id="selected-${idForSelect}-players" class="list-group"></ul>`;
}

function selectOptGrpAndSeeSelection(idForSelect, labelText, listForSelectOptions) {
  function appendSelectedOption(event) {
    const selectValueLens = lensPath(['target', 'value']);
    const value = view(selectValueLens, event);
    const label = $(`#select-${idForSelect}-players option:selected`).text();

    const listItem = `<li class="list-group-item justify-content-between" data-player-position="${value}">${label}<button type="button" class="close remove-${idForSelect}-player float-right" aria-label="Close"><span aria-hidden="true">&times;</span></button></li>`;

    $(`#selected-${idForSelect}-players`).append(listItem);
  }

  function removeSelectedPlayer(event) {
    $(prop('currentTarget', event)).parent('li').remove();
  }

  removeEventListener('change', `#select-${idForSelect}-players`);
  removeEventListener('click', `.remove-${idForSelect}-player`);
  addEventListener('change', `#select-${idForSelect}-players`, appendSelectedOption);
  addEventListener('click', `.remove-${idForSelect}-player`, removeSelectedPlayer);

  return `<form>
            <div class="form-group">
              <label for="#select-${idForSelect}-players">${labelText}</label>
              ${regularSelect(
    `select-${idForSelect}-players`,
    initSelectOptGrpForPlayers(listForSelectOptions)
  )}
            </div>
          </form>
          <ul id="selected-${idForSelect}-players" class="list-group"></ul>`;
}

exports.selectAndSeeSelection = selectAndSeeSelection;
exports.regularSelect = regularSelect;
exports.selectOptGrpAndSeeSelection = selectOptGrpAndSeeSelection;
