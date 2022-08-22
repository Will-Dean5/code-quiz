var state = 'start';
var startEl = document.querySelector("#start");
var quizEl = document.querySelector("#quiz");
var endEl = document.querySelector("#end");
var startBtn = document.querySelector("#start button");
var submitScoreBtn = document.querySelector("#start button");
var quizTitle = document.querySelector("#quiz title");
var questionsEl = document.querySelector("#questions");


var questions = [
    {
        question: 'What is 10 + 5',
        answers: ['115', '15', '20', '105'],
        correct: '15',
    },
    {
        qustion: 'How many stars are on the flag',
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

var cursor = 0;

function displayState() {
    if (state === 'start') {
        startEl.style.display = 'block';
        quizEl.style.display = 'none';
        endEl.style.display = 'none';
    }
    if (state === 'quiz') {
        startEl.style.display = 'none';
        quizEl.style.display = 'block';
        endEl.style.display = 'none';
    }
    if (state === 'end') {
        startEl.style.display = 'none';
        quizEl.style.display = 'none';
        endEl.style.display = 'block';
    }
}

function init() {
    displayState();
}

function reset() {
    state = 'start';
    cursor = 0;
    init();
}

function displayQuestion() {
    state = 'quiz';
    var titleText = questions[cursor];
    quizTitle.textContent = titleText;
}

submitScoreBtn.addEventListener("click", function() {
    reset();
});

startBtn.addEventListener("click", function(event) {
    displayQuestion();
    displayState();
});

quizTitle.addEventListener("click", function(event) {
    var element = event.target;
    if (element.matches('h2')) {
        var index = Array.from(element.parentElement.children).indexOf(element);
        console.log(index);
        cursor++;

        if (cursor >= questions.length) {
            state = 'end';
            displayState();
        } else {
            displayQuestion();
        }
    }
});