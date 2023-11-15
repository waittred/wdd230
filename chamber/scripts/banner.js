document.addEventListener('DOMContentLoaded', () => {
    // Recieved help from chat.openai.com
    //Function to check if the current day is Monday, Tuesday, or Wednesday
    function isBannerDay() {
        const today = new Date().getDay(); // [0 = Sunday, 1 = Monday, 2 = Tuesday, Wenesday = 3]
        return today >= 1 && today <= 3; // Monday, Tuesday, or Wednesday
    }

    // Function to show the banner
    function showBanner() {
        const banner = document.getElementById('meeting-banner');
        if (isBannerDay()) {
            banner.style.display = 'block';
        }
    }

    // Function to hide the banner
    function hideBanner() {
        const banner = document.getElementById('meeting-banner');
        banner.style.display = 'none';
    }

    // Function to close the banner
    function closeBanner() {
        hideBanner();
    }

    // Show the banner on page load if it's a banner day
    showBanner();

    // Attach event listener to the close button
    const closeButton = document.getElementById('close-banner');
    if (closeButton) {
        closeButton.addEventListener('click', closeBanner);
    }
});
