// script.js
function searchFlights() {
    var from = document.getElementById('from').value;
    var to = document.getElementById('to').value;

    // Here you can implement the logic to search for flights based on the input values
    // For simplicity, let's just display a message with the search criteria for now
    var resultsSection = document.getElementById('results');
    resultsSection.innerHTML = '<h2>Search Results</h2>' +
                               '<p>Searching flights from ' + from + ' to ' + to + '...</p>';
}
