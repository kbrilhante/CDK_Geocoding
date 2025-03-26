// const openWeatherKey = f4f8a8841a8bb6f1dfdf8bc15c1087b0

const coord = {
    lat: -22.9110137,
    lon: -43.2093727,
}

// // "http://api.openweathermap.org/geo/1.0/direct"
// // "?"
// // "q={city name},{state code},{country code}"
// // "&limit={limit}"
// // "&appid={API key}"

let opt = {
    center: [-22.9110137, -43.2093727],
    zoom: 13,
}

var map = L.map('map', opt);
// var map = L.map('map').setView([51.505, -0.09], 13);
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);
