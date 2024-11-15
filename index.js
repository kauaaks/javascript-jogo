const $startGameButton = document.querySelector( ".start-quiz")
const $questionsContainer = document.querySelector(".questions-container")
const $answersContainer = document.querySelector(".answers-container")
const $questionText = document.querySelector(".question")
const $nextQuestionButton = document.querySelector(".next-question") 

$startGameButton.addEventListener("click", startGame)
$nextQuestionButton.addEventListener("click",  )

let currentQuestionIndex = 0


function startGame() {
    $startGameButton.classList.add("hide")
    $questionsContainer.classList.remove("hide")
    displayNextQuestion()
}

function displayNextQuestion() {
    while($answersContainer.firstChild) {
        $answersContainer.removeChild($answersContainer.firstChild)
    }

    $questionText.textContent = questions[currentQuestionIndex].question
    questions[currentQuestionIndex].answers.forEach(answer => {
        const newAnswer = document.createElement("button")
        newAnswer.classList.add("button", "answer")
        newAnswer.textContent = answer.text
        if (answer.correct) {
            newAnswer.dataset.correct = answer.correct
        }
        $answersContainer.appendChild(newAnswer)

        newAnswer.addEventListener("click", selectAnswer)
    })
}

function selectAnswer(event) {
    const answerClicked = event.target

    if (answerClicked.dataset.correct) {
        document.body.classList.add("correct")
    } else {
        document.body.classList.add("incorrect")
    }

    document.querySelectorAll(".answer").forEach(button => {
        if (button.dataset.correct) {
            button.classList.add("correct")
        } else {
            button.classList.add("incorrect")
        }

        button.disabled = true
    })

    $nextQuestionButton.classList.remove("hide")
    currentQuestionIndex++
}

























const questions = [
    {
        question: "Dentro de qual elemento HTML colocamos o JS?",
        answers:[
        { text: "Tanto no <head> quanto no <body> está correto", correct: true },
        {text: "No <body>", correct: false},
        {text: "No <head>", correct: false},
        {text: "Em outro lugar", correct: false},
        ]
    },
    {
        question: "Dentro de qual elemento HTML colocamos o JS?",
        answers:[
        { text: "Tanto no <head> quanto no <body> está correto", correct: true },
        {text: "No <body>", correct: false},
        {text: "No <head>", correct: false},
        {text: "Em outro lugar", correct: false},
        ]
    },
    {
        question: "Dentro de qual elemento HTML colocamos o JS?",
        answers:[
        { text: "Tanto no <head> quanto no <body> está correto", correct: true },
        {text: "No <body>", correct: false},
        {text: "No <head>", correct: false},
        {text: "Em outro lugar", correct: false},
        ]
    },
    {
        question: "Dentro de qual elemento HTML colocamos o JS?",
        answers:[
        { text: "Tanto no <head> quanto no <body> está correto", correct: true },
        {text: "No <body>", correct: false},
        {text: "No <head>", correct: false},
        {text: "Em outro lugar", correct: false},
        ]
    },
    {
        question: "Dentro de qual elemento HTML colocamos o JS?",
        answers:[
        { text: "Tanto no <head> quanto no <body> está correto", correct: true },
        {text: "No <body>", correct: false},
        {text: "No <head>", correct: false},
        {text: "Em outro lugar", correct: false},
        ]
    },
    {
        question: "Dentro de qual elemento HTML colocamos o JS?",
        answers:[
        { text: "Tanto no <head> quanto no <body> está correto", correct: true },
        {text: "No <body>", correct: false},
        {text: "No <head>", correct: false},
        {text: "Em outro lugar", correct: false},
        ]
    },
    {
        question: "Dentro de qual elemento HTML colocamos o JS?",
        answers:[
        { text: "Tanto no <head> quanto no <body> está correto", correct: true },
        {text: "No <body>", correct: false},
        {text: "No <head>", correct: false},
        {text: "Em outro lugar", correct: false},
        ]
    },
    {
        question: "Dentro de qual elemento HTML colocamos o JS?",
        answers:[
        { text: "Tanto no <head> quanto no <body> está correto", correct: true },
        {text: "No <body>", correct: false},
        {text: "No <head>", correct: false},
        {text: "Em outro lugar", correct: false},
        ]
    },
    {
        question: "Dentro de qual elemento HTML colocamos o JS?",
        answers:[
        { text: "Tanto no <head> quanto no <body> está correto", correct: true },
        {text: "No <body>", correct: false},
        {text: "No <head>", correct: false},
        {text: "Em outro lugar", correct: false},
        ]
    },
    {
        question: "Dentro de qual elemento HTML colocamos o JS?",
        answers:[
        { text: "Tanto no <head> quanto no <body> está correto", correct: true },
        {text: "No <body>", correct: false},
        {text: "No <head>", correct: false},
        {text: "Em outro lugar", correct: false},
        ]
    },
]