function addBallToGameF(player, allPlayers) {
  const ballPosition = R.prop(player, R.pick([player], allPlayers));

  return R.assoc('className', 'ball', ballPosition);
}

function generateBallPositionF(wishedZoom, ballPosition, context) {
  return createCircle(
    R.prop('x', ballPosition),
    R.prop('y', ballPosition),
    R.multiply(wishedZoom, 0.25),
    'black',
    'orange',
    R.prop('className', ballPosition),
    context
  );
}

const addBallToGame = R.curry(addBallToGameF);
const generateBallPosition = R.curry(generateBallPositionF);