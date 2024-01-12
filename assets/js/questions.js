// questions.js
let totalTime = 60; // Set the total time for the quiz in seconds

const quizQuestions = [
  {
    question: 'What is JavaScript?',
    choices: ['A programming language', 'A type of coffee', 'A planet'],
    correctAnswer: 'A programming language'
  },
  {
    question: 'What is HTML?',
    choices: ['A programming language', 'A markup language', 'A type of coffee'],
    correctAnswer: 'A markup language'
  },
  {
    question: 'What is CSS?',
    choices: ['A programming language', 'A styling language', 'A type of coffee'],
    correctAnswer: 'A styling language'
  }
];

// Function to display the current question
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
