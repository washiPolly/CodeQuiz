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

$(document).ready(function(){
//declare functions to display questions/answer choices
function startQuiz(event){
    event.preventDefault()
    startScreenEl.setAttribute("class", "hide");
    questionsEl.removeAttribute("class");
    
    getQuestion();
}


var scoreCounter = 0;
var currentIndex = 0;

function getQuestion(){

    var currentQuestion = question[currentIndex];
    var title = document.getElementById("questionTitle");
    title.textContent = currentQuestion.questionTitle;
    console.log(title);
    nextDivEl.setAttribute("class", "hide");
    
    //for each loop
    
    function randomAnswerGenerator(){

        var mulitpleChoice = []; //generate random index to display multiple choice answers
        do {
            var answer = currentQuestion.answerChoices[Math.floor(Math.random() * currentQuestion.answerChoices.length)];
            if (mulitpleChoice.indexOf(answer) === -1) {
                mulitpleChoice.push(answer);
            }
        }while (mulitpleChoice.length < currentQuestion.answerChoices.length);
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
                

                $( "input" ).on( "click", function() {
                    $(".myRadio").attr("disabled", true);
                    
                    
                    if ($( "input:checked" ).val() === currentQuestion.correctAnswer){
                        $( "#feedback" ).html( "Correct Answer!" );
                        scoreCounter ++;
                        nextDivEl.removeAttribute("class");
                        console.log("scoreCounter: " + scoreCounter);
                        
                        // console.log("currentIndex: " + currentIndex);
                        document.getElementById("scoreCounter").textContent = scoreCounter;
                    }
                    else{
                        $( "#feedback" ).html( "Incorrect Answer" );
                        nextDivEl.removeAttribute("class");
                    }

                  });





                  


            }
            
               

    }   
    createRadio(mulitpleChoice);
      
        }
    //create element button with class and value and textContent
    //on each click on radio buttons, create another function within for loop: determine right or wrong answer outside
    randomAnswerGenerator();

}


function nextQuestion(event){
    event.preventDefault()
    answerChoicesEl.innerHTML = " ";
    feedbackEl.innerHTML = " ";
  for (var i = 1; i < 10; i++){
    currentIndex += 1;
    getQuestion();
    createRadio(mulitpleChoice);
    randomAnswerGenerator();
  }
  
     
           
}

function startTimer(){
    var timeLeft = 100;
    var timeInterval = setInterval(function() {
        timerDisplayEl.textContent = timeLeft + " seconds";
        timeLeft--;
    
        if (timeLeft === 0) {
          timerDisplayEl.textContent = "";
          clearInterval(timeInterval);
          timesUp();
          
        }
    
      }, 1000);
    }
    
function timesUp(){
    alert("You ran out of time 😢");
    startQuiz();
}

$("#startBtn").on("click", startQuiz);
$("#startBtn").on("click", startTimer);
$("#nextBtn").on("click", nextQuestion);


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