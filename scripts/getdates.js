//To get the last updated info:

document.getElementById("year").innerHTML = new Date().getFullYear();

let text = "Last Updated: " + document.lastModified;
    document.getElementById("date").innerHTML = text;

//Lesson3 hamburger menu:

const navigation = document.querySelector('.main-nav');
const hamButton = document.querySelector('#menu');
    
hamButton.addEventListener('click', () => {
    navigation.classList.toggle('show');
    hamButton.classList.toggle('show');
    });  
 

///  Received help from chat.openai.com to fetch current weather //
const apiKey = '59020284cd6ab79b85c528f26efcafd2'; 
        const city = 'Seattle'; 

        const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;

        fetch(apiUrl)
            .then(response => response.json())
            .then(data => {
                const temperatureCelsius = data.main.temp;
                const temperatureFahrenheit = (temperatureCelsius * 9/5) + 32; // Convert Celsius to Fahrenheit
                const windSpeedMph = data.wind.speed;
                const weatherDescription = data.weather[0].description;

                // Update HTML elements with weather data
                document.getElementById('current-temperature').textContent = `Current Temperature: ${temperatureFahrenheit.toFixed(2)}°F`;
                document.getElementById('wind-speed').textContent = `Wind Speed: ${windSpeedMph} mph`;
                document.getElementById('weather-description').textContent = `Weather: ${weatherDescription}`;
            })
            .catch(error => {
                console.error('Error fetching weather data:', error);
            });