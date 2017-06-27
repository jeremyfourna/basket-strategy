const R = require('ramda');
const mapIndexed = require('./utils.js').mapIndexed;
const createCircle = require('./utils.js').createCircle;

exports.playersPositions = playersPositions;
exports.playersPositionsConfigZoomed = playersPositionsConfigZoomed;
exports.generatePlayersPositions = generatePlayersPositions;

// Picks in diagonal x = 0.71 and y = 0.7
function pgPositions() {
	// Positions regarding space around PG
	return {
		pg: {
			x: 7.5,
			y: 8.325,
			className: 'pg'
		},
		pgPickBottom: {
			x: 7.5,
			y: 7.325,
			className: 'pgPickBottom'
		},
		pgPickBottomLeft: {
			x: 6.79,
			y: 7.625,
			className: 'pgPickBottomLeft'
		},
		pgPickBottomRight: {
			x: 8.21,
			y: 7.625,
			className: 'pgPickBottomRight'
		},
		pgPickRight: {
			x: 8.5,
			y: 8.325,
			className: 'pgPickRight'
		},
		pgPickLeft: {
			x: 6.5,
			y: 8.325,
			className: 'pgPickLeft'
		},
		pgPickTop: {
			x: 7.5,
			y: 9.325,
			className: 'pgPickTop'
		},
		pgPickTopLeft: {
			x: 6.79,
			y: 9.025,
			className: 'pgPickTopLeft'
		},
		pgPickTopRight: {
			x: 8.21,
			y: 9.025,
			className: 'pgPickTopRight'
		}
	};
}

function sgPositions() {
	return {
		// Positions regarding space around SG left
		sgLeft: {
			x: 5.05,
			y: 7.84,
			className: 'sgLeft'
		},
		sgLeftPickBottom: {
			x: 5.05,
			y: 6.84,
			className: 'sgLeftPickBottom'
		},
		sgLeftPickBottomLeft: {
			x: 4.34,
			y: 7.14,
			className: 'sgLeftPickBottomLeft'
		},
		sgLeftPickBottomRight: {
			x: 5.76,
			y: 7.14,
			className: 'sgLeftPickBottomRight'
		},
		sgLeftPickTop: {
			x: 5.05,
			y: 8.84,
			className: 'sgLeftPickTop'
		},
		sgLeftPickTopLeft: {
			x: 4.34,
			y: 8.54,
			className: 'sgLeftPickTopLeft'
		},
		sgLeftPickTopRight: {
			x: 5.76,
			y: 8.54,
			className: 'sgLeftPickTopRight'
		},
		sgLeftPickLeft: {
			x: 4.05,
			y: 7.84,
			className: 'sgLeftPickLeft'
		},
		sgLeftPickRight: {
			x: 6.05,
			y: 7.84,
			className: 'sgLeftPickRight'
		},
		// Positions regarding space around SG right
		sgRight: {
			x: 9.95,
			y: 7.84,
			className: 'sgRight'
		},
		sgRightPickBottom: {
			x: 9.95,
			y: 6.84,
			className: 'sgRightPickBottom'
		},
		sgRightPickBottomLeft: {
			x: 9.24,
			y: 7.14,
			className: 'sgRightPickBottomLeft'
		},
		sgRightPickBottomRight: {
			x: 10.66,
			y: 7.14,
			className: 'sgRightPickBottomRight'
		},
		sgRightPickTop: {
			x: 9.95,
			y: 8.84,
			className: 'sgRightPickTop'
		},
		sgRightPickTopLeft: {
			x: 10.66,
			y: 8.54,
			className: 'sgRightPickTopLeft'
		},
		sgRightPickTopRight: {
			x: 9.24,
			y: 8.54,
			className: 'sgRightPickTopRight'
		},
		sgRightPickLeft: {
			x: 8.95,
			y: 7.84,
			className: 'sgRightPickLeft'
		},
		sgRightPickRight: {
			x: 10.95,
			y: 7.84,
			className: 'sgRightPickRight'
		}
	};
}

