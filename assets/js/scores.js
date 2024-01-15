// Function to save the score and initials
function saveScore() {
    console.log('Save Score function called'); // Debugging line
  
    var initials = document.getElementById('initials').value;
  
    // Ensure initials are not empty
    if (initials.trim() !== '') {
      console.log('Initials are not empty'); // Debugging line
  
      // Create an object to represent the highscore entry
      var highscoreEntry = {
        initials: initials,
        score: timeLeft,
      };
  
      console.log('Highscore Entry:', highscoreEntry); // Debugging line
  
      // Retrieve existing highscores from localStorage or initialize an empty array
      var highscores = JSON.parse(localStorage.getItem('highscores')) || [];
      
      console.log('Existing Highscores:', highscores); // Debugging line
  
      // Add the new highscore entry
      highscores.push(highscoreEntry);
      
      console.log('Updated Highscores:', highscores); // Debugging line
  
      // Sort highscores in descending order based on score
      highscores.sort(function (a, b) {
        return b.score - a.score;
      });
  
      // Save highscores back to localStorage
      localStorage.setItem('highscores', JSON.stringify(highscores));
  
      console.log('Redirecting to highscores page'); // Debugging line
  
      // Redirect to highscores page
      window.location.href = 'highscores.html';
    }
  }
  
  
  
  // Call saveScore when the submit button is clicked
  document.getElementById('submit').addEventListener('click', saveScore);
  