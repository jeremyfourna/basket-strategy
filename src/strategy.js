/*
Move = {
	action: regular || sprint
	origin : Position
	destination : Position
}
*/

function generateStategy(allPositions, selectedPlayers, ballPosition, listOfMoves) {
	const listOfMovesTransformed = mapIndexed((cur, index) => {
		return R.map(cur1 => {
			if (R.equals(R.prop('origin', cur1), 'ball')) {
				return [
					'moveBallFromTo',
					ballPosition,
					R.prop(R.prop('destination', cur1), allPositions),
					R.multiply(2000, index),
					'.ball'
				];
			} else {
				const waitingTime = R.ifElse(
					R.equals('regular'),
					R.always(R.add(R.multiply(2000, index), 400)),
					R.always(R.multiply(2000, index))
				);
				return [
					'movePlayerFromTo',
					R.prop(R.prop('origin', cur1), selectedPlayers),
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
