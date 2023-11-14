    
// Received help from chat.openai.com to fetch current weather //
document.addEventListener('DOMContentLoaded', () => {
    const apiKey = '59020284cd6ab79b85c528f26efcafd2';
    const city = 'Seattle';

    // Current weather API URL
    const currentWeatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=${apiKey}`;

    // Forecast API URL for a three-day forecast
    const forecastUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=imperial&appid=${apiKey}`;

    // Function to capitalize each word in a string
    function capitalizeWords(str) {
        return str.replace(/\b\w/g, match => match.toUpperCase());
    }

    // Function to update element content or set innerHTML if the element is found
    function updateElementContent(elementId, content) {
        const element = document.getElementById(elementId);
        if (element) {
            element.innerHTML = content;
        } else {
            console.error(`Element with ID '${elementId}' not found.`);
        }
    }

// Fetch current weather data
fetch(currentWeatherUrl)
.then(response => response.json())
.then(data => {
    const temperatureFahrenheit = data.main.temp.toFixed(1);
    const capitalizedDesc = capitalizeWords(data.weather[0].description);
    const weatherIcon = data.weather[0].icon;

    // Display current weather information
    document.getElementById('current-temperature').textContent = `Current Temperature: ${temperatureFahrenheit}°F`;
    document.getElementById('weather-description').textContent = `Weather: ${capitalizedDesc}`;

    const iconUrl = `https://openweathermap.org/img/w/${weatherIcon}.png`;

    // Set the src attribute of the image directly
    document.getElementById('weather-icon').src = iconUrl;
    document.getElementById('weather-icon').alt = 'Weather Icon';
})
.catch(error => {
    console.error('Error fetching current weather data:', error);
});


    // Fetch three-day forecast data
    fetch(forecastUrl)
        .then(response => response.json())
        .then(data => {
            // Extract relevant forecast data for the next three days
            const forecastDays = data.list.slice(0, 3); // Get the first three forecasts

            // Display forecast information
            forecastDays.forEach((forecast, index) => {
                const forecastDate = new Date(forecast.dt * 1000);
                const forecastDay = forecastDate.toLocaleDateString('en-US', { weekday: 'long' });
                const forecastDateString = forecastDate.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });

                const forecastTemperature = forecast.main.temp.toFixed(1);
                const capitalizedForecastDesc = capitalizeWords(forecast.weather[0].description);

                // Display forecast for each day
                updateElementContent(`forecast-day-${index + 1}`, `<strong>${forecastDay}</strong>: ${forecastDateString}: ${forecastTemperature}°F (${capitalizedForecastDesc})`);
            });
        })
        .catch(error => {
            console.error('Error fetching forecast data:', error);
        });
});






//Lesson06 Weather code  Received help from chat.openai.com to fetch current weather //
//const url = 'https://api.openweathermap.org/data/2.5/weather?lat=47.60&lon=-122.33&units=imperial&appid=542a8196d8643c064f9c22f4313b339f'
//const currentTemp = document.getElementById('current-temp');
//const weatherIcon = document.getElementById('weather-icon');
//const captionDesc = document.getElementById('figcaption');

//fetch(url)
//  .then(response => response.json())
//  .then(data => {
//   const temperature = data.main.temp;
//    const iconCode = data.weather[0].icon;
//    const iconUrl = `https://openweathermap.org/img/w/${iconCode}.png`;
//    const description = data.weather[0].description;

//    currentTemp.textContent = `Seattle's current temperature is: ${temperature} °F`;
//    weatherIcon.innerHTML = `<img src="${iconUrl}" alt="Weather Icon">`;
//    captionDesc.textContent = `Weather: ${description}`;
//  })
//  .catch(error => {
//    console.error('Error fetching weather data:', error);
//  });