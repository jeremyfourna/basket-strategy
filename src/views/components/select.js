const R = require('ramda');
const $ = require("jquery");
const addEventListener = require('../utils.js').addEventListener;
const removeEventListener = require('../utils.js').removeEventListener;

exports.selectAndSeeSelection = selectAndSeeSelection;
exports.regularSelect = regularSelect;

function selectAndSeeSelection(idForSelect, labelText, listForSelectOptions) {
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
					${regularSelect(
						`select-${idForSelect}-players`,
						initSelectForPlayers(listForSelectOptions)
					)}
				</div>
			</form>
			<ul id="selected-${idForSelect}-players" class="list-group"></ul>`;
}


function regularSelect(id, options) {
	return `<select id="${id}" class="custom-select mb-2 mr-sm-2 mb-sm-0 w-100">
				${options}
			</select>`;
}
