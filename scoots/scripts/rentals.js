document.addEventListener('DOMContentLoaded', function () {
        fetch('data/rentals.json')
            .then(response => response.json())
            .then(data => {
                const tableBody = document.querySelector('#rentals-table tbody');

                data.rentals.forEach(rental => {
                    const row = tableBody.insertRow();
                    row.insertCell(0).textContent = rental.type;
                    row.insertCell(1).textContent = rental.maxPersons;
                    row.insertCell(2).textContent = `$${rental.halfDayPrice}`;
                    row.insertCell(3).textContent = `$${rental.fullDayPrice}`;
                });
            })
            .catch(error => console.error('Error fetching rental data:', error));
    });

