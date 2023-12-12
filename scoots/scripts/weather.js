document.addEventListener('DOMContentLoaded', () => {
    const apiKey = '407a5c69fcb6c5479d07f69c4f47b0d1'; 
    const city = 'Cozumel';

    function capitalizeWords(str) {
        return str.replace(/\b\w/g, match => match.toUpperCase());
    }

  // Function to display an alert
    function showAlert(message) {
        const alertBox = document.getElementById('alert-box');
        const alertMessage = document.getElementById('alert-message-box');
        const closeButton = document.querySelector('.close-button'); 

        console.log(closeButton); 

        alertMessage.innerHTML = message;
        alertBox.style.display = 'block';

    // Event listener for closing the alert
        if (closeButton) {
        closeButton.addEventListener('click', closeCustomAlert);
        }
    }


    // Function to close the alert
    function closeCustomAlert() {
        const alertBox = document.getElementById('alert-box');
        alertBox.style.display = 'none';
    }

// Fetch current weather data
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=${apiKey}`)
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

// Fetch weather alerts
            fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=20.4229&lon=-86.9228&exclude=current,minutely,hourly,daily&appid=${apiKey}`)
                .then(response => response.json())
                .then(data => {
                    const alerts = data.alerts;
                    if (alerts && alerts.length > 0) {
                        // Display high temperature alert for the current day
                        const maxTempAlert = `High temperature alert: ${alerts[0].temp}`;
                        showAlert(maxTempAlert);

                        // Add event listener for closing the alert after it's shown
                        const closeButton = document.getElementById('close-button');
                        closeButton.addEventListener('click', closeCustomAlert);
                    }
                })
                .catch(error => {
                    console.error('Error fetching weather alerts:', error);
                });
        })
        .catch(error => {
            console.error('Error fetching current weather data:', error);
        });

// Fetch current temperature data for the day
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=${apiKey}`)
        .then(response => response.json())
        .then(data => {
            const tempMax = data.main.temp_max;
            const tempMessage = `Today in Cozumel, it is forecasted to reach a high of ${Math.round(tempMax)}°F`;
            showAlert(tempMessage);
        })
        .catch(error => {
            console.error('Error fetching current temperature data:', error);
        });

// Display and label tomorrow's forecast
    fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=imperial&appid=${apiKey}`)
        .then(response => response.json())
        .then(data => {
            const tomorrowForecast = data.list[1];
            const tomorrowIcon = tomorrowForecast.weather[0].icon;
            const tomorrowTemperature = tomorrowForecast.main.temp.toFixed(1);
            const tomorrowCondition = capitalizeWords(tomorrowForecast.weather[0].description);

            // Update tomorrow's weather elements
            document.getElementById('next-day-icon').setAttribute('src', `https://openweathermap.org/img/w/${tomorrowIcon}.png`);
            document.getElementById('next-day-condition').textContent = `Condition: ${tomorrowCondition}`;
            document.getElementById('next-day-temperature').textContent = `Temperature: ${tomorrowTemperature}°F`;
        })
        .catch(error => {
            console.error('Error fetching tomorrow\'s forecast data:', error);
        });
});
