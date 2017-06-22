const valueForSelectLens = R.lensPath(['target', 'value']);

$('#runConfiguration').on('click', function(event) {
	const functionToLaunch = $('#offensivePlaySelector').val();
	const sizeToDisplay = $('#offensivePlaySize').val();

	if (R.and(R.equals(R.isNil(functionToLaunch), false), R.equals(R.isNil(sizeToDisplay), false))) {
		// Clean the body
		cleanSVG();
		strategySelector(sizeToDisplay, functionToLaunch);
	}
});
