const {
  always,
  cond,
  equals
} = require('ramda');
const { strategyCreator } = require('bs-strategy-factory');

function strategyNormalStar(domElement, wishedZoom) {
  // Players starting position
  const defaultPlayersPositions = [
    'pg',
    'sfLeft',
    'sfRight',
    'cornerLeft',
    'cornerRight'
  ];
  // Define ball holder at the beginning of the play
  const ballHolder = 'pg';
  // List of moves
  const listOfMoves = [
    [{
      origin: 'ball',
      destination: 'sfLeft'
    }, {
      action: 'sprint',
      origin: 'pg',
      destination: 'underRing'
    }],
    [{
      action: 'sprint',
      origin: 'sfRight',
      destination: 'pg'
    }, {
      action: 'regular',
      origin: 'cornerRight',
      destination: 'sfRight'
    }, {
      action: 'regular',
      origin: 'pg',
      destination: 'cornerRight'
    }],
    [{
      origin: 'ball',
      destination: 'pg'
    }, {
      action: 'sprint',
      origin: 'sfLeft',
      destination: 'underRing'
    }],
    [{
      action: 'sprint',
      origin: 'cornerLeft',
      destination: 'sfLeft'
    }, {
      action: 'regular',
      origin: 'sfLeft',
      destination: 'cornerLeft'
    }],
    [{
      origin: 'ball',
      destination: 'sfRight'
    }, {
      action: 'sprint',
      origin: 'sfRight',
      destination: 'underRing'
    }],
    [{
      action: 'sprint',
      origin: 'cornerLeft',
      destination: 'pg'
    }, {
      action: 'regular',
      origin: 'sfLeft',
      destination: 'sfLeft'
    }, {
      action: 'regular',
      origin: 'sfRight',
      destination: 'cornerLeft'
    }],
    [{
      origin: 'ball',
      destination: 'cornerRight'
    }, {
      action: 'sprint',
      origin: 'cornerRight',
      destination: 'underRing'
    }],
    [{
      action: 'sprint',
      origin: 'cornerLeft',
      destination: 'sfRight'
    }, {
      action: 'regular',
      origin: 'sfLeft',
      destination: 'pg'
    }, {
      action: 'regular',
      origin: 'sfRight',
      destination: 'sfLeft'
    }, {
      action: 'regular',
      origin: 'cornerRight',
      destination: 'cornerLeft'
    }],
    [{
      origin: 'ball',
      destination: 'sfRight'
    }, {
      action: 'sprint',
      origin: 'pg',
      destination: 'underRing'
    }],
    [{
      action: 'sprint',
      origin: 'pg',
      destination: 'cornerRight'
    }],
    [{
      origin: 'ball',
      destination: 'pg'
    }, {
      action: 'sprint',
      origin: 'cornerLeft',
      destination: 'underRing'
    }],
    [{
      action: 'sprint',
      origin: 'pg',
      destination: 'sfRight'
    }, {
      action: 'regular',
      origin: 'cornerLeft',
      destination: 'cornerRight'
    }]
  ];
  // Display the stategy
  strategyCreator(domElement, wishedZoom, defaultPlayersPositions, ballHolder, listOfMoves);
}

