// To set the current timestamp in the hidden input field for Join form
//help from https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toISOString
//https://www.w3schools.com/jsref/jsref_toisostring.asp
document.getElementById("timestamp").value = new Date().toISOString();