// let question1 = document.querySelector(".quiz question");
// let selectAns = document.querySelectorAll(".btn").value;

// for(rightAns of selectAns){
//     rightAns.addEventListener("click",function(e){
//         console.log(e.target.nodeName.value);
//         console.log("hiiiiiiii");
//     })
// }
const questions = [
    {
        question : "Which is largest animal in the world?",
        answers:[
            { text : "Shark" , correct: false},
            { text : "Blue whale" , correct: true},
            { text : "Elephant" , correct: false},
            { text : "Giraffe" , correct: false},
        ]
    },
    {
        question : `Who is the “Father of our Nation”?`,
        answers:[
            { text : "Mahatma Gandhi" , correct: true},
            { text : "Narebdra Modi" , correct: false},
            { text : "Arvid Kejriwal" , correct: false},
            { text : "Akhilesh Yadav" , correct: false},
        ]
    },
    {
        question : "When did India get independence?",
        answers:[
            { text : "1945" , correct: false},
            { text : "1847" , correct: false},
            { text : "1947" , correct: true},
            { text : "1950" , correct: false},
        ]
    },
    {
        question : "Who was the first prime minister of India?",
        answers:[
            { text : "Dr APJ Abdul Kalam" , correct: false},
            { text : "Jawaharlal Nehru" , correct: true},
            { text : "Rabindranath Tagore" , correct: false},
            { text : "Shah Jahan" , correct: false},
        ]
    },
    {
        question : "India shares its boundaries with how many countries?",
        answers:[
            { text : "Five" , correct: false},
            { text : "Six" , correct: false},
            { text : "Eight" , correct: false},
            { text : "Seven" , correct: true},
        ]
    },
    {
        question : "India is a part of which continent?",
        answers:[
            { text : "Asia" , correct: true},
            { text : "Europe" , correct: false},
            { text : "Africa" , correct: false},
            { text : "None" , correct: false},
        ]
    },
    {
        question : "Which is the tallest mountain in the world?",
        answers:[
            { text : "K2 (Godwin Austen)" , correct: false},
            { text : "Burj Khalifa" , correct: false},
            { text : "Mount Everest" , correct: true},
            { text : "Nanga Parbat" , correct: false},
        ]
    },
    {
        question : "Which planet is called a red planet?",
        answers:[
            { text : "Mars" , correct: true},
            { text : "Earth" , correct: false},
            { text : "Jupiter" , correct: false},
            { text : "Neptune" , correct: false},
        ]
    },
    {
        question : "Who is the first Mughal ruler of India?",
        answers:[
            { text : "Shah Jahan" , correct: false},
            { text : "Babar" , correct: true},
            { text : "Himayu" , correct: false},
            { text : "Sershah Suri" , correct: false},
        ]
    },{
        question : "Which is the national animal of India?",
        answers:[
            { text : "Cow" , correct: false},
            { text : "Lion" , correct: false},
            { text : "Deer" , correct: false},
            { text : "Tiger" , correct: true},
        ]
    }
];
// Now we will take the element id of the tag 
const questionElement = document.getElementById("question");
const answerButton = document.getElementById("answer-buttons");
const nextButton = document.querySelector(".next-slide");

// questionElement.innerText = questions[0].question;
// this section for the count the score of the quiz 
let currentQuestionIndex = 0;
let currentScore = 0;

function startQuiz(){
    alert("Welcome To The Quiz Game !")
    currentQuestionIndex = 0;
    currentScore = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}
function showQuestion(){
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo+". "+currentQuestion.question;

    currentQuestion.answers.forEach(answer =>{
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButton.appendChild(button);

        if(answer.correct){
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click",selectAnswer);
    });
}
// for reset the previous state of the question. 
function resetState(){
    nextButton.style.display = "none";
    while(answerButton.firstChild){
        answerButton.removeChild(answerButton.firstChild);
    }
}
// for select the answer 
function selectAnswer(e){
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct ==="true";
    if(isCorrect){
        selectedBtn.classList.add("correct");
        currentScore++;
    }else{
        selectedBtn.classList.add("inCorrect");
    }
    Array.from(answerButton.children).forEach(button =>{
        if(button.dataset.correct ==="true"){
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextButton.style.display = "block";
}

function showScore(){
    resetState();
    questionElement.innerHTML = `You scored ${currentScore} out of ${questions.length}!`;
    nextButton.innerHTML = "Play Again";
    nextButton.style.display = "block";

}


// handle next question 
function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length){
        showQuestion();
    }else{
        showScore();
    }
}
nextButton.addEventListener("click",()=>{
    if(currentQuestionIndex < questions.length){
        handleNextButton();
    }else{
        startQuiz();
    }
})
startQuiz();