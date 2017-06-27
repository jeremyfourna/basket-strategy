const R = require('ramda');
const strategyCreator = require('./strategy-factory.js').strategyCreator;

exports.strategySelector = strategySelector;

function strategyNormalStar(wishedZoom) {
	// Players starting position
	const defaultPlayersPositions = [
		'pg',
		'sfLeft',
		'sfRight',
		'cornerLeft',
		'cornerRight'
	];
	// Define ball holder at the beginning of the play
	const ballHolder = 'pg';
	// List of moves
	const listOfMoves = [
		[{
			origin: 'ball',
			destination: 'sfLeft'
		}, {
			action: 'sprint',
			origin: 'pg',
			destination: 'underRing'
		}],
		[{
			action: 'sprint',
			origin: 'sfRight',
			destination: 'pg'
		}, {
			action: 'regular',
			origin: 'cornerRight',
			destination: 'sfRight'
		}, {
			action: 'regular',
			origin: 'pg',
			destination: 'cornerRight'
		}],
		[{
			origin: 'ball',
			destination: 'pg'
		}, {
			action: 'sprint',
			origin: 'sfLeft',
			destination: 'underRing'
		}],
		[{
			action: 'sprint',
			origin: 'cornerLeft',
			destination: 'sfLeft'
		}, {
			action: 'regular',
			origin: 'sfLeft',
			destination: 'cornerLeft'
		}],
		[{
			origin: 'ball',
			destination: 'sfRight'
		}, {
			action: 'sprint',
			origin: 'sfRight',
			destination: 'underRing'
		}],
		[{
			action: 'sprint',
			origin: 'cornerLeft',
			destination: 'pg'
		}, {
			action: 'regular',
			origin: 'sfLeft',
			destination: 'sfLeft'
		}, {
			action: 'regular',
			origin: 'sfRight',
			destination: 'cornerLeft'
		}],
		[{
			origin: 'ball',
			destination: 'cornerRight'
		}, {
			action: 'sprint',
			origin: 'cornerRight',
			destination: 'underRing'
		}],
		[{
			action: 'sprint',
			origin: 'cornerLeft',
			destination: 'sfRight'
		}, {
			action: 'regular',
			origin: 'sfLeft',
			destination: 'pg'
		}, {
			action: 'regular',
			origin: 'sfRight',
			destination: 'sfLeft'
		}, {
			action: 'regular',
			origin: 'cornerRight',
			destination: 'cornerLeft'
		}],
		[{
			origin: 'ball',
			destination: 'sfRight'
		}, {
			action: 'sprint',
			origin: 'pg',
			destination: 'underRing'
		}],
		[{
			origin: 'sprint',
			origin: 'pg',
			destination: 'cornerRight'
		}],
		[{
			origin: 'ball',
			destination: 'pg'
		}, {
			action: 'sprint',
			origin: 'cornerLeft',
			destination: 'underRing'
		}],
		[{
			origin: 'sprint',
			origin: 'pg',
			destination: 'sfRight'
		}, {
			action: 'regular',
			origin: 'cornerLeft',
			destination: 'cornerRight'
		}]
	];
	// Display the stategy
	strategyCreator(wishedZoom, defaultPlayersPositions, ballHolder, listOfMoves);
}

