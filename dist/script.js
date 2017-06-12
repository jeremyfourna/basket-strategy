// Basket-Ball court dimensions for FIBA
const courtConfig = {
	topX: 0,
	topY: 0,
	height: 28, // meters
	width: 15,
	centerRing: {
		centerX: 7.5,
		centerY: 14,
		radius: 1.8
	},
	topRing: {
		centerX: 7.5,
		centerY: 5.8,
		radius: 1.8
	},
	bottomRing: {
		centerX: 7.5,
		centerY: 22.2,
		radius: 1.8
	},
	topPaint: {
		topX: 5.05,
		topY: 0,
		width: 4.9,
		height: 5.8,
		separationLines: [{
			topX: 4.95,
			topY: 1.75,
			height: 0.08,
			width: 0.1,
		}, {
			topX: 4.95,
			topY: 2.68,
			height: 0.4,
			width: 0.1,
		}, {
			topX: 4.95,
			topY: 3.93,
			height: 0.08,
			width: 0.1,
		}, {
			topX: 4.95,
			topY: 4.86,
			height: 0.08,
			width: 0.1,
		}, {
			topX: 9.95,
			topY: 1.75,
			height: 0.08,
			width: 0.1,
		}, {
			topX: 9.95,
			topY: 2.68,
			height: 0.4,
			width: 0.1,
		}, {
			topX: 9.95,
			topY: 3.93,
			height: 0.08,
			width: 0.1,
		}, {
			topX: 9.95,
			topY: 4.86,
			height: 0.08,
			width: 0.1,
		}]
	},
	bottomPaint: {
		topX: 5.05,
		topY: 22.2,
		width: 4.9,
		height: 5.8,
		separationLines: [{
			topX: 4.95,
			topY: 26.25,
			height: 0.08,
			width: 0.1,
		}, {
			topX: 4.95,
			topY: 25.32,
			height: 0.4,
			width: 0.1,
		}, {
			topX: 4.95,
			topY: 24.07,
			height: 0.08,
			width: 0.1,
		}, {
			topX: 4.95,
			topY: 23.14,
			height: 0.08,
			width: 0.1,
		}, {
			topX: 9.95,
			topY: 26.25,
			height: 0.08,
			width: 0.1,
		}, {
			topX: 9.95,
			topY: 25.32,
			height: 0.4,
			width: 0.1,
		}, {
			topX: 9.95,
			topY: 24.07,
			height: 0.08,
			width: 0.1,
		}, {
			topX: 9.95,
			topY: 23.14,
			height: 0.08,
			width: 0.1,
		}]
	},
	topBasket: {
		bigLine: {
			x1: 6.6,
			y1: 1.2,
			x2: 8.4,
			y2: 1.2
		},
		smallLine: {
			x1: 7.5,
			y1: 1.2,
			x2: 7.5,
			y2: 1.32
		},
		ring: {
			centerX: 7.5,
			centerY: 1.545,
			radius: 0.225
		}
	}
};

function courtConfigZoomed(zoomSize) {

	function zoom(courtZoom) {
		// props equal to 0 don't need a function to evolve
		const separationLinesTransformations = {
			topX: R.multiply(courtZoom),
			topY: R.multiply(courtZoom),
			height: R.multiply(courtZoom),
			width: R.multiply(courtZoom)
		};

		return {
			height: R.multiply(courtZoom),
			width: R.multiply(courtZoom),
			centerRing: {
				centerX: R.multiply(courtZoom),
				centerY: R.multiply(courtZoom),
				radius: R.multiply(courtZoom)
			},
			topRing: {
				centerX: R.multiply(courtZoom),
				centerY: R.multiply(courtZoom),
				radius: R.multiply(courtZoom)
			},
			bottomRing: {
				centerX: R.multiply(courtZoom),
				centerY: R.multiply(courtZoom),
				radius: R.multiply(courtZoom)
			},
			topPaint: {
				topX: R.multiply(courtZoom),
				width: R.multiply(courtZoom),
				height: R.multiply(courtZoom),
				separationLines: R.map(R.evolve(separationLinesTransformations))
			},
			bottomPaint: {
				topX: R.multiply(courtZoom),
				topY: R.multiply(courtZoom),
				width: R.multiply(courtZoom),
				height: R.multiply(courtZoom),
				separationLines: R.map(R.evolve(separationLinesTransformations))
			},
			topBasket: {
				bigLine: {
					x1: R.multiply(courtZoom),
					y1: R.multiply(courtZoom),
					x2: R.multiply(courtZoom),
					y2: R.multiply(courtZoom)
				},
				smallLine: {
					x1: R.multiply(courtZoom),
					y1: R.multiply(courtZoom),
					x2: R.multiply(courtZoom),
					y2: R.multiply(courtZoom)
				},
				ring: {
					centerX: R.multiply(courtZoom),
					centerY: R.multiply(courtZoom),
					radius: R.multiply(courtZoom)
				}
			}
		};
	}

	return R.evolve(zoom(zoomSize), courtConfig);
}

