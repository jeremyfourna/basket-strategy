function moveFromTo(origin, destination, speed, elementClassName) {
	const element = d3.select(elementClassName);
	const translateX = R.subtract(
		R.prop('x', destination),
		R.prop('x', origin)
	);
	const translateY = R.subtract(
		R.prop('y', destination),
		R.prop('y', origin)
	);
	element.transition()
		.duration(speed)
		.attr('transform', `translate(${translateX},${translateY})`);
}

function movePlayerFromTo(origin, destination, elementClassName) {
	moveFromTo(origin, destination, 2000, elementClassName);
}

function moveBallFromTo(origin, destination, elementClassName) {
	moveFromTo(origin, destination, 500, elementClassName);
}
