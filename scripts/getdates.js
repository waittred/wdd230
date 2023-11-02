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


//----------------------------------------------------------------//

//Lesson08 creating new user and password help from https://www.codepel.com/forms/email-and-password-validation-in-javascript/ and chat.openai.com

const passwordInput = document.getElementById("password");
const confirmPasswordInput = document.getElementById("confirm-password");
const emailInput = document.getElementById("email");
const passwordErrorMessage = document.getElementById("password-error-message");
const emailErrorMessage = document.getElementById("email-error-message");

confirmPasswordInput.addEventListener("input", checkPasswordMatch);
emailInput.addEventListener("input", validateEmail);

function checkPasswordMatch() {
    const password = passwordInput.value;
    const confirmPassword = confirmPasswordInput.value;

    if (password !== confirmPassword) {
        passwordErrorMessage.textContent = "Passwords do not match. Please try again.";
    } else {
        passwordErrorMessage.textContent = "";
    }
}

function validateEmail() {
    const email = emailInput.value;
    const emailPattern = /^[a-zA-Z0-9._%+-]+@byui\.edu$/;

    if (!email.match(emailPattern)) {
        emailErrorMessage.textContent = "Invalid email address. Please use a BYUI email address.";
    } else {
        emailErrorMessage.textContent = "";
    }
}


//Page rating
const pageRatingInput = document.getElementById("page-rating");
const ratingValueSpan = document.getElementById("rating-value");

// Function to display the rating value
function displayRatingValue() {
  const ratingValue = pageRatingInput.value;
  ratingValueSpan.textContent = `Rating: ${ratingValue}`;
}

// Event listener for input change
pageRatingInput.addEventListener("input", displayRatingValue);
