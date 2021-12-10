// JavaScript Document

const AFRAME = window.AFRAME;

window.onload = function () {
		const helpModeBtn = document.getElementById('helpMode');
	var clicked = false;
helpModeBtn.addEventListener("click", function(){
	const arrowEntity = document.getElementById("arrowEntity");
	clicked = !clicked
	arrowEntity.setAttribute('visible', clicked);
})
  var marker1 = document.getElementById('marker1');
  var marker2 = document.getElementById("marker2");
  var marker3 = document.getElementById("marker3");


  marker1.addEventListener('markerFound', () => {
    var marker1 = document.getElementById('marker1');
    if (globalVariabe.level == 1) {
      globalVariabe.level = 2;
      progressLevel(marker1);
    }

  });

  marker2.addEventListener('markerFound', () => {
    var marker2 = document.getElementById("marker2");
    if (globalVariabe.level == 2) {
      globalVariabe.level = 3;
      progressLevel(marker2);
    }

  });


  marker3.addEventListener('markerFound', () => {
    var marker3 = document.getElementById("marker3");
    if (globalVariabe.level == 3) {
      globalVariabe.level = 4;
      progressLevel(marker3);
    }
  });

marker4.addEventListener('markerFound', () => {
    var marker4 = document.getElementById("marker4");
    if (globalVariabe.level == 4) {
      globalVariabe.level = 5;
      progressLevel(marker4);
    }
  });

}

function progressLevel(marker) {
  var speechbubble = document.getElementById("speechBubble");
  markerNumber = (globalVariabe.level - 2)
  marker.innerHTML = `<a-entity position="${markers[markerNumber].modelPosition}" rotation="${markers[markerNumber].modelRotation}" scale="${markers[markerNumber].modelScale}" gltf-model="${markers[markerNumber].modelSrc}"></a-entity>`;
  var levelill = document.getElementById("levelIllustration");
  levelill.innerHTML = "Level " + globalVariabe.level;
	if(globalVariabe.level == 4){
		  levelill.innerHTML = "Final Level";
	}
	if(globalVariabe.level == 5){
		  levelill.innerHTML = "You Win!";

	}
  speechbubble.innerHTML = markers[globalVariabe.level - 2].successDialogue;
  speechbubble.style.display = "block";
  speechbubble.addEventListener('click', function () {
    speechbubble.style.display = "block";
    speechbubble.innerHTML = markers[globalVariabe.level - 2].clue;
    speechbubble.addEventListener('click', function () {
      speechbubble.style.display = "none";
		if(globalVariabe.level == 5){
		var restartBtn = document.getElementById("restartBtn");
		restartBtn.style.display = "flex";
			restartBtn.onclick = function(){
				location.reload();
			}
			}
		});
 
  })
}

