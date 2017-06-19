function addBallToGame(player, allPlayers) {
	const ballPosition = R.prop(player, R.pick([player], allPlayers));
	return R.assoc('className', 'ball', ballPosition);
}

function generateBallPosition(wishedZoom, ballPosition, context) {
	createCircle(
		R.prop('x', ballPosition),
		R.prop('y', ballPosition),
		// Impure because access wishedZoom outside the function
		R.multiply(wishedZoom, 0.25),
		'black',
		'orange',
		R.prop('className', ballPosition),
		context
	);
}
