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
            keyPath:"level"
    });

    objectStore.createIndex("hint", "hint", { unique: false } );

    const hints = [
        { playerName: "Admin", level: "1", hint: "Add a hint here..." },
        {  playerName: "Admin", level: "2", hint: "Add a hint here..." },
        {  playerName: "Admin", level: "3", hint: "Add a hint here..." }
                    ];

    for(let i=0; i<hints.length; i++) {
        objectStore.add(hints[i]);
    }
};