function strategyLowStar(domElement, wishedZoom) {
  // Players starting position
  const defaultPlayersPositions = [
    'pg',
    'sfLeft',
    'sfRight',
    'cLeft',
    'cRight'
  ];
  // Define ball holder at the beginning of the play
  const ballHolder = 'pg';
  // List of moves
  const listOfMoves = [
    [{
      action: 'sprint',
      origin: 'sfLeft',
      destination: 'cLeftBottom'
    }, {
      action: 'sprint',
      origin: 'sfRight',
      destination: 'cRightBottom'
    }],
    [{
      action: 'sprint',
      origin: 'sfLeft',
      destination: 'cRightBottom'
    }, {
      action: 'sprint',
      origin: 'sfRight',
      destination: 'cLeftBottom'
    }],
    [{
      action: 'sprint',
      origin: 'sfLeft',
      destination: 'sfRight'
    }, {
      action: 'sprint',
      origin: 'sfRight',
      destination: 'sfLeft'
    }],
    [{
      origin: 'ball',
      destination: 'sfLeft'
    }, {
      action: 'sprint',
      origin: 'pg',
      destination: 'sfRightPickLeft'
    }, {
      action: 'sprint',
      origin: 'cRight',
      destination: 'pfCenter'
    }],
    [{
      action: 'sprint',
      origin: 'sfLeft',
      destination: 'pg'
    }],
    [{
      origin: 'ball',
      destination: 'pg'
    }, {
      action: 'sprint',
      origin: 'pg',
      destination: 'sfRight'
    }],
    [{
      origin: 'ball',
      destination: 'sfRight'
    }, {
      action: 'sprint',
      origin: 'cRight',
      destination: 'sfRightPickLeft'
    }],
    [{
      action: 'sprint',
      origin: 'ball',
      destination: 'sfRightAfterPickBottomLeft'
    }, {
      action: 'sprint',
      origin: 'pg',
      destination: 'sfRightAfterPickBottomLeft'
    }],
    [{
      action: 'sprint',
      origin: 'sfLeft',
      destination: 'sgLeft'
    }, {
      action: 'regular',
      origin: 'sfRight',
      destination: 'cornerLeft'
    }, {
      action: 'sprint',
      origin: 'ball',
      destination: 'underRing'
    }, {
      action: 'sprint',
      origin: 'pg',
      destination: 'underRing'
    }, {
      action: 'sprint',
      origin: 'cRight',
      destination: 'cornerRight'
    }]
  ];
  // Display the stategy
  strategyCreator(domElement, wishedZoom, defaultPlayersPositions, ballHolder, listOfMoves);
}

function strategyTouchDowmLeft(domElement, wishedZoom) {
  // Players starting position
  const defaultPlayersPositions = [
    'touchBottomLeft',
    'pfLeft',
    'cRightBottom',
    'cLeftBottom',
    'pfRight'
  ];
  // Define ball holder at the beginning of the play
  const ballHolder = 'touchBottomLeft';
  // List of moves
  const listOfMoves = [
    [{
      action: 'sprint',
      origin: 'cLeftBottom',
      destination: 'pfLeftPickBottom'
    }, {
      action: 'sprint',
      origin: 'cRightBottom',
      destination: 'pfRightAfterPickBottomLeft'
    }],
    [{
      action: 'sprint',
      origin: 'cRightBottom',
      destination: 'cLeftBottom'
    }, {
      action: 'sprint',
      origin: 'pfLeft',
      destination: 'cornerLeft'
    }, {
      action: 'sprint',
      origin: 'pfRight',
      destination: 'farAwayLeft'
    }, {
      action: 'sprint',
      origin: 'cLeftBottom',
      destination: 'underRingTopRight'
    }],
    [{
      origin: 'ball',
      destination: 'underRingTopRight'
    }]
  ];
  // Display the stategy
  strategyCreator(domElement, wishedZoom, defaultPlayersPositions, ballHolder, listOfMoves);
}

function strategyTouchDowmRight(domElement, wishedZoom) {
  // Players starting position
  const defaultPlayersPositions = [
    'touchBottomRight',
    'pfLeft',
    'cRightBottom',
    'cLeftBottom',
    'pfRight'
  ];
  // Define ball holder at the beginning of the play
  const ballHolder = 'touchBottomRight';
  // List of moves
  const listOfMoves = [
    [{
      action: 'sprint',
      origin: 'cLeftBottom',
      destination: 'pfLeftAfterPickBottomRight'
    }, {
      action: 'sprint',
      origin: 'cRightBottom',
      destination: 'pfRightPickBottom'
    }],
    [{
      action: 'sprint',
      origin: 'cLeftBottom',
      destination: 'cRightBottom'
    }, {
      action: 'sprint',
      origin: 'pfRight',
      destination: 'cornerRight'
    }, {
      action: 'sprint',
      origin: 'pfLeft',
      destination: 'farAwayRight'
    }, {
      action: 'sprint',
      origin: 'cRightBottom',
      destination: 'underRingTopLeft'
    }],
    [{
      origin: 'ball',
      destination: 'underRingTopLeft'
    }]

  ];
  // Display the stategy
  strategyCreator(domElement, wishedZoom, defaultPlayersPositions, ballHolder, listOfMoves);
}

