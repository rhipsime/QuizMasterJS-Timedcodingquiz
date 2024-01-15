// Function to save the score and initials
function saveScore() {
    var initials = document.getElementById('initials').value;
  
    // Ensure initials are not empty
    if (initials.trim() !== '') {
      // Save score to localStorage or your preferred storage mechanism
      // Example: localStorage.setItem('highscore', timeLeft);
  
      // Redirect to highscores page or display highscores
      window.location.href = 'highscores.html';
    }
  }
  
  // Call saveScore when the submit button is clicked
  document.getElementById('submit').addEventListener('click', saveScore);
  