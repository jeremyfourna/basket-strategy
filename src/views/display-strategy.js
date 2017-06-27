const R = require('ramda');

function templateStrategySelection(listOfStrategy) {
	function listOfStrategyString(list) {
		return R.reduce((prev, cur) => {
			return R.concat(prev, `<option value="${R.prop('id', cur)}">${R.prop('name', cur)}</option>`);
		}, '', list);
	}

	return `<div class="presentation">
      <form class="form-inline">
        <select id="offensivePlaySelector" class="custom-select mb-2 mr-sm-2 mb-sm-0">
          <option disabled="disabled" selected="selected">Select an offensive play</option>
          <option value="strategyNormalStar">Star formation normal</option>
          <option value="strategyLowStar">Star formation low</option>
          <option value="strategyTouchDowmLeft">Play from touch down on the left</option>
          <option value="strategyTouchDowmRight">Play from touch down on the right</option>
          <option value="strategyTouchBoxLeft">Box for touch down on the left</option>
          <option value="strategyTriangle1">Triangle offense n°1</option>
          <option value="strategyTriangle2">Triangle offense n°2</option>
          <option value="strategyTriangle3">Triangle offense n°3</option>
          <option value="strategyTriangle4">Triangle offense n°4</option>
          <option value="strategyTriangle5">Triangle offense n°5</option>
        </select>
        <select id="offensivePlaySize" class="custom-select mb-2 mr-sm-2 mb-sm-0">
          <option disabled="disabled" selected="selected">Select a display size</option>
          <option value="10">10</option>
          <option value="20">20</option>
          <option value="30">30</option>
          <option value="40">40</option>
          <option value="50">50</option>
          <option value="60">60</option>
          <option value="70">70</option>
        </select>
        <button id="runConfiguration" type="button" class="btn btn-primary">Run using configuration</button>
      </form>
    </div>`;
}
