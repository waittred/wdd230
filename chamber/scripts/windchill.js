///  Received help from chat.openai.com for wind chill //


// Function to calculate wind chill
function calculateWindChill(temperature, windSpeed) {
    if (temperature <= 50 && windSpeed > 3.0) {
        let windChill = 35.74 + 0.6215 * temperature - 35.75 * Math.pow(windSpeed, 0.16) + 0.4275 * temperature * Math.pow(windSpeed, 0.16);
        return Math.round(windChill) + '<span id="temp-unit">&deg;F</span>';
    } else {
        return 'N/A';
    }
}

// Get temperature and wind speed from the document
let temperature = parseFloat(document.getElementById('current-temperature').textContent);
let windSpeed = parseFloat(document.getElementById('wind-speed').textContent);

// Calculate wind chill
let windChillValue = calculateWindChill(temperature, windSpeed);

// Update the DOM with wind chill value
document.getElementById('wind-chill-value').innerHTML = windChillValue;

