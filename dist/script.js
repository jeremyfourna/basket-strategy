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
		}, {
			action: 'sprint',
			origin: 'cRight',
			destination: 'cornerRight'
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

function strategyTouchBoxLeft(wishedZoom) {
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
	const strategyStar = [
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
			destination: 'cornerRightPickTop'
		}, {
			action: 'regular',
			origin: 'pg',
			destination: 'sfRightPickTop'
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
			destination: 'underRingLeft'
		}, {
			action: 'sprint',
			origin: 'cLeft',
			destination: 'pfLeft'
		}],
		[{
			origin: 'ball',
			destination: 'underRingLeft'
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
//strategyTriangle2(100);
strategyTriangleOffense1(100);
//https://www.sbnation.com/nba/2011/4/5/2090041/lakers-triangle-offense
//https://www.nytimes.com/2015/06/28/sports/basketball/phil-jackson-knicks-triangle-offense-nba.html?_r=0

function strategyTriangleOffense1(wishedZoom) {
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
	const strategyStar = [
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
			destination: 'underRingLeft'
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
			destination: 'underRingRight'
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
	strategyCreator(wishedZoom, defaultPlayersPositions, ballHolder, strategyStar);
}

// http://www.fip.it/public/41/3533/Tex%20Winter%20-%20Attacco%20Triangolo%20-%20prima%20parte.pdf
