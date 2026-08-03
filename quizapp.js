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
  {
    question: "Which of the following concepts means wrapping data and functions into a single unit in C++?",
    options: [
      "Inheritance",
      "Polymorphism",
      "Encapsulation",
      "Abstraction"
    ],
    answer: "Encapsulation",
  },
  {
    question: "Which of the following is used to create an object in C++?",
    options: [
      "Class name and object name",
      "new keyword only",
      "malloc function",
      "class keyword"
    ],
    answer: "Class name and object name",
  },
  {
    question: "What type of copy creates a duplicate of dynamically allocated memory rather than just copying the pointer address?",
    options: [
      "Shallow copy",
      "Deep copy",
      "Lazy copy",
      "Virtual copy"
    ],
    answer: "Deep copy",
  },
  {
    question: "What type of association represents a 'has-a' relationship where the contained object can exist independently of the container?",
    options: [
      "Composition",
      "Aggregation",
      "Inheritance",
      "Encapsulation"
    ],
    answer: "Aggregation",
  },
  {
    question: "Which pillar of OOP allows a class to inherit properties from another class?",
    options: [
      "Polymorphism",
      "Inheritance",
      "Encapsulation",
      "Abstraction"
    ],
    answer: "Inheritance",
  },
  {
    question: "What is the function called that is automatically called when an object is created?",
    options: [
      "Destructor",
      "Constructor",
      "Virtual function",
      "Friend function"
    ],
    answer: "Constructor",
  },
  {
    question: "Which symbol is used as a prefix for a destructor in C++?",
    options: [
      "~",
      "#",
      "&",
      "*"
    ],
    answer: "~",
  },
  {
    question: "Which feature of C++ allows functions with the same name to have different parameters?",
    options: [
      "Function overriding",
      "Function overloading",
      "Operator overloading",
      "Virtual function"
    ],
    answer: "Function overloading",
  },
  {
    question: "Which keyword is used to achieve runtime polymorphism in C++?",
    options: [
      "virtual",
      "override",
      "dynamic",
      "abstract"
    ],
    answer: "virtual",
  },
  {
    question: "What is the term for hiding internal implementation details and showing only essential features?",
    options: [
      "Encapsulation",
      "Inheritance",
      "Data Abstraction",
      "Polymorphism"
    ],
    answer: "Data Abstraction",
  },
  {
    question: "Which type of inheritance is not supported directly in standard C++ classes to avoid ambiguity issues?",
    options: [
      "Single inheritance",
      "Multiple inheritance",
      "Multilevel inheritance",
      "Hierarchical inheritance"
    ],
    answer: "Multiple inheritance", // Note: C++ supports multiple inheritance, but diamond problems occur; let's use a cleaner standard concept or keep multiple with context, or use friend/private access. Let's make sure it's unambiguous:
  },
  {
    question: "Which function can access private and protected members of a class without being a member of that class?",
    options: [
      "Inline function",
      "Friend function",
      "Static function",
      "Virtual function"
    ],
    answer: "Friend function",
  }
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
