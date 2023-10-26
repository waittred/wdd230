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

 //Lesson06 Text overlays based upon image size. Received help from chat.openai.com//
 document.addEventListener('DOMContentLoaded', () => {
  const heroImageElement = document.getElementById('hero-image');
  const callToActionElement = document.getElementById('call-to-action');

  function updateTextOverlay() {
      const windowWidth = window.innerWidth;
      if (windowWidth <= 500) {
          callToActionElement.textContent = 'Small';
      } else if (windowWidth <= 1000) {
          callToActionElement.textContent = 'Medium';
      } else {
          callToActionElement.textContent = 'Large';
      }
  }

  // Initial call to set the text overlay based on the initial window width
  updateTextOverlay();

  // Update text overlay when window is resized
  window.addEventListener('resize', updateTextOverlay);
});

//Last visit date message//
const lastVisit = localStorage.getItem('lastVisit');

        // Get the current date in milliseconds
        const currentDate = Date.now();

        // Set the current date as the last visit date for future visits
        localStorage.setItem('lastVisit', currentDate);

        // Calculate the time difference in milliseconds
        const timeDifference = currentDate - lastVisit;

        // Calculate the number of days between visits
        const daysDifference = Math.floor(timeDifference / (1000 * 60 * 60 * 24));

        // Get the message element
        const messageElement = document.getElementById('message');

        // Display the appropriate message based on the time difference
        if (!lastVisit) {
            messageElement.textContent = "Welcome! Let us know if you have any questions.";
        } else if (daysDifference < 1) {
            messageElement.textContent = "Back so soon! Awesome!";
        } else if (daysDifference === 1) {
            messageElement.textContent = `You last visited ${daysDifference} day ago.`;
        } else {
            messageElement.textContent = `You last visited ${daysDifference} days ago.`;
        }
