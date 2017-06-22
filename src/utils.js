// regular map but with index to process actions
const mapIndexed = R.addIndex(R.map);

function createRectangle(topLeftCornerX, topLeftCornerY, width, height, context) {
	context.append('rect')
		.attr('x', topLeftCornerX)
		.attr('y', topLeftCornerY)
		.attr('width', width)
		.attr('height', height)
		.style('fill', 'none')
		.style('stroke', 'black');
}

function createCircle(centerX, centerY, radius, strokeColor, fillColor, className, context) {
	context.append('circle')
		.attr('cx', centerX)
		.attr('cy', centerY)
		.attr('r', radius)
		.attr('class', className)
		.style('fill', fillColor)
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

function cleanSVG() {
	const parent = document.getElementsByTagName("body");
	const child = document.getElementsByTagName("svg");
	if (R.gt(R.length(child), 0)) {
		parent[0].removeChild(child[0]);
	}
}
