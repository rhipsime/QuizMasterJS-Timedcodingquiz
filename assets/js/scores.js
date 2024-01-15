function saveScore() {
    location.href = 'highscores.html';
  }
  
  
  // Call saveScore when the submit button is clicked
  document.getElementById('submit').addEventListener('click', saveScore);
  