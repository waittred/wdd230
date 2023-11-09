// Define the base URL and links JSON file URL
const baseURL = "https://waittred.github.io/wdd230";
const linksURL = "https://waittred.github.io/wdd230/data/links.json";

// Function to fetch and process the links data
async function getLinks() {
    try {
        // Fetch the links data from the JSON file
        const response = await fetch(linksURL);
        
        // Check if the response is successful
        if (response.ok) {
            // Parse the JSON data
            const data = await response.json();
            
            // Call the function to display the links
            displayLinks(data.lessons);
        } else {
            // Handle the error if the response is not successful
            console.error("Failed to fetch links data:", response.status);
        }
    } catch (error) {
        // Handle any network or JSON parsing errors
        console.error("Error fetching links data:", error);
    }
}

// Function to display the links on the webpage
function displayLinks(weeks) {
    // Get the container where the links will be displayed
    const linksContainer = document.getElementById("activity-links-container");

    // Loop through each week in the data and create links
    weeks.forEach(week => {
        // Create a heading for the week
        const weekHeading = document.createElement("h4");
        weekHeading.textContent = `Week ${week.lesson}`;
        linksContainer.appendChild(weekHeading);

        // Create an unordered list for the links
        const linkList = document.createElement("ul");

        // Loop through the links in the current week and create list items
        week.links.forEach(link => {
            const listItem = document.createElement("li");
            const anchor = document.createElement("a");
            anchor.href = baseURL + link.url;
            anchor.textContent = link.title;
            listItem.appendChild(anchor);
            linkList.appendChild(listItem);
        });

        // Append the list of links to the container
        linksContainer.appendChild(linkList);
    });
}

// Call the getLinks function to fetch and display links
getLinks();
