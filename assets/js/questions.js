// questions.js
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

function displayQuestion(questionIndex) {
  const currentQuestion = quizQuestions[questionIndex];
  // Use the currentQuestion to display on the UI as needed
  console.log(currentQuestion.question);
  console.log(currentQuestion.choices);
  console.log(currentQuestion.correctAnswer);
}

