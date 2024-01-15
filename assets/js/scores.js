// Function to save the score and initials
function saveScore() {
    var initials = document.getElementById('initials').value;
  
    // Ensure initials are not empty
    if (initials.trim() !== '') {
      // Create an object to represent the highscore entry
      var highscoreEntry = {
        initials: initials,
        score: timeLeft,
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
  
  // Call saveScore when the submit button is clicked
  document.getElementById('submit').addEventListener('click', saveScore);
  