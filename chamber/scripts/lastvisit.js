document.addEventListener("DOMContentLoaded", function() {
    // Get the current date
    let currentDate = new Date();
  
    // Check if the user has visited the site before
    if(localStorage.lastVisit) {
        // Convert the stored date from string to Date object
        let lastVisitDate = new Date(localStorage.lastVisit);
        // Calculate the time difference in milliseconds
        let timeDifference = currentDate - lastVisitDate;
        // Calculate the number of days between visits
        let daysDifference = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
  
        // Display appropriate message based on the time difference
        if (daysDifference === 0) {
            // Less than a day
            updateMessage(`Back so soon! Awesome!`);
        } else {
            // More than a day
            let message = (daysDifference === 1) ? 'day' : 'days';
            updateMessage(`You last visited ${daysDifference} ${message} ago.`);
        }
    } else {
        // First visit
        updateMessage('Welcome! Let us know if you have any questions.');
    }
  
    // Store the current visit date in localStorage
    localStorage.lastVisit = currentDate;
  
    function updateMessage(message) {
        // Update the message content
        let messageElement = document.querySelector('.message-content');
        if (messageElement) {
            messageElement.textContent = message;
        }
    }
  });
  