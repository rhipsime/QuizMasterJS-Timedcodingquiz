// scores.js

document.addEventListener('DOMContentLoaded', function () {
  // Retrieve high scores from localStorage
  const highScores = JSON.parse(localStorage.getItem('highScores')) || [];

  // Display high scores on the page
  function displayHighscores() {
    const highscoresList = document.getElementById('highscores');
    
    // Check if the highscoresList element exists
    if (highscoresList) {
      // Clear previous high scores
      highscoresList.innerHTML = '';

      // Iterate through high scores and create list items
      highScores.forEach((entry, index) => {
        const listItem = document.createElement('li');
        listItem.textContent = `${index + 1}. ${entry.initials}: ${entry.score}`;
        highscoresList.appendChild(listItem);
      });
    }
  }

  // Clear high scores from localStorage
  function clearHighscores() {
    localStorage.removeItem('highScores');
    displayHighscores(); // Refresh the displayed high scores
  }

  // Call the displayHighscores function when the DOM is ready
  displayHighscores();

  // Add event listener to the "Clear Highscores" button
  const clearButton = document.getElementById('clear');
  if (clearButton) {
    clearButton.addEventListener('click', clearHighscores);
  }
});
