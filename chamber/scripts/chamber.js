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
document.addEventListener('DOMContentLoaded', () => {
  const apiKey = '59020284cd6ab79b85c528f26efcafd2';
  const city = 'Seattle';
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=${apiKey}`;

  fetch(apiUrl)
      .then(response => response.json())
      .then(data => {
          const temperatureFahrenheit = data.main.temp.toFixed(1);
          const weatherDescription = data.weather[0].description;
          const weatherIcon = data.weather[0].icon;

          document.getElementById('current-temperature').textContent = `Current Temperature: ${temperatureFahrenheit}°F`;
          document.getElementById('weather-description').textContent = `Weather: ${weatherDescription}`;

          const iconUrl = `https://openweathermap.org/img/w/${weatherIcon}.png`;
          const weatherIconElement = document.getElementById('weather-icon');
          weatherIconElement.setAttribute('src', iconUrl);
          weatherIconElement.setAttribute('alt', 'Weather Icon');
      })
      .catch(error => {
          console.error('Error fetching weather data:', error);
      });

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

//---------------------------------------------------------------

//Lesson06 Text overlays based upon image size. Received help from chat.openai.com//
//document.addEventListener('DOMContentLoaded', () => {
// const heroImageElement = document.getElementById('hero-image');
// const callToActionElement = document.getElementById('call-to-action');

// function updateTextOverlay() {
//     const windowWidth = window.innerWidth;
//      if (windowWidth <= 500) {
//         callToActionElement.textContent = 'Small';
//      } else if (windowWidth <= 1000) {
//          callToActionElement.textContent = 'Medium';
//      } else {
//          callToActionElement.textContent = 'Large';
//      }
//  }

  // Initial call to set the text overlay based on the initial window width
//  updateTextOverlay();

  // Update text overlay when window is resized
//  window.addEventListener('resize', updateTextOverlay);
//});

//-------------------------------------------------------

//Last visit date message //
document.addEventListener("DOMContentLoaded", function() {
  // Get the current date
  var currentDate = new Date();

  // Check if the user has visited the site before
  if(localStorage.lastVisit) {
      // Convert the stored date from string to Date object
      var lastVisitDate = new Date(localStorage.lastVisit);
      // Calculate the time difference in milliseconds
      var timeDifference = currentDate - lastVisitDate;
      // Calculate the number of days between visits
      var daysDifference = Math.floor(timeDifference / (1000 * 60 * 60 * 24));

      // Display appropriate message based on the time difference
      if (daysDifference === 0) {
          // Less than a day
          updateMessage('Back so soon! Awesome!');
      } else {
          // More than a day
          var message = (daysDifference === 1) ? 'day' : 'days';
          updateMessage('You last visited ' + daysDifference + ' ' + message + ' ago.');
      }
  } else {
      // First visit
      updateMessage('Welcome! Let us know if you have any questions.');
  }

  // Store the current visit date in localStorage
  localStorage.lastVisit = currentDate;

  function updateMessage(message) {
      // Update the message content
      var messageElement = document.querySelector('.message-content');
      if (messageElement) {
          messageElement.textContent = message;
      }
  }
});
