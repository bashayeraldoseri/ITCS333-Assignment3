// The URL for the API that provides student data based on specific filters (colleges like "IT" and programs like "bachelor").
const url = "https://data.gov.bh/api/explore/v2.1/catalog/datasets/01-statistics-of-students-nationalities_updated/records?where=colleges%20like%20%22IT%22%20AND%20the_programs%20like%20%22bachelor%22&limit=100";

// Asynchronous function to fetch data from the API
async function fetchUOBdata() {
    try {
        // Fetch data from the provided API URL
        const response = await fetch(url);

        // Check if the response is successful (status code 200)
        if (!response.ok) {
            console.error('Response not OK'); // Log an error if the response is not successful
            return;
        }

        // Parse the JSON response into a JavaScript object
        const data = await response.json();

        // Pass the parsed data to the displayUOBdata function to populate the table
        displayUOBdata(data.results);
    } catch (error) {
        // If an error occurs during the fetch or processing, log the error
        console.error('Error occurred', error);
    }
}

// Function to display the data in a table format
function displayUOBdata(results) {

    // Function to display the data in a table format
    const tableBody = document.getElementById('table-body');

    // Loop through each item in the results array
    results.forEach(item => {

        // Create a new row element for each item
        const tableRow = document.createElement('tr');

         // Set the inner HTML of the row with the data from the current item
        // Each row contains two table cells with college and program information
        tableRow.innerHTML = `
            <td>${item.colleges}</td>
            <td>${item.the_programs}</td>
             <td>${item.year}</td>
            <td>${item.number_of_students}</td>
        `;
        // Append the new row to the table body
        tableBody.appendChild(tableRow);
    });
}
// Wait for the DOM to fully load before executing the fetchUOBdata function
document.addEventListener('DOMContentLoaded', fetchUOBdata);
