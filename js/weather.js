
const app = {
    init: () => {
        document
            .getElementById('btnGet')
            .addEventListener('click', app.checkWeather);
        document
            .getElementById('btnCurrent')
            .addEventListener('click', app.getLocation);
    },
    getLocation: (ev) => {
        let opts = {
            enableHighAccuracy: true,
            timeout: 1000 * 10, 
            maximumAge: 1000 * 60 * 5, 
        };
        navigator.geolocation.getCurrentPosition(app.ftw, app.wtf, opts);
    },
    ftw: (position) => {
        document.getElementById('latitude').value =
            position.coords.latitude.toFixed(2);
        document.getElementById('longitude').value =
            position.coords.longitude.toFixed(2);
    },
    wtf: (err) => {
        console.error(err);
    },

    checkWeather: () => {
        let lat = document.getElementById('latitude').value;
        let lon = document.getElementById('longitude').value;
        let url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=2188b497a39f21c065a443c275265bfc`;
        
        fetch(url)
            .then(response => response.json())
            .then(data =>{
                console.log(data);
                let temp = document.getElementById("temp");
                temp.innerHTML += data.main.temp += "C";
            })

    }
};

app.init()