function sfPositions() {
	return {
		// Positions regarding space around SF left
		sfLeft: {
			x: 1.80,
			y: 5.17,
			className: 'sfLeft'
		},
		sfLeftPickBottom: {
			x: 1.80,
			y: 4.17,
			className: 'sfLeftPickBottom'
		},
		sfLeftPickBottomLeft: {
			x: 1.09,
			y: 4.47,
			className: 'sfLeftPickBottomLeft'
		},
		sfLeftPickBottomRight: {
			x: 2.51,
			y: 4.47,
			className: 'sfLeftPickBottomRight'
		},
		sfLeftPickTop: {
			x: 1.80,
			y: 6.17,
			className: 'sfLeftPickTop'
		},
		sfLeftPickTopLeft: {
			x: 1.09,
			y: 5.87,
			className: 'sfLeftPickTopLeft'
		},
		sfLeftPickTopRight: {
			x: 2.51,
			y: 5.87,
			className: 'sfLeftPickTopRight'
		},
		sfLeftPickLeft: {
			x: 2.80,
			y: 5.17,
			className: 'sfLeftPickLeft'
		},
		sfLeftPickRight: {
			x: 0.80,
			y: 5.17,
			className: 'sfLeftPickRight'
		},
		// Player movement after pick
		sfLeftAfterPickBottomLeft: {
			x: 3.47,
			y: 5.8,
			className: 'sfLeftAfterPickBottomLeft'
		},
		// Positions regarding space around SF right
		sfRight: {
			x: 13.2,
			y: 5.17,
			className: 'sfRight'
		},
		sfRightPickBottom: {
			x: 13.2,
			y: 4.17,
			className: 'sfRightPickBottom'
		},
		sfRightPickBottomLeft: {
			x: 12.49,
			y: 4.47,
			className: 'sfRightPickBottomLeft'
		},
		sfRightPickBottomRight: {
			x: 13.91,
			y: 4.47,
			className: 'sfRightPickBottomRight'
		},
		sfRightPickTop: {
			x: 13.2,
			y: 6.17,
			className: 'sfRightPickTop'
		},
		sfRightPickTopLeft: {
			x: 12.49,
			y: 5.87,
			className: 'sfRightPickTopLeft'
		},
		sfRightPickTopRight: {
			x: 13.91,
			y: 5.87,
			className: 'sfRightPickTopRight'
		},
		sfRightPickRight: {
			x: 14.2,
			y: 5.17,
			className: 'sfRightPickRight'
		},
		sfRightPickLeft: {
			x: 12.2,
			y: 5.17,
			className: 'sfRightPickLeft'
		},
		// Player movement after pick
		sfRightAfterPickBottomLeft: {
			x: 11.53,
			y: 5.8,
			className: 'sfRightAfterPickBottomLeft'
		}
	};
}

function cornerPositions() {
	return {
		// Positions regarding space around corner left
		cornerLeft: {
			x: 0.9,
			y: 1.545,
			className: 'cornerLeft'
		},
		cornerLeftPickTop: {
			x: 0.9,
			y: 2.545,
			className: 'cornerLeftPickTop'
		},
		cornerLeftPickTopRight: {
			x: 1.61,
			y: 2.245,
			className: 'cornerLeftPickTopRight'
		},
		cornerLeftPickBottom: {
			x: 0.9,
			y: 0.545,
			className: 'cornerLeftPickBottom'
		},
		cornerLeftPickBottomRight: {
			x: 1.61,
			y: 0.845,
			className: 'cornerLeftPickBottomRight'
		},
		cornerLeftPickRight: {
			x: 1.9,
			y: 1.545,
			className: 'cornerLeftPickRight'
		},
		// Positions regarding space around corner right
		cornerRight: {
			x: 14.1,
			y: 1.545,
			className: 'cornerRight'
		},
		cornerRightPickTop: {
			x: 14.1,
			y: 2.545,
			className: 'cornerRightPickTop'
		},
		cornerRightPickTopLeft: {
			x: 13.39,
			y: 2.245,
			className: 'cornerRightPickTopLeft'
		},
		cornerRightPickBottom: {
			x: 14.1,
			y: 0.545,
			className: 'cornerRightPickBottom'
		},
		cornerRightPickBottomLeft: {
			x: 13.39,
			y: 0.845,
			className: 'cornerRightPickBottomLeft'
		},
		cornerRightPickLeft: {
			x: 13.1,
			y: 1.545,
			className: 'cornerRightPickLeft'
		},
	};
}

