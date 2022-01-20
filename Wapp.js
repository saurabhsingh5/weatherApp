//api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}
//780113826ba186951856951dd07b4919

const weatherApi = {
    key:"780113826ba186951856951dd07b4919",
    baseUrl:"https://api.openweathermap.org/data/2.5/weather"
}

const searchInputBox = document.getElementById('input-box');

//Event Listener Function on keypress
searchInputBox.addEventListener('keypress', (event) => {
    if(event.keyCode == 13){

        console.log(searchInputBox.value);
        getWeatherReport(searchInputBox.value);
        document.querySelector('.weather-body').style.display = "block";
    }
});


//Get weather report
function getWeatherReport(city) {
    fetch(`${weatherApi.baseUrl}?q=${city}&appid=${weatherApi.key}&units=metric`)
    .then(weather => {
        return weather.json();
    }).then(showWeatherReport);
}

//Show Weather Report
function showWeatherReport(weather) {
    console.log(weather);

    let city = document.getElementById('city');
    city.innerText = `${weather.name}, ${weather.sys.country}`;

    let temperature = document.getElementById('temp');
    temperature.innerHTML = `${Math.round(weather.main.temp)}&deg;C`;

    let minMaxTemp = document.getElementById('min-max');
    minMaxTemp.innerHTML = `${Math.floor(weather.min.temp_min)}&deg;C (min)/ ${Math.ceil(weather.main.temp_max)}&deg;C (max) `;

    let weatherType = document.getElementById('weather');
    weatherType.innerText = `${weather.weather[0].main}`;

    let date = document.getElementById('date');
    let todayDate = new Date();
    date.innerText = dateManage(todayDate);

    if(weatherType.textContent == 'Clear') {
        document.body.style.backgroundImage = "url('https://image.freepik.com/free-photo/cloud-blue-sky_1232-3108.jpg')";
    }

    else if(weatherType.textContent == 'Cloud') {
        document.body.style.backgroundImage = "url('https://cdn.pixabay.com/photo/2016/06/22/16/22/clouds-1473311_960_720.jpg')";
    }

    else if(weatherType.textContent == 'Haze') {
        document.body.style.backgroundImage = "url('https://cdn.pixabay.com/photo/2021/08/05/18/52/forest-6524635_960_720.jpg')";
    }

    else if(weatherType.textContent == 'Rain') {
        document.body.style.backgroundImage = "url('https://cdn.pixabay.com/photo/2017/09/22/10/25/rain-2775032_960_720.jpg')";
    }

    else if(weatherType.textContent == 'Snow') {
        document.body.style.backgroundImage = "url('https://cdn.pixabay.com/photo/2019/12/30/20/34/road-4730553_960_720.jpg')";
    }

    else if(weatherType.textContent == 'Fog') {
        document.body.style.backgroundImage = "url('https://cdn.pixabay.com/photo/2021/12/07/12/35/church-6853164_1280.jpg')";
    }

    else if(weatherType.textContent == 'Thunderstorm') {
        document.body.style.backgroundImage = "url('https://cdn.pixabay.com/photo/2018/05/20/22/55/thunderstorm-3417042_960_720.jpg')";
    }



}

//Date manage
function dateManage(dateArg) {

    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    let year = dateArg.getFullYear();
    let month = months[dateArg.getMonth()];
    let date = dateArg.getDate();
    let day = days[dateArg.getDay()];

    return `${date} ${month} ${day}, ${year}`;
}
