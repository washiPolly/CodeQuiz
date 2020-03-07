//declare all DOM, start button
var startScreen = document.getElementById("startScreen");
var codeQuiz = document.getElementById("codeQuiz");
var startBtn = document.getElementById("startBtn");
var questions = document.getElementById("questions");
var answerChoices = document.getElementById("answerChoices");


//declare functions to display questions/answer choices
function startQuiz(){
    startScreen.setAttribute("class", "hide");
    questions.removeAttribute("class");
    getQuestion();
}

var currentIndex = 0;
function getQuestion(){
    var currentQuestion = question[currentIndex];
    var title = document.getElementById("questionTitle");
    title.textContent = currentQuestion.questionTitle; 

    //for each loop
    //create element button with class and value and textContent
    //on each click on radio buttons, create another function within for loop: determine right or wrong answer outside
    for()
}



startBtn.onclick = startQuiz;

//Timer Counter (wrong answer deduct time)
//enter high score

//create variables for Questions, Answers, CorrectAnswer, Counter
//create object with Question and Answer arrays
//write loop that displays each Question/Answer in html
//evenlistener for if correct Answer is selected then display Solution message, add Counter
//add timer
//create Div to show "All Done" and add form to keep high score