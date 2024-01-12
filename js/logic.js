displayQuestion();
function endQuiz() {
  // Clear the timer interval
  clearInterval(timer);

  // Display the final score
  const finalScore = score;
  alert(`Game Over! Your final score is ${finalScore}.`);

  // Prompt the user to enter initials
  const userInitials = prompt('Enter your initials:');

  // Save initials and score to localStorage
  saveHighScore(userInitials, finalScore);

  // Optionally, display high scores
  displayHighScores();

  // Reset game variables for a potential restart
  currentQuestionIndex = 0;
  score = 0;

  // Implement any additional logic based on your requirements
}

// Save initials and score to localStorage
function saveHighScore(initials, score) {
  // Retrieve existing high scores from localStorage or initialize an empty array
  const highScores = JSON.parse(localStorage.getItem('highScores')) || [];

  // Add the new high score
  highScores.push({ initials, score });

  // Sort the high scores in descending order
  highScores.sort((a, b) => b.score - a.score);

  // Limit the number of stored high scores (adjust as needed)
  const maxHighScores = 10;
  const trimmedHighScores = highScores.slice(0, maxHighScores);

  // Save the updated high scores to localStorage
  localStorage.setItem('highScores', JSON.stringify(trimmedHighScores));
}

// Optionally, display high scores
function displayHighScores() {
  // Retrieve high scores from localStorage
  const highScores = JSON.parse(localStorage.getItem('highScores')) || [];

  // Display the high scores (you can customize this based on your UI)
  console.log('High Scores:');
  highScores.forEach((entry, index) => {
    console.log(`${index + 1}. ${entry.initials}: ${entry.score}`);
  });
}

// Add an event listener to the "Start Quiz" button
const startButton = document.getElementById('start');
startButton.addEventListener('click', startQuiz);
