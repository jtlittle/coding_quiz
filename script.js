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
  {
    title: "Which of the following are loops?",
    choices: ["foreach", "while", "for", "if/else"],
    answer: "4"
  },
  {
    title: "Which symbols are used in an array?",
    choices: ["[ ]", "( )", "' '", "&&"],
    answer: "1"
  },
  {
    title: "What syntax do you put around a string?",
    choices: ["cashtags", "parenthesis", "backticks", "quotations"],
    answer: "4"
  },
  {
    title: "java is to javascript as ham is to ",
    choices: ["squirrels", "hamsters", "alligators", "manatees"],
    answer: "2"
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
totalEl.style.display = "none";
button1.style.display = "none";
button2.style.display = "none";
button3.style.display = "none";
button4.style.display = "none";

// this function displays the questions
function questionDisplay() {
  if (i >= questions.length) {
    clearInterval(timeInterval);
    return console.log("game over");

  }
  //displa the questions and get rid of the start button
  startButton.style.display = "none";
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
  if (i >= questions.length) {
    finalDisplay();
  } else
  questionDisplay();
}


//this function calculates the timer and decriments it
function timer() {
  clearInterval(timeInterval);
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

//this function runs when there is a correct score
function correctScore() {
  correctScoreEl.textContent = "Correct Answers : " + correctAns;
}


//start the quiz function
startButton.addEventListener("click", function () {
  timer();
  totalEl.style.display = "none";
  questionDisplay();
  correctScore();
  finalScore();
})

// final score function
function finalScore() {
  totalEl.style.display = "block";
  totalEl.textContent = "Total Score: " + (correctAns - wrongAns);
}

//final display clears question elements
function finalDisplay() {
  clearInterval(timeInterval);
  // questionEl.style.display = "none";
  questionTitle.style.display = "none";
  button1.style.display = "none";
  button2.style.display = "none";
  button3.style.display = "none";
  button4.style.display = "none";
  var userScore = prompt("Enter your initials to the high scores");
questionEl.textContent = (userScore + " " + timeInterval);
  finalScore();
}



