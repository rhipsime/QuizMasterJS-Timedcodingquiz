// logic.js

document.addEventListener('DOMContentLoaded', function () {
  const quizQuestions = [
    {
      question: 'What is JavaScript?',
      choices: ['A programming language', 'A type of coffee', 'A planet'],
      correctAnswer: 'A programming language'
    },
    // Add more questions as needed
  ];

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

  // Add more variables as needed

  function displayQuestion() {
    const questionTitle = document.getElementById('question-title');
    const choicesContainer = document.getElementById('choices');

    // Check if there are still questions left
    if (currentQuestionIndex < quizQuestions.length) {
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
      // All questions have been answered, end the quiz or show a summary
      endQuiz();
    }
  }

  function startQuiz() {
    // Start the timer when the quiz begins
    startTimer();
  
    // Other initialization code if needed
    displayQuestion();
  }

  {
    const selectedAnswer = quizQuestions[currentQuestionIndex].choices[choiceIndex];
    const correctAnswer = quizQuestions[currentQuestionIndex].correctAnswer;

    // Check if the selected answer is correct
    if (selectedAnswer === correctAnswer) {
      // Increase the score if the answer is correct
      score++;
    } else {
      // Subtract time if the answer is incorrect
      totalTime -= 5; // Subtract 5 seconds for incorrect answers
    }

    // Move to the next question
    currentQuestionIndex++;

    // Display the next question or end the quiz
    displayQuestion();
  }

  function endQuiz() {
    // Implement logic to end the quiz, show the final score, and handle user input
  }

  // Add an event listener to the "Start Quiz" button
  const startButton = document.getElementById('start');
  startButton.addEventListener('click', startQuiz);
});