function strategyLowStar(wishedZoom) {
	// Players starting position
	const defaultPlayersPositions = [
		'pg',
		'sfLeft',
		'sfRight',
		'cLeft',
		'cRight'
	];
	// Define ball holder at the beginning of the play
	const ballHolder = 'pg';
	// List of moves
	const listOfMoves = [
		[{
			action: 'sprint',
			origin: 'sfLeft',
			destination: 'cLeftBottom'
		}, {
			action: 'sprint',
			origin: 'sfRight',
			destination: 'cRightBottom'
		}],
		[{
			action: 'sprint',
			origin: 'sfLeft',
			destination: 'cRightBottom'
		}, {
			action: 'sprint',
			origin: 'sfRight',
			destination: 'cLeftBottom'
		}],
		[{
			action: 'sprint',
			origin: 'sfLeft',
			destination: 'sfRight'
		}, {
			action: 'sprint',
			origin: 'sfRight',
			destination: 'sfLeft'
		}],
		[{
			origin: 'ball',
			destination: 'sfLeft'
		}, {
			action: 'sprint',
			origin: 'pg',
			destination: 'sfRightPickLeft'
		}, {
			action: 'sprint',
			origin: 'cRight',
			destination: 'pfCenter'
		}],
		[{
			action: 'sprint',
			origin: 'sfLeft',
			destination: 'pg'
		}],
		[{
			origin: 'ball',
			destination: 'pg'
		}, {
			action: 'sprint',
			origin: 'pg',
			destination: 'sfRight'
		}],
		[{
			origin: 'ball',
			destination: 'sfRight'
		}, {
			action: 'sprint',
			origin: 'cRight',
			destination: 'sfRightPickLeft'
		}],
		[{
			action: 'sprint',
			origin: 'ball',
			destination: 'sfRightAfterPickBottomLeft'
		}, {
			action: 'sprint',
			origin: 'pg',
			destination: 'sfRightAfterPickBottomLeft'
		}],
		[{
			action: 'sprint',
			origin: 'sfLeft',
			destination: 'sgLeft'
		}, {
			action: 'regular',
			origin: 'sfRight',
			destination: 'cornerLeft'
		}, {
			action: 'sprint',
			origin: 'ball',
			destination: 'underRing'
		}, {
			action: 'sprint',
			origin: 'pg',
			destination: 'underRing'
		}, {
			action: 'sprint',
			origin: 'cRight',
			destination: 'cornerRight'
		}]
	];
	// Display the stategy
	strategyCreator(wishedZoom, defaultPlayersPositions, ballHolder, listOfMoves);
}

function strategyTouchDowmLeft(wishedZoom) {
	// Players starting position
	const defaultPlayersPositions = [
		'touchBottomLeft',
		'pfLeft',
		'cRightBottom',
		'cLeftBottom',
		'pfRight'
	];
	// Define ball holder at the beginning of the play
	const ballHolder = 'touchBottomLeft';
	// List of moves
	const listOfMoves = [
		[{
			action: 'sprint',
			origin: 'cLeftBottom',
			destination: 'pfLeftPickBottom'
		}, {
			action: 'sprint',
			origin: 'cRightBottom',
			destination: 'pfRightAfterPickBottomLeft'
		}],
		[{
			action: 'sprint',
			origin: 'cRightBottom',
			destination: 'cLeftBottom'
		}, {
			action: 'sprint',
			origin: 'pfLeft',
			destination: 'cornerLeft'
		}, {
			action: 'sprint',
			origin: 'pfRight',
			destination: 'farAwayLeft'
		}, {
			action: 'sprint',
			origin: 'cLeftBottom',
			destination: 'underRingTopRight'
		}],
		[{
			origin: 'ball',
			destination: 'underRingTopRight'
		}]
	];
	// Display the stategy
	strategyCreator(wishedZoom, defaultPlayersPositions, ballHolder, listOfMoves);
}

function strategyTouchDowmRight(wishedZoom) {
	// Players starting position
	const defaultPlayersPositions = [
		'touchBottomRight',
		'pfLeft',
		'cRightBottom',
		'cLeftBottom',
		'pfRight'
	];
	// Define ball holder at the beginning of the play
	const ballHolder = 'touchBottomRight';
	// List of moves
	const listOfMoves = [
		[{
			action: 'sprint',
			origin: 'cLeftBottom',
			destination: 'pfLeftAfterPickBottomRight'
		}, {
			action: 'sprint',
			origin: 'cRightBottom',
			destination: 'pfRightPickBottom'
		}],
		[{
			action: 'sprint',
			origin: 'cLeftBottom',
			destination: 'cRightBottom'
		}, {
			action: 'sprint',
			origin: 'pfRight',
			destination: 'cornerRight'
		}, {
			action: 'sprint',
			origin: 'pfLeft',
			destination: 'farAwayRight'
		}, {
			action: 'sprint',
			origin: 'cRightBottom',
			destination: 'underRingTopLeft'
		}],
		[{
			origin: 'ball',
			destination: 'underRingTopLeft'
		}]

	];
	// Display the stategy
	strategyCreator(wishedZoom, defaultPlayersPositions, ballHolder, listOfMoves);
}

