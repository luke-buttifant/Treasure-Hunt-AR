var markers = [{
    name: '1',
    dialogue: 'You are Within 5 metres of the first clue!',
    clue: 'The pirates must have used this car, the engines warm and the tyres are bald, but the fuel is full... ',
    successDialogue: 'Congratulations, You have found the first clue!',
    modelSrc: '#model1',
    modelScale: '0.003 0.003 0.003',
    modelPosition: '0 0 0',
    modelRotation: '180 270 90',
    Lat: '50.900543',
    Long: '-1.403948'
  },
  {
    name: '2',
    dialogue: 'You are Within 5 metres of the second clue!',
    clue: 'There is an opened chocolate bar on the floor, where could they have got this from?',
    successDialogue: 'Congratulations, You have found the second clue!',
    modelSrc: '#model2',
    modelScale: '0.3 0.3 0.3',
    modelPosition: '0 0 0',
    modelRotation: '0 0 0',
    Lat: '51.47774797',
    Long: '-3.18037033'
  },
  {
    name: '3',
    dialogue: 'You are Within 5 metres of the third clue!',
    clue: 'They were here, they left a football boot!',
    successDialogue: 'Congratulations, You have found the third clue!',
    modelSrc: '#model3',
    modelScale: '0.01 0.01 0.01',
    modelPosition: '0 0 0',
    modelRotation: '-90 0 0',
    Lat: '50.898104',
    Long: '-1.403734',
  },
  {
    name: '4',
    dialogue: 'You are Within 5 metres of the treasure!',
    clue: 'Congratulations, You have found the treasure!',
    successDialogue: 'Well done! I knew you would find it',
    modelSrc: '#model4',
    modelScale: '0.002 0.002 0.002',
    modelPosition: '0 0 0',
    modelRotation: '0 -90 40',
    Lat: '50.898104',
    Long: '-1.403734',
  }
];

var globalVariabe = {
  level: 1,
	bearing: 0
};

