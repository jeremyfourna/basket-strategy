function moveFromTo(origin, destination, speed, waitingTime, elementClassName) {
  const element = d3.select(elementClassName);

  element.transition()
    .delay(waitingTime)
    .duration(speed)
    .attr('transform', `translate(${translateX(origin, destination)},${translateY(origin, destination)})`);
}

function translateX(origin, destination) {
  return destination.x - origin.x;
}

function translateY(origin, destination) {
  return destination.y - origin.y;
}

function movePlayerFromTo(origin, destination, waitingTime, elementClassName) {
  moveFromTo(origin, destination, 2000, waitingTime, elementClassName);
}

function moveBallFromTo(origin, destination, waitingTime, elementClassName) {
  moveFromTo(origin, destination, 500, waitingTime, elementClassName);
}

function playMovements(movementsList) {
  mapIndexed((cur) => {
    if (R.equals(R.head(cur), 'moveBallFromTo')) {
      R.apply(moveBallFromTo, R.tail(cur));
    } else {
      R.apply(movePlayerFromTo, R.tail(cur));
    }
  }, movementsList);
}
