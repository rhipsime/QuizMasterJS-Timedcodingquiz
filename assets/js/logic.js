document.addEventListener('DOMContentLoaded', function () {
  let currentQuestionIndex = 0;
  let score = 0;
  let timer; // Variable to store the timer
  let totalTime = 60; // Set the total time for the quiz in seconds

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

  function displayQuestion() {
    const questionTitle = document.getElementById('question-title');
    const choicesContainer = document.getElementById('choices');

    // Check if there are still questions left
    if (currentQuestionIndex < quizQuestions.length && totalTime > 0) {
      // Display the question title
      questionTitle.textContent = quizQuestions[currentQuestionIndex].question;

      // Display the choices
      choicesContainer.innerHTML = ''; // Clear previous choices
      quizQuestions[currentQuestionIndex].choices.forEach((choice, index) => {
        const button = document.createElement('button');
        button.textContent = choice;
        button.addEventListener('click', () => checkAnswer(index));
        choicesContainer.appendChild(button);
      });
    } else {
      // All questions have been answered or time is up, end the quiz
      endQuiz();
    }
  }

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

  // Modify the displayHighScores function to update the DOM
  function displayHighScores() {
    // Retrieve high scores from localStorage
    const highScores = JSON.parse(localStorage.getItem('highScores')) || [];
    const highscoresList = document.getElementById('highscores');

    // Clear previous high scores
    highscoresList.innerHTML = '';

    // Display the high scores on the HTML page
    highScores.forEach((entry, index) => {
      const listItem = document.createElement('li');
      listItem.textContent = `${index + 1}. ${entry.initials}: ${entry.score}`;
      highscoresList.appendChild(listItem);
    });
  }

  // Additional changes:

  // Function to handle the "Submit" button (add this at the end)
  document.getElementById('submit').addEventListener('click', function () {
    endQuiz();
  });

  // Update the checkAnswer function to handle the last question (add this inside the function)
  if (currentQuestionIndex === quizQuestions.length - 1) {
    endQuiz();
  }

  // Start the quiz when the "Start Quiz" button is clicked
  document.getElementById('start-quiz').addEventListener('click', function () {
    startQuiz();
  });
});

// Move the startQuiz function outside the event listener
function startQuiz() {
  // Start the quiz logic
  console.log("Quiz is starting!");
  startTimer(); // Call your function to start the timer or display the first question
}