function strategyTouchBoxLeft(domElement, wishedZoom) {
  // Players starting position
  const defaultPlayersPositions = [
    'touchBottomLeft',
    'pfLeft',
    'cRight',
    'cLeft',
    'pfRight'
  ];
  // Define ball holder at the beginning of the play
  const ballHolder = 'touchBottomLeft';
  // List of moves
  const listOfMoves = [
    [{
      action: 'sprint',
      origin: 'cLeft',
      destination: 'underRingTopRight'
    }, {
      action: 'sprint',
      origin: 'pfLeft',
      destination: 'pfRightPickBottomLeft'
    }],
    [{
      action: 'sprint',
      origin: 'cRight',
      destination: 'cornerLeft'
    }, {
      action: 'sprint',
      origin: 'pfRight',
      destination: 'sfLeft'
    }],
    [{
      action: 'sprint',
      origin: 'cLeft',
      destination: 'underRingTopLeft'
    }, {
      action: 'sprint',
      origin: 'pfLeft',
      destination: 'underRingTopRight'
    }],
    [{
      origin: 'ball',
      destination: 'underRingTopRight'
    }]
  ];
  // Display the stategy
  strategyCreator(domElement, wishedZoom, defaultPlayersPositions, ballHolder, listOfMoves);
}

function strategyStrongSideOffenseOption1(domElement, wishedZoom) {
  // Players starting position
  const defaultPlayersPositions = [
    'sgLeft',
    'sgRight',
    'sfLeft',
    'sfRight',
    'cRight'
  ];
  // Define ball holder at the beginning of the play
  const ballHolder = 'sgRight';
  // List of moves
  const listOfMoves = [
    [{
      origin: 'ball',
      destination: 'sfRight'
    }, {
      action: 'sprint',
      origin: 'sgRight',
      destination: 'sfRightPickRight'
    }, {
      action: 'regular',
      origin: 'sgLeft',
      destination: 'pg'
    }, {
      action: 'regular',
      origin: 'sfLeft',
      destination: 'cLeftPickTopLeft'
    }],
    [{
      action: 'sprint',
      origin: 'sgRight',
      destination: 'cornerRight'
    }],
    [{
      origin: 'ball',
      destination: 'cRight'
    }, {
      action: 'sprint',
      origin: 'sfRight',
      destination: 'sfRightPickLeft'
    }, {
      action: 'sprint',
      origin: 'sgRight',
      destination: 'cornerRightPickLeft'
    }],
    [{
      action: 'sprint',
      origin: 'sfRight',
      destination: 'cRightPickBottom'
    }, {
      action: 'sprint',
      origin: 'sgRight',
      destination: 'pfRight'
    }, {
      action: 'sprint',
      origin: 'sgLeft',
      destination: 'sgLeft'
    }, {
      action: 'sprint',
      origin: 'sfLeft',
      destination: 'cLeftPickBottomLeft'
    }],
    [{
      origin: 'ball',
      destination: 'cRightPickBottom'
    }],
    [{
      origin: 'ball',
      destination: 'underRing'
    }]
  ];
  // Display the stategy
  strategyCreator(domElement, wishedZoom, defaultPlayersPositions, ballHolder, listOfMoves);
}

function strategyStrongSideOffenseOption2(domElement, wishedZoom) {
  // Players starting position
  const defaultPlayersPositions = [
    'sgLeft',
    'sgRight',
    'sfLeft',
    'sfRight',
    'cRight'
  ];
  // Define ball holder at the beginning of the play
  const ballHolder = 'sgRight';
  // List of moves
  const listOfMoves = [
    [{
      origin: 'ball',
      destination: 'sfRight'
    }, {
      action: 'sprint',
      origin: 'sgRight',
      destination: 'sfRightPickRight'
    }, {
      action: 'regular',
      origin: 'sgLeft',
      destination: 'pg'
    }, {
      action: 'regular',
      origin: 'sfLeft',
      destination: 'cLeftPickTopLeft'
    }],
    [{
      action: 'sprint',
      origin: 'sgRight',
      destination: 'cornerRight'
    }],
    [{
      origin: 'ball',
      destination: 'cRight'
    }, {
      action: 'sprint',
      origin: 'sfRight',
      destination: 'sfRightPickLeft'
    }, {
      action: 'sprint',
      origin: 'sgRight',
      destination: 'cornerRightPickLeft'
    }],
    [{
      action: 'sprint',
      origin: 'sfRight',
      destination: 'cRightPickBottom'
    }, {
      action: 'sprint',
      origin: 'sgRight',
      destination: 'pfRight'
    }, {
      action: 'sprint',
      origin: 'sgLeft',
      destination: 'sgLeft'
    }, {
      action: 'sprint',
      origin: 'sfLeft',
      destination: 'cLeftPickBottomLeft'
    }],
    [{
      origin: 'ball',
      destination: 'pfRight'
    }],
    [{
      origin: 'ball',
      destination: 'underRing'
    }]
  ];
  // Display the stategy
  strategyCreator(domElement, wishedZoom, defaultPlayersPositions, ballHolder, listOfMoves);
}

