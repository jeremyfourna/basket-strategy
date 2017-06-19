function strategyNormalStar(wishedZoom) {
	// Players starting position
	const defaultPlayersPositions = [
		'pg',
		'fgLeft',
		'fgRight',
		'cornerLeft',
		'cornerRight'
	];
	// Define ball holder at the beginning of the play
	const ballHolder = 'pg';
	// List of moves
	const strategyStar = [
		[{
			origin: 'ball',
			destination: 'fgLeft'
		}, {
			action: 'sprint',
			origin: 'pg',
			destination: 'underRing'
		}],
		[{
			action: 'sprint',
			origin: 'fgRight',
			destination: 'pg'
		}, {
			action: 'regular',
			origin: 'cornerRight',
			destination: 'fgRight'
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
			origin: 'fgLeft',
			destination: 'underRing'
		}],
		[{
			action: 'sprint',
			origin: 'cornerLeft',
			destination: 'fgLeft'
		}, {
			action: 'regular',
			origin: 'fgLeft',
			destination: 'cornerLeft'
		}],
		[{
			origin: 'ball',
			destination: 'fgRight'
		}, {
			action: 'sprint',
			origin: 'fgRight',
			destination: 'underRing'
		}],
		[{
			action: 'sprint',
			origin: 'cornerLeft',
			destination: 'pg'
		}, {
			action: 'regular',
			origin: 'fgLeft',
			destination: 'fgLeft'
		}, {
			action: 'regular',
			origin: 'fgRight',
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
			destination: 'fgRight'
		}, {
			action: 'regular',
			origin: 'fgLeft',
			destination: 'pg'
		}, {
			action: 'regular',
			origin: 'fgRight',
			destination: 'fgLeft'
		}, {
			action: 'regular',
			origin: 'cornerRight',
			destination: 'cornerLeft'
		}],
		[{
			origin: 'ball',
			destination: 'fgRight'
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
			destination: 'fgRight'
		}, {
			action: 'regular',
			origin: 'cornerLeft',
			destination: 'cornerRight'
		}]
	];
	// Display the stategy
	strategyCreator(wishedZoom, defaultPlayersPositions, ballHolder, strategyStar);
}

function strategyLowStar(wishedZoom) {
	// Players starting position
	const defaultPlayersPositions = [
		'pg',
		'fgLeft',
		'fgRight',
		'cLeft',
		'cRight'
	];
	// Define ball holder at the beginning of the play
	const ballHolder = 'pg';
	// List of moves
	const strategyStar = [
		[{
			action: 'sprint',
			origin: 'fgLeft',
			destination: 'cLeftBottom'
		}, {
			action: 'sprint',
			origin: 'fgRight',
			destination: 'cRightBottom'
		}],
		[{
			action: 'sprint',
			origin: 'fgLeft',
			destination: 'cRightBottom'
		}, {
			action: 'sprint',
			origin: 'fgRight',
			destination: 'cLeftBottom'
		}],
		[{
			action: 'sprint',
			origin: 'fgLeft',
			destination: 'fgRight'
		}, {
			action: 'sprint',
			origin: 'fgRight',
			destination: 'fgLeft'
		}],
		[{
			origin: 'ball',
			destination: 'fgLeft'
		}, {
			action: 'sprint',
			origin: 'pg',
			destination: 'fgRightPickTop'
		}],
		[{
			action: 'sprint',
			origin: 'fgLeft',
			destination: 'pg'
		}],
		[{
			origin: 'ball',
			destination: 'pg'
		}, {
			action: 'sprint',
			origin: 'pg',
			destination: 'fgRight'
		}],
		[{
			origin: 'ball',
			destination: 'fgRight'
		}, {
			action: 'sprint',
			origin: 'cRight',
			destination: 'fgRightPickTop'
		}],
		[{
			action: 'sprint',
			origin: 'ball',
			destination: 'fgRightAfterPickTop'
		}, {
			action: 'sprint',
			origin: 'pg',
			destination: 'fgRightAfterPickTop'
		}],
		[{
			action: 'sprint',
			origin: 'fgLeft',
			destination: 'sgLeft'
		}, {
			action: 'regular',
			origin: 'fgRight',
			destination: 'cornerLeft'
		}, {
			action: 'sprint',
			origin: 'ball',
			destination: 'underRing'
		}, {
			action: 'sprint',
			origin: 'pg',
			destination: 'underRing'
		}]
	];
	// Display the stategy
	strategyCreator(wishedZoom, defaultPlayersPositions, ballHolder, strategyStar);
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
	const strategyStar = [
		[{
			action: 'sprint',
			origin: 'cLeftBottom',
			destination: 'pfLeftPickBottom'
		}, {
			action: 'sprint',
			origin: 'cRightBottom',
			destination: 'pickRightOnPfLeftPickBottom'
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
			destination: 'underRingRight'
		}],
		[{
			origin: 'ball',
			destination: 'underRingRight'
		}]
	];
	// Display the stategy
	strategyCreator(wishedZoom, defaultPlayersPositions, ballHolder, strategyStar);
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
	const strategyStar = [
		[{
			action: 'sprint',
			origin: 'cLeftBottom',
			destination: 'pickLeftOnPfRightPickBottom'
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
			destination: 'underRingLeft'
		}],
		[{
			origin: 'ball',
			destination: 'underRingLeft'
		}]

	];
	// Display the stategy
	strategyCreator(wishedZoom, defaultPlayersPositions, ballHolder, strategyStar);
}

//strategyNormalStar(40);
//strategyLowStar(23);
//strategyTouchDowmLeft(60);
//strategyTouchDowmRight(60);
