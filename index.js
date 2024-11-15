const $startGameButton = document.querySelector( ".start-quiz")
const $questionsContainer = document.querySelector(".questions-container")
const $answersContainer = document.querySelector(".answers-container")
const $questionText = document.querySelector(".question")
const $nextQuestionButton = document.querySelector(".next-question") 

$startGameButton.addEventListener("click", startGame)
$nextQuestionButton.addEventListener("click", displayNextQuestion)

let currentQuestionIndex = 0
let totalCorrect = 0

function startGame() {
    $startGameButton.classList.add("hide")
    $questionsContainer.classList.remove("hide")
    displayNextQuestion()
}

function displayNextQuestion() {
    resetState()

    if (questions.length === currentQuestionIndex) {
        return finishGame()
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

function resetState() {
    while($answersContainer.firstChild) {
        $answersContainer.removeChild($answersContainer.firstChild)
    }

    document.body.removeAttribute("class")
    $nextQuestionButton.classList.add("hide")
}

function selectAnswer(event) {
    const answerClicked = event.target

    if (answerClicked.dataset.correct) {
        document.body.classList.add("correct")
        totalCorrect++
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

function finishGame() {
    const totalQuestion = questions.length
    const performance = Math.floor(totalCorrect * 100 / totalQuestion)

    let message = ""

    switch (true) {
        case (performance >= 90):
            message = "Excelente :)";
            break;
        case (performance >= 70):
            message = "muito bom :)";
            break;
        case (performance >= 50): 
            message = "bom";
            break;
        default:
            message = "Pode melhorar :(";
            
    }

    $questionsContainer.innerHTML = 
    `
        <p class="final-message">
            você acertou ${totalCorrect} de ${totalQuestion} questões!
            <span>Resultado: ${message}</span>
        </p>
        <button onclick=window.location.reload() class="button">
            refazer teste
        </button>
    `;
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