function strategyStrongSideOffenseOption3(domElement, wishedZoom) {
  // Players starting position
  const defaultPlayersPositions = [
    'sgLeft',
    'sgRight',
    'sfLeft',
    'sfRight',
    'cRight'
  ];
  // Define ball holder at the beginning of the play
  const ballHolder = 'sgRight';
  // List of moves
  const listOfMoves = [
    [{
      origin: 'ball',
      destination: 'sfRight'
    }, {
      action: 'sprint',
      origin: 'sgRight',
      destination: 'sfRightPickRight'
    }, {
      action: 'regular',
      origin: 'sgLeft',
      destination: 'pg'
    }, {
      action: 'regular',
      origin: 'sfLeft',
      destination: 'cLeftPickTopLeft'
    }],
    [{
      action: 'sprint',
      origin: 'sgRight',
      destination: 'cornerRight'
    }],
    [{
      origin: 'ball',
      destination: 'cornerRight'
    }],
    [{
      origin: 'ball',
      destination: 'cRight'
    }, {
      action: 'sprint',
      origin: 'sfRight',
      destination: 'sfRightPickLeft'
    }, {
      action: 'sprint',
      origin: 'sgRight',
      destination: 'cornerRightPickLeft'
    }],
    [{
      action: 'regular',
      origin: 'sfRight',
      destination: 'cRightPickBottom'
    }, {
      action: 'sprint',
      origin: 'sgRight',
      destination: 'cRightPickTop'
    }, {
      action: 'sprint',
      origin: 'sgLeft',
      destination: 'sgLeft'
    }, {
      action: 'sprint',
      origin: 'sfLeft',
      destination: 'cLeftPickBottomLeft'
    }],
    [{
      origin: 'ball',
      destination: 'cRightPickTop'
    }],
    [{
      origin: 'ball',
      destination: 'underRing'
    }]
  ];
  // Display the stategy
  strategyCreator(domElement, wishedZoom, defaultPlayersPositions, ballHolder, listOfMoves);
}

function strategyStrongSideOffenseOption4(domElement, wishedZoom) {
  // Players starting position
  const defaultPlayersPositions = [
    'sgLeft',
    'sgRight',
    'sfLeft',
    'sfRight',
    'cRight'
  ];
  // Define ball holder at the beginning of the play
  const ballHolder = 'sgRight';
  // List of moves
  const listOfMoves = [
    [{
      origin: 'ball',
      destination: 'sfRight'
    }, {
      action: 'sprint',
      origin: 'sgRight',
      destination: 'sfRightPickRight'
    }, {
      action: 'regular',
      origin: 'sgLeft',
      destination: 'pg'
    }, {
      action: 'regular',
      origin: 'sfLeft',
      destination: 'cLeftPickTopLeft'
    }],
    [{
      action: 'sprint',
      origin: 'sgRight',
      destination: 'cornerRight'
    }]
  ];
  // Display the stategy
  strategyCreator(domElement, wishedZoom, defaultPlayersPositions, ballHolder, listOfMoves);
}

function issKreuzbergFlexOption1(domElement, wishedZoom) {
  // Players starting position
  const defaultPlayersPositions = [
    'pg',
    'sfLeft',
    'sfRight',
    'cornerLeft',
    'cornerRight'
  ];
  // Define ball holder at the beginning of the play
  const ballHolder = 'pg';
  // List of moves
  const listOfMoves = [
    [{
      action: 'regular',
      origin: 'sfLeft',
      destination: 'cornerLeftPickTopRight'
    }, {
      action: 'regular',
      origin: 'sfRight',
      destination: 'cornerRightPickTopLeft'
    }],
    [{
      action: 'sprint',
      origin: 'cornerLeft',
      destination: 'sfLeft'
    }, {
      action: 'sprint',
      origin: 'cornerRight',
      destination: 'sfRight'
    }, {
      action: 'regular',
      origin: 'sfLeft',
      destination: 'cLeftPickRight'
    }, {
      action: 'regular',
      origin: 'sfRight',
      destination: 'cRightPickLeft'
    }],
    [{
      origin: 'ball',
      destination: 'sfLeft'
    }, {
      action: 'sprint',
      origin: 'sfLeft',
      destination: 'cornerRight'
    }, {
      action: 'sprint',
      origin: 'sfRight',
      destination: 'cornerLeft'
    }],
    [{
      action: 'sprint',
      origin: 'cornerRight',
      destination: 'cornerRightPickTopLeft'
    }, {
      action: 'sprint',
      origin: 'pg',
      destination: 'cRightPickRight'
    }],
    [{
      action: 'sprint',
      origin: 'sfLeft',
      destination: 'pg'
    }, {
      action: 'regular',
      origin: 'cornerRight',
      destination: 'cRightPickTop'
    }],
    [{
      action: 'sprint',
      origin: 'cornerRight',
      destination: 'underRingTopLeft'
    }, {
      action: 'regular',
      origin: 'pg',
      destination: 'pfCenterPickBottom'
    }],
    [{
      origin: 'ball',
      destination: 'underRingTopLeft'
    }],
    [{
      origin: 'ball',
      destination: 'underRing'
    }]
  ];
  // Display the stategy
  strategyCreator(domElement, wishedZoom, defaultPlayersPositions, ballHolder, listOfMoves);
}

