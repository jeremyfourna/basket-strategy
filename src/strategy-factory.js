/*
Move = {
  action: regular || sprint
  origin : Position
  destination : Position
}
The action property is only needed if you want to move a player with or without the ball
*/

function waitingTime(type, index) {
  if (type === 'regular') {
    return 2000 * index + 400;
  } else {
    return 2000 * index;
  }
}

function generateStategy(allPositions, selectedPlayers, ballPosition, listOfMoves) {
  const listOfMovesTransformed = mapIndexed((cur, index) => {
    return R.map(cur1 => {
      if (R.isNil(cur1.action)) { // If action property is defined
        if (cur1.origin === 'ball') {
          return [
            'moveBallFromTo',
            ballPosition,
            R.prop(cur1.destination, allPositions),
            2000 * index,
            '.ball'
          ];
        } else {
          return [
            'movePlayerFromTo',
            R.prop(cur1.origin, selectedPlayers),
            R.prop(cur1.destination, allPositions),
            waitingTime('regular', index),
            `.${cur1.origin}`
          ];
        }
      } else {
        const isADrive = R.ifElse(
          R.equals('ball'),
          R.always(ballPosition),
          R.always(R.prop(R.prop('origin', cur1), selectedPlayers))
        );
        return [
          'movePlayerFromTo',
          isADrive(cur1.origin),
          R.prop(cur1.destination, allPositions),
          waitingTime(cur1.action, index),
          `.${cur1.origin}`
        ];
      }
    }, cur);
  }, listOfMoves);

  return R.reduce((prev, cur) => R.concat(prev, cur), [], listOfMovesTransformed);
}

function strategyCreator(domElement, wishedZoom, players, ballHolder, listOfMoves) {
  // Generate the court
  const courtSVG = generateCourt(domElement, courtConfigZoomed(wishedZoom), wishedZoom);
  // Select only the right positions via the players array
  const selectPlayersPositions = R.pick(players, playersPositions());
  // Transform the player position via the wishedZoom constant
  const playersPositionsZoomed = playersPositionsConfigZoomed(wishedZoom, selectPlayersPositions);
  // Transform all players position via the wishedZoom constant
  const allPlayersPositionsZoomed = playersPositionsConfigZoomed(wishedZoom, playersPositions());
  // Add the selected players into the court
  generatePlayersPositions(wishedZoom, playersPositionsZoomed, courtSVG);
  // Add the ball into the court
  const ballPosition = addBallToGame(ballHolder, playersPositionsZoomed);
  generateBallPosition(wishedZoom, ballPosition, courtSVG);

  const generatedStrategy = generateStategy(
    allPlayersPositionsZoomed,
    playersPositionsZoomed,
    ballPosition,
    listOfMoves
  );

  playMovements(generatedStrategy);
}