function strategyTouchBoxLeft(wishedZoom) {
	// Players starting position
	const defaultPlayersPositions = [
		'touchBottomLeft',
		'pfLeft',
		'cRight',
		'cLeft',
		'pfRight'
	];
	// Define ball holder at the beginning of the play
	const ballHolder = 'touchBottomLeft';
	// List of moves
	const listOfMoves = [
		[{
			action: 'sprint',
			origin: 'cLeft',
			destination: 'underRingTopRight'
		}, {
			action: 'sprint',
			origin: 'pfLeft',
			destination: 'pfRightPickBottomLeft'
		}],
		[{
			action: 'sprint',
			origin: 'cRight',
			destination: 'cornerLeft'
		}, {
			action: 'sprint',
			origin: 'pfRight',
			destination: 'sfLeft'
		}],
		[{
			action: 'sprint',
			origin: 'cLeft',
			destination: 'underRingTopLeft'
		}, {
			action: 'sprint',
			origin: 'pfLeft',
			destination: 'underRingTopRight'
		}],
		[{
			origin: 'ball',
			destination: 'underRingTopRight'
		}]
	];
	// Display the stategy
	strategyCreator(wishedZoom, defaultPlayersPositions, ballHolder, listOfMoves);
}

function strategyTriangle1(wishedZoom) {
	// Players starting position
	const defaultPlayersPositions = [
		'pg',
		'sgRight',
		'sfLeft',
		'sfRight',
		'cLeft'
	];
	// Define ball holder at the beginning of the play
	const ballHolder = 'pg';
	// List of moves
	const listOfMoves = [
		[{
			origin: 'ball',
			destination: 'sfLeft'
		}, {
			action: 'sprint',
			origin: 'sgRight',
			destination: 'underRing'
		}],
		[{
			action: 'sprint',
			origin: 'sgRight',
			destination: 'cornerLeft'
		}, {
			action: 'sprint',
			origin: 'sfRight',
			destination: 'pfRight'
		}],
		[{
			origin: 'ball',
			destination: 'pg'
		}, {
			action: 'sprint',
			origin: 'sfLeft',
			destination: 'cornerLeftPickTopRight'
		}],
		[{
			origin: 'ball',
			destination: 'pfRight'
		}],
		[{
			action: 'sprint',
			origin: 'pg',
			destination: 'sfRight'
		}, {
			action: 'sprint',
			origin: 'sgRight',
			destination: 'sgLeft'
		}],
		[{
			origin: 'ball',
			destination: 'sgLeft'
		}]
	];
	// Display the stategy
	strategyCreator(wishedZoom, defaultPlayersPositions, ballHolder, listOfMoves);
}

function strategyTriangle2(wishedZoom) {
	// Players starting position
	const defaultPlayersPositions = [
		'pg',
		'sfLeft',
		'sfRight',
		'cRight',
		'cornerRight'
	];
	// Define ball holder at the beginning of the play
	const ballHolder = 'pg';
	// List of moves
	const listOfMoves = [
		[{
			origin: 'ball',
			destination: 'sfRight'
		}, {
			action: 'sprint',
			origin: 'sfLeft',
			destination: 'cLeft'
		}, {
			action: 'regular',
			origin: 'pg',
			destination: 'sgLeft'
		}],
		[{
			action: 'sprint',
			origin: 'sfLeft',
			destination: 'pfCenter'
		}],
		[{
			origin: 'ball',
			destination: 'pfCenter'
		}, {
			action: 'sprint',
			origin: 'pg',
			destination: 'underRingTopLeft'
		}, {
			action: 'sprint',
			origin: 'sfRight',
			destination: 'cornerRightPickTopLeft'
		}],
		[{
			origin: 'ball',
			destination: 'underRingTopLeft'
		}, {
			action: 'sprint',
			origin: 'cornerRight',
			destination: 'sfRight'
		}]
	];
	// Display the stategy
	strategyCreator(wishedZoom, defaultPlayersPositions, ballHolder, listOfMoves);
}

