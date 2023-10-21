//To get the last updated info:

document.getElementById("year").innerHTML = new Date().getFullYear();

let text = "Last Updated: " + document.lastModified;
    document.getElementById("date").innerHTML = text;

//Lesson3 hamburger menu:

const navigation = document.querySelector('.main-nav');
const hamButton = document.querySelector('#menu');
    
///  Received help from chat.openai.com to fetch current weather //
document.addEventListener('DOMContentLoaded', () => {
    const apiKey = '59020284cd6ab79b85c528f26efcafd2';
    const city = 'Seattle';
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            const temperatureCelsius = data.main.temp;
            const temperatureFahrenheit = (temperatureCelsius * 9/5) + 32;
            const windSpeedMph = data.wind.speed;
            const weatherDescription = data.weather[0].description;
            const weatherIcon = data.weather[0].icon;

            document.getElementById('current-temperature').textContent = `Current Temperature: ${temperatureFahrenheit.toFixed(2)}°F`;
            document.getElementById('wind-speed').textContent = `Wind Speed: ${windSpeedMph} mph`;
            document.getElementById('weather-description').textContent = `Weather: ${weatherDescription}`;

            const iconUrl = `https://openweathermap.org/img/w/${weatherIcon}.png`;
            const weatherIconElement = document.getElementById('weather-icon');
            weatherIconElement.setAttribute('src', iconUrl);
            weatherIconElement.setAttribute('alt', 'Weather Icon');
        })
        .catch(error => {
            console.error('Error fetching weather data:', error);
        });
});