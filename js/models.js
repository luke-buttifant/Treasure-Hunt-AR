var markers = [
      {
        name: '1',
        dialogue: 'Hey!, you need to find the first clue to point us towards the treasure!',
        clue: 'This is a clue!',
        successDialogue: 'Congratulations, You have found the first clue!'
      },
      {
        name: '2',
        dialogue: 'Hello again!, You are getting closer to the treasure!',
        clue: 'This is a clue!',
        successDialogue: 'Congratulations, You have found the second clue!'
      },
	  {
        name: '3',
        dialogue: 'Hello again!, You have found the treasure!',
        clue: 'This is a clue!',
        successDialogue: 'Congratulations, You have found treasure!!'
      }
    ];

var globalVariabe = {
	level : 1
};

var locations = [
	{
        name: 'Clue1',
        Lat: '50.900543',
        Long: '-1.403948',
        NearbyDialogue: 'You are Within 5 metres of the first clue!'
      },
		{
        name: 'Clue2',
        Lat: '',
        Long: '',
        NearbyDialogue: 'You are Within 5 metres of the second clue!'
      },
			{
        name: 'Clue3',
        Lat: '',
        Long: '',
        NearbyDialogue: 'You are Within 5 metres of the third clue!'
      },
			{
        name: 'treasure',
        Lat: '',
        Long: '',
        NearbyDialogue: 'You are near the treasure!'
      }
	
]
