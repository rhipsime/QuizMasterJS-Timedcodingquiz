// Function to save the score and initials
function saveScore(event) {
    event.preventDefault(); // Prevent form submission
  
    var initials = document.getElementById('initials').value;
  
    if (initials.trim() !== '') {
      // Create an object to represent the highscore entry
      var highscoreEntry = {
        initials: initials,
        score: timeLeft, // Assuming timeLeft is your score variable
      };
  
      // Retrieve existing highscores from localStorage or initialize an empty array
      var highscores = JSON.parse(localStorage.getItem('highscores')) || [];
  
      // Add the new highscore entry
      highscores.push(highscoreEntry);
  
      // Sort highscores in descending order based on score
      highscores.sort(function (a, b) {
        return b.score - a.score;
      });
  
      // Save highscores back to localStorage
      localStorage.setItem('highscores', JSON.stringify(highscores));
  
      // Redirect to highscores page
      window.location.href = 'highscores.html';
    }
  }
  
  // Attach the saveScore function to the form's submit event
  document.getElementById('scoreForm').addEventListener('submit', saveScore);
  
  document.addEventListener('DOMContentLoaded', function () {
    // Retrieve highscores from localStorage
    var highscores = JSON.parse(localStorage.getItem('highscores')) || [];
  
    // Display highscores on the page
    var highscoresList = document.getElementById('highscores');
  
    // Clear existing content in case this function is called multiple times
    highscoresList.innerHTML = '';
  
    // Loop through highscores and append them to the list
    for (var i = 0; i < highscores.length; i++) {
      var scoreEntry = highscores[i];
      var listItem = document.createElement('li');
      listItem.textContent = scoreEntry.initials + ': ' + scoreEntry.score;
      highscoresList.appendChild(listItem);
    }
  });

  