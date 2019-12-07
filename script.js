var mainEl = document.getElementById("main");
var timerEl = document.getElementById("countdown");
var correctScoreEl = document.getElementById("score");
// var wrongScoreEl = document.getElementById("wrongScore");
var totalEl = document.getElementById("totalScore");
var button1 = document.getElementById("btn1");
var button2 = document.getElementById("btn2");
var button3 = document.getElementById("btn3");
var button4 = document.getElementById("btn4");
var startButton = document.getElementById("startBtn");
var bodyEl = document.createElement("div");
var questionEl = document.getElementById("questionBox");
var questionTitle = document.getElementById("questionTitleLabel");
var questions = [
  {
    title: "Commonly used data types DO NOT include:",
    choices: ["strings", "booleans", "alerts", "numbers"],
    answer: "3"
  },
  {
    title: "The condition in an if / else statement is enclosed within ____.",
    choices: ["quotes", "curly brackets", "parentheses", "square brackets"],
    answer: "3"
  },
];
var correctAns = 0;
var wrongAns = 0;
var timeLeft = questions.length * 15;
var i = 0;
var timeInterval = 0;


//clear the screen elements
questionEl.style.display = "none";
questionTitle.style.display = "none";
button1.style.display = "none";
button2.style.display = "none";
button3.style.display = "none";
button4.style.display = "none";


function questionDisplay() {
  questionEl.style.display = "block";
  questionTitle.style.display = "block";
  button1.style.display = "block";
  button2.style.display = "block";
  button3.style.display = "block";
  button4.style.display = "block";
  questionEl.textContent = questions[0 + i].title;
  btn1.textContent = questions[0 + i].choices[0];
  btn2.textContent = questions[0 + i].choices[1];
  btn3.textContent = questions[0 + i].choices[2];
  btn4.textContent = questions[0 + i].choices[3];
  button1.addEventListener("click", function () {
    checkAnswer(button1.value)
  });
  button2.addEventListener("click", function () {
    checkAnswer(button2.value)
  });
  button3.addEventListener("click", function () {
    checkAnswer(button3.value)
  });
  button4.addEventListener("click", function () {
    checkAnswer(button4.value)
  });
}



function checkAnswer(value) {
  if (value === questions[i].answer) {
    correctAns++;
  } else {
    wrongAns++;
    timeInterval - 5;
    timer();
  }

  i++;
  correctScore();
  if (i === questions.length) {
    finalDisplay();
  }
  questionDisplay();
}

// var quizBegin = confirm("Are you Ready to take the test?");

function timer() {
  timeInterval = setInterval(function () {
    timerEl.textContent = timeLeft + " seconds remaining";
    timeLeft--;
    
    if (timeLeft === 0) {
      timerEl.textContent = "";
      finalDisplay();
      clearInterval(timeInterval);
    }

  }, 1000);
}

function correctScore() {
  correctScoreEl.textContent = "Your correct Answers are : " + correctAns;
}
// function wrongScore() {
//   wrongScoreEl.textContent = "Your wrong Answers are " + wrongAns;
// }

//start the quiz
startButton.addEventListener("click", function () {
  timer();
  questionDisplay();
  correctScore();
  finalScore();
})

// final score function
function finalScore() {
  totalEl.textContent = "Your total score is : " + (correctAns - wrongAns);
}

function finalDisplay() {
  questionEl.style.display = "none";
  questionTitle.style.display = "none";
  button1.style.display = "none";
  button2.style.display = "none";
  button3.style.display = "none";
  button4.style.display = "none";
  finalScore();
}

// //submit button function
// function submitButton() {
//   event.stopPropagation;
//   console.log("submitted");
//   i++;
// }

// run the functions

// wrongScore();


