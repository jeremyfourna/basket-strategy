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

// Move players
movePlayerFromTo(
	R.prop('pg', playersPositionsZoomed),
	R.prop('underRing', allPlayersPositionsZoomed),
	'.pg'
);
movePlayerFromTo(
	R.prop('fgLeft', playersPositionsZoomed),
	R.prop('pg', allPlayersPositionsZoomed),
	'.fgLeft'
);
moveBallFromTo(
	ballPosition,
	R.prop('fgRight', allPlayersPositionsZoomed),
	'.ball'
);
movePlayerFromTo(
	R.prop('cornerLeft', playersPositionsZoomed),
	R.prop('fgLeft', allPlayersPositionsZoomed),
	'.cornerLeft'
);
