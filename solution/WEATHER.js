let weather = {}

let windSpeed = $("#windSpeed")
let temperature = $("#temperature")
let Humidity = $("#Humidity")
let Visibility = $("#Visibility")




function getweather([lat, lng]) {
    $.ajax({
        url: `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=963bc7a1945cf0f1c0aa271165ee890b`,
        type: "get",
        async: false,
        success: function (response) {
            weather = { ...response }

        }
    });
    renderWeather()
}

function renderWeather() {
    windSpeed.text(weather.wind.speed)
    temperature.text(weather.main.temp)
    Humidity.text(weather.main.humidity)
    Visibility.text(weather.visibility)
}

