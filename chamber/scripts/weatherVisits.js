    
// Received help from chat.openai.com to fetch current weather //
document.addEventListener('DOMContentLoaded', () => {
    const apiKey = '59020284cd6ab79b85c528f26efcafd2';
    const city = 'Seattle';
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=${apiKey}`;

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            const temperatureFahrenheit = data.main.temp.toFixed(1);

            // Capitalize the weather description using the capitalizeWords function
            const capitalizedDesc = capitalizeWords(data.weather[0].description);

            const weatherIcon = data.weather[0].icon;

            document.getElementById('current-temperature').textContent = `Current Temperature: ${temperatureFahrenheit}°F`;
            document.getElementById('weather-description').textContent = `Weather: ${capitalizedDesc}`;

            const iconUrl = `https://openweathermap.org/img/w/${weatherIcon}.png`;
            const weatherIconElement = document.getElementById('weather-icon');
            weatherIconElement.setAttribute('src', iconUrl);
            weatherIconElement.setAttribute('alt', 'Weather Icon');
        })
        .catch(error => {
            console.error('Error fetching weather data:', error);
        });

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