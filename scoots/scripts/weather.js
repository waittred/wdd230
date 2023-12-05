document.addEventListener('DOMContentLoaded', () => {
    const apiKey = 'cc4e2b761940b933bc64076dcc7af565';
    const city = 'Cozumel';

    // Current weather API URL with imperial units
    const currentWeatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=${apiKey}`;

    // Function to capitalize each word in a string
    function capitalizeWords(str) {
        return str.replace(/\b\w/g, match => match.toUpperCase());
    }

    // Fetch current weather data
    fetch(currentWeatherUrl)
        .then(response => response.json())
        .then(data => {
            const temperatureFahrenheit = data.main.temp.toFixed(1);
            const humidity = data.main.humidity;
            const capitalizedDesc = capitalizeWords(data.weather[0].description);

            // Display current weather information including humidity
            document.getElementById('temperature').textContent = ` ${temperatureFahrenheit}°F`;
            document.getElementById('condition').textContent = `Weather: ${capitalizedDesc}`;
            document.getElementById('humidity').textContent = `Humidity: ${humidity}%`;

            const iconUrl = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
            const weatherIconElement = document.getElementById('weather-icon');
            weatherIconElement.setAttribute('src', iconUrl);
            weatherIconElement.setAttribute('alt', 'Weather Icon');
        })
        .catch(error => {
            console.error('Error fetching current weather data:', error);
        });

    // Fetch weather alerts
    fetch(`https://api.openweathermap.org/data/3.0/alerts?lat=20.4229&lon=-86.9228&appid=${apiKey}`)
        .then(response => response.json())
        .then(data => {
            if (data.alerts && data.alerts.length > 0) {
                // Display weather alerts
                const alertMessage = data.alerts[0].event;

                document.getElementById('alert-container').innerHTML = `<div class="alert">${alertMessage} <span class="close">&times;</span></div>`;
                document.querySelector('.close').addEventListener('click', function () {
                    document.querySelector('.alert').style.display = 'none';
                });
            }
        })
        .catch(error => {
            console.error('Error fetching weather alerts:', error);
        });

    // Display and label a one-day forecast
    fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=imperial&appid=${apiKey}`)
        .then(response => response.json())
        .then(data => {
            const oneDayForecast = data.list[0];
            const forecastTemperature = oneDayForecast.main.temp.toFixed(1);
            const forecastCondition = capitalizeWords(oneDayForecast.weather[0].description);

            document.getElementById('forecast').textContent = `One Day Forecast: ${forecastCondition}, ${forecastTemperature}°F`;
        })
        .catch(error => {
            console.error('Error fetching one-day forecast data:', error);
        });

    
});