function issKreuzbergFlexOption2(domElement, wishedZoom) {
  // Players starting position
  const defaultPlayersPositions = [
    'pg',
    'sfLeft',
    'sfRight',
    'cornerLeft',
    'cornerRight'
  ];
  // Define ball holder at the beginning of the play
  const ballHolder = 'pg';
  // List of moves
  const listOfMoves = [
    [{
      action: 'regular',
      origin: 'cornerLeft',
      destination: 'sfLeftPickBottomRight'
    }, {
      action: 'regular',
      origin: 'cornerRight',
      destination: 'sfRightPickBottomLeft'
    }],
    [{
      action: 'sprint',
      origin: 'sfLeft',
      destination: 'sfLeftAfterPickBottomRight'
    }, {
      action: 'sprint',
      origin: 'sfRight',
      destination: 'sfRightAfterPickBottomLeft'
    }],
    [{
      action: 'sprint',
      origin: 'sfLeft',
      destination: 'cLeftPickRight'
    }, {
      action: 'sprint',
      origin: 'sfRight',
      destination: 'cRightPickLeft'
    }, {
      action: 'regular',
      origin: 'cornerLeft',
      destination: 'sfLeft'
    }, {
      action: 'regular',
      origin: 'cornerRight',
      destination: 'sfRight'
    }],
    [{
      origin: 'ball',
      destination: 'sfLeft'
    }, {
      action: 'sprint',
      origin: 'sfLeft',
      destination: 'cornerRight'
    }, {
      action: 'sprint',
      origin: 'sfRight',
      destination: 'cornerLeft'
    }],
    [{
      action: 'sprint',
      origin: 'cornerRight',
      destination: 'cornerRightPickTopLeft'
    }, {
      action: 'sprint',
      origin: 'pg',
      destination: 'cRightPickRight'
    }],
    [{
      action: 'sprint',
      origin: 'sfLeft',
      destination: 'pg'
    }, {
      action: 'regular',
      origin: 'cornerRight',
      destination: 'cRightPickTop'
    }],
    [{
      action: 'sprint',
      origin: 'cornerRight',
      destination: 'underRingTopLeft'
    }, {
      action: 'regular',
      origin: 'pg',
      destination: 'pfCenterPickBottom'
    }],
    [{
      origin: 'ball',
      destination: 'underRingTopLeft'
    }],
    [{
      origin: 'ball',
      destination: 'underRing'
    }]
  ];
  // Display the stategy
  strategyCreator(domElement, wishedZoom, defaultPlayersPositions, ballHolder, listOfMoves);
}

