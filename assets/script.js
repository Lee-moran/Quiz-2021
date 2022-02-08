const startButton = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')
const questionBoxElement = document.getElementById('question-box')
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-btns')


let shuffledQuestions, currentQuestionIndex


startButton.addEventListener('click', startGame);
nextButton.addEventListener('click', () => {
    currentQuestionIndex++
    setNextQuestion()
})

function startGame() {
    console.log('started');
    startButton.classList.add('hide');
    shuffledQuestions = questions.sort(() => Math.random() - .5);
    currentQuestionIndex = 0; 
    questionBoxElement.classList.remove('hide');
    setNextQuestion()

}

function setNextQuestion() {
    resetState()
    showQuestion(shuffledQuestions[currentQuestionIndex])
}

function showQuestion(question) {
    questionElement.innerText = question.question;
    question.answers.forEach(answer => {
        const button = document.createElement('button');
        button.innerText = answer.text;
        button.classList.add('btn');
        if (answer.correct){
            button.dataset.correct = answer.correct;
        }
        button.addEventListener('click', selectAnswer);
        answerButtonsElement.appendChild(button);
    })

}

function resetState(){
    nextButton.classList.add('hide')
    while (answerButtonsElement.firstChild) {
        answerButtonsElement.removeChild
        (answerButtonsElement.firstChild)
    }

}

function selectAnswer(e) {
    const selectedButton = e.target
    const correct = selectedButton.dataset.correct
    setStatusClass(document.body, correct)
    Array.from(answerButtonsElement.children).forEach(button => {
        setStatusClass(button, button.dataset.correct)
    })
    nextButton.classList.remove('hide')
    if (shuffledQuestions.lenght > currentQuestionIndex + 1) {
        nextButton.classList.remove('hide')


    } else {
        startButton.innerText = 'Restart'
        startButton.classList.remove('hide')

    }
    
    
}

function setStatusClass(element, correct) {
    clearStatusClass(element)
    if (correct) {
        element.classList.add('correct')
    } else {
        element.classList.add('wrong')
    }
}

function clearStatusClass(element){
    element.classList.remove('correct')
    element.classList.remove('wrong')

}

const questions = [
    {
        question: 'what is 2 + 2?',
        answers: [
             {text: '4', correct: true},
             {text: '22', correct: false},
             {text: '2', correct: false},
             {text: '-2', correct: false} 
        ]
    },
    {
        question: 'what is 2 + 2?',
        answers: [
             {text: '4', correct: true},
             {text: '22', correct: false},
             {text: '2', correct: false},
             {text: '-2', correct: false} 
        ]
    },
    {
        question: 'what is 2 + 2?',
        answers: [
             {text: '4', correct: true},
             {text: '22', correct: false},
             {text: '2', correct: false},
             {text: '-2', correct: false} 
        ]
    },
    {
        question: 'what is 2 + 2?',
        answers: [
             {text: '4', correct: true},
             {text: '22', correct: false},
             {text: '2', correct: false},
             {text: '-2', correct: false} 
        ]
    },
    {
        question: 'what is 2 + 2?',
        answers: [
             {text: '4', correct: true},
             {text: '22', correct: false},
             {text: '2', correct: false},
             {text: '-2', correct: false} 
        ]
    },
    {
        question: 'what is 2 + 2?',
        answers: [
             {text: '4', correct: true},
             {text: '22', correct: false},
             {text: '2', correct: false},
             {text: '-2', correct: false} 
        ]
    },
    {
        question: 'what is 2 + 2?',
        answers: [
             {text: '4', correct: true},
             {text: '22', correct: false},
             {text: '2', correct: false},
             {text: '-2', correct: false} 
        ]
    },
    {
        question: 'what is 2 + 2?',
        answers: [
             {text: '4', correct: true},
             {text: '22', correct: false},
             {text: '2', correct: false},
             {text: '-2', correct: false} 
        ]
    },
    {
        question: 'what is 2 + 2?',
        answers: [
             {text: '4', correct: true},
             {text: '22', correct: false},
             {text: '2', correct: false},
             {text: '-2', correct: false} 
        ]
    },
    {
        question: 'what is 2 + 2?',
        answers: [
             {text: '4', correct: true},
             {text: '22', correct: false},
             {text: '2', correct: false},
             {text: '-2', correct: false} 
        ]
    },
    {
        question: 'what is 7 + 2?',
        answers: [
             {text: '4', correct: false},
             {text: '22', correct: true},
             {text: '2', correct: false},
             {text: '-2', correct: false} 
        ]
    },
    {
        question: 'what is 2 + 8?',
        answers: [
             {text: '4', correct: false},
             {text: '22', correct: false},
             {text: '2', correct: true},
             {text: '-2', correct: false} 
        ]
    },
    {
        question: 'what is 5 + 2?',
        answers: [
             {text: '4', correct: true},
             {text: '22', correct: false},
             {text: '2', correct: false},
             {text: '-2', correct: false} 
        ]
    },
    {
        question: 'what is 2 + 4?',
        answers: [
             {text: '4', correct: true},
             {text: '22', correct: false},
             {text: '2', correct: false},
             {text: '-2', correct: false} 
        ]
    },
    {
        question: 'what is 1 + 2?',
        answers: [
             {text: '4', correct: true},
             {text: '22', correct: false},
             {text: '2', correct: false},
             {text: '-2', correct: false} 
        ]
    }
]