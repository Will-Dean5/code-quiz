var state = 'start';
var startEl = document.querySelector("#start");
var quizEl = document.querySelector("#quiz");
var endEl = document.querySelector("#end");
var startBtn = document.querySelector("#startButton");
var submitScoreBtn = document.querySelector("#submitBtn");
var quizTitle = document.querySelector("#quizTitle");
var questionsEl = document.querySelector("#questions");
var titleEl = document.querySelector("#title");
var yourInitials = document.querySelector('#initials');
var yourScores = document.querySelector('#yourScores');
var timeEl = document.querySelector('.timeLeft');
var secondsLeft = 60;


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
    if (state === 'scores') {

    }
}

timeEl.textContent = secondsLeft
function startTimer() {
    var timeInterval = setInterval(function () {
        secondsLeft--;
        timeEl.textContent = secondsLeft;
        if (secondsLeft === 0) {
            clearInterval(timeInterval)
            currentSelection()
            sendMessage()
            state == 'end'

        }
        if(state == 'end')
            clearInterval(timeInterval)
            score = secondsLeft

    }, 1000);
};

function sendMessage() {
    timeEl.textContent = 'Time is up'
};

currentSelection()
function nextQuestion(event) {
    checkAnswer(event.target.textContent)
    questionOrder++;
    questionsEl.innerHTML = null
    if (questionOrder < questions.length) {
        displayQuestion()
    } else {
        state = 'end'
        currentSelection()
    }
}



function displayQuestion() {
    state = 'quiz';
    var questionDisplay = questions[questionOrder];
    var questionH2 = document.createElement('h2');
    questionH2.textContent = questions[questionOrder].question
    questionsEl.append(questionH2)
    startTimer();
    for (i = 0; i < questions[questionOrder].answers.length; i++) {

        buttonEl = document.createElement('button')
        buttonEl.textContent = questions[questionOrder].answers[i];
        buttonEl.addEventListener('click', nextQuestion)
        questionsEl.append(buttonEl);

    }
}


startBtn.addEventListener("click", function () {
    state = 'quiz';
    currentSelection();
    
});

submitScoreBtn.addEventListener("click", function () {
    state = 'scores'
    yourInitials = yourInitials.value
    localStorage.setItem('initials', yourInitials)
    timeEl = JSON.stringify(secondsLeft)
    currentSelection()


});
// checks if answer is right or wrong and displays a message that says correct or wrong
function checkAnswer(answers) {
    if (answers == questions[questionOrder].correct) {
        alert('Correct!')
    }
    else {
        alert('Wrong!')
        secondsLeft -= 30
    }
};

function highScores(event) {
    yourInitials = ''
    for (var i = 0; i < initialsList.length; i++) {
        initial = yourInitials[i]
        var li = document.createElement('li')
        li.textContent = initial
        li.setAttribute('data-index', i)
        initialsList.appendchild[i]

    }
};
