const R = require('ramda');
const $ = require("jquery");
const addEventListener = require('./utils.js').addEventListener;
const removeEventListener = require('./utils.js').removeEventListener;
const clean = require('./utils.js').clean;
const render = require('./utils.js').render;
const playersPositions = require('../players-positions.js').playersPositions;


exports.renderCreateStrategy = renderCreateStrategy;

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

function templatePanes() {
	const list = [{
		id: 'offense',
		label: "Select the offense players' starting position for your play"
	}, {
		id: 'defense',
		label: "Select the defense players' starting position for your play"
	}];
	return `<div id="strategy-creation-panes" class="tab-content">
						<div class="tab-pane active" id="select-players" role="tabpanel">
							${templateSelectPlayers(list)}
						</div>
						<div class="tab-pane" id="select-ball-holder" role="tabpanel"></div>
						<div class="tab-pane" id="define-movements" role="tabpanel"></div>
						<div class="tab-pane" id="validate-play" role="tabpanel"></div>
					</div>`;
}

function templateSelectPlayers(listOfElements) {
	return R.concat(
		R.reduce((prev, cur) => {
			const selectTemplate = `<div class="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
																${templateSelectAndSeeSelection(R.prop('id', cur), R.prop('label', cur))}
															</div>`;

			return R.concat(prev, selectTemplate);

		}, '<div class="row">', listOfElements),
		'</div>'
	);
}

function templateSelectAndSeeSelection(idForSelect, labelText) {
	function appendSelectedOption(event) {
		const selectValueLens = R.lensPath(['target', 'value']);
		const value = R.view(selectValueLens, event);
		const label = $(`#select-${idForSelect}-players option:selected`).text();

		const listItem = `<li class="list-group-item justify-content-between" data-player-position="${value}">
												${label}
												<button type="button" class="close remove-${idForSelect}-player float-right" aria-label="Close">
													<span aria-hidden="true">&times;</span>
												</button>
											</li>`;

		$(`#selected-${idForSelect}-players`).append(listItem);
	}

	function removeSelectedPlayer(event) {
		$(R.prop('currentTarget', event)).parent('li').remove();
	}

	function initSelectForPlayers(playersList) {
		const options = R.join(
			'',
			R.values(R.map((cur) => {
				return `<option value="${R.prop('className', cur)}" data-def="${R.prop('def', cur)}">${R.prop('def', cur)}</option>`;
			}, playersList))
		);

		return R.concat(
			'<option selected="selected" disabled="disabled">Select a player\'s position</option>',
			options
		);
	}

	removeEventListener('change', `#select-${idForSelect}-players`);
	removeEventListener('click', `.remove-${idForSelect}-player`);
	addEventListener('change', `#select-${idForSelect}-players`, appendSelectedOption);
	addEventListener('click', `.remove-${idForSelect}-player`, removeSelectedPlayer);

	return `<form>
						<div class="form-group">
							<label for="#select-${idForSelect}-players">${labelText}</label>
							${componentSelect(
								`select-${idForSelect}-players`,
								initSelectForPlayers(playersPositions())
							)}
						</div>
					</form>
					<ul id="selected-${idForSelect}-players" class="list-group"></ul>`;
}

function componentSelect(id, options) {
	return `<select id="${id}" class="custom-select mb-2 mr-sm-2 mb-sm-0 w-100">
						${options}
					</select>`;
}






function renderCreateStrategy(db, domElementToRenderTemplate) {
	clean('#create-strategy');
	clean('#strategy-creation-panes');
	render(domElementToRenderTemplate, templateMenuTabs);
	render(domElementToRenderTemplate, templatePanes);
}
