// Function to save the score and initials
function saveScore(event) {
    event.preventDefault(); // Prevent form submission
  
    console.log('Save Score function called'); // Debugging line
  
    var initials = document.getElementById('initials').value;
  
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
      window.location.href = 'highscores.html';
    }
  }
  
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
  
  // Call saveScore when the submit button is clicked
  document.getElementById('submit').addEventListener('click', saveScore);
  