document.addEventListener('DOMContentLoaded', function () {
    fetch('data/rentals.json')
        .then(response => response.json())
        .then(data => {
            const tableBody = document.querySelector('#rentals-table tbody');

            data.rentals.forEach(rental => {
                const row = tableBody.insertRow();

                // Create a cell for the rental type and image
                const cell = row.insertCell(0);

                // Append the rental type text
                const rentalTypeText = document.createTextNode(rental.type);
                cell.appendChild(rentalTypeText);

                // Create an image element and set its source
                const image = document.createElement('img');
                image.src = rental.imageUrl;
                image.alt = rental.type;
                cell.appendChild(image);

                // Add other cells for additional rental information
                row.insertCell(1).textContent = rental.maxPersons;
                row.insertCell(2).textContent = `$${rental.halfDayPrice}`;
                row.insertCell(3).textContent = `$${rental.fullDayPrice}`;
            });
        })
        .catch(error => console.error('Error fetching rental data:', error));
});
