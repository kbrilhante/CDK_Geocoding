// let map;
// let coord = [-22.9110137, -43.2093727];
// searchLocation(coord);


// function searchLocation(c) {
//     // const openWeatherKey = "f4f8a8841a8bb6f1dfdf8bc15c1087b0";
    
//     // // "http://api.openweathermap.org/geo/1.0/direct"
//     // // "?"
//     // // "q={city name},{state code},{country code}"
//     // // "&limit={limit}"
//     // // "&appid={API key}"
    
    
//     try {
//         let opt = {
//             center: c,
//             zoom: 13,
//         }
//         map = L.map('map', opt);
//     } catch (error) {
//         map.setView(c)
//         console.log(map);
//     }
    
    
//     L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
//         maxZoom: 19,
//         attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
//     }).addTo(map);
// }

let map;
const txtLocation = document.getElementById("txtLocation");
txtLocation.addEventListener('keydown', (e) => {
    if (e.code == "Enter") searchLocation();
});

function searchLocation() {
    const location = txtLocation.value;
    if (location) getLocation(location).then();
}

async function getLocation(location) {
    const openWeatherKey = "f4f8a8841a8bb6f1dfdf8bc15c1087b0";
    let url = "http://api.openweathermap.org/geo/1.0/direct";
    url += "?q=";
    url += location;
    url += "&appid=";
    url += openWeatherKey;
    const response = await fetch(url);
    const data = await response.json()
    console.log(data)
}

getLocation("Rio de Janeiro");