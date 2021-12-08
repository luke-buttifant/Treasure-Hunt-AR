// JavaScript Document
// check for Geolocation support
if (navigator.geolocation) {
  console.log('Geolocation is supported!');
}
else {
  console.log('Geolocation is not supported.');
}

navigator.geolocation.watchPosition(function(position) {
  console.log("current lat " + position.coords.latitude); 
  console.log('currentLon ' + position.coords.longitude);
	showNearby(globalVariabe.level, position);

});


function showNearby(level, position){
	var distanceAway = calculateDistance(position.coords.latitude, position.coords.longitude, locations[level - 1].Lat, locations[level - 1].Long) * 1000
	console.log("The clue is: " + (distanceAway) + " metres away");
		if(distanceAway <= 5){
			const speechbubble = document.getElementById("speechBubble");
	       speechbubble.innerHTML = locations[level - 1].NearbyDialogue;
			speechbubble.style.display = "block";
	   }
}

function calculateDistance(lat1, lon1, lat2, lon2) {
  var R = 6371; // km
  var dLat = (lat2 - lat1) * (Math.PI / 180);
  var dLon = (lon2 - lon1) * (Math.PI / 180);
  var a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
          Math.cos(lat1* (Math.PI / 180)) * Math.cos(lat2* (Math.PI / 180)) * 
          Math.sin(dLon / 2) * Math.sin(dLon / 2); 
  var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a)); 
  var d = R * c;
  return d;
}