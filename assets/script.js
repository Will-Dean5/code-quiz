var state = 'start';
var startEl = document.querySelector("#start");
var quizEl = document.querySelector("#quiz");
var endEl = document.querySelector("#end");
var startBtn = document.querySelector("#startButton");
var submitScoreBtn = document.querySelector("#submitBtn");
var quizTitle = document.querySelector("#quizTitle");
var questionsEl = document.querySelector("#questions");
var titleEl = document.querySelector("#title");

var questions = [
    {
        question: 'What is 10 + 5',
        answers: ['115', '15', '20', '105'],
        correct: '15',
    },
    {
        question: 'How many stars are on the flag',
        answers: ['13', '45', '50', '30'],
        correct: '50',
    },
    {
        question: 'What color is a blueberry',
        answers: ['red', 'blue', 'purple', 'yellow'],
        correct: 'purple',
    },
    {
        question: 'Who was the first president',
        answers: ['G. Washington', 'A. Lincoln', 'FDR', 'B. Obama'],
        correct: 'G. Washington',
    },
];

var questionOrder = 0;
state = 'start';
function currentSelection() {
    if (state === 'start') {
        startEl.style.display = 'block';
        quizEl.style.display = 'none';
        endEl.style.display = 'none';
    }
    if (state === 'quiz') {
        startEl.style.display = 'none';
        quizEl.style.display = 'block';
        endEl.style.display = 'none';
        displayQuestion()
    }
    if (state === 'end') {
        startEl.style.display = 'none';
        quizEl.style.display = 'none';
        endEl.style.display = 'block';
    }
}


currentSelection()
function nextQuestion(event) {
    questionOrder ++;
    questionsEl.innerHTML = null 
    if(questionOrder < questions.length) {
        displayQuestion()
    } else {
        state = 'end'
        currentSelection()
    }
}



function displayQuestion() {
    state = 'quiz';
    var questionDisplay = questions[questionOrder];
    var questionH2 = document. createElement('h2');
        questionH2.textContent = questions[questionOrder].question
        questionsEl.appendChild(questionH2)
    for(i = 0; i < questions[questionOrder].answers.length; i ++) {
        
        buttonEl = document.createElement('button')
        buttonEl.textContent = questions[questionOrder].answers[i];
        buttonEl.addEventListener('click', nextQuestion)
        questionsEl.appendChild(buttonEl);

    }
}

startBtn.addEventListener("click", function (event) {
    state = 'quiz';
    currentSelection()
});

submitScoreBtn.addEventListener("click", function () {

});

function checkAnswer(answers) {
    if(answers == question[questionOrder].correct) {
        alert('correct')
    } else {
        alert('wrong')
    }
}