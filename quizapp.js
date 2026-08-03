// now build form skratch
const mcqs = [
  {
    question: "What is the capital of France?",
    options: ["Berlin", "Madrid", "Paris", "Rome"],
    answer: "Paris",
  },
  {
    question: "Which language runs in a web browser?",
    options: ["Java", "PHP", "Python", "JavaScript"],
    answer: "JavaScript",
  },
  {
    question: "What does CSS stand for?",
    options: [
      "Central Style Sheets",
      "Cascading Style Sheets",
      "Cascading Simple Sheets",
      "Cars SUVs Sailboats",
    ],
    answer: "Cascading Style Sheets",
  },
   {
    question: "Which of the following is a programming language??",
    options: [
      "HTML",
      "Python",
      "SQL",
      "HTTP",
    ],
    answer: "Python",
  },
];
let correctindex = 0;
const show = document.querySelector(".show");

const next = document.getElementById("nextBtn");
const questionElement = document.querySelector(".quizheading");
const choices = document.querySelector(".options");
function loadQuestion() {
  const checkans = mcqs[correctindex];

  questionElement.textContent = checkans.question;
  choices.innerHTML = "";
 show.textContent = "";
  // loop through options
  checkans.options.forEach((element) => {
    const button = document.createElement("button");
    button.textContent = element;
    choices.appendChild(button);

    button.addEventListener("click", () => {
      if (button.textContent === checkans.answer) {
        show.textContent = "Right";
        show.style.color = "green";
      } else {
        show.textContent = "Wrong";
        show.style.color = "red";
      }
    });
  });
}

next.addEventListener("click", () => {
  correctindex++;
  if (correctindex < mcqs.length) {
    loadQuestion();
  } else {
    questionElement.textContent = "Quiz Completed";
    show.textContent=`Correct MCQ's are ${correctindex}`;
    choices.innerHTML = "";
    next.style.display = "none";
  }
});
loadQuestion();
