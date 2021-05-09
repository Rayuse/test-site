const startBtn = document.getElementById('start-btn');
const nextBtn = document.getElementById('next-btn');
const questionContainer = document.getElementById('question-container');
let shuffledQuestions, currentQuestionIndex;
const questionElements = document.getElementById('question');
const answerElements = document.getElementById('anwsers')
const questionNum = document.getElementById('questionNum');
const scoreElement = document.getElementById("score");
var num = 1;
var score = 0;

startBtn.addEventListener('click', startGame);
nextBtn.addEventListener('click', () => {
    currentQuestionIndex++;
    setNextQuestion();
    num++;
    questionNum.innerText = "Question " + num;
});

function startGame() {
    console.log("Started");
    startBtn.classList.add('hide');
    shuffledQuestions = questions.sort(() => Math.random() - .5);
    currentQuestionIndex = 0;
    questionContainer.classList.remove('hide');
    setNextQuestion();
    num = 1;
    questionNum.innerText = "Question " + num;
    score = 0;
    scoreElement.classList.add('hide');
}

function setNextQuestion() {
    resetState();
    showQuestion(shuffledQuestions[currentQuestionIndex]);
}

function showQuestion(question) {
    questionElements.innerText = question.question;
    question.answers.forEach(answer => {
        const button = document.createElement('button');
        button.innerText = answer.text;
        button.classList.add('btn');
        button.classList.add('btn-full');
        if (answer.correct) {
            button.dataset.correct = answer.correct;
        }
        button.addEventListener('click', selectAnswer);
        answerElements.appendChild(button);
    })
}

function resetState() {
    clearStatusClass(document.body);
    nextBtn.classList.add('hide');
    while (answerElements.firstChild) {
        answerElements.removeChild(answerElements.firstChild);
    }
}

function selectAnswer(e) {
    const selectedButton = e.target;
    const correct = selectedButton.dataset.correct;
    setStatusClass(document.body, correct);
    Array.from(answerElements.children).forEach(button => {
        setStatusClass(button, button.dataset.correct);
    });
    if(correct) {
        score++
        console.log(score);
    }
    
    if(shuffledQuestions.length > currentQuestionIndex + 1) {
        nextBtn.classList.remove('hide');
    } else {
        scoreElement.innerText = "Score: " + score +" out of 12";
        scoreElement.classList.remove('hide');
        startBtn.innerText = "Restart";
        startBtn.classList.remove('hide');
    }
    
}

function setStatusClass(element, correct) {
    clearStatusClass(element);
    if(correct) {
        element.classList.add('correct');
    } else {
        element.classList.add('wrong');
    }
}

function clearStatusClass(element) {
    element.classList.remove('correct');
    element.classList.remove('wrong');
}

const questions = [
    {
        question: 'What year was Studio Ghibli founded?',
        answers: [
            {text: '1980', correct:false},
            {text: '1985', correct:true},
            {text: '1987', correct:false},
            {text: '1990', correct:false},
        ]
    }, 
    {
        question: 'What year was the release date of Spirited Away?',
        answers: [
            {text: '2002', correct:true},
            {text: '2003', correct:false},
            {text: '2004', correct:false},
            {text: '2005', correct:false},
        ]
    }, 
    {
        question: 'Studio Ghibli is based in what city in Japan?',
        answers: [
            {text: 'Yokohama', correct:false},
            {text: 'Osaka', correct:false},
            {text: 'Kyoto', correct:false},
            {text: 'Tokyo', correct:true},
        ]
    }, 
    {
        question: 'What was the first official Studio Ghibli release?',
        answers: [
            {text: 'Castle in the Sky', correct:true},
            {text: 'The Cat Returns', correct:false},
            {text: 'Ponyo', correct:false},
            {text: 'My Neighbor Totoro', correct:false},
        ]
    }, 
    {
        question: 'Which of the following was not a founding member of Studio Ghibli? ',
        answers: [
            {text: 'Hayao Miyazaki', correct:false},
            {text: 'Isao Takahata', correct:false},
            {text: 'Yasuyoshi Tokuma', correct:false},
            {text: 'Masao Maruyama', correct:true},
        ]
    }, 
    {
        question: 'Which of the following is not a Studio Ghibli film?',
        answers: [
            {text: 'The Wind Rises', correct:false},
            {text: 'When Marnie Was There', correct:false},
            {text: 'A Slient Voice', correct:true},
            {text: 'Porco Rosso', correct:false},
        ]
    }, 
    {
        question: 'Who is the music composer for Studio Ghibli?',
        answers: [
            {text: 'Joe Hisaishi', correct:true},
            {text: 'Hayao Miyazaki', correct:false},
            {text: 'Isao Takahata', correct:false},
            {text: 'Mai Fujisawa', correct:false},
        ]
    }, 
    {
        question: 'What is the name of the parent organization of Studio Ghibli?',
        answers: [
            {text: 'Toei Animation', correct:false},
            {text: 'Tokuma Shoten', correct:true},
            {text: 'Kyoto Animation', correct:false},
            {text: 'Gainax', correct:false},
        ]
    }, 
    {
        question: 'How many featured films has Studio Ghibli made?',
        answers: [
            {text: '15', correct:false},
            {text: '20', correct:false},
            {text: '21', correct:true},
            {text: '23', correct:false},
        ]
    }, 
    {
        question: 'What is the name of the film Studio Ghibli is currently working on?',
        answers: [
            {text: 'How Do You Live?', correct:true},
            {text: 'Children of the Sea', correct:false},
            {text: 'Promare', correct:false},
            {text: 'The Wonderland', correct:false},
        ]
    }, 
    {
        question: "When was Kiki's Delivery Service initially released?",
        answers: [
            {text: 'May 15, 1986', correct:false},
            {text: 'June 10, 1987', correct:false},
            {text: 'July 29, 1989', correct:true},
            {text: 'August 12, 1990', correct:false},
        ]
    }, 
    {
        question: 'What year was My Neighbor Totoro rleased in the USA?',
        answers: [
            {text: '1991', correct:false},
            {text: '1992', correct:false},
            {text: '1993', correct:true},
            {text: '1994', correct:false},
        ]
    }
];