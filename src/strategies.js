const R = require('ramda');
const strategyCreator = require('./strategy-factory.js').strategyCreator;

exports.strategySelector = strategySelector;

function strategyNormalStar(domElement, wishedZoom) {
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
	strategyCreator(domElement, wishedZoom, defaultPlayersPositions, ballHolder, listOfMoves);
}

function strategyLowStar(domElement, wishedZoom) {
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
	strategyCreator(domElement, wishedZoom, defaultPlayersPositions, ballHolder, listOfMoves);
}

function strategyTouchDowmLeft(domElement, wishedZoom) {
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
	strategyCreator(domElement, wishedZoom, defaultPlayersPositions, ballHolder, listOfMoves);
}

function strategyTouchDowmRight(domElement, wishedZoom) {
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
	strategyCreator(domElement, wishedZoom, defaultPlayersPositions, ballHolder, listOfMoves);
}

function strategyTouchBoxLeft(domElement, wishedZoom) {
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
	strategyCreator(domElement, wishedZoom, defaultPlayersPositions, ballHolder, listOfMoves);
}

function strategyStrongSideOffenseOption1(domElement, wishedZoom) {
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
			destination: 'sfRight'
		}, {
			action: 'sprint',
			origin: 'sgRight',
			destination: 'sfRightPickRight'
		}, {
			action: 'regular',
			origin: 'sgLeft',
			destination: 'pg'
		}, {
			action: 'regular',
			origin: 'sfLeft',
			destination: 'cLeftPickTopLeft'
		}],
		[{
			action: 'sprint',
			origin: 'sgRight',
			destination: 'cornerRight'
		}],
		[{
			origin: 'ball',
			destination: 'cRight'
		}, {
			action: 'sprint',
			origin: 'sfRight',
			destination: 'sfRightPickLeft'
		}, {
			action: 'sprint',
			origin: 'sgRight',
			destination: 'cornerRightPickLeft'
		}],
		[{
			action: 'sprint',
			origin: 'sfRight',
			destination: 'cRightPickBottom'
		}, {
			action: 'sprint',
			origin: 'sgRight',
			destination: 'pfRight'
		}, {
			action: 'sprint',
			origin: 'sgLeft',
			destination: 'sgLeft'
		}, {
			action: 'sprint',
			origin: 'sfLeft',
			destination: 'cLeftPickBottomLeft'
		}],
		[{
			origin: 'ball',
			destination: 'cRightPickBottom'
		}],
		[{
			origin: 'ball',
			destination: 'underRing'
		}]
	];
	// Display the stategy
	strategyCreator(domElement, wishedZoom, defaultPlayersPositions, ballHolder, listOfMoves);
}

function strategyStrongSideOffenseOption2(domElement, wishedZoom) {
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
			destination: 'sfRight'
		}, {
			action: 'sprint',
			origin: 'sgRight',
			destination: 'sfRightPickRight'
		}, {
			action: 'regular',
			origin: 'sgLeft',
			destination: 'pg'
		}, {
			action: 'regular',
			origin: 'sfLeft',
			destination: 'cLeftPickTopLeft'
		}],
		[{
			action: 'sprint',
			origin: 'sgRight',
			destination: 'cornerRight'
		}],
		[{
			origin: 'ball',
			destination: 'cRight'
		}, {
			action: 'sprint',
			origin: 'sfRight',
			destination: 'sfRightPickLeft'
		}, {
			action: 'sprint',
			origin: 'sgRight',
			destination: 'cornerRightPickLeft'
		}],
		[{
			action: 'sprint',
			origin: 'sfRight',
			destination: 'cRightPickBottom'
		}, {
			action: 'sprint',
			origin: 'sgRight',
			destination: 'pfRight'
		}, {
			action: 'sprint',
			origin: 'sgLeft',
			destination: 'sgLeft'
		}, {
			action: 'sprint',
			origin: 'sfLeft',
			destination: 'cLeftPickBottomLeft'
		}],
		[{
			origin: 'ball',
			destination: 'pfRight'
		}],
		[{
			origin: 'ball',
			destination: 'underRing'
		}]
	];
	// Display the stategy
	strategyCreator(domElement, wishedZoom, defaultPlayersPositions, ballHolder, listOfMoves);
}

function strategyStrongSideOffenseOption3(domElement, wishedZoom) {
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
			destination: 'sfRight'
		}, {
			action: 'sprint',
			origin: 'sgRight',
			destination: 'sfRightPickRight'
		}, {
			action: 'regular',
			origin: 'sgLeft',
			destination: 'pg'
		}, {
			action: 'regular',
			origin: 'sfLeft',
			destination: 'cLeftPickTopLeft'
		}],
		[{
			action: 'sprint',
			origin: 'sgRight',
			destination: 'cornerRight'
		}],
		[{
			origin: 'ball',
			destination: 'cornerRight'
		}],
		[{
			origin: 'ball',
			destination: 'cRight'
		}, {
			action: 'sprint',
			origin: 'sfRight',
			destination: 'sfRightPickLeft'
		}, {
			action: 'sprint',
			origin: 'sgRight',
			destination: 'cornerRightPickLeft'
		}],
		[{
			action: 'regular',
			origin: 'sfRight',
			destination: 'cRightPickBottom'
		}, {
			action: 'sprint',
			origin: 'sgRight',
			destination: 'cRightPickTop'
		}, {
			action: 'sprint',
			origin: 'sgLeft',
			destination: 'sgLeft'
		}, {
			action: 'sprint',
			origin: 'sfLeft',
			destination: 'cLeftPickBottomLeft'
		}],
		[{
			origin: 'ball',
			destination: 'cRightPickTop'
		}],
		[{
			origin: 'ball',
			destination: 'underRing'
		}]
	];
	// Display the stategy
	strategyCreator(domElement, wishedZoom, defaultPlayersPositions, ballHolder, listOfMoves);
}

function strategyStrongSideOffenseOption4(domElement, wishedZoom) {
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
			destination: 'sfRight'
		}, {
			action: 'sprint',
			origin: 'sgRight',
			destination: 'sfRightPickRight'
		}, {
			action: 'regular',
			origin: 'sgLeft',
			destination: 'pg'
		}, {
			action: 'regular',
			origin: 'sfLeft',
			destination: 'cLeftPickTopLeft'
		}],
		[{
			action: 'sprint',
			origin: 'sgRight',
			destination: 'cornerRight'
		}]
	];
	// Display the stategy
	strategyCreator(domElement, wishedZoom, defaultPlayersPositions, ballHolder, listOfMoves);
}

function strategySelector(domElement, wishedZoom, strategyName) {
	// Evaluate the strategyName to launch function
	const condition = R.cond([
		[R.equals('strategyStrongSideOffenseOption1'), R.always(strategyStrongSideOffenseOption1)],
		[R.equals('strategyStrongSideOffenseOption2'), R.always(strategyStrongSideOffenseOption2)],
		[R.equals('strategyStrongSideOffenseOption3'), R.always(strategyStrongSideOffenseOption3)],
		[R.equals('strategyStrongSideOffenseOption4'), R.always(strategyStrongSideOffenseOption4)],
		[R.equals('strategyNormalStar'), R.always(strategyNormalStar)],
		[R.equals('strategyLowStar'), R.always(strategyLowStar)],
		[R.equals('strategyTouchDowmLeft'), R.always(strategyTouchDowmLeft)],
		[R.equals('strategyTouchDowmRight'), R.always(strategyTouchDowmRight)],
		[R.equals('strategyTouchBoxLeft'), R.always(strategyTouchBoxLeft)]
	]);

	return condition(strategyName)(domElement, wishedZoom);
}