function pfPositions() {
	return {
		// Positions regarding space around PF left
		pfLeft: {
			x: 5.05,
			y: 5.8,
			className: 'pfLeft'
		},
		pfLeftPickBottom: {
			x: 5.05,
			y: 4.8,
			className: 'pfLeftPickBottom'
		},
		pfLeftPickBottomRight: {
			x: 5.76,
			y: 5.1,
			className: 'pfLeftPickBottomRight'
		},
		pfLeftPickBottomLeft: {
			x: 4.34,
			y: 5.1,
			className: 'pfLeftPickBottomLeft'
		},
		pfLeftPickTop: {
			x: 5.05,
			y: 6.8,
			className: 'pfLeftPickTop'
		},
		pfLeftPickTopRight: {
			x: 5.76,
			y: 6.5,
			className: 'pfLeftPickTopRight'
		},
		pfLeftPickTopLeft: {
			x: 4.34,
			y: 6.5,
			className: 'pfLeftPickTopLeft'
		},
		pfLeftPickRight: {
			x: 6.05,
			y: 5.8,
			className: 'pfLeftPickRight'
		},
		pfLeftPickLeft: {
			x: 4.05,
			y: 5.8,
			className: 'pfLeftPickLeft'
		},
		// Player movement after pick
		pfLeftAfterPickBottomRight: {
			x: 9.32,
			y: 3.97,
			className: 'pfLeftAfterPickBottomRight'
		},
		// Positions regarding space around PF right
		pfRight: {
			x: 9.95,
			y: 5.8,
			className: 'pfRight'
		},
		pfRightPickBottom: {
			x: 9.95,
			y: 4.8,
			className: 'pfRightPickBottom'
		},
		pfRightPickBottomLeft: {
			x: 9.24,
			y: 5.1,
			className: 'pfRightPickBottomLeft'
		},
		pfRightPickBottomRight: {
			x: 10.66,
			y: 5.1,
			className: 'pfRightPickBottomRight'
		},
		pfRightPickTop: {
			x: 9.95,
			y: 6.8,
			className: 'pfRightPickTop'
		},
		pfRightPickTopLeft: {
			x: 9.24,
			y: 6.5,
			className: 'pfRightPickTopLeft'
		},
		pfRightPickTopRight: {
			x: 10.66,
			y: 6.5,
			className: 'pfRightPickTopRight'
		},
		pfRightPickLeft: {
			x: 8.95,
			y: 5.8,
			className: 'pfRightPickLeft'
		},
		pfRightPickRight: {
			x: 10.95,
			y: 5.8,
			className: 'pfRightPickRight'
		},
		// Player movement after pick
		pfRightAfterPickBottomLeft: {
			x: 5.68,
			y: 3.97,
			className: 'pfRightAfterPickBottomLeft'
		},
		// Positions regarding space around PF center
		pfCenter: {
			x: 7.5,
			y: 5.8,
			className: 'pfCenter'
		},
		pfCenterPickBottom: {
			x: 7.5,
			y: 6.8,
			className: 'pfCenterPickBottom'
		},
		pfCenterPickBottomLeft: {
			x: 6.79,
			y: 5.1,
			className: 'pfCenterPickBottomLeft'
		},
		pfCenterPickBottomRight: {
			x: 8.21,
			y: 5.1,
			className: 'pfCenterPickBottomRight'
		},
		pfCenterPickTop: {
			x: 7.5,
			y: 4.8,
			className: 'pfCenterPickTop'
		},
		pfCenterPickTopLeft: {
			x: 6.79,
			y: 6.5,
			className: 'pfCenterPickTopLeft'
		},
		pfCenterPickTopRight: {
			x: 8.21,
			y: 6.5,
			className: 'pfCenterPickTopRight'
		},
		pfCenterPickLeft: {
			x: 6.5,
			y: 5.8,
			className: 'pfCenterPickLeft'
		},
		pfCenterPickRight: {
			x: 8.5,
			y: 5.8,
			className: 'pfCenterPickRight'
		},
	};
}

