const R = require('ramda');
const $ = require('jquery');
const {
  clean,
  render,
  addEventListener,
  removeEventListener
} = require('./utils.js');
const {
  playersPositions,
  playersPositionsGrouped
} = require('../players-positions.js');
const {
  regularSelect,
  selectOptGrpAndSeeSelection
} = require('./components/select.js');

function templateSelectPlayers(listOfElements) {
  return R.concat(
    R.reduce((prev, cur) => {
      const selectTemplate = `<div class="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
                                ${selectOptGrpAndSeeSelection(
    R.prop('id', cur),
    R.prop('label', cur),
    playersPositionsGrouped()
  )}
                               </div>`;
      return R.concat(prev, selectTemplate);
    }, '<div class="row">', listOfElements),
    '</div>'
  );
}

function templateMenuTabs() {
  return `<div id="create-strategy">
        <ul id="strategy-creation-menu" class="nav nav-tabs" role="tablist">
          <li class="nav-item">
            <a class="nav-link active" data-toggle="tab" href="#select-players" role="tab">Select players</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" data-toggle="tab" href="#select-ball-holder" role="tab">Select ball holder</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" data-toggle="tab" href="#define-movements" role="tab">Define the movements</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" data-toggle="tab" href="#validate-play" role="tab">Validate your configuration</a>
          </li>
        </ul>
      </div>`;
}

function initSelectForPlayers(playersList) {
  const options = R.join(
    '',
    R.values(R.map(cur => `<option value="${R.prop('className', cur)}" data-def="${R.prop('def', cur)}">${R.prop('def', cur)}</option>`, playersList))
  );

  return R.concat(
    '<option selected="selected" disabled="disabled">Select a player\'s position</option>',
    options
  );
}

function templateSelect(idForSelect, labelText) {
  return `<form>
        <div class="form-group">
          <label for="${idForSelect}">${labelText}</label>
          ${regularSelect(
    idForSelect,
    initSelectForPlayers(playersPositions())
  )}
        </div>
      </form>`;
}

function mapActionTypes(defaultLabel, listOfTypes) {
  const options = R.join(
    '',
    R.values(R.map(cur => `<option value="${R.prop('value', cur)}" data-label="${R.prop('label', cur)}">${R.prop('label', cur)}</option>`, listOfTypes))
  );

  return R.concat(
    `<option selected="selected" disabled="disabled">${defaultLabel}</option>`,
    options
  );
}

function templateDrive() {
  const speedTypes = [{
    value: 'sprint',
    label: 'Fast'
  }, {
    value: 'regular',
    label: 'Normal'
  }];
  return `<div class="form-group" data-action="drive">
        <label for="#origin-drive">Where does the player start ?</label>
        ${regularSelect(
    'origin-drive',
    initSelectForPlayers(playersPositions())
  )}
      </div>
      <div class="form-group" data-action="drive">
        <label for="#destination-drive">Where does the player stop ?</label>
        ${regularSelect(
    'destination-drive',
    initSelectForPlayers(playersPositions())
  )}
      </div>
      <div class="form-group" data-action="drive">
        <label for="#speed-drive">What is the speed of the player ?</label>
        ${regularSelect(
    'speed-drive',
    mapActionTypes('Select the speed of the player', speedTypes)
  )}
      </div>`;
}

function templatePass() {
  return `<div class="form-group" data-action="pass">
        <label for="#origin-drive">Where does the ball go ?</label>
        ${regularSelect(
    'destination-pass',
    initSelectForPlayers(playersPositions())
  )}
      </div>`;
}

function getSelectedPlayers(domIdForOffSelectedPlayersList, domIdForDefSelectedPlayersList) {
  function getListOfSelectedPlayers(domElement) {
    return $(`#${domElement} li`).map((index, element) => ({
      className: $(element).attr('data-player-position'),
      // We remove the x at the end of the text
      def: R.init($(element).text())
    })).get();
  }

  const offenseList = getListOfSelectedPlayers(domIdForOffSelectedPlayersList);
  const defenseList = getListOfSelectedPlayers(domIdForDefSelectedPlayersList);

  return R.concat(offenseList, defenseList);
}

function templateMovement() {
  const speedTypes = [{
    value: 'sprint',
    label: 'Fast'
  }, {
    value: 'regular',
    label: 'Normal'
  }];

  return `<div class="form-group" data-action="move">
        <label for="#origin-movement">Which player will move ?</label>
        ${regularSelect(
    'origin-movement',
    initSelectForPlayers(getSelectedPlayers('selected-offense-players', 'selected-defense-players'))
  )}
      </div>
      <div class="form-group" data-action="move">
        <label for="#destination-movement">To which position the player will go ?</label>
        ${regularSelect(
    'destination-movement',
    initSelectForPlayers(playersPositions())
  )}
      </div>
      <div class="form-group" data-action="move">
        <label for="#speed-movement">What is the speed of the player ?</label>
        ${regularSelect(
    'speed-movement',
    mapActionTypes('Select the speed of the player', speedTypes)
  )}
      </div>`;
}

function templateMoves() {
  function changeOnSelect(event) {
    const selectValueLens = R.lensPath(['target', 'value']);
    const value = R.view(selectValueLens, event);

    clean('#move-options');
    // console.log(value);

    const cond = R.cond([
      [R.equals('drive'), R.always(templateDrive)],
      [R.equals('pass'), R.always(templatePass)],
      [R.equals('move'), R.always(templateMovement)]
    ]);

    render('#move-options', cond(value));
  }


  const actionTypes = [{
    value: 'drive',
    label: 'Player dribble with the ball'
  }, {
    value: 'pass',
    label: 'The ball move between players'
  }, {
    value: 'move',
    label: 'The player move to another position'
  }];

  removeEventListener('change', '#action-type');
  addEventListener('change', '#action-type', changeOnSelect);

  return `<form>
            <div class="form-group">
              <label for="#action-type">What action will be done ?</label>
              ${regularSelect(
    'action-type',
    mapActionTypes('Select an action to perform', actionTypes)
  )}
            </div>
          </form>
          <form id="move-options"></form>
          <ul id="selected-moves" class="list-group"></ul>`;
}

function templatePanes(list) {
  return `<div id="strategy-creation-panes" class="tab-content">
            <div class="tab-pane active" id="select-players" role="tabpanel">
              ${templateSelectPlayers(list)}
            </div>
            <div class="tab-pane" id="select-ball-holder" role="tabpanel">
              ${templateSelect('ball-holder', 'Who will hold the ball at the play\'s beginning')}
            </div>
            <div class="tab-pane" id="define-movements" role="tabpanel">
              ${templateMoves()}
            </div>
            <div class="tab-pane" id="validate-play" role="tabpanel"></div>
          </div>`;
}

function renderCreateStrategy(db, domElementToRenderTemplate) {
  const list = [{
    id: 'offense',
    label: "Select the offense players' starting position"
  }, {
    id: 'defense',
    label: "Select the defense players' starting position"
  }];

  clean('#create-strategy');
  clean('#strategy-creation-panes');
  render(domElementToRenderTemplate, templateMenuTabs);
  render(domElementToRenderTemplate, templatePanes, list);
}

exports.renderCreateStrategy = renderCreateStrategy;
