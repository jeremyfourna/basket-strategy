/*
Move = {
	action: regular || sprint
	origin : Position
	destination : Position
}
The action property is only needed if you want to move a player with or without the ball
*/

function generateStategy(allPositions, selectedPlayers, ballPosition, listOfMoves) {
	const listOfMovesTransformed = mapIndexed((cur, index) => {
		const waitingTime = R.ifElse(
			R.equals('regular'),
			R.always(R.add(R.multiply(2000, index), 400)),
			R.always(R.multiply(2000, index))
		);
		return R.map(cur1 => {
			if (R.isNil(R.prop('action', cur1))) { // If action property is defined
				if (R.equals(R.prop('origin', cur1), 'ball')) {
					return [
						'moveBallFromTo',
						ballPosition,
						R.prop(R.prop('destination', cur1), allPositions),
						R.multiply(2000, index),
						'.ball'
					];
				} else {
					return [
						'movePlayerFromTo',
						R.prop(R.prop('origin', cur1), selectedPlayers),
						R.prop(R.prop('destination', cur1), allPositions),
						waitingTime('regular'),
						`.${R.prop('origin', cur1)}`
					];
				}
			} else {
				const isADrive = R.ifElse(
					R.equals('ball'),
					R.always(ballPosition),
					R.always(R.prop(R.prop('origin', cur1), selectedPlayers))
				);
				return [
					'movePlayerFromTo',
					isADrive(R.prop('origin', cur1)),
					R.prop(R.prop('destination', cur1), allPositions),
					waitingTime(R.prop('action', cur1)),
					`.${R.prop('origin', cur1)}`
				];
			}
		}, cur);
	}, listOfMoves);

	return R.reduce((prev, cur) => {
		return R.concat(prev, cur);
	}, [], listOfMovesTransformed);
}

function strategyCreator(wishedZoom, players, ballHolder, listOfMoves) {
	// Generate the court
	const courtSVG = generateCourt(courtConfigZoomed(wishedZoom), wishedZoom);
	// Select only the right positions via the players array
	const selectPlayersPositions = R.pick(players, playersPositions);
	// Transform the player position via the wishedZoom constant
	const playersPositionsZoomed = playersPositionsConfigZoomed(wishedZoom, selectPlayersPositions);
	// Transform all players position via the wishedZoom constant
	const allPlayersPositionsZoomed = playersPositionsConfigZoomed(wishedZoom);
	// Add the selected players into the court
	generatePlayersPositions(wishedZoom, playersPositionsZoomed, courtSVG);
	// Add the ball into the court
	const ballPosition = addBallToGame(ballHolder, playersPositionsZoomed);
	generateBallPosition(wishedZoom, ballPosition, courtSVG);

	const generatedStrategy = generateStategy(allPlayersPositionsZoomed, playersPositionsZoomed, ballPosition, listOfMoves);

	playMovements(generatedStrategy);
}
