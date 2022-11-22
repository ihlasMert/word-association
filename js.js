const scoreDisplay = document.getElementById("score-display");
const questionDisplay = document.getElementById("question-display");

const questions = [
  {
    quiz: ["value", "estimate", "evaluate"],
    options: ["jury", "assess"],
    correct: 2,
  },
  {
    quiz: ["close", "next", "near"],
    options: ["trace", "adjacent"],
    correct: 2,
  },
  {
    quiz: ["assume", "insight", "weather"],
    options: ["forecast", "sustainable"],
    correct: 1,
  },
  {
    quiz: ["foreign", "national", "ethnic"],
    options: ["trace", "adjacent"],
    correct: 2,
  },
  {
    quiz: ["fast", "quick", "prompt"],
    options: ["charity", "rapid"],
    correct: 2,
  },
];

let score = 0;
scoreDisplay.textContent = score;

function populateQuestions() {
  questions.forEach((question) => {
    const questionBox = document.createElement("div");
    questionBox.classList.add("question-box");
    questionDisplay.append(questionBox)
  });
}
populateQuestions()