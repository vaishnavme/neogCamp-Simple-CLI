var readlineSync = require("readline-sync");

var score = 0;

var userName = readlineSync.question("What's your name? ");

console.log("\nWelcome " + userName + " to DO YOU KNOW Vaishnav?");

var highScores = [
  {
    name: "Atharav",
    score: 8,
  },

  {
    name: "Pranay",
    score: 4,
  },
];

function play(question, answer) {
  var userAnswer = readlineSync.question(question);

  if (userAnswer.toUpperCase() === answer.toUpperCase()) {
    console.log("right!");
    score = score + 2;
  } else {
    console.log("wrong!");
    score = score - 1;
  }
  console.log("current score: ", score);
  console.log("-------------");
}

var questions = [
  {
    question: "Where do I live? ",
    answer: "Amravati",
  },
  {
    question: "My favorite superhero would be? ",
    answer: "Iron Man",
  },
  {
    question: "Where do I Study? ",
    answer: "PRMITR",
  },
  {
    question: "Favorite Computer Game? ",
    answer: "GTA V",
  },
];

for (var i = 0; i < questions.length; i++) {
  var currentQuestion = questions[i];
  play(currentQuestion.question, currentQuestion.answer);
}

console.log("YAY! You SCORED: ", score);

console.log("Check out the scores");
