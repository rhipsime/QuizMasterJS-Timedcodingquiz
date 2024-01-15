// scores.js

document.addEventListener('DOMContentLoaded', function () {
    // Get the high scores from local storage
    var highScores = JSON.parse(localStorage.getItem('highScores')) || [];
  
    // Sort high scores in descending order
    highScores.sort(function (a, b) {
      return b.score - a.score;
    });
  
    // Display high scores
    var highScoresList = document.getElementById('highscores');
    highScoresList.innerHTML = '';
  
    highScores.forEach(function (score) {
      var listItem = document.createElement('li');
      listItem.textContent = score.initials + ' - ' + score.score;
      highScoresList.appendChild(listItem);
    });
  
    // Event listener for the "Clear Highscores" button
    document.getElementById('clear').addEventListener('click', function () {
      // Clear high scores from local storage
      localStorage.removeItem('highScores');
  
      // Clear the displayed high scores
      highScoresList.innerHTML = '';
    });
  });
  