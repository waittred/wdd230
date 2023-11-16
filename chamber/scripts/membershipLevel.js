// Ensure this script runs after the DOM is fully loaded
document.addEventListener("DOMContentLoaded", function () {
    // Fetch data from members.json
    fetch("data/members.json")
        .then(response => response.json())
        .then(data => displayMembers(data.members))
        .catch(error => console.error("Error fetching members data:", error));

    // Display members with silver or gold status
    function displayMembers(members) {
        const silverGoldMembers = members.filter(member =>
            member.status === "silver" || member.status === "gold"
        );

        // Randomly select 2 to 3 members
        const selectedMembers = getRandomMembers(silverGoldMembers, 2, 3);

        // Display the selected members
        const membersContainer = document.getElementById("spotlight-cards");

        selectedMembers.forEach(member => {
            const memberSection = document.createElement("section");
            memberSection.classList.add("spotlight");

            // Customize this based on your JSON structure
            memberSection.innerHTML = `
                <h2>${member.name}</h2>
                <p>${member.address}</p>
                <img src="${member.image}" alt="${member.name} Image">
                <br>
                <br>
                <a href="${member.website}">${member.website}</a>
            `;

            membersContainer.appendChild(memberSection);
        });
    }

    // Helper function to get a random subset of members
    function getRandomMembers(array, min, max) {
        const shuffled = array.sort(() => 0.5 - Math.random());
        return shuffled.slice(0, Math.floor(Math.random() * (max - min + 1)) + min);
    }
});
