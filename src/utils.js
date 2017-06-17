function createRectangle(topLeftCornerX, topLeftCornerY, width, height, context) {
	context.append('rect')
		.attr('x', topLeftCornerX)
		.attr('y', topLeftCornerY)
		.attr('width', width)
		.attr('height', height)
		.style('fill', 'none')
		.style('stroke', 'black');
}

function createCircle(centerX, centerY, radius, strokeColor, context) {
	context.append('circle')
		.attr('cx', centerX)
		.attr('cy', centerY)
		.attr('r', radius)
		.style('fill', 'none')
		.style('stroke', strokeColor);
}

function createLine(beginX, beginY, endX, endY, context) {
	context.append('line')
		.attr('x1', beginX)
		.attr('y1', beginY)
		.attr('x2', endX)
		.attr('y2', endY)
		.style('stroke-width', '1')
		.style('stroke', 'black');
}

function clickOnSVG(context) {
	const x = R.head(d3.mouse(this));
	const y = R.last(d3.mouse(this));
	const svg = d3.select('svg');
	console.log(x, y);

	createCircle(x, y, R.multiply(wishedZoom, 0.5), 'red', svg);
}

function createArc(innerRad, outerRad, startAng, endAng, x, y, invert, context) {
	const arc = d3.arc()
		.innerRadius(innerRad)
		.outerRadius(outerRad)
		.startAngle(startAng)
		.endAngle(endAng);

	if (R.equals(invert, true)) {
		context.append('path')
			.attr('d', arc)
			.attr('transform', `translate(${x},${y}) rotate(180)`)
			.style('fill', 'none')
			.style('stroke', 'black');
	} else {
		context.append('path')
			.attr('d', arc)
			.attr('transform', `translate(${x},${y})`)
			.style('fill', 'none')
			.style('stroke', 'black');
	}
}
