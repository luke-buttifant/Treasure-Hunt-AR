// JavaScript Document
let db;

const indexedDB = window.indexedDB;
const request = indexedDB.open("treasureHuntDB", 1);

request.onsuccess = function(e) {
    alert("Successfully opened the database!");
    db = e.target.result;
}
request.onerror = function(e) {
    // Imagine displayMessage() is a function which fills a div with content
    alert("Error opening database: " + e.target.errorCode);
}

request.onupgradeneeded = e=> {
    const db = e.target.result; // IDBDatabase instance

    const objectStore = db.createObjectStore("hints", {
            keyPath:"index", 
		autoIncrement: true
    });

    objectStore.createIndex("hint", "hint", { unique: false } );

    const hints = [
        { index: "0", playerName: "Admin", level: "1", hint: "Level 1 Hint", longitude: 0 , latitude: 0},
        { index: "-1", playerName: "Admin", level: "2", hint: "Level 2 Hint", longitude: 0 , latitude: 0},
        { index: "-2", playerName: "Admin", level: "3", hint: "Level 3 Hint", longitude: 0 , latitude: 0}
                    ];

    for(let i=0; i<hints.length; i++) {
        objectStore.add(hints[i]);
    }
};

function displayMessage(message){
   var msg = document.getElementById("hints");
   msg.innerHTML = message;
}

window.onload = function () {
	console.log("Map Level " + globalVariabe.level);
	//ADD A Hint
	document.getElementById('saveChanges').addEventListener('click', e=> {
		const u = document.getElementById('usernameInput').value;
		const n = document.getElementById('levelInput').value;
		const c = document.getElementById('hintInput').value;
		const long = document.getElementById('latInput').value;
		const lat = document.getElementById('longInput').value;
		const transaction = db.transaction("hints", "readwrite");
		const objectStore = transaction.objectStore("hints");
		const newObj = { playerName: u, level: n, hint: c , longitude: long, latitude: lat};
		const request = objectStore.add(newObj);
		request.onsuccess =  e => {
			alert('Successfully added.');
		};
		request.onerror = e => {
			alert(`ERROR ${e.target.errorCode}`);
		};
	});
	
		//SHOW HINTS
	document.getElementById('showHintsBtn').addEventListener('click', e=> {
	const transaction = db.transaction("hints");
	const objectStore = transaction.objectStore("hints");
	const request = objectStore.openCursor();
	html = "";
	request.onsuccess = e => {
		var cursor = e.target.result;
		console.log("global Variable" + globalVariabe.level);
		if(cursor.value.level == globalVariabe.level) {
			html += `<div class="row"><div class="col"><b>Username: </b>${cursor.value.playerName}</div><div class="col"><b>Hint: </b>${cursor.value.hint}</div><div class="col">${cursor.value.longitude}</div><div class="col">${cursor.value.latitude}</div></div><div class="row"><hr></div>`;
			cursor.continue();
		} else {
			displayMessage(html);
			cursor.continue();
		}
	};
	});
}

