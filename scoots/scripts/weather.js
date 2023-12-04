// Function to fetch weather data
function fetchWeather() {
    // Fetch current weather data
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`)
        .then(response => response.json())
        .then(data => {
            // Display weather information
            const temperature = data.main.temp;
            const condition = data.weather[0].description;
            const humidity = data.main.humidity;
            const iconCode = data.weather[0].icon;

            // Replace these with the actual IDs or classes in your HTML
            document.getElementById('temperature').textContent = `${temperature}°C`;
            document.getElementById('condition').textContent = condition;
            document.getElementById('humidity').textContent = `${humidity}%`;
            document.getElementById('weather-icon').src = `https://openweathermap.org/img/wn/${iconCode}.png`;
            document.getElementById('weather-icon').alt = condition;
        })
        .catch(error => {
            console.error('Error fetching weather data:', error);
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
}
