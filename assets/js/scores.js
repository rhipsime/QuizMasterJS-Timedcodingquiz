// scores.js

document.addEventListener('DOMContentLoaded', function () {
  var highScores = JSON.parse(localStorage.getItem('highScores')) || [];

  highScores.sort(function (a, b) {
      return b.score - a.score;
  });

  var highScoresList = document.getElementById('highscores');
  highScoresList.innerHTML = '';

  highScores.forEach(function (score) {
      var listItem = document.createElement('li');
      listItem.textContent = score.initials + ' - ' + score.score;
      highScoresList.appendChild(listItem);
  });

  document.getElementById('clear').addEventListener('click', function () {
      localStorage.removeItem('highScores');
      highScoresList.innerHTML = '';
  });
});

  