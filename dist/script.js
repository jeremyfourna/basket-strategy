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
	const strategyStar = [
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
	strategyCreator(wishedZoom, defaultPlayersPositions, ballHolder, strategyStar);
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
	const strategyStar = [
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
			destination: 'sfRightPickTop'
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
			destination: 'sfRightPickTop'
		}],
		[{
			action: 'sprint',
			origin: 'ball',
			destination: 'sfRightAfterPickTop'
		}, {
			action: 'sprint',
			origin: 'pg',
			destination: 'sfRightAfterPickTop'
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
		}]
	];
	// Display the stategy
	strategyCreator(wishedZoom, defaultPlayersPositions, ballHolder, strategyStar);
}

function strategyTouchDowmLeft(wishedZoom) {
	// Players starting position
	const defaultPlayersPositions = [
		'touchTopLeft',
		'pfLeft',
		'cRightBottom',
		'cLeftBottom',
		'pfRight'
	];
	// Define ball holder at the beginning of the play
	const ballHolder = 'touchTopLeft';
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
		'touchTopRight',
		'pfLeft',
		'cRightBottom',
		'cLeftBottom',
		'pfRight'
	];
	// Define ball holder at the beginning of the play
	const ballHolder = 'touchTopRight';
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

function strategyTouchBoxLeft(wishedZoom) {
	// Players starting position
	const defaultPlayersPositions = [
		'touchTopLeft',
		'pfLeft',
		'cRightBottom',
		'cLeftBottom',
		'pfRight'
	];
	// Define ball holder at the beginning of the play
	const ballHolder = 'touchTopLeft';
	// List of moves
	const strategyStar = [
		[{
			action: 'sprint',
			origin: 'cLeftBottom',
			destination: 'underRing'
		}, {
			action: 'sprint',
			origin: 'pfLeft',
			destination: 'pfRightPickLeft'
		}],
		[{
			action: 'sprint',
			origin: 'cRightBottom',
			destination: 'cornerLeft'
		}, {
			action: 'sprint',
			origin: 'pfRight',
			destination: 'sfLeft'
		}],
		[{
			action: 'sprint',
			origin: 'cLeftBottom',
			destination: 'underRingLeft'
		}, {
			action: 'sprint',
			origin: 'pfLeft',
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
	const strategyStar = [
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
			destination: 'cornerLeftPickTop'
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
	strategyCreator(wishedZoom, defaultPlayersPositions, ballHolder, strategyStar);
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
	const strategyStar = [
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
			destination: 'underRingLeft'
		}, {
			action: 'sprint',
			origin: 'sfRight',
			destination: 'cornerRightPickTop'
		}],
		[{
			origin: 'ball',
			destination: 'underRingLeft'
		}, {
			action: 'sprint',
			origin: 'cornerRight',
			destination: 'sfRight'
		}]
	];
	// Display the stategy
	strategyCreator(wishedZoom, defaultPlayersPositions, ballHolder, strategyStar);
}

//strategyNormalStar(100);
//strategyLowStar(60);
//strategyTouchDowmLeft(60);
//strategyTouchDowmRight(60);
//strategyTouchBoxLeft(60);
//strategyTriangle1(100);
strategyTriangle2(100);
