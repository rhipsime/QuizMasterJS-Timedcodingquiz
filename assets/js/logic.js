// Add these two lines at the top of your logic.js file
var correctSound = new Audio('./assets/sfx/correct.wav');
var incorrectSound = new Audio('./assets/sfx/incorrect.wav');

// Variables
var timer;
var timeLeft;
var currentQuestionIndex;

// Function to start the quiz
function startQuiz() {
  timeLeft = 60; // Set your desired initial time
  currentQuestionIndex = 0;

  // Hide start screen and show questions
  document.getElementById('start-screen').classList.add('hide');
  document.getElementById('questions').classList.remove('hide');

  // Start the timer
  timer = setInterval(function () {
    timeLeft--;
    document.getElementById('time').textContent = timeLeft;

    // Check if time has run out
    if (timeLeft <= 0) {
      endQuiz();
    }
  }, 1000);

  // Display the first question
  displayQuestion();
}

// Function to display questions
function displayQuestion() {
    // Check if it's the last question
    if (currentQuestionIndex === questions.length) {
      endQuiz();
      return; // Exit the function to prevent further execution
    }
  
    var question = questions[currentQuestionIndex];
    document.getElementById('question-title').textContent = question.question;
  
    var choicesContainer = document.getElementById('choices');
    choicesContainer.innerHTML = ''; // Clear previous choices
  
    // Create buttons for each choice
    question.choices.forEach(function (choice, index) {
      var button = document.createElement('button');
      button.textContent = choice;
      button.addEventListener('click', function () {
        checkAnswer(index);
      });
      choicesContainer.appendChild(button);
    });
  }
  
// Function to check the selected answer
function checkAnswer(choiceIndex) {
  var question = questions[currentQuestionIndex];

  // Check if the selected answer is correct
  if (choiceIndex === question.correctIndex) {
      // Correct answer, play correct sound and proceed to the next question
      correctSound.play();
      currentQuestionIndex++;
      displayQuestion();
  } else {
      // Incorrect answer, play incorrect sound, deduct time, and provide feedback
      incorrectSound.play();
      timeLeft -= 10; // Deduct 10 seconds for incorrect answers
      document.getElementById('time').textContent = timeLeft; // Update timer display
      displayFeedback('Incorrect!');
  }

  // Check if it's the last question
  if (currentQuestionIndex === questions.length) {
      endQuiz();
  }
}
  
// Function to display feedback
function displayFeedback(message) {
  var feedbackElement = document.getElementById('feedback');
  feedbackElement.textContent = message;
  feedbackElement.classList.remove('hide');

  // Hide feedback after 1 second
  setTimeout(function () {
    feedbackElement.classList.add('hide');
  }, 1000);
}

// Function to end the quiz
function endQuiz() {
  clearInterval(timer);

  // Hide questions and show end screen
  document.getElementById('questions').classList.add('hide');
  document.getElementById('end-screen').classList.remove('hide');

  // Display the final score
  document.getElementById('final-score').textContent = timeLeft;

  // Get existing high scores from local storage or initialize an empty array
  var highScores = JSON.parse(localStorage.getItem('highScores')) || [];

  // Prompt the user for their initials only if the score is not zero
  if (timeLeft > 0) {
    var initials = prompt("Enter your initials:");

    // Create a new score object
    var newScore = {
      initials: initials,
      score: timeLeft
    };

    // Add the new score to the high scores array
    highScores.push(newScore);

    // Save the updated high scores back to local storage
    localStorage.setItem('highScores', JSON.stringify(highScores));
  }
}


// Call startQuiz when the start button is clicked
document.getElementById('start').addEventListener('click', startQuiz);