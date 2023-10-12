//To get the last updated info//

document.getElementById("year").innerHTML = new Date().getFullYear();

let text = "Last Updated: " + document.lastModified;
    document.getElementById("date").innerHTML = text;

//Hamburger menu//

const navigation = document.querySelector('.main-nav');
const hamButton = document.querySelector('#menu');
    
hamButton.addEventListener('click', () => {
    navigation.classList.toggle('show');
    hamButton.classList.toggle('show');
    });  
 
//  Received help from chat.openai.com to fetch current weather //
const url = 'https://api.openweathermap.org/data/2.5/weather?lat=47.60&lon=-122.33&units=imperial&appid=542a8196d8643c064f9c22f4313b339f'
const currentTemp = document.getElementById('current-temp');
const weatherIcon = document.getElementById('weather-icon');
const captionDesc = document.getElementById('figcaption');

fetch(url)
  .then(response => response.json())
  .then(data => {
    const temperature = data.main.temp;
    const iconCode = data.weather[0].icon;
    const iconUrl = `https://openweathermap.org/img/w/${iconCode}.png`;
    const description = data.weather[0].description;

    currentTemp.textContent = `Seattle's current temperature is: ${temperature} °F`;
    weatherIcon.innerHTML = `<img src="${iconUrl}" alt="Weather Icon">`;
    captionDesc.textContent = `Weather: ${description}`;
  })
  .catch(error => {
    console.error('Error fetching weather data:', error);
  });

//Dark Mode//
function myFunction() {
  let element = document.body;
  element.classList.toggle("dark-mode");
   // Get the button element
   let button = document.querySelector('button');

   // Enable or disable dark mode on or off//
   if (element.classList.contains("dark-mode")) {
     button.textContent = "Dark Mode On";
   } else {
     button.textContent = "Dark Mode Off";
   }
 }