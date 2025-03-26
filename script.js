let map;
const txtLocation = document.getElementById("txtLocation");
txtLocation.addEventListener('keydown', (e) => {
    if (e.code == "Enter") searchLocation();
});

function searchLocation() {
    const location = txtLocation.value;
    if (location) {
        getLocation(location).then((data) => {
            txtLocation.value = data.name + ",";
            txtLocation.value += data.state ? data.state + "," : ""
            txtLocation.value += data.country;

            let coord = [data.lat, data.lon];
            setMap(coord)
        });
    }
}

async function getLocation(location) {
    const openWeatherKey = "f4f8a8841a8bb6f1dfdf8bc15c1087b0";
    let url = "https://api.openweathermap.org/geo/1.0/direct";
    url += "?q=";
    url += location;
    url += "&appid=";
    url += openWeatherKey;
    const response = await fetch(url);
    const jsonData = await response.json();
    const data = jsonData[0];
    return data;
}

function setMap(coord) {
    try {
        map = L.map('map', {
            center: coord,
            zoom: 13,
        });
    } catch (error) {
        map.setView(coord)
        console.log(map);
    }

    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(map);
}
