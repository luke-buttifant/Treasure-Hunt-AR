const map = L.map ("map1");
const attrib="Map data copyright OpenStreetMap contributors, Open Database Licence";

L.tileLayer
        ("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
            { attribution: attrib } ).addTo(map);
            
map.setView([50.908, -1.4], 14);
map.on("click", e => {
	const latInput = document.getElementById("latInput");
	const longInput = document.getElementById("longInput");
	
	longInput.value = e.latlng.lat;
    latInput.value = e.latlng.lng;
});