function strategyTriangle3(wishedZoom) {
	// Players starting position
	const defaultPlayersPositions = [
		'pg',
		'sfLeft',
		'sfRight',
		'cRight',
		'cLeft'
	];
	// Define ball holder at the beginning of the play
	const ballHolder = 'pg';
	// List of moves
	const listOfMoves = [
		[{
			action: 'sprint',
			origin: 'sfRight',
			destination: 'cRightBottom'
		}],
		[{
			action: 'sprint',
			origin: 'sfRight',
			destination: 'cLeftBottom'
		}],
		[{
			origin: 'ball',
			destination: 'sfLeft'
		}, {
			action: 'sprint',
			origin: 'cRight',
			destination: 'pfCenter'
		}, {
			action: 'regular',
			origin: 'pg',
			destination: 'sgRight'
		}, {
			action: 'sprint',
			origin: 'sfRight',
			destination: 'cornerLeft'
		}],
		[{
			origin: 'ball',
			destination: 'cLeft'
		}, {
			action: 'regular',
			origin: 'cRight',
			destination: 'pg'
		}, {
			action: 'regular',
			origin: 'pg',
			destination: 'sfRight'
		}],
		[{
			action: 'sprint',
			origin: 'sfLeft',
			destination: 'cornerRight'
		}, {
			action: 'sprint',
			origin: 'sfRight',
			destination: 'cRight'
		}, {
			action: 'regular',
			origin: 'cRight',
			destination: 'sgLeft'
		}],
		[{
			origin: 'ball',
			destination: 'sgLeft'
		}, {
			action: 'sprint',
			origin: 'sfRight',
			destination: 'cornerRightPickTopLeft'
		}, {
			action: 'regular',
			origin: 'pg',
			destination: 'sfRightPickLeft'
		}],
		[{
			action: 'sprint',
			origin: 'sfLeft',
			destination: 'sfRight'
		}],
		[{
			action: 'sprint',
			origin: 'sfRight',
			destination: 'cRight'
		}, {
			action: 'regular',
			origin: 'sfLeft',
			destination: 'sgRight'
		}],
		[{
			action: 'sprint',
			origin: 'pg',
			destination: 'cornerRight'
		}, {
			origin: 'ball',
			destination: 'sgRight'
		}, {
			action: 'sprint',
			origin: 'cLeft',
			destination: 'pfLeftPickBottomRight'
		}, {
			action: 'regular',
			origin: 'cRight',
			destination: 'pfLeft'
		}],
		[{
			action: 'sprint',
			origin: 'sfRight',
			destination: 'sfRight'
		}, {
			action: 'sprint',
			origin: 'cRight',
			destination: 'underRingTopLeft'
		}, {
			action: 'sprint',
			origin: 'cLeft',
			destination: 'pfLeft'
		}],
		[{
			origin: 'ball',
			destination: 'underRingTopLeft'
		}]
	];
	// Display the stategy
	strategyCreator(wishedZoom, defaultPlayersPositions, ballHolder, listOfMoves);
}