function issKreuzbergFlexOption3(domElement, wishedZoom) {
  // Players starting position
  const defaultPlayersPositions = [
    'pg',
    'sfLeft',
    'sfRight',
    'cornerLeft',
    'cornerRight'
  ];
  // Define ball holder at the beginning of the play
  const ballHolder = 'pg';
  // List of moves
  const listOfMoves = [
    [{
      action: 'regular',
      origin: 'sfLeft',
      destination: 'cornerLeftPickTopRight'
    }, {
      action: 'regular',
      origin: 'sfRight',
      destination: 'cornerRightPickTopLeft'
    }],
    [{
      action: 'sprint',
      origin: 'cornerLeft',
      destination: 'sfLeft'
    }, {
      action: 'sprint',
      origin: 'cornerRight',
      destination: 'sfRight'
    }, {
      action: 'regular',
      origin: 'sfLeft',
      destination: 'cLeftPickRight'
    }, {
      action: 'regular',
      origin: 'sfRight',
      destination: 'cRightPickLeft'
    }],
    [{
      origin: 'ball',
      destination: 'sfLeft'
    }, {
      action: 'sprint',
      origin: 'sfLeft',
      destination: 'cornerRight'
    }, {
      action: 'sprint',
      origin: 'sfRight',
      destination: 'cornerLeft'
    }],
    [{
      action: 'sprint',
      origin: 'cornerRight',
      destination: 'cornerRightPickTopLeft'
    }, {
      action: 'sprint',
      origin: 'pg',
      destination: 'underRingTopLeft'
    }],
    [{
      action: 'sprint',
      origin: 'sfLeft',
      destination: 'pg'
    }, {
      action: 'regular',
      origin: 'cornerRight',
      destination: 'cRightPickBottom'
    }, {
      action: 'sprint',
      origin: 'pg',
      destination: 'cRightPickRight'
    }],
    [{
      action: 'sprint',
      origin: 'cornerRight',
      destination: 'underRingTopLeft'
    }, {
      action: 'regular',
      origin: 'pg',
      destination: 'pfCenterPickBottom'
    }],
    [{
      origin: 'ball',
      destination: 'underRingTopLeft'
    }],
    [{
      origin: 'ball',
      destination: 'underRing'
    }]
  ];
  // Display the stategy
  strategyCreator(domElement, wishedZoom, defaultPlayersPositions, ballHolder, listOfMoves);
}

function issKreuzberg212Option1(domElement, wishedZoom) {
  // Players starting position
  const defaultPlayersPositions = [
    'sgLeft',
    'sgRight',
    'sfLeft',
    'sfRight',
    'pfCenter'
  ];
  // Define ball holder at the beginning of the play
  const ballHolder = 'sgLeft';
  // List of moves
  const listOfMoves = [
    [{
      origin: 'ball',
      destination: 'pfCenter'
    }, {
      action: 'sprint',
      origin: 'sgLeft',
      destination: 'pfCenterPickRight'
    }, {
      action: 'sprint',
      origin: 'sgRight',
      destination: 'pfCenterPickLeft'
    }],
    [{
      action: 'sprint',
      origin: 'sgLeft',
      destination: 'cRightPickLeft'
    }, {
      action: 'sprint',
      origin: 'sgRight',
      destination: 'cLeftPickRight'
    }, {
      action: 'regular',
      origin: 'sfLeft',
      destination: 'sgLeft'
    }, {
      action: 'regular',
      origin: 'sfRight',
      destination: 'sgRight'
    }],
    [{
      action: 'sprint',
      origin: 'sgLeft',
      destination: 'sfRight'
    }, {
      action: 'sprint',
      origin: 'sgRight',
      destination: 'sfLeft'
    }, {
      origin: 'ball',
      destination: 'sgRight'
    }],
    [{
      action: 'sprint',
      origin: 'sgRight',
      destination: 'cLeftPickLeft'
    }, {
      action: 'regular',
      origin: 'sfLeft',
      destination: 'cLeftPickTop'
    }, {
      action: 'regular',
      origin: 'pfCenter',
      destination: 'cLeftPickRight'
    }],
    [{
      action: 'sprint',
      origin: 'sgRight',
      destination: 'pfLeftPickTop'
    }, {
      action: 'sprint',
      origin: 'sfLeft',
      destination: 'cLeftPickBottomRight'
    }],
    [{
      action: 'sprint',
      origin: 'sfLeft',
      destination: 'underRingTopRight'
    }, {
      action: 'regular',
      origin: 'pfCenter',
      destination: 'pfCenterPickBottom'
    }],
    [{
      origin: 'ball',
      destination: 'underRingTopRight'
    }],
    [{
      origin: 'ball',
      destination: 'underRing'
    }]
  ];
  // Display the stategy
  strategyCreator(domElement, wishedZoom, defaultPlayersPositions, ballHolder, listOfMoves);
}

