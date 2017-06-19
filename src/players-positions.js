// Basket-Ball players positions for FIBA
const playersPositions = {
	// Positions regarding space around PG
	pg: {
		x: 7.5,
		y: 8.325,
		className: 'pg'
	},
	// Positions regarding space around SG left and right
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
	// Positions regarding space around SF left and right
	sfLeft: {
		x: 2.15,
		y: 5.8,
		className: 'sfLeft'
	},
	sfRight: {
		x: 12.85,
		y: 5.8,
		className: 'sfRight'
	},
	sfRightPickTop: {
		x: 11.86,
		y: 5.68,
		className: 'sfRightPickTop'
	},
	sfLeftPickTop: {
		x: 3.14,
		y: 5.68,
		className: 'sfLeftPickTop'
	},
	sfRightAfterPickTop: {
		x: 11.53,
		y: 6.20,
		className: 'sfRightAfterPickTop'
	},
	sfLeftAfterPickTop: {
		x: 3.47,
		y: 6.20,
		className: 'sfLeftAfterPickTop'
	},
	// Positions regarding space around corner left and right
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
	cornerLeftPickTop: {
		x: 1.74,
		y: 2.08,
		className: 'cornerLeft'
	},
	cornerRightPickTop: {
		x: 13.26,
		y: 2.08,
		className: 'cornerRight'
	},
	// Positions regarding space around PF left and right
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
	pfCenter: {
		x: 7.5,
		y: 5.8,
		className: 'pfCenter'
	},
	pfRightPickBottom: {
		x: 9.95,
		y: 4.8,
		className: 'pfRightPickBottom'
	},
	pfLeftPickBottom: {
		x: 5.05,
		y: 4.8,
		className: 'pfLeftPickBottom'
	},
	pfRightPickLeft: {
		x: 9.16,
		y: 5.2,
		className: 'pfRightPickLeft'
	},
	pfLeftPickRight: {
		x: 5.84,
		y: 5.2,
		className: 'pfLeftPickRight'
	},
	pickRightOnPfLeftPickBottom: {
		x: 5.68,
		y: 3.97,
		className: 'pickRightOnPfLeftPickBottom'
	},
	pickLeftOnPfRightPickBottom: {
		x: 9.32,
		y: 3.97,
		className: 'pickLeftOnPfRightPickBottom'
	},
	// Positions regarding space around C left and right
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
	cLeftBottom: {
		x: 4.95,
		y: 2.25,
		className: 'cLeftBottom'
	},
	cRightBottom: {
		x: 9.95,
		y: 2.25,
		className: 'cRightBottom'
	},
	cLeftBottomPickRight: {
		x: 5.84,
		y: 1.63,
		className: 'cLeftBottomPickRight'
	},
	cRightBottomPickLeft: {
		x: 9.16,
		y: 1.63,
		className: 'cRightBottomPickLeft'
	},
	cLeftTop: {
		x: 4.95,
		y: 3.51,
		className: 'cLeftTop'
	},
	cRightTop: {
		x: 9.95,
		y: 3.51,
		className: 'cRightTop'
	},
	// Positions regarding space around ring top
	underRing: {
		x: 7.5,
		y: 1.545,
		className: 'underRing'
	},
	underRingLeft: {
		x: 6.88,
		y: 2.16,
		className: 'underRingLeft'
	},
	underRingRight: {
		x: 8.12,
		y: 2.16,
		className: 'underRingRight'
	},
	// Positions regarding space around outOfBound top
	touchTopLeft: {
		x: 4.5,
		y: 0,
		className: 'touchTopLeft'
	},
	touchTopRight: {
		x: 10.5,
		y: 0,
		className: 'touchTopRight'
	},
	// Other positions
	farAwayLeft: {
		x: 2.8,
		y: 10,
		className: 'farAwayLeft'
	},
	farAwayRight: {
		x: 12.2,
		y: 10,
		className: 'farAwayRight'
	},
};

function playersPositionsConfigZoomed(zoomSize, playersPosConfig = playersPositions) {

	function zoom(courtZoom, playersPosConfig) {
		return R.map(cur => {
			return {
				x: R.multiply(courtZoom),
				y: R.multiply(courtZoom)
			}
		}, playersPosConfig);
	}

	return R.evolve(zoom(zoomSize, playersPosConfig), playersPosConfig);
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
			'black',
			colorConditions(index),
			R.prop('className', cur),
			context
		);
	}, playersPositions);
}
