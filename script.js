//declare all DOM, start button
var startScreenEl = document.getElementById("startScreen");
console.log(startScreenEl);
var codeQuizEl = document.getElementById("codeQuiz");
var startBtnEl = document.getElementById("startBtn");
var questionsEl = document.getElementById("questions");
var answerChoicesEl = document.getElementById("answerChoices");
var feedbackEl = document.getElementById("feedback");

$(document).ready(function(){
//declare functions to display questions/answer choices
function startQuiz(event){
    event.preventDefault()
    startScreenEl.setAttribute("class", "hide");
    console.log(startScreenEl);
    questionsEl.removeAttribute("class");
    
    getQuestion();
}

var currentIndex = 0;
function getQuestion(){
    var currentQuestion = question[currentIndex];
    var title = document.getElementById("questionTitle");
    title.textContent = currentQuestion.questionTitle;
    console.log(title);
    
    //for each loop
    
    function randomAnswerGenerator(){
        // var mulitpleChoice = [Math.floor(Math.random() * currentQuestion.answerChoices.length),3];

        var mulitpleChoice = []; //generate random index to display multiple choice answers
        do {
            var answer = currentQuestion.answerChoices[Math.floor(Math.random() * currentQuestion.answerChoices.length)];
            if (mulitpleChoice.indexOf(answer) === -1) {
                mulitpleChoice.push(answer);
            }
        }while (mulitpleChoice.length < currentQuestion.answerChoices.length);
      console.log(mulitpleChoice);

      /* create a radio button */
        function createRadio(answerArr){
            for (var i = 0; i < answerArr.length; i++){
                var newLabel = document.createElement("label");
                var newRadio = document.createElement("input");
                newRadio.setAttribute("type", "radio");
                newRadio.setAttribute("value", answerArr[i]);
                newLabel.append(newRadio);
                newLabel.append(answerArr[i]);
                answerChoicesEl.append(newLabel);
                newRadio.setAttribute("name", "select");
                newRadio.setAttribute("class", "myRadio");

                feedbackEl.removeAttribute("class");

                $( "input" ).on( "click", function() {

                    if ($( "input:checked" ).val() === currentQuestion.correctAnswer){
                        $( "#feedback" ).html( "Correct Answer!" );
                    }
                    else{
                        $( "#feedback" ).html( "Incorrect Answer" );
                    }
                  });

                // function checkAnswer() {
                //     var x = document.querySelector(".myRadio:checked").value;
                //     document.getElementById("feedback").innerHTML = x;
                //     console.log(x);
                    
                //     // if(x === correctAnswer){
                //     //     alert("Your are a - " + radioValue);
                //     //}

                //   }
                //     checkAnswer();

                  


            }
            
               

    }   
    createRadio(mulitpleChoice);
      
        }
    //create element button with class and value and textContent
    //on each click on radio buttons, create another function within for loop: determine right or wrong answer outside
    randomAnswerGenerator();
    


        // if( newRadio = document.querySelector("myRadio").checked === correctAnswer){
        //     feedbackEl.innerHTML = "Correct!"
        // }
        // else{
        //     feedbackEl.innerHTML = "Incorrect!"
        // }
        
    
}



$("#startBtn").on("click", startQuiz);
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