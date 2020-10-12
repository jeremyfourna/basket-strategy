const { strategySelection } = require('./views/display-strategy.js');

const appRoot = '#app';
const strategyList = [{
  name: 'ISS Kreuzberg - Flex',
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
  name: 'ISS Kreuzberg - 1 2 2',
  options: [{
    name: 'Option 1',
    id: 'issKreuzberg122Option1'
  }]
}, {
  name: 'ISS Kreuzberg - 2 3',
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
  name: 'ISS Kreuzberg - 2 1 2',
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
}, {
  name: 'Star formation low',
  options: [{
    name: 'Option 1',
    id: 'strategyLowStar'
  }]
}, {
  name: 'Strategies for touches',
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
}];

strategySelection(appRoot, strategyList);
