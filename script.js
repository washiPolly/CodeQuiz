//declare all DOM, start button
var startScreenEl = document.getElementById("startScreen");
console.log(startScreenEl);
var codeQuizEl = document.getElementById("codeQuiz");
var startBtnEl = document.getElementById("startBtn");
var questionsEl = document.getElementById("questions");
var answerChoicesEl = document.getElementById("answerChoices");
var feedbackEl = document.getElementById("feedback");
var nextDivEl = document.getElementById("nextDiv");
var timerDisplayEl = document.getElementById("timerDisplay");
var finalDivEl = document.getElementById("finalDiv");
var timesUpDiv = document.getElementById("timesUpDiv");
var userInitialsInput = document.getElementById("userInitials");
var highscoresResultsSpan = document.getElementById("highscoresResults");
var highscoreDivEl = document.getElementById("highscoreDiv");
var viewHighscoreEl = document.getElementById("viewHighscore")

var timeLeft = 75;

$(document).ready(function(){
//declare functions to display questions/answer choices
function startQuiz(event){
    event.preventDefault();
    startScreenEl.setAttribute("class", "hide");
    questionsEl.removeAttribute("class");
    
    getQuestion();
}


var scoreCounter = 0;
var currentIndex = 0;

function getQuestion(){
    if (currentIndex < 10){
    var currentQuestion = question[currentIndex];
    var title = document.getElementById("questionTitle");
    title.textContent = currentQuestion.questionTitle;
    // console.log(title);
    nextDivEl.setAttribute("class", "hide");
    
  
    
    function randomAnswerGenerator(){

        var mulitpleChoice = []; //generate random index to display multiple choice answers
        do {
            var answer = currentQuestion.answerChoices[Math.floor(Math.random() * currentQuestion.answerChoices.length)];
            if (mulitpleChoice.indexOf(answer) === -1) {
                mulitpleChoice.push(answer);
            }
     }while (mulitpleChoice.length < currentQuestion.answerChoices.length){
        // if(currentQuestion > 9 ){
       
        //     questionsEl.setAttribute("class", "hide");
        //     answerChoicesEl.createElement("class", "hide");
        //     feedbackEl.removeAttribute("class");
        //     finalDivEl.removeAttribute("class");
        //     console.log(currentQuestion);
        //     console.log(mulitpleChoice.length);
        //     console.log(currentQuestion.answerChoices.length);
            
        //  }
    };
    console.log(currentIndex);
    //   console.log(mulitpleChoice);
    
      /* create a radio button */
        function createRadio(answerArr){
            for (var i = 0; i < answerArr.length; i++){
                var newDiv = document.createElement("div");
                var newLabel = document.createElement("label");
                var newRadio = document.createElement("input");
                newRadio.setAttribute("type", "radio");
                newRadio.setAttribute("value", answerArr[i]);
                newLabel.append(newRadio);
                newLabel.append(answerArr[i]);
                answerChoicesEl.append(newLabel);
                newRadio.setAttribute("name", "select");
                newRadio.setAttribute("class", "myRadio");
                var div = document.createElement("div");
                document.getElementById("answerChoices").appendChild(div);

                feedbackEl.removeAttribute("class");


            }
            
            $( "input" ).on( "click", function() {
                $(".myRadio").attr("disabled", true);
                
                
                if ($( "input:checked" ).val() === currentQuestion.correctAnswer) {
                    $( "#feedback" ).html( "✔️ Correct Answer!" );
                    nextDivEl.setAttribute("class", "display");
                    console.log("scoreCounter: " + scoreCounter);
                    scoreCounter ++;
                    // console.log("currentIndex: " + currentIndex);
                    document.getElementById("scoreCounter").textContent = scoreCounter;
                }
                else{
                    $( "#feedback" ).html( "❌ Incorrect Answer" );
                    timeLeft = timeLeft - 5;
                    timesUpDiv.setAttribute("class","none");
                    nextDivEl.setAttribute("class","display");
                }

                

              }); 

    }   
    createRadio(mulitpleChoice);
      
        }
    //create element button with class and value and textContent
    //on each click on radio buttons, create another function within for loop: determine right or wrong answer outside
    randomAnswerGenerator();


}

else {
    questionsEl.setAttribute("class", "hide");
    answerChoicesEl.setAttribute("class", "hide");
    feedbackEl.setAttribute("class", "hide");
    finalDivEl.removeAttribute("class");
    nextDivEl.remove();
    document.querySelector(".timer").remove();
    timesUpDiv.remove();
}
}
function nextQuestion(event){
    event.preventDefault()
    answerChoicesEl.innerHTML = " ";
    feedbackEl.innerHTML = " ";
    timesUpDiv.setAttribute("class","hide");
  for (var i = 0; i < 9; i++){
    currentIndex += 1;
    // console.log(currentIndex);
    getQuestion();
    // createRadio(mulitpleChoice);
    // randomAnswerGenerator();
    return;
  }
  
     
           
}

function startTimer(){
    // var timeLeft = 15;
    var timeInterval = setInterval(function() {
        timerDisplayEl.textContent = timeLeft + " seconds";
        timeLeft--;
    
        if (timeLeft === 0) {
          timerDisplayEl.textContent = "😭😭😭";
          $(".myRadio").attr("disabled", true);
          timesUpDiv.setAttribute("class","hide");
        //   clearInterval(timeInterval);
          timesUp();
        }
        else if (timeLeft <= 0){
            timerDisplayEl.textContent = "😭😭😭";
            $(".myRadio").attr("disabled", true);
            timesUpDiv.setAttribute("class","hide");
            clearInterval(timeInterval);
            timesUp();
            
        }
    
      }, 1000);
    }
    
function timesUp(){
    // alert("You ran out of time! 😢 Please refresh the page to restart.");
    startQuiz();
}


function scoreBoard(event){
    event.preventDefault()
    
    timesUpDiv.remove();
      // Store
    var user = userInitialsInput.value.trim();
      //Set
    localStorage.setItem("user", JSON.stringify(user));

    
    
       // Retrieve
    var lastInput = JSON.parse(localStorage.getItem("user"));
   
    // highscoresResultsSpan.textContent = lastInput.prepend("<br><hr>" + lastInput);

    $("#viewHighscore").on("click",function(){
        viewHighscoreEl.setAttribute("class","hide");
        finalDivEl.setAttribute("class", "hide");
        highscoreDivEl.removeAttribute("class");
        $("#highscoresResults").prepend("<br><hr>" + "❤️ " + lastInput + " --  Score: " + scoreCounter);
    });

    // $("#highscoresResults").prepend("<br><hr>" + lastInput);
    console.log(user);
};

$("#viewHighscore").on("click",function(){
        viewHighscoreEl.setAttribute("class","hide");
        finalDivEl.setAttribute("class", "hide");
        highscoreDivEl.removeAttribute("class");
        $("#highscoresResults").prepend("<br><hr>" + "❤️ " + lastInput + " --  Score: " + scoreCounter);
    });


$("#startBtn").on("click", startQuiz);
$("#startBtn").on("click", startTimer);
$("#nextBtn").on("click", nextQuestion);
$("#initialBtn").on("click", scoreBoard);

$("#clearScoreBtn").on("click", function(){
    highscoresResults.value = "";
});


// startBtn.addEventListener("click", startQuiz);

//Timer Counter (wrong answer deduct time)
//enter high score

//create variables for Questions, Answers, CorrectAnswer, Counter
//create object with Question and Answer arrays
//write loop that displays each Question/Answer in html
//evenlistener for if correct Answer is selected then display Solution message, add Counter
//add timer
//create Div to show "All Done" and add form to keep high score




});