function generateCourt(courtConfig) {
	console.log(courtConfig);
	// Create the svg in the body
	const svg = d3.select('body')
		.append('svg')
		.on('click', clickOnSVG);
	// Define width and height of the svg
	svg.attr('width', R.prop('width', courtConfig));
	svg.attr('height', R.prop('height', courtConfig));
	// Full court
	createRectangle(
		R.prop('topX', courtConfig),
		R.prop('topY', courtConfig),
		R.prop('width', courtConfig),
		R.prop('height', courtConfig),
		svg
	);
	// Half court
	createRectangle(
		R.prop('topX', courtConfig),
		R.prop('topY', courtConfig),
		R.prop('width', courtConfig),
		R.divide(R.prop('height', courtConfig), 2), // Divide height by 2 to have the half court
		svg
	);
	// Ring center
	createCircle(
		R.path(['centerRing', 'centerX'], courtConfig),
		R.path(['centerRing', 'centerY'], courtConfig),
		R.path(['centerRing', 'radius'], courtConfig),
		svg
	);
	// Ring top
	createCircle(
		R.path(['topRing', 'centerX'], courtConfig),
		R.path(['topRing', 'centerY'], courtConfig),
		R.path(['topRing', 'radius'], courtConfig),
		svg
	);
	// Ring bottom
	createCircle(
		R.path(['bottomRing', 'centerX'], courtConfig),
		R.path(['bottomRing', 'centerY'], courtConfig),
		R.path(['bottomRing', 'radius'], courtConfig),
		svg
	);
	// Top paint
	createRectangle(
		R.path(['topPaint', 'topX'], courtConfig),
		R.path(['topPaint', 'topY'], courtConfig),
		R.path(['topPaint', 'width'], courtConfig),
		R.path(['topPaint', 'height'], courtConfig),
		svg
	);
	// Separation lines for Top paint
	R.map((cur) => {
		createRectangle(
			R.prop('topX', cur),
			R.prop('topY', cur),
			R.prop('width', cur),
			R.prop('height', cur),
			svg
		);
	}, R.path(['topPaint', 'separationLines'], courtConfig));
	// Bottom paint
	createRectangle(
		R.path(['bottomPaint', 'topX'], courtConfig),
		R.path(['bottomPaint', 'topY'], courtConfig),
		R.path(['bottomPaint', 'width'], courtConfig),
		R.path(['bottomPaint', 'height'], courtConfig),
		svg
	);
	// Separation lines for Bottom paint
	R.map((cur) => {
		createRectangle(
			R.prop('topX', cur),
			R.prop('topY', cur),
			R.prop('width', cur),
			R.prop('height', cur),
			svg
		);
	}, R.path(['bottomPaint', 'separationLines'], courtConfig));
	// Top basket
	createLine(
		R.path(['topBasket', 'bigLine', 'x1'], courtConfig),
		R.path(['topBasket', 'bigLine', 'y1'], courtConfig),
		R.path(['topBasket', 'bigLine', 'x2'], courtConfig),
		R.path(['topBasket', 'bigLine', 'y2'], courtConfig),
		svg
	);
	createLine(
		R.path(['topBasket', 'smallLine', 'x1'], courtConfig),
		R.path(['topBasket', 'smallLine', 'y1'], courtConfig),
		R.path(['topBasket', 'smallLine', 'x2'], courtConfig),
		R.path(['topBasket', 'smallLine', 'y2'], courtConfig),
		svg
	);
	createCircle(
		R.path(['topBasket', 'ring', 'centerX'], courtConfig),
		R.path(['topBasket', 'ring', 'centerY'], courtConfig),
		R.path(['topBasket', 'ring', 'radius'], courtConfig),
		svg
	);
}

function createRectangle(topLeftCornerX, topLeftCornerY, width, height, context) {
	context.append('rect')
		.attr('x', topLeftCornerX)
		.attr('y', topLeftCornerY)
		.attr('width', width)
		.attr('height', height)
		.style('fill', 'none')
		.style('stroke', 'black');
}

function createCircle(centerX, centerY, radius, context) {
	context.append('circle')
		.attr('cx', centerX)
		.attr('cy', centerY)
		.attr('r', radius)
		.style('fill', 'none')
		.style('stroke', 'black');
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

function clickOnSVG() {
	console.log(d3.mouse(this));
}


generateCourt(courtConfigZoomed(40));