function strategyTriangle5(wishedZoom) {
	// Players starting position
	const defaultPlayersPositions = [
		'sgLeft',
		'sgRight',
		'sfLeft',
		'sfRight',
		'cRight'
	];
	// Define ball holder at the beginning of the play
	const ballHolder = 'sgRight';
	// List of moves
	const listOfMoves = [
		[{
			origin: 'ball',
			destination: 'sgLeft'
		}, {
			action: 'regular',
			origin: 'sfRight',
			destination: 'cRightBottom'
		}],
		[{
			origin: 'ball',
			destination: 'sfLeft'
		}, {
			action: 'regular',
			origin: 'sgRight',
			destination: 'pfRight'
		}],
		[{
			action: 'sprint',
			origin: 'sgLeft',
			destination: 'cornerLeft'
		}, {
			action: 'sprint',
			origin: 'sfRight',
			destination: 'pfRightPickBottom'
		}],
		[{
			action: 'sprint',
			origin: 'sfRight',
			destination: 'sgRight'
		}, {
			action: 'sprint',
			origin: 'sgRight',
			destination: 'underRingTopLeft'
		}, {
			action: 'regular',
			origin: 'cRight',
			destination: 'pfCenter'
		}],
		[{
			origin: 'ball',
			destination: 'sgRight'
		}],
		[{
			action: 'regular',
			origin: 'ball',
			destination: 'sfRight'
		}, {
			action: 'regular',
			origin: 'sfRight',
			destination: 'sfRight'
		}],
		[{
			action: 'sprint',
			origin: 'cRight',
			destination: 'cornerRight'
		}, {
			action: 'sprint',
			origin: 'sgRight',
			destination: 'cLeft'
		}, {
			action: 'sprint',
			origin: 'sgLeft',
			destination: 'cLeftBottom'
		}, {
			action: 'sprint',
			origin: 'sfLeft',
			destination: 'pfLeft'
		}],
		[{
			action: 'sprint',
			origin: 'sgLeft',
			destination: 'sgLeft'
		}, {
			action: 'regular',
			origin: 'sgRight',
			destination: 'pfCenter'
		}, {
			action: 'sprint',
			origin: 'sfLeft',
			destination: 'underRingTopRight'
		}],
		[{
			action: 'sprint',
			origin: 'sgRight',
			destination: 'pg'
		}, {
			action: 'regular',
			origin: 'sgLeft',
			destination: 'sfLeft'
		}, {
			action: 'sprint',
			origin: 'sfLeft',
			destination: 'cRight'
		}]
	];
	// Display the stategy
	strategyCreator(wishedZoom, defaultPlayersPositions, ballHolder, listOfMoves);
}

function strategyTriangle4(wishedZoom) {
	// Players starting position
	const defaultPlayersPositions = [
		'sgLeft',
		'sgRight',
		'sfLeft',
		'sfRight',
		'cRight'
	];
	// Define ball holder at the beginning of the play
	const ballHolder = 'sgRight';
	// List of moves
	const listOfMoves = [];
	// Display the stategy
	strategyCreator(wishedZoom, defaultPlayersPositions, ballHolder, listOfMoves);
}

function strategySelector(wishedZoom, strategyName) {
	// Evaluate the strategyName to launch function
	const condition = R.cond([
		[R.equals('strategyNormalStar'), R.always(strategyNormalStar)],
		[R.equals('strategyLowStar'), R.always(strategyLowStar)],
		[R.equals('strategyTouchDowmLeft'), R.always(strategyTouchDowmLeft)],
		[R.equals('strategyTouchDowmRight'), R.always(strategyTouchDowmRight)],
		[R.equals('strategyTouchBoxLeft'), R.always(strategyTouchBoxLeft)],
		[R.equals('strategyTriangle1'), R.always(strategyTriangle1)],
		[R.equals('strategyTriangle2'), R.always(strategyTriangle2)],
		[R.equals('strategyTriangle3'), R.always(strategyTriangle3)],
		[R.equals('strategyTriangle4'), R.always(strategyTriangle4)],
		[R.equals('strategyTriangle5'), R.always(strategyTriangle5)],
	]);

	return condition(strategyName)(wishedZoom);
}
