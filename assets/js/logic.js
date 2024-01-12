// logic.js
// logic.js

let currentQuestionIndex = 0;
let score = 0;
let timer; // Variable to store the timer

// Function to start the quiz
function startQuiz() {
  console.log("Quiz is starting!");
  startTimer(); // Call your function to start the timer
  displayQuestion(); // Display the first question
}

// Function to start the timer
function startTimer() {
  timer = setInterval(function () {
    totalTime--;

    // Update the timer display on your HTML page
    const timerElement = document.getElementById('time');
    timerElement.textContent = totalTime;

    // Check if the time is up
    if (totalTime <= 0) {
      clearInterval(timer);
      endQuiz(); // Call the function to end the quiz when time is up
    }
  }, 1000); // Update every 1000 milliseconds (1 second)
}

// Start the quiz when the "Start Quiz" button is clicked
const startButton = document.getElementById('start');
if (startButton) {
  startButton.addEventListener('click', startQuiz);
}

document.addEventListener('DOMContentLoaded', function () {
  let currentQuestionIndex = 0;
  let totalTime = 60; 
  let score = 0;

  // Your existing code here...

  // Function to check the user's answer
  function checkAnswer(choiceIndex) {
    const selectedAnswer = quizQuestions[currentQuestionIndex].choices[choiceIndex];
    const correctAnswer = quizQuestions[currentQuestionIndex].correctAnswer;

    // Check if the selected answer is correct
    if (selectedAnswer === correctAnswer) {
      // Increase the score if the answer is correct
      score++;
    } else {
      // Subtract time if the answer is incorrect
      totalTime -= 10; // Subtract 10 seconds for incorrect answers
    }

    // Move to the next question
    currentQuestionIndex++;

    // Display the next question or end the quiz
    displayQuestion();
  }

  // Your existing code here...

  // Now you can call displayQuestion when you want to show a new question
  displayQuestion();
});

// Your existing code here...

// Function to end the quiz
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

// Your existing code here...

// Function to save initials and score to localStorage
function saveHighScore(initials, score) {
  // Your existing code here...
}

// Your existing code here...

// Function to display high scores
function displayHighScores() {
  // Your existing code here...
}

