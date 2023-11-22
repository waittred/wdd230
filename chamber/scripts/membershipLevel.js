document.addEventListener('DOMContentLoaded', () => {
    const membersUrl = 'https://waittred.github.io/wdd230/chamber/data/members.json';
    const spotlightContainer = document.getElementById("spotlight-cards");

    async function getMembersData(url) {
        try {
            const response = await fetch(url);
            const data = await response.json();
            if (!Array.isArray(data)) {
                console.error('Data is not an array:', data);
                return;
            }
            displaySpotlightMembers(data);
        } catch (error) {
            console.error('Error fetching or processing data:', error);
        }
    }

    function getRandomMembers(data, count) {
        const shuffledMembers = data.sort(() => 0.5 - Math.random());
        return shuffledMembers.slice(0, count);
    }

    function displaySpotlightMembers(members) {
        const spotlightMembers = getRandomMembers(members, 3);

        spotlightMembers.forEach(member => {
            const card = createSpotlightCard(member);
            spotlightContainer.appendChild(card);
        });
    }

    function createSpotlightCard(member) {
        // Create HTML elements for a spotlight card
        const card = document.createElement('div');
        card.classList.add('spotlight-card');

        const name = document.createElement('h2');
        name.textContent = member.name;

        const address = document.createElement('p');
        address.textContent = member.address;

        const img = document.createElement('img');
        img.src = member.image;
        img.alt = `Picture of ${member.name}`;

        // Set explicit width and height for the image
        img.width = 600; 
        img.height = 450; 

        const website = document.createElement("a");
        website.href = member.website;
        website.setAttribute('target', '_blank'); // Open link in a new tab
        website.innerHTML = 'Details'; // Set link text to "Details"

        // Append elements to the card
        card.appendChild(name);
        card.appendChild(website);

        return card;
    }

    getMembersData(membersUrl);
});
