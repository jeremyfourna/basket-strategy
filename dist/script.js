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

strategyNormalStar(30);
