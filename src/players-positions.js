// Basket-Ball players positions for FIBA
const playersPositions = {
	pg: {
		x: 7.5,
		y: 8.325,
		className: 'pg'
	},
	sgLeft: {
		x: 5.05,
		y: 7.84,
		className: 'sgLeft'
	},
	sgRight: {
		x: 9.95,
		y: 7.84,
		className: 'sgRight'
	},
	fgLeft: {
		x: 2.15,
		y: 5.8,
		className: 'fgLeft'
	},
	fgRight: {
		x: 12.85,
		y: 5.8,
		className: 'fgRight'
	},
	cornerLeft: {
		x: 0.9,
		y: 1.545,
		className: 'cornerLeft'
	},
	cornerRight: {
		x: 14.1,
		y: 1.545,
		className: 'cornerRight'
	},
	pfCenter: {
		x: 7.5,
		y: 5.8,
		className: 'pfCenter'
	},
	pfLeft: {
		x: 5.05,
		y: 5.8,
		className: 'pfLeft'
	},
	pfRight: {
		x: 9.95,
		y: 5.8,
		className: 'pfRight'
	},
	cLeft: {
		x: 4.95,
		y: 2.88,
		className: 'cLeft'
	},
	cRight: {
		x: 9.95,
		y: 2.88,
		className: 'cRight'
	},
	underRing: {
		x: 7.5,
		y: 1.545,
		className: 'underRing'
	}
};

function playersPositionsConfigZoomed(zoomSize, playersPosConfig = playersPositions) {

	function zoom(courtZoom) {
		return {
			pg: {
				x: R.multiply(courtZoom),
				y: R.multiply(courtZoom)
			},
			sgLeft: {
				x: R.multiply(courtZoom),
				y: R.multiply(courtZoom)
			},
			sgRight: {
				x: R.multiply(courtZoom),
				y: R.multiply(courtZoom)
			},
			fgLeft: {
				x: R.multiply(courtZoom),
				y: R.multiply(courtZoom)
			},
			fgRight: {
				x: R.multiply(courtZoom),
				y: R.multiply(courtZoom)
			},
			cornerLeft: {
				x: R.multiply(courtZoom),
				y: R.multiply(courtZoom)
			},
			cornerRight: {
				x: R.multiply(courtZoom),
				y: R.multiply(courtZoom)
			},
			pfCenter: {
				x: R.multiply(courtZoom),
				y: R.multiply(courtZoom)
			},
			pfLeft: {
				x: R.multiply(courtZoom),
				y: R.multiply(courtZoom)
			},
			pfRight: {
				x: R.multiply(courtZoom),
				y: R.multiply(courtZoom)
			},
			cLeft: {
				x: R.multiply(courtZoom),
				y: R.multiply(courtZoom)
			},
			cRight: {
				x: R.multiply(courtZoom),
				y: R.multiply(courtZoom)
			},
			underRing: {
				x: R.multiply(courtZoom),
				y: R.multiply(courtZoom)
			}
		};
	}

	return R.evolve(zoom(zoomSize), playersPosConfig);
}

function generatePlayersPositions(wishedZoom, playersPositions, context) {
	const colorConditions = R.cond([
		[R.equals(0), R.always('lightskyblue')],
		[R.equals(1), R.always('yellow')],
		[R.equals(2), R.always('green')],
		[R.equals(3), R.always('red')],
		[R.equals(4), R.always('violet')],
	]);

	mapIndexed((cur, index) => {
		createCircle(
			R.prop('x', cur),
			R.prop('y', cur),
			// Impure because access wishedZoom outside the function
			R.multiply(wishedZoom, 0.5),
			'red',
			colorConditions(index),
			R.prop('className', cur),
			context
		);
	}, playersPositions);
}
