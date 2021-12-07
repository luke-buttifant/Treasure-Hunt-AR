// JavaScript Document

const AFRAME = window.AFRAME;

window.onload = function () {
  var speechbubble = document.getElementById("speechBubble")
  var marker1 = document.getElementById('marker1');
  var marker2 = document.getElementById("marker2")
  var marker3 = document.getElementById("marker3")
  
  marker1.addEventListener('markerLost', () => {
    speechbubble.style.display = "none";
  })

	
	//NEED TO MAKE THESE INTO ONE SHORT FUNCTION
  marker1.addEventListener('markerFound', () => {
	  if(globalVariabe.level == 1){
		  globalVariabe.level ++;
	  }
    var levelill = document.getElementById("levelIllustration");
    levelill.innerHTML = "Level " + globalVariabe.level;
    speechbubble.innerHTML = markers[0].successDialogue;
    speechbubble.style.display = "block";
	  progressLevel3(levelill, speechbubble, marker2);
  });
}

function progressLevel3(levelill, speechbubble, marker2) {
		marker2.innerHTML += '<a-entity position="0 0.5 0" rotation="90 0 0" scale="0.0006 0.0006 0.0006"  gltf-model="#model2"></a-entity>';
	  marker2.addEventListener('markerFound', () => {
		  if(globalVariabe.level = 2){
			   globalVariabe.level ++;
		  }
      levelill.innerHTML = "Level " + globalVariabe.level;
      speechbubble.innerHTML = markers[1].successDialogue;
      speechbubble.style.display = "block";
    })
    marker2.addEventListener('markerLost', () => {
      speechbubble.style.display = "none";
    })
}
