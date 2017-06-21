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
		// Positions regarding space around SF left and right
		sfLeft: {
			x: 1.80,
			y: 5.17,
			className: 'sfLeft'
		},
		sfRight: {
			x: 13.2,
			y: 5.17,
			className: 'sfRight'
		},
		sfRightPickTop: {
			x: 12.21,
			y: 5.11,
			className: 'sfRightPickTop'
		},
		sfLeftPickTop: {
			x: 2.79,
			y: 5.11,
			className: 'sfLeftPickTop'
		},
		sfRightAfterPickTop: {
			x: 11.53,
			y: 5.8,
			className: 'sfRightAfterPickTop'
		},
		sfLeftAfterPickTop: {
			x: 3.47,
			y: 5.8,
			className: 'sfLeftAfterPickTop'
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
			x: 1.74,
			y: 2.08,
			className: 'cornerLeft'
		},
		// Positions regarding space around corner right
		cornerRight: {
			x: 14.1,
			y: 1.545,
			className: 'cornerRight'
		},
		cornerRightPickTop: {
			x: 13.26,
			y: 2.08,
			className: 'cornerRight'
		}
	};
}

function pfPositions() {
	return {
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
		pfLeftPickBottomRight: {
			x: 5.74,
			y: 5.06,
			className: 'pfLeftPickBottomLeft'
		},
		pfRightPickBottomLeft: {
			x: 9.26,
			y: 5.06,
			className: 'pfRightPickBottomLeft'
		}
	};
}

function cPositions() {
	return { // Positions regarding space around C left and right
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
		}
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
		underRingLeft: {
			x: 6.88,
			y: 2.16,
			className: 'underRingLeft'
		},
		underRingRight: {
			x: 8.12,
			y: 2.16,
			className: 'underRingRight'
		}
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
const playersPositions = R.reduce((prev, cur) => {
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
