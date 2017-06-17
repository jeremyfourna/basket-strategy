// Define the size of the court and all elements inside
const wishedZoom = 40;
// Generate the court
const courtSVG = generateCourt(courtConfigZoomed(wishedZoom));
// Players starting position
const defaultPlayersPositions = [
	'pg',
	'fgLeft',
	'fgRight',
	'cornerLeft',
	'cornerRight'
];

// Select only the right positions via the defaultPlayersPositions array
const selectPlayersPositions = R.pick(
	defaultPlayersPositions,
	playersPositions
);
// Transform the player position via the wishedZoom constant
const playersPositionsZoomed = playersPositionsConfigZoomed(wishedZoom, selectPlayersPositions);
// Transform all players position via the wishedZoom constant
const allPlayersPositionsZoomed = playersPositionsConfigZoomed(wishedZoom);
// Add the selected players into the court
generatePlayersPositions(playersPositionsZoomed, courtSVG);
// Add the ball into the court
const ballPosition = addBallToGame('pg', playersPositionsZoomed);
generateBallPosition(ballPosition, courtSVG);


const newStrategyStar = [
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

const generatedStrategy = generateStategy(allPlayersPositionsZoomed, playersPositionsZoomed, ballPosition, newStrategyStar);

playMovements(generatedStrategy);
