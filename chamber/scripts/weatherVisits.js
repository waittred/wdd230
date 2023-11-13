    
// Received help from chat.openai.com to fetch current weather //
document.addEventListener('DOMContentLoaded', () => {
    const apiKey = '542a8196d8643c064f9c22f4313b339f';
    const city = 'Seattle';

    // Current weather API URL
    const currentWeatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=${apiKey}`;

    // Forecast API URL for a three-day forecast
    const forecastUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=imperial&appid=${apiKey}`;

    // Function to capitalize each word in a string
    function capitalizeWords(str) {
        return str.replace(/\b\w/g, match => match.toUpperCase());
    }

    // Get visits element from the DOM
    const visitsDisplay = document.getElementById('page-visits');

    // Retrieve the stored value for 'pageVisits' in localStorage or assign 0 if it doesn't exist
    let pageVisits = Number(localStorage.getItem('pageVisits')) || 0;

    // Increment the number of visits by one
    pageVisits++;

    // Update and store the new visit total in localStorage
    visitsDisplay.textContent = `Page Visits: ${pageVisits}`;
    localStorage.setItem('pageVisits', pageVisits);

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
            const weatherIconElement = document.getElementById('weather-icon');
            weatherIconElement.setAttribute('src', iconUrl);
            weatherIconElement.setAttribute('alt', 'Weather Icon');
        })
        .catch(error => {
            console.error('Error fetching current weather data:', error);
        });

    // Fetch three-day forecast data
    fetch(forecastUrl)
        .then(response => response.json())
        .then(data => {
            // Extract relevant forecast data for the next three days
            const forecastDays = data.list.filter((forecast, index) => index % 8 === 0); // Filter the data to get one forecast per day

            // Display forecast information
            forecastDays.forEach((forecast, index) => {
                const forecastDate = new Date(forecast.dt * 1000);
                const forecastDay = forecastDate.toLocaleDateString('en-US', { weekday: 'long' }); // Get the full day name
                const forecastDateString = forecastDate.toLocaleDateString('en-US', { month: 'short', day: 'numeric' }); // Get the date as "Month Day"

                const forecastTemperature = forecast.main.temp.toFixed(1);
                const capitalizedForecastDesc = capitalizeWords(forecast.weather[0].description);

                // Display forecast for each day with commas using template literals
                document.getElementById(`forecast-day-${index + 1}`).innerHTML = `<strong>${forecastDay}</strong>: ${forecastDateString}: ${forecastTemperature}°F (${capitalizedForecastDesc})`;
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