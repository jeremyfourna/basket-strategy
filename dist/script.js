// Define the size of the court and all elements inside
const wishedZoom = 80;
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


const strategyStart = [
	[
		'moveBallFromTo',
		ballPosition,
		R.prop('fgRight', allPlayersPositionsZoomed),
		0,
		'.ball'
	],
	[
		'movePlayerFromTo',
		R.prop('pg', playersPositionsZoomed),
		R.prop('underRing', allPlayersPositionsZoomed),
		0,
		'.pg'
	],
	[
		'movePlayerFromTo',
		R.prop('fgLeft', playersPositionsZoomed),
		R.prop('pg', allPlayersPositionsZoomed),
		400,
		'.fgLeft'
	],
	[
		'movePlayerFromTo',
		R.prop('cornerLeft', playersPositionsZoomed),
		R.prop('fgLeft', allPlayersPositionsZoomed),
		400,
		'.cornerLeft'
	],
	[
		'movePlayerFromTo',
		R.prop('pg', playersPositionsZoomed),
		R.prop('cornerLeft', playersPositionsZoomed),
		2200,
		'.pg'
	],
	[
		'moveBallFromTo',
		ballPosition,
		R.prop('pg', allPlayersPositionsZoomed),
		2700,
		'.ball'
	],
	[
		'movePlayerFromTo',
		R.prop('fgRight', playersPositionsZoomed),
		R.prop('underRing', allPlayersPositionsZoomed),
		2700,
		'.fgRight'
	],
	[
		'movePlayerFromTo',
		R.prop('cornerRight', playersPositionsZoomed),
		R.prop('fgRight', playersPositionsZoomed),
		3100,
		'.cornerRight'
	]
];


playMovements(strategyStart);
