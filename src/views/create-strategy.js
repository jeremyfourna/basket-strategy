const R = require('ramda');
const $ = require("jquery");
const clean = require('./utils.js').clean;
const render = require('./utils.js').render;
const playersPositions = require('../players-positions.js').playersPositions;
const selectAndSeeSelection = require('./components/select.js').selectAndSeeSelection;
const regularSelect = require('./components/select.js').regularSelect;

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

function templatePanes(list) {
	return `<div id="strategy-creation-panes" class="tab-content">
				<div class="tab-pane active" id="select-players" role="tabpanel">
					${templateSelectPlayers(list)}
				</div>
				<div class="tab-pane" id="select-ball-holder" role="tabpanel">
					${templateSelect('ball-holder', 'Who will hold the ball at the play\'s beginning')}
				</div>
				<div class="tab-pane" id="define-movements" role="tabpanel"></div>
				<div class="tab-pane" id="validate-play" role="tabpanel"></div>
			</div>`;
}

function templateSelectPlayers(listOfElements) {
	return R.concat(
		R.reduce((prev, cur) => {
			const selectTemplate = `<div class="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
										${selectAndSeeSelection(
											R.prop('id', cur),
											R.prop('label', cur),
											playersPositions()
										)}
									</div>`;

			return R.concat(prev, selectTemplate);

		}, '<div class="row">', listOfElements),
		'</div>'
	);
}


function templateSelect(idForSelect, labelText) {
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



function renderCreateStrategy(db, domElementToRenderTemplate) {
	const list = [{
		id: 'offense',
		label: "Select the offense players' starting position for your play"
	}, {
		id: 'defense',
		label: "Select the defense players' starting position for your play"
	}];

	clean('#create-strategy');
	clean('#strategy-creation-panes');
	render(domElementToRenderTemplate, templateMenuTabs);
	render(domElementToRenderTemplate, templatePanes, list);
}
