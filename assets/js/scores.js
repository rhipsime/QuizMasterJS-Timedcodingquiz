document.addEventListener('DOMContentLoaded', function () {
    // Retrieve highscores from localStorage
    var highscores = JSON.parse(localStorage.getItem('highscores')) || [];
  
    // Display highscores in a table on the page
    var highscoresTable = document.getElementById('highscores');
  
    // Create table headers
    var tableHeaders = '<tr><th>Initials</th><th>Score</th></tr>';
    highscoresTable.innerHTML += tableHeaders;
  
    // Loop through highscores and append them to the table
    for (var i = 0; i < Math.min(highscores.length, 3); i++) {
      var scoreEntry = highscores[i];
      var tableRow = '<tr><td>' + scoreEntry.initials + '</td><td>' + scoreEntry.score + '</td></tr>';
      highscoresTable.innerHTML += tableRow;
    }
  });
  