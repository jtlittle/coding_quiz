var mainEl = document.getElementById("main");
var timerEl = document.getElementById("countdown");
var scoreEl = document.getElementById("score");
var totalEl = document.getElementById("totalScore");
var button1 = document.getElementById("btn1");
var button2 = document.getElementById("btn2");
var button3 = document.getElementById("btn3");
var button4 = document.getElementById("btn4");
var bodyEl = document.createElement("div");
var questionEl = document.getElementById("questionBox");
var questions = [
  {
    title: "Commonly used data types DO NOT include:",
    choices: ["strings", "booleans", "alerts", "numbers"],
    answer: "alerts"
  },
  {
    title: "The condition in an if / else statement is enclosed within ____.",
    choices: ["quotes", "curly brackets", "parentheses", "square brackets"],
    answer: "parentheses"
  },
];
var correctAns = 0;
var wrongAns = 0;
var timeLeft = questions.length * 15;
var i = 0;

function questionDisplay () {
    questionEl.textContent = questions [0 + i].title;
    btn1.textContent = questions [0 + i].choices [0];
    btn2.textContent = questions [0 + i].choices [1];
    btn3.textContent = questions [0 + i].choices [2];
    btn4.textContent = questions [0 + i].choices [3];
}


// var quizBegin = confirm("Are you Ready to take the test?");


  function timer() {


    var timeInterval = setInterval(function () {
      timerEl.textContent = timeLeft + " seconds remaining";
      timeLeft--;

      if (timeLeft === 0) {
        timerEl.textContent = "";
        finalScore();
        clearInterval(timeInterval);
      }

    }, 1000);
  }

  function score() {
    scoreEl.textContent = "Your correct Answers are " + correctAns + " " + "Your wrong Answers are " + wrongAns;
  }

// final score function
function finalScore() {
  totalEl.textContent = "Your total score is : " + (correctAns-wrongAns);
}

//submit button function
function submitButton() {
  event.stopPropagation;
  console.log("submitted");
  i++;
}

// run the timer
timer();
score ();
finalScore();
questionDisplay();


//submit button
document.getElementById("submit").addEventListener("click", submitButton);

// function for the questions to run
function questions () {

}