function issKreuzberg212Option2(domElement, wishedZoom) {
  // Players starting position
  const defaultPlayersPositions = [
    'sgLeft',
    'sgRight',
    'sfLeft',
    'sfRight',
    'pfCenter'
  ];
  // Define ball holder at the beginning of the play
  const ballHolder = 'sgLeft';
  // List of moves
  const listOfMoves = [
    [{
      origin: 'ball',
      destination: 'sgRight'
    }, {
      action: 'sprint',
      origin: 'sgLeft',
      destination: 'pfCenterPickRight'
    }],
    [{
      action: 'sprint',
      origin: 'sgLeft',
      destination: 'cRightPickLeft'
    }, {
      action: 'regular',
      origin: 'pfCenter',
      destination: 'cLeftPickTopRight'
    }],
    [{
      action: 'sprint',
      origin: 'sfLeft',
      destination: 'cLeftPickTop'
    }, {
      action: 'regular',
      origin: 'sgLeft',
      destination: 'cLeft'
    }],
    [{
      action: 'sprint',
      origin: 'sgLeft',
      destination: 'pfLeftPickTop'
    }, {
      action: 'regular',
      origin: 'sfLeft',
      destination: 'cLeftPickRight'
    }],
    [{
      action: 'sprint',
      origin: 'sfLeft',
      destination: 'underRingTopRight'
    }, {
      action: 'regular',
      origin: 'pfCenter',
      destination: 'pfCenter'
    }, {
      action: 'regular',
      origin: 'sgLeft',
      destination: 'sgLeft'
    }],
    [{
      origin: 'ball',
      destination: 'underRingTopRight'
    }],
    [{
      origin: 'ball',
      destination: 'underRing'
    }]
  ];
  // Display the stategy
  strategyCreator(domElement, wishedZoom, defaultPlayersPositions, ballHolder, listOfMoves);
}

function issKreuzberg212Option3(domElement, wishedZoom) {
  // Players starting position
  const defaultPlayersPositions = [
    'sgLeft',
    'sgRight',
    'sfLeft',
    'sfRight',
    'pfCenter'
  ];
  // Define ball holder at the beginning of the play
  const ballHolder = 'sgLeft';
  // List of moves
  const listOfMoves = [
    [{
      origin: 'ball',
      destination: 'pfCenter'
    }, {
      action: 'sprint',
      origin: 'sgLeft',
      destination: 'pfCenterPickRight'
    }, {
      action: 'sprint',
      origin: 'sgRight',
      destination: 'pfCenterPickLeft'
    }],
    [{
      action: 'sprint',
      origin: 'sgLeft',
      destination: 'cRightPickLeft'
    }, {
      action: 'sprint',
      origin: 'sgRight',
      destination: 'cLeftPickRight'
    }, {
      action: 'regular',
      origin: 'sfLeft',
      destination: 'sgLeft'
    }, {
      action: 'regular',
      origin: 'sfRight',
      destination: 'sgRight'
    }],
    [{
      action: 'sprint',
      origin: 'sgLeft',
      destination: 'sfRight'
    }, {
      action: 'sprint',
      origin: 'sgRight',
      destination: 'sfLeft'
    }],
    [{
      origin: 'ball',
      destination: 'sfRight'
    }, {
      action: 'sprint',
      origin: 'pfCenter',
      destination: 'sgRightPickBottomLeft'
    }],
    [{
      action: 'sprint',
      origin: 'sfRight',
      destination: 'sgRightAfterPickBottomLeft'
    }, {
      action: 'regular',
      origin: 'sgRight',
      destination: 'cLeftPickLeft'
    }],
    [{
      action: 'sprint',
      origin: 'sfRight',
      destination: 'underRingTopRight'
    }, {
      action: 'sprint',
      origin: 'pfCenter',
      destination: 'sfRightPickLeft'
    }, {
      action: 'regular',
      origin: 'sfLeft',
      destination: 'pg'
    }, {
      action: 'regular',
      origin: 'sgRight',
      destination: 'cLeftPickTop'
    }],
    [{
      action: 'regular',
      origin: 'sfRight',
      destination: 'sfLeft'
    }, {
      action: 'sprint',
      origin: 'sgLeft',
      destination: 'sfRightPickTopLeft'
    }, {
      action: 'sprint',
      origin: 'ball',
      destination: 'sfRightPickTopLeft'
    }],
    [{
      action: 'sprint',
      origin: 'sgLeft',
      destination: 'underRingTop'
    }, {
      action: 'sprint',
      origin: 'pfCenter',
      destination: 'cRightPickBottom'
    }, {
      action: 'sprint',
      origin: 'ball',
      destination: 'underRingTop'
    }, {
      action: 'regular',
      origin: 'sfRight',
      destination: 'cornerLeft'
    }],
    [{
      origin: 'ball',
      destination: 'underRing'
    }]
  ];
  // Display the stategy
  strategyCreator(domElement, wishedZoom, defaultPlayersPositions, ballHolder, listOfMoves);
}

function issKreuzberg122Option1(domElement, wishedZoom) {
  // Players starting position
  const defaultPlayersPositions = [
    'pg',
    'sfLeft',
    'sfRight',
    'cLeft',
    'cRight'
  ];
  // Define ball holder at the beginning of the play
  const ballHolder = 'pg';
  // List of moves
  const listOfMoves = [
    [{
      action: 'sprint',
      origin: 'sfLeft',
      destination: 'cLeftPickBottom'
    }, {
      action: 'sprint',
      origin: 'sfRight',
      destination: 'cRightPickBottom'
    }],
    [{
      action: 'sprint',
      origin: 'sfLeft',
      destination: 'sfRight'
    }, {
      action: 'sprint',
      origin: 'sfRight',
      destination: 'sfLeft'
    }],
    [{
      origin: 'ball',
      destination: 'sfLeft'
    }, {
      action: 'sprint',
      origin: 'cRight',
      destination: 'pfCenterPickLeft'
    }, {
      action: 'regular',
      origin: 'pg',
      destination: 'sfRightPickLeft'
    }, {
      action: 'regular',
      origin: 'cLeft',
      destination: 'cLeftPickBottom'
    }],
    [{
      action: 'sprint',
      origin: 'sfLeft',
      destination: 'pg'
    }, {
      action: 'regular',
      origin: 'pg',
      destination: 'sfRight'
    }],
    [{
      origin: 'ball',
      destination: 'pg'
    }, {
      action: 'regular',
      origin: 'cRight',
      destination: 'pfCenterPickRight'
    }],
    [{
      origin: 'ball',
      destination: 'sfRight'
    }, {
      action: 'sprint',
      origin: 'cRight',
      destination: 'sfRightPickLeft'
    }],
    [{
      action: 'sprint',
      origin: 'pg',
      destination: 'sfRightPickTopLeft'
    }, {
      action: 'sprint',
      origin: 'ball',
      destination: 'sfRightPickTopLeft'
    }],
    [{
      action: 'sprint',
      origin: 'pg',
      destination: 'pfCenterPickBottom'
    }, {
      action: 'sprint',
      origin: 'cRight',
      destination: 'cRightPickBottom'
    }, {
      action: 'sprint',
      origin: 'ball',
      destination: 'pfCenterPickBottom'
    }],
    [{
      origin: 'ball',
      destination: 'underRing'
    }]
  ];
  // Display the stategy
  strategyCreator(domElement, wishedZoom, defaultPlayersPositions, ballHolder, listOfMoves);
}

function strategySelector(domElement, wishedZoom, strategyName) {
  // Evaluate the strategyName to launch function
  const condition = cond([
    [equals('issKreuzbergFlexOption1'), always(issKreuzbergFlexOption1)],
    [equals('issKreuzbergFlexOption2'), always(issKreuzbergFlexOption2)],
    [equals('issKreuzbergFlexOption3'), always(issKreuzbergFlexOption3)],
    [equals('issKreuzberg212Option1'), always(issKreuzberg212Option1)],
    [equals('issKreuzberg212Option2'), always(issKreuzberg212Option2)],
    [equals('issKreuzberg212Option3'), always(issKreuzberg212Option3)],
    [equals('issKreuzberg122Option1'), always(issKreuzberg122Option1)],
    [equals('strategyStrongSideOffenseOption1'), always(strategyStrongSideOffenseOption1)],
    [equals('strategyStrongSideOffenseOption2'), always(strategyStrongSideOffenseOption2)],
    [equals('strategyStrongSideOffenseOption3'), always(strategyStrongSideOffenseOption3)],
    [equals('strategyStrongSideOffenseOption4'), always(strategyStrongSideOffenseOption4)],
    [equals('strategyNormalStar'), always(strategyNormalStar)],
    [equals('strategyLowStar'), always(strategyLowStar)],
    [equals('strategyTouchDowmLeft'), always(strategyTouchDowmLeft)],
    [equals('strategyTouchDowmRight'), always(strategyTouchDowmRight)],
    [equals('strategyTouchBoxLeft'), always(strategyTouchBoxLeft)]
  ]);

  return condition(strategyName)(domElement, wishedZoom);
}

exports.strategySelector = strategySelector;
