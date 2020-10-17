const appRoot = '#app';
const strategyList = [{
  name: 'Attaque de Princeton',
  options: [{
    name: 'Option 1',
    id: 'princetonOffense1',
    combination: {
      defaultPlayersPositions: [
        'sgLeft',
        'sgRight',
        'sfLeft',
        'sfRight',
        'cRight'
      ],
      ballHolder: 'sgRight',
      listOfMoves: [
        [{
          origin: 'ball',
          destination: 'sfRight'
        }, {
          action: 'sprint',
          origin: 'sgRight',
          destination: 'cLeftPickRight'
        }],
        [{
          action: 'regular',
          origin: 'sgRight',
          destination: 'cornerLeft'
        }, {
          action: 'regular',
          origin: 'sgLeft',
          destination: 'pg'
        }, {
          action: 'regular',
          origin: 'sfLeft',
          destination: 'sfLeftPickTopRight'
        }],
        [{
          origin: 'ball',
          destination: 'cRight'
        }, {
          action: 'sprint',
          origin: 'sfRight',
          destination: 'sgRightPickBottomLeft'
        }, {
          action: 'regular',
          origin: 'sgLeft',
          destination: 'sgRightPickLeft'
        }],
        [{
          action: 'sprint',
          origin: 'sgLeft',
          destination: 'underRingTop'
        }, {
          action: 'sprint',
          origin: 'sfRight',
          destination: 'sfRight'
        }, {
          action: 'regular',
          origin: 'sfLeft',
          destination: 'pg'
        }, {
          action: 'regular',
          origin: 'sgRight',
          destination: 'sfLeftPickRight'
        }],
        [{
          origin: 'ball',
          destination: 'underRingTop'
        }, {
          action: 'regular',
          origin: 'sfLeft',
          destination: 'sgRight'
        }, {
          action: 'regular',
          origin: 'sgRight',
          destination: 'sgLeft'
        }],
        [{
          origin: 'ball',
          destination: 'underRing'
        }]
      ]
    }
  }, {
    name: 'Option 2',
    id: 'princetonOffense2',
    combination: {
      defaultPlayersPositions: [
        'sgLeft',
        'sgRight',
        'sfLeft',
        'sfRight',
        'cRight'
      ],
      ballHolder: 'sgRight',
      listOfMoves: [
        [{
          origin: 'ball',
          destination: 'sfRight'
        }, {
          action: 'sprint',
          origin: 'sgRight',
          destination: 'cLeftPickRight'
        }],
        [{
          action: 'regular',
          origin: 'sgRight',
          destination: 'cornerLeft'
        }, {
          action: 'regular',
          origin: 'sgLeft',
          destination: 'pg'
        }, {
          action: 'regular',
          origin: 'sfLeft',
          destination: 'sfLeftPickTopRight'
        }],
        [{
          origin: 'ball',
          destination: 'cRight'
        }, {
          action: 'sprint',
          origin: 'sfRight',
          destination: 'sgRightPickBottomLeft'
        }, {
          action: 'regular',
          origin: 'sgLeft',
          destination: 'sgRightPickLeft'
        }],
        [{
          action: 'sprint',
          origin: 'sgLeft',
          destination: 'sfRight'
        }, {
          action: 'regular',
          origin: 'sfRight',
          destination: 'underRingTop'
        }, {
          action: 'regular',
          origin: 'sfLeft',
          destination: 'sgRightPickLeft'
        }, {
          action: 'regular',
          origin: 'sgRight',
          destination: 'sgLeftPickLeft'
        }],
        [{
          origin: 'ball',
          destination: 'sfRight'
        }, {
          action: 'regular',
          origin: 'sfLeft',
          destination: 'sgRight'
        }, {
          action: 'regular',
          origin: 'sgRight',
          destination: 'sgLeft'
        }, {
          action: 'regular',
          origin: 'sfRight',
          destination: 'sfLeft'
        }]
      ]
    }
  }]
}, {
  name: 'Squish',
  options: [{
    name: 'Option 1',
    id: 'issKreuzbergFlexOption1',
    combination: {
      defaultPlayersPositions: [
        'pg',
        'sfLeft',
        'sfRight',
        'cornerLeft',
        'cornerRight'
      ],
      ballHolder: 'pg',
      listOfMoves: [
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
      ]
    }
  }, {
    name: 'Option 2',
    id: 'issKreuzbergFlexOption2',
    combination: {
      defaultPlayersPositions: [
        'pg',
        'sfLeft',
        'sfRight',
        'cornerLeft',
        'cornerRight'
      ],
      ballHolder: 'pg',
      listOfMoves: [
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
      ]
    }
  }, {
    name: 'Option 3',
    id: 'issKreuzbergFlexOption3',
    combination: {
      defaultPlayersPositions: [
        'pg',
        'sfLeft',
        'sfRight',
        'cornerLeft',
        'cornerRight'
      ],
      ballHolder: 'pg',
      listOfMoves: [
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
      ]
    }
  }]
}, {
  name: 'Transversale',
  options: [{
    name: 'Option 1',
    id: 'issKreuzberg122Option1',
    combination: {
      defaultPlayersPositions: [
        'pg',
        'sfLeft',
        'sfRight',
        'cLeft',
        'cRight'
      ],
      ballHolder: 'pg',
      listOfMoves: [
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
      ]
    }
  }]
}, {
  name: 'Ciseaux',
  options: [{
    name: 'Option 1',
    id: 'strategyStrongSideOffenseOption1',
    combination: {
      defaultPlayersPositions: [
        'sgLeft',
        'sgRight',
        'sfLeft',
        'sfRight',
        'cRight'
      ],
      ballHolder: 'sgRight',
      listOfMoves: [
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
      ]
    }
  }, {
    name: 'Option 2',
    id: 'strategyStrongSideOffenseOption2',
    combination: {
      defaultPlayersPositions: [
        'sgLeft',
        'sgRight',
        'sfLeft',
        'sfRight',
        'cRight'
      ],
      ballHolder: 'sgRight',
      listOfMoves: [
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
      ]
    }
  }, {
    name: 'Option 3',
    id: 'strategyStrongSideOffenseOption3',
    combination: {
      defaultPlayersPositions: [
        'sgLeft',
        'sgRight',
        'sfLeft',
        'sfRight',
        'cRight'
      ],
      ballHolder: 'sgRight',
      listOfMoves: [
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
      ]
    }
  }]
}, {
  name: 'King Kong',
  options: [{
    name: 'Option 1',
    id: 'issKreuzberg212Option1',
    combination: {
      defaultPlayersPositions: [
        'sgLeft',
        'sgRight',
        'sfLeft',
        'sfRight',
        'pfCenter'
      ],
      ballHolder: 'sgLeft',
      listOfMoves: [
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
      ]
    }
  }, {
    name: 'Option 2',
    id: 'issKreuzberg212Option2',
    combination: {
      defaultPlayersPositions: [
        'sgLeft',
        'sgRight',
        'sfLeft',
        'sfRight',
        'pfCenter'
      ],
      ballHolder: 'sgLeft',
      listOfMoves: [
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
      ]
    }
  }, {
    name: 'Option 3',
    id: 'issKreuzberg212Option3',
    combination: {
      defaultPlayersPositions: [
        'sgLeft',
        'sgRight',
        'sfLeft',
        'sfRight',
        'pfCenter'
      ],
      ballHolder: 'sgLeft',
      listOfMoves: [
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
      ]
    }
  }]
}, {
  name: 'Star formation normal',
  options: [{
    name: 'Option 1',
    id: 'strategyNormalStar',
    combination: {
      defaultPlayersPositions: [
        'pg',
        'sfLeft',
        'sfRight',
        'cornerLeft',
        'cornerRight'
      ],
      ballHolder: 'pg',
      listOfMoves: [
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
      ]
    }
  }]
}, {
  name: 'Stratégies pour touches',
  options: [{
    name: 'Triangle à gauche',
    id: 'strategyTouchDowmLeft',
    combination: {
      defaultPlayersPositions: [
        'touchBottomLeft',
        'pfLeft',
        'cRightBottom',
        'cLeftBottom',
        'pfRight'
      ],
      ballHolder: 'touchBottomLeft',
      listOfMoves: [
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
      ]
    }
  }, {
    name: 'Triangle à droite',
    id: 'strategyTouchDowmRight',
    combination: {
      defaultPlayersPositions: [
        'touchBottomRight',
        'pfLeft',
        'cRightBottom',
        'cLeftBottom',
        'pfRight'
      ],
      ballHolder: 'touchBottomRight',
      listOfMoves: [
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
      ]
    }
  }, {
    name: 'Carré à gauche',
    id: 'strategyTouchBoxLeft',
    combination: {
      defaultPlayersPositions: [
        'touchBottomLeft',
        'pfLeft',
        'cRight',
        'cLeft',
        'pfRight'
      ],
      ballHolder: 'touchBottomLeft',
      listOfMoves: [
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
      ]
    }
  }]
}];

function template(strategyList) {
  return `<div id="view-strategies">
            ${strategySelection('#view-strategies', strategyList)}
          </div>`;
}

render(appRoot, template, strategyList);
