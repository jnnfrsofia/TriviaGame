
// Grab html elements
var right = $("#right")[0];
console.log(right);

var wrong = $("#wrong")[0];
console.log(wrong);

var startGame = $("#start-game")[0];
console.log(startGame);

var restart = $("#restart")[0];
console.log(restart);

var startArea = $("#start-area")[0];
console.log(startArea);

var next = $(".next");
console.log(next);

var question = $(".question");
console.log(question);

// Create a working timer
var questionCounter = 0;
var timeCounter = 10;
var correctAnswersCounter = 0;
var wrongAnswersCounter = 0;
var timer;

// Every time this function runs take 1 away from time Counter
function countDownTo10() {
  // console log timeCounter
  console.log(timeCounter);
  // subtract 1 from timeCounter
  timeCounter--;
  $(".clock").html(timeCounter);
  if (timeCounter == 0) {
    console.log(timeCounter);
    clearInterval(timer);
    alert("Yikes-you \'re outta time!");
    resetTimer();
  }
}

// Create a function to reset timer
function resetTimer() {
  timeCounter = 10;
  console.log(timeCounter);
  questionSwitcher();
}

function questionSwitcher() {
  if (questionCounter === 0) {
    timer = setInterval(countDownTo10, 1000);
    $(question[0]).hide();
    $(question[1]).show();
    questionCounter++;
    
  } else if (questionCounter === 1) {
    timer = setInterval(countDownTo10, 1000);
    $(question[1]).hide();
    $(question[2]).show();
    questionCounter++;
    
  } else if (questionCounter === 2) {
    timer = setInterval(countDownTo10, 1000);
    $(question[2]).hide();
    $(question[3]).show();
    questionCounter++;
    
  } else if (questionCounter === 3) {
    timer = setInterval(countDownTo10, 1000);
    $(question[3]).hide();
    $(question[4]).show();
    questionCounter++;
    
  } else if (questionCounter === 4) {
    timer = setInterval(countDownTo10, 1000);
    $(question[4]).hide();
    $(question[5]).show();
    questionCounter++;
    displayScore();
  }
  else if (questionCounter === 5) {
    clearInterval(timer);
    $(question[5]).hide();
    $(question[6]).show();
    questionCounter++;
    displayScore();
  }
}

function displayScore(){
  $(right).text(correctAnswersCounter);
  $(wrong).text(wrongAnswersCounter);
}


$(startGame).on("click", function() {
  $(startArea).hide();
  $(question[0]).show();
  questionCounter = 0;
  correctAnswersCounter = 0;
  wrongAnswersCounter = 0;
  timer = setInterval(countDownTo10, 1000);
});

$(question).on("click", function() {
  if (questionCounter === 0) {
    $(question[0]).hide();
    $(question[1]).show();
    questionCounter++;
  } else if (questionCounter === 1) {
    $(question[1]).hide();
    $(question[2]).show();
    questionCounter++;
  } else if (questionCounter === 2) {
    $(question[2]).hide();
    $(question[3]).show();
    questionCounter++;
  } else if (questionCounter === 3) {
    $(question[3]).hide();
    $(question[4]).show();
    questionCounter++;
  } else if (questionCounter === 4) {
    $(question[4]).hide();
    $(question[5]).show();
    questionCounter++;
    displayScore();
  }
  else if (questionCounter === 5) {
    $(question[5]).hide();
    $(question[6]).show();
    questionCounter++;
    displayScore();
  }
});

$(restart).on("click", function() {
  $(question[6]).hide();
  $(startArea).show();
});

$("input").on("click", function() {
  console.log(this);
  console.log(this.value);
  if(this.value == "true") {
    correctAnswersCounter++;
  } else if (this.value = "false") {
    wrongAnswersCounter++;

  }
});


//TIMER FUNCTION


//FUNCTION TO START THE GAME
//when the start button is clicked, first question will appear on the page
//start button will disappear
//counter will be set to zero
//the timer will start counting down from 30 seconds
//if the user answers the question, the next question will appear
//if the user doesn't answer the question before timer runs out, the next question will appear and unanswered counter will ++



//FUNCTION WHERE USER REACHES END OF GAME

//will need to check which questions the user answered correctly and incorrectly
//update the correct and incorrect counters appropriately
//display the users correct answers and incorrect answers
//call the reset game function

//FUNCTION TO REPLAY GAME
//when the replay game button is clicked, the first question will appear on the page again (another for - loop)
////counter will be set to zero
//the timer will start counting down from 30 seconds
//if the user answers the question, the next question will appear
//if the user doesn't answer the question before timer runs out, the next question will appear and unanswered counter will ++




