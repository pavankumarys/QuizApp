const questions=[
    {
    question:"Who invented Java Programming",
    answers:[
        {text:"Guido van Rossum",correct:false},
        {text:"James Gosling",correct:true},
        {text:"Dennis Ritchie",correct:false},
        {text:"Bjarne Stroustrup",correct:false},
    ]
    
   },
   {
    question:"Which component is used to compile, debug and execute the java programs?",
    answers:[
        {text:"JRE",correct:false},
        {text:"JIT",correct:false},
        {text:"JDK",correct:true},
        {text:"JVM",correct:false},
    ]
    
   },

   {
    question:"Which of these cannot be used for a variable name in Java?",
    answers:[
        {text:"identifier & keyword",correct:false},
        {text:"identifier",correct:false},
        {text:"keyword",correct:true},
        {text:"none of the mentioned",correct:false},
    ]
    
   },
   {
    question:"What is the extension of java code files?",
    answers:[
        {text:".js",correct:false},
        {text:".txt",correct:false},
        {text:".class",correct:false},
        {text:".java",correct:true},
    ]
    
   },
   {
    question:"Which of the following is not an OOPS concept in Java?",
    answers:[
        {text:"Polymorphism",correct:false},
        {text:"inheritance",correct:false},
        {text:"compilation",correct:true},
        {text:"encapsulation",correct:false},
    ]
    
   },
   {
    question:" Which of the following is a type of polymorphism in Java Programming?",
    answers:[
        {text:"Multiple polymorphism",correct:false},
        {text:"Compile time polymorphism",correct:true},
        {text:"Multilevel polymorphism",correct:false},
        {text:"Execution time polymorphism",correct:false},
    ]
    
   },
   {
    question:"What is the extension of compiled java classes?",
    answers:[
        {text:".txt",correct:false},
        {text:".js",correct:false},
        {text:".class",correct:true},
        {text:".java",correct:false},
    ]
    
   },
   {
    question:"Which exception is thrown when java is out of memory?",
    answers:[
        {text:"MemoryError",correct:false},
        {text:"OutOfMemoryError",correct:true},
        {text:"MemoryOutOfBoundsException",correct:false},
        {text:"MemoryFullException",correct:false},
    ]
    
   },
   {
    question:"Which of these are selection statements in Java?",
    answers:[
        {text:"break",correct:false},
        {text:"continue",correct:false},
        {text:"for()",correct:false},
        {text:"if()",correct:true},
    ]
    
   },
   {
    question:"Which of these keywords is used to define interfaces in Java?",
    answers:[
        {text:"intf",correct:false},
        {text:"Intf Gosling",correct:false},
        {text:"interface",correct:true},
        {text:"Interface",correct:false},
    ]
    
   }

];

const questionElement=document.getElementById("question")
const answerButton=document.getElementById("answers")
const nextButton=document.getElementById("next")

let currentQuestionIndex=0;
let score=0;

function startQuiz(){
    currentQuestionIndex=0;
    score=0;
    nextButton.innerHTML="Next"
    showQuestion();
}
function showQuestion(){
    resetState();
    let currentQuestion=questions[currentQuestionIndex];
    let questionNo=currentQuestionIndex+1;
    questionElement.innerHTML=questionNo+". "+currentQuestion.question;
   

    currentQuestion.answers.forEach(answer =>{
        const button=document.createElement("button")
        button.innerHTML=answer.text;
        button.classList.add("btn");
        answerButton.appendChild(button)
        if(answer.correct){
            button.dataset.correct=answer.correct;
        }
        button.addEventListener("click",selectAnswer)

    })
}
function resetState(){
    nextButton.style.display="none";
    while(answerButton.firstChild){
        answerButton.removeChild(answerButton.firstChild)
    }
}

function selectAnswer(e){
    const selectedBtn=e.target;
    const isCorrect=selectedBtn.dataset.correct === "true";
    if(isCorrect){
        selectedBtn.classList.add("correct");
        score++;
    }else{
        selectedBtn.classList.add("incorrect")
    }
    Array.from(answerButton.children).forEach(button=>{
        if(button.dataset.correct==="true"){
            button.classList.add("correct");
        }
        button.disabled=true;
    });
    nextButton.style.display="block";

}
function showScore(){
    resetState();
    questionElement.innerHTML=`Your score is ${score} out of ${questions.length}`;
    nextButton.innerHTML="play again";
    nextButton.style.display="block";
}
function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex<questions.length){
        showQuestion();
    }
    else{
        showScore();
    }
}
nextButton.addEventListener("click",()=>{
    if(currentQuestionIndex<questions.length){
        handleNextButton();
    }else{
        startQuiz();
    }
})
startQuiz();    