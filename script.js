const questionBank = [
    {
        prompt: "What markup language is used for styling webpages?",
        answer: "CSS",
        choices: ["CSS", "JavaScript", "HTML"]
    },
    {
        prompt: "What language uses the syntax let and const?",
        answer: "JavaScript",
        choices: ["CSS", "JavaScript", "HTML"]
    },
    {
        prompt: "What markup language is used for the skeleton of a webpage?",
        answer: "HTML",
        choices: ["CSS", "JavaScript", "HTML"]
    },
];
let choicesContainer = document.getElementById("questioncontainer");
let startBtn = document.getElementById("start");
let questions = document.getElementById("question");
let currentQuestion = 0;
let score = localStorage.getItem("score")

// function for setting the timer
function timer(){
    let sec = 15;
    let timer = setInterval(function(){
        document.getElementById('timer').innerHTML='00:'+sec;
        sec--;
        if (sec < 0) {
            clearInterval(timer);
            choicesContainer.innerHTML="Time's Up!";
        } 
    }, 1000);
}

// function for building the quiz
function beginQuiz() {
    timer();
    showQuestions();
 }

//  function for moving on to the next question
function nextQuestion() {
  currentQuestion++;
  showQuestions();
}

function showQuestions() {
    choicesContainer.innerHTML = "";
    let questionElement = document.createElement("p");
    questionElement.innerHTML = questionBank[currentQuestion].prompt;
    choicesContainer.appendChild(questionElement);

    let choicesBlock = document.createElement("div");
    for(var i = 0; i < questionBank[currentQuestion].choices.length; i++){
         let choicesBtns = document.createElement("button");
         choicesBtns.innerHTML = questionBank[currentQuestion].choices[i];
         choicesBtns.addEventListener("click", nextQuestion)
         choicesBlock.appendChild(choicesBtns);
    }
    choicesContainer.appendChild(choicesBlock);
}
 


 startBtn.onclick = beginQuiz;

