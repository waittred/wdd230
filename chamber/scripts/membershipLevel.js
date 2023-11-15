document.addEventListener('DOMContentLoaded', async () => {
    try {
        // Define the URL for fetching JSON data
        const membersUrl = 'https://waittred.github.io/wdd230/chamber/data/members.json';

        // Fetch JSON data from members.json
        const response = await fetch(membersUrl);
        const chamberMembers = await response.json();
        console.log('Fetched data:', chamberMembers);
        // Filter silver and gold members
        const silverGoldMembers = chamberMembers.filter(member => member.membershipLevel === 'silver' || member.membershipLevel === 'gold');
        console.log('Silver/Gold members:', silverGoldMembers);
        // Function to shuffle an array (Fisher-Yates algorithm)
        function shuffleArray(array) {
            for (let i = array.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                [array[i], array[j]] = [array[j], array[i]];
            }
        }

        // Shuffle the filtered array
        shuffleArray(silverGoldMembers);

        // Display two to three randomly selected members
        const spotlightMain = document.querySelector('.spotlight_main .grid');
        const displayedMembers = silverGoldMembers.slice(0, 3); // Adjust the number as needed

        displayedMembers.forEach(member => {
            const memberSection = document.createElement('section');
            memberSection.innerHTML = `
                <h2>${member.name}</h2>
                <p>Status: ${member.membershipLevel}</p>
                <!-- Other fields... -->
            `;
            spotlightMain.appendChild(memberSection);
        });
    } catch (error) {
        console.error('Error loading or processing JSON data:', error);
    }
});
