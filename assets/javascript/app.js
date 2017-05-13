var correct = 0;
var incorrect = 0;
var unanswered = 0;
var userChoice = ();
var countStartNumber = 0;

//Questions Array
var questions = [
{
  q: "What year did the classic RomCom, When Harry Met Sally, premiere?",
  answer: ['1990', '1984', '1993', '1989'],
  correct: "1989",
  images: ""
}, 
{
  q: "Who is Keith's dream girl in Some Kind of Wonderful?",
  answer: ['Amanda Jones', 'Andie Walsh', 'Samantha Baker', 'Debbie Sullivan'],
  correct: "Amanda Jones",
  images: ""
}, 
{
  q: "In the 1998 film, You\'ve Got Mail, what is Kathleen\'s AOL screenname?",
  answer: ['Booklover', 'Shopgirl', 'Daisies', 'Twirlinggal'],
  correct: "Shopgirl",
  images: ""
}]

// <!-- question 4 -->
//       <p class="question">4. Which Jane Austen novel is the 1995 cult-classic, "Clueless", loosely based on?</p>
//       <ul class="answers">
//       <input type="radio" name="q4" value="a" id="q4a"><label for="q4a">Sense and Sensibility</label><br/>
//       <input type="radio" name="q4" value="b" id="q4b"><label for="q4b">Persuasion</label><br/>
//       <input type="radio" name="q4" value="c" id="q4c"><label for="q4c">Emma</label><br/>
//       <input type="radio" name="q4" value="d" id="q4d"><label for="q4d">Mansfield Park</label><br/>
//       </ul>
//       <!-- question 5 -->
//       <p class="question">5. In what city does "10 Things I Hate About You" take place?</p>
//       <ul class="answers">
//       <input type="radio" name="q5" value="a" id="q5a"><label for="q5a">Portland</label><br/>
//       <input type="radio" name="q5" value="b" id="q5b"><label for="q5b">Boston</label><br/>
//       <input type="radio" name="q5" value="c" id="q5c"><label for="q5c">Seattle</label><br/>
//       <input type="radio" name="q5" value="d" id="q5d"><label for="q5d">Chicago</label><br/>
//       </ul>

//       <!-- question 6 -->
//       <p class="question">6. In "Love, Actually" what language does Jamie (Colin Firth) propose to Aurelia (Sienna Guillory)?</p>
//       <ul class="answers">
//       <input type="radio" name="q6" value="a" id="q6a"><label for="q6a">Spanish</label><br/>
//       <input type="radio" name="q6" value="b" id="q6b"><label for="q6b">French</label><br/>
//       <input type="radio" name="q6" value="c" id="q6c"><label for="q6c">English</label><br/>
//       <input type="radio" name="q6" value="d" id="q6d"><label for="q6d">Portugese</label><br/>
//       </ul>





//Starts the game
function newGame() {

  alert("You will have 30 seconds for each question. \n You can now begin the game");
  $(".timer").append("<b>Timer: 00:00</b>");

  for (var i = 0; i < questions.length; i++) {
     timer = setInterval(game.countdown, 1000);
     $(".timer").append(timer);
     console.log(questions[i].q);
     $(".question").html('<h2>' + questions[i].q + '</h2>' );
     $(".answer").html('<form><p><input type="radio" id="myRadio" value="'+questions[i].answer[0]+'">  ' + questions[i].answer[0] + '</p>'
     + '<p><input type="radio" id="myRadio" value="'+questions[i].answer[1]+'">  ' + questions[i].answer[1] + '</p>'
     + '<p><input type="radio" id="myRadio" value="'+questions[i].answer[2]+'">  ' + questions[i].answer[2] + '</p>'
     + '<p><input type="radio" id="myRadio" value="'+questions[i].answer[3]+'">  ' + questions[i].answer[3] + '</p>');
     var x = document.getElementById("myRadio").value;
     document.getElementById("demo").innerHTML = x;




// console.log(questions[i].q);
// console.log(questions[i].answer);
// console.log(questions[i].correct);
      //If correct answer
      //Get click event
      //add 1 to correct counter
      //show correct answer message
      //Give 5 seconds before moving to next question
      //If last question, go to final message
      //If wrong answer
      //Get click event
      //add 1 to incorrect counter
      //show incorrect answer message
      //Give 5 seconds before moving to next question
      //If last question, go to final message
      //If unanswered
      //Get click event
      //add 1 to unanswered counter
      //show unanswered answer message
      //Give 5 seconds before moving to next question
      //If last question go to final message    

    if (questions[i].correct === userChoice) {
      correct++;
      console.log("Correct: " + correct + " | Incorrect: " + incorrect + " | Unanswered: " + unanswered);
    } else if (choice === null) {
      unanswered++;
      console.log("Correct: " + correct + " | Incorrect: " + incorrect + " | Unanswered: " + unanswered);
    } else {
      incorrect++;
      console.log("Correct: " + correct + " | Incorrect: " + incorrect + " | Unanswered: " + unanswered);
    }
  }
}
 //end newGame function

$('.start').click(newGame);

//  //Button that starts the game
//  // question appears
$(".question").each(function(index, questions) {

  for (var i = 0; i < questions.length; i++) {
    questions[i]
    console.log(questions[i]);
  }

  $(".questions").show("complete");
  console.log('Wow');
});


//need to show answers

var game = {
    questions: questions,
    currentQuestion: questions[0],
    counter: countStartNumber,
    correct: 0,
    incorrect: 0,
    countdown: function() {
      game.counter--;
      $('#counter-number').html(game.counter);

      if (game.counter === 0) {
        console.log('TIME UP');
        game.timeUp();
      }
    
  },
  //timer needs to start
  // timer counts down from 30sec
   loadQuestion: function(){
     timer = setInterval(game.countdown, 1000);
     var panel = document.getElementByClassName('Timer');
     console.log(panel);
     panel.html('<h2>' + questions[this.currentQuestion].question + '</h2>' );
     for (var i = 0; i<questions[this.currentQuestion].answers.length; i++){
       panel.append('<button class="answer-button" id="button"' + 'data-name="' + questions[this.currentQuestion].answers[i] + '">' + questions[this.currentQuestion].answers[i]+ '</button>');
     }
     }
     }//,
  //  timeUp: function (){
  //    clearInterval(timer);
  //    $('#counter-number').html(game.counter);

  //    panel.html('<h2>Out of Time!</h2>');
  //    panel.append('<h3>The Correct Answer was: ' + questions[this.currentQuestion].correctAnswer);
  //    panel.append('<img src="' + questions[this.currentQuestion].image + '" />');

  //    if (game.currentQuestion === questions.length - 1){
  //      setTimeout(game.results, 3 * 1000);
  //    } else {
  //      setTimeout(game.nextQuestion, 3 * 1000);
  //    }
  //  }



  //After last question, 
  //show counter message
  //reset button underneath
  // function end() {
  //   $('.score').append("<div>Correct Answers: " + correct + "\n");
  //   $('.score').append("<div>Incorrect Answers: " + incorrect + "\n");
  //   $('.score').append("<div>Timed out: " + unanswered + "\n");
  // };

function reset() {
  //TODO - Make a clear all divs 
  $(".question").html("<div></div>");
  $(".answer").html("<div></div>");
  $(".score").html("<div></div>");
  $(".timer").html("<div></div>");
  let correct = 0;
  let incorrect = 0;
  let unanswered = 0;
  //  $(correct, incorrect, unanswered) = 0;
  console.log("score: " + correct + incorrect + unanswered);
};
$('.resetbtn').click(reset);

