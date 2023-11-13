document.addEventListener('DOMContentLoaded', () => {
    const apiKey = '2d8bb586e547547ec5847c546e5e9f95';
    const city = 'Trier';
    const lat = 49.7561; // Trier's latitude
    const lon = 6.6415; // Trier's longitude
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=${apiKey}`;

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            const temperatureFahrenheit = data.main.temp; // Removed toFixed(1)
            const capitalizedDesc = capitalizeWords(data.weather[0].description);
            const weatherIcon = data.weather[0].icon;

            document.getElementById('current-temperature').textContent = `Current Temperature in Trier, Germany is: ${temperatureFahrenheit.toFixed(0)}°F`; // Use toFixed(0) for zero decimal points
            document.getElementById('weather-description').textContent = `Weather: ${capitalizedDesc}`;

            const iconUrl = `https://openweathermap.org/img/w/${weatherIcon}.png`;
            const weatherIconElement = document.getElementById('weather-icon');
            weatherIconElement.setAttribute('src', iconUrl);
            weatherIconElement.setAttribute('alt', 'Weather Icon');
        })
        .catch(error => {
            console.error('Error fetching weather data:', error);
        });
});

// Function to capitalize each word in a string
function capitalizeWords(str) {
    return str.replace(/\b\w/g, match => match.toUpperCase());
}
