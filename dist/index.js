const appRoot = '#app';
const strategyList = [{
    name: 'Squish',
    options: [{
      name: 'Option 1',
      id: 'issKreuzbergFlexOption1'
    }, {
      name: 'Option 2',
      id: 'issKreuzbergFlexOption2'
    }, {
      name: 'Option 3',
      id: 'issKreuzbergFlexOption3'
    }]
  }, {
    name: 'Transversale',
    options: [{
      name: 'Option 1',
      id: 'issKreuzberg122Option1'
    }]
  }, {
    name: 'Ciseaux',
    options: [{
      name: 'Option 1',
      id: 'strategyStrongSideOffenseOption1'
    }, {
      name: 'Option 2',
      id: 'strategyStrongSideOffenseOption2'
    }, {
      name: 'Option 3',
      id: 'strategyStrongSideOffenseOption3'
    }]
  }, {
    name: 'King Kong',
    options: [{
      name: 'Option 1',
      id: 'issKreuzberg212Option1'
    }, {
      name: 'Option 2',
      id: 'issKreuzberg212Option2'
    }, {
      name: 'Option 3',
      id: 'issKreuzberg212Option3'
    }]
  }, {
    name: 'Star formation normal',
    options: [{
      name: 'Option 1',
      id: 'strategyNormalStar'
    }]
  },
  // {
  //   name: 'Star formation low',
  //   options: [{
  //     name: 'Option 1',
  //     id: 'strategyLowStar'
  //   }]
  // },
  {
    name: 'Stratégies pour touches',
    options: [{
      name: 'Triangle à gauche',
      id: 'strategyTouchDowmLeft'
    }, {
      name: 'Triangle à droite',
      id: 'strategyTouchDowmRight'
    }, {
      name: 'Carré à gauche',
      id: 'strategyTouchBoxLeft'
    }]
  }
];

renderLayout(appRoot, strategyList);