function cPositions() {
	return {
		// Positions regarding space around C left
		cLeft: {
			x: 4.95,
			y: 2.88,
			className: 'cLeft'
		},
		cLeftPickBottom: {
			x: 4.95,
			y: 1.88,
			className: 'cLeftPickBottom'
		},
		cLeftPickBottomLeft: {
			x: 4.24,
			y: 2.18,
			className: 'cLeftPickBottomLeft'
		},
		cLeftPickBottomRight: {
			x: 5.66,
			y: 2.18,
			className: 'cLeftPickBottomRight'
		},
		cLeftPickTop: {
			x: 4.95,
			y: 3.88,
			className: 'cLeftPickTop'
		},
		cLeftPickTopLeft: {
			x: 4.24,
			y: 3.68,
			className: 'cLeftPickTopLeft'
		},
		cLeftPickTopRight: {
			x: 5.66,
			y: 3.68,
			className: 'cLeftPickTopRight'
		},
		cLeftPickLeft: {
			x: 3.95,
			y: 2.88,
			className: 'cLeftPickLeft'
		},
		cLeftPickRight: {
			x: 5.95,
			y: 2.88,
			className: 'cLeftPickRight'
		},
		// Positions regarding space around C bottom
		cLeftBottom: {
			x: 4.95,
			y: 2.25,
			className: 'cLeftBottom'
		},
		cLeftBottomPickRight: {
			x: 5.84,
			y: 1.63,
			className: 'cLeftBottomPickRight'
		},
		cRightBottom: {
			x: 9.95,
			y: 2.25,
			className: 'cRightBottom'
		},
		cRightBottomPickLeft: {
			x: 9.16,
			y: 1.63,
			className: 'cRightBottomPickLeft'
		},
		// Positions regarding space around C left
		cRight: {
			x: 9.95,
			y: 2.88,
			className: 'cRight'
		},
		cRightPickBottom: {
			x: 9.95,
			y: 1.88,
			className: 'cRightBottom'
		},
		cRightPickBottomLeft: {
			x: 9.24,
			y: 2.18,
			className: 'cRightPickBottomLeft'
		},
		cRightPickBottomRight: {
			x: 10.66,
			y: 2.18,
			className: 'cRightPickBottomRight'
		},
		cRightPickTop: {
			x: 9.95,
			y: 3.88,
			className: 'cRightPickTop'
		},
		cRightPickTopLeft: {
			x: 9.24,
			y: 3.58,
			className: 'cRightPickTopLeft'
		},
		cRightPickTopRight: {
			x: 10.66,
			y: 3.58,
			className: 'cRightPickTopRight'
		},
		cRightPickLeft: {
			x: 8.95,
			y: 2.88,
			className: 'cRightLeft'
		},
		cRightPickRight: {
			x: 10.95,
			y: 2.88,
			className: 'cRightPickRight'
		},
	};
}

function underRingPositions() {
	return {
		// Positions regarding space around ring top
		underRing: {
			x: 7.5,
			y: 1.545,
			className: 'underRing'
		},
		underRingBottom: {
			x: 7.5,
			y: 2.545,
			className: 'underRingBottom'
		},
		underRingTop: {
			x: 7.5,
			y: 0.545,
			className: 'underRingTop'
		},
		underRingTopLeft: {
			x: 6.79,
			y: 2.245,
			className: 'underRingTopLeft'
		},
		underRingTopRight: {
			x: 8.21,
			y: 2.245,
			className: 'underRingTopRight'
		},
	};
}

function touchPositions() {
	return {
		// Positions regarding space around outOfBound top
		touchBottomLeft: {
			x: 4.5,
			y: 0,
			className: 'touchBottomLeft'
		},
		touchBottomRight: {
			x: 10.5,
			y: 0,
			className: 'touchBottomRight'
		}
	};
}

function farAwayPositions() {
	return {
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
		}
	};
}

// Basket-Ball players positions for FIBA
function playersPositions() {
	return R.reduce((prev, cur) => {
		return R.mergeDeepLeft(prev, cur);
	}, {}, [
		pgPositions(),
		sgPositions(),
		sfPositions(),
		cornerPositions(),
		pfPositions(),
		cPositions(),
		underRingPositions(),
		touchPositions(),
		farAwayPositions()
	]);
}

function playersPositionsConfigZoomed(zoomSize, playersPosConfig) {

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
		[R.T, R.always('black')]
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
