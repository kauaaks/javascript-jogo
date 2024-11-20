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
        question: "1.	Qual foi a principal contribuição de Steve Wozniak para a Apple Inc.?",
        answers:[
        { text: "Desenvolvimento do iPhone", correct: false },
        {text: "Criação dos computadores pessoais Apple I e Apple II", correct: true},
        {text: "Design do logotipo da Apple", correct: false},
        {text: "Implementação do primeiro sistema operacional da Apple", correct: false},
        ]
    },
    {
        question: "2.	Por que Steve Wozniak deixou seu emprego na HP?",
        answers:[
        { text: "Foi demitido por falta de desempenho", correct: false },
        {text: "Para fundar a Apple com Steve Jobs", correct: true},
        {text: "NAceitou uma oferta melhor na IBM", correct: false},
        {text: "Para se tornar professor universitário", correct: false},
        ]
    },
    {
        question: "3.	Qual foi o primeiro projeto conjunto de Wozniak e Jobs?",
        answers:[
        {text: "Blue Boxes", correct: true},
        { text: "Apple I", correct: false},
        {text: "Macintosh", correct: false},
        {text: "Mouse óptico", correct: false},
        ]
    },
    {
        question: "4.	Como Wozniak é conhecido por seu estilo de vida?",
        answers:[
        { text: "Luxuoso e extravagante", correct: false },
        {text: "Corporativo e tradicional", correct: false},
        {text: "Exclusivamente focado em tecnologia", correct: false},
        {text: "Reservado e filantrópico", correct: true},
        ]
    },
    {
        question: "5.	Qual foi o primeiro produto desenvolvido pela HP?",
        answers:[
        { text: "Computador pessoal HP-85", correct: false },
        {text: "Calculadora científica de mão", correct: false},
        {text: "Oscilador de áudio", correct: true},
        {text: "Impressora a laser", correct: false},
        ]
    },
    {
        question: "6.	Qual foi a contribuição da HP para o mercado financeiro?",
        answers:[
        { text: "Primeira calculadora científica de mão", correct: false },
        {text: "Relógio atômico para cálculos precisos", correct: false},
        {text: "Lançamento da HP-12C", correct: true},
        {text: "Desenvolvimento de software para bancos", correct: false},
        ]
    },
    {
        question: "7.	O que levou ao nome “HP” em vez de “PH”?",
        answers:[
        { text: "A decisão foi baseada na ordem alfabética", correct: false },
        {text: "Os fundadores jogaram uma moeda", correct: true},
        {text: "Foi uma escolha aleatória", correct: false},
        {text: "Preferiram a sonoridade do nome", correct: false},
        ]
    },
    {
        question: "8.	Qual foi um dos principais erros estratégicos da HP?",
        answers:[
        {text: "Lançar o sistema operacional WebOS", correct: true},
        { text: "Rejeitar o projeto do Apple I", correct: false },
        {text: "Não entrar no mercado de calculadoras", correct: false},
        {text: "Ignorar o mercado de impressoras", correct: false},
        ]
    },
    {
        question: "9.	Qual foi a principal mensagem do filme Vale Do Silício em relação à HP?",
        answers:[
        { text: "Destacou a liderança inovadora de seus fundadores", correct: false },
        {text: "Mostrou como ela apoiou Steve Wozniak e Jobs", correct: false},
        {text: "Criticou a falta de visão para novos mercados", correct: true},
        {text: "Enfatizou seu papel no mercado de consumo", correct: false},
        ]
    },
    {
        question: "10.	Qual foi o impacto do Homebrew Computer Club na criação da Apple?",
        answers:[
        { text: "Foi onde Wozniak encontrou investidores para a Apple", correct: false },
        {text: "Inspirou Woz e Jobs a colaborarem em projetos de hardware", correct: true},
        {text: "Garantiu financiamento inicial para a empresa", correct: false},
        {text: "Forneceu patentes usadas no Apple I", correct: false},
        ]
    },
]
