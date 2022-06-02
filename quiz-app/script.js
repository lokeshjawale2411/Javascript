const quizData = [
  {
    question: "How old is Lokesh?",
    a: "10",
    b: "25",
    c: "20",
    d: "18",
    correct: "b",
  },
  {
    question: "What is the most used programming language in 2022?",
    a: "Java",
    b: "C",
    c: "Python",
    d: "JavaScript",
    correct: "c",
  },
  {
    question: "Who is the President Of India?",
    a: "Narendra Modi",
    b: "Amit Shah",
    c: "Rajnath singh",
    d: "Mamta Banarjee",
    correct: "a",
  },
  {
    question: "What does HTML stands for?",
    a: "HyperText markup Language",
    b: "Cascading Style Sheet",
    c: "Json Object Notation",
    d: "Helicopters Terminals Motorboats Lamboginis ",
    correct: "a",
  },
  {
    question: "What year was JavaScript launched?",
    a: "2019",
    b: "2018",
    c: "1995",
    d: "1994",
    correct: "c",
  },
];

const answersEls = document.querySelectorAll(".answer");
const quiz = document.getElementById("quiz");
const questionEl = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitBtn = document.getElementById("submit");
let currentQuiz = 0;
let score = 0;
loadQuiz();

function loadQuiz() {
  deselectAnswers();
  const currentQuizData = quizData[currentQuiz];
  questionEl.innerHTML = currentQuizData.question;
  a_text.innerHTML = currentQuizData.a;
  b_text.innerHTML = currentQuizData.b;
  c_text.innerHTML = currentQuizData.c;
  d_text.innerHTML = currentQuizData.d;
  // currentQuestion++;
}

function getSelected() {
  let answer = undefined;

  answersEls.forEach((answerEl) => {
    if (answerEl.checked) {
      answer = answerEl.id;
    }
    if (answerEl.undefined) {
      answer = undefined;
    }
  });

  return answer;
}

function deselectAnswers() {
  answersEls.forEach((answerEl) => {
    answerEl.checked = false;
  });
}

submitBtn.addEventListener("click", () => {
  //check to see the answer
  const answer1 = getSelected();
  console.log(answer1);

  if (answer1)
    if (answer1 === quizData[currentQuiz].correct) {
      score++;
    }
  {
    if (answer1 != undefined) {
      currentQuiz++;
    } else {
      alert("please select option and then submit!");
    }

    if (currentQuiz < quizData.length) {
      loadQuiz();
    } else {
      //TODO:Show results
      quiz.innerHTML = `<h2>You answeres 
      correctly at ${score}/${quizData.length} questions.</h2>
      <button onclick="location.reload()">Reload</
       button>`;
    }
  }
});
