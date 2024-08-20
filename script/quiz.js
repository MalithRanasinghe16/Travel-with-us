//select elements
const question= document.getElementById("question");
const choiceA= document.getElementById("A");
const choiceB= document.getElementById("B");
const choiceC= document.getElementById("C");
const choiceD= document.getElementById("D");
const counter= document.getElementById("counter");
const timeBar= document.getElementById("timeBar");
const quizDiv= document.getElementById("quizContainer");
const scoreDiv= document.getElementById("score");
const progress= document.getElementById("progress");
const total= document.getElementById("total");
const time= document.getElementById("time");
const check= document.getElementById("check");

//create questions
var questions =[
    {
        question:"Which Indian hill station in India is known as the “Queen of the Hills”?",
        choiceA:"Mussoorie",
        choiceB:"Darjeeling",
        choiceC:"Shillong",
        choiceD:"Shimla",
        correct:"A"
    },{
        question:"What is the largest industry in the Maldives?",
        choiceA:"Tourism",
        choiceB:"fishing",
        choiceC:"Mining",
        choiceD:"Steel Industry        ",
        correct:"A"
    },{
        question:"Which of the below is a palm-shaped, man-made island in Dubai??",
        choiceA:"Palm Jumeriah",
        choiceB:"Palm Dubai",
        choiceC:"Palm UAE",
        choiceD:"None of the above",
        correct:"A"
    },{
        question:"In which year Sri Lanka won the world cup?",
        choiceA:"2003",
        choiceB:"1996",
        choiceC:"2015",
        choiceD:"2011",
        correct:"B"
    },{
        question:"Who won the first world cup?",
        choiceA:"Australlia",
        choiceB:"West Indies",
        choiceC:"New Zealand",
        choiceD:"Pakistan",
        correct:"B"
    },{
        question:"Who is the most run scorer for Sri Lanka?",
        choiceA:"Aravinda De Silva",
        choiceB:"Mahela Jayawardene",
        choiceC:"Kumar Sangakkara",
        choiceD:"TM Dilshan",
        correct:"C"
    },{
        question:"Who is the most wicket taker in world cups?",
        choiceA:"Mitchell Starc",
        choiceB:"Lasith Malinga",
        choiceC:"Trent Boult",
        choiceD:"‎Glenn McGrath‎",
        correct:"D"
    },{
        question:"Who took most catches for Sri Lanka?",
        choiceA:"Arjuna Ranathunga",
        choiceB:"Kumar Sangakkara",
        choiceC:"TM Dilshan",
        choiceD:"Mahela Jayawardene",
        correct:"D"
    },{
        question:"Who is the current T20 world cup champions?",
        choiceA:"West Indies",
        choiceB:"Bangladesh",
        choiceC:"South Africa",
        choiceD:"India",
        correct:"A"
    },{
        question:"Who is the current world cup champions?",
        choiceA:"New Zealand",
        choiceB:"India",
        choiceC:"England",
        choiceD:"Pakistan",
        correct:"C"
    }
];

//create variables
const lastQuestion=questions.length-1;
var runningQuestion = 0;

var count=0;
const questionTime=120;//120s
const timeWidth=150;//150px
const timeUnit=timeWidth/questionTime;

var timer;
var score=0;

//render a question
function renderQuestion(){
    var que = questions[runningQuestion];
    
    question.innerHTML="<p>"+que.question+"</p>";
    choiceA.innerHTML=que.choiceA;
    choiceB.innerHTML=que.choiceB;
    choiceC.innerHTML=que.choiceC;
    choiceD.innerHTML=que.choiceD;
}

renderQuestion();
renderCounter();
timer=setInterval(renderCounter,1200); //100ms=10s

//counter render
function renderCounter(){
    if(count<questionTime){
        counter.innerHTML=count;
        timeBar.style.width=count*timeUnit+"px";
        count++;
    }else{
            clearInterval(timer);
            quizDiv.style.display="none";
            scoreDiv.style.display="block";
            check.innerHTML+="<tr>N/A</tr>";
            renderProgress();
            renderColor();
    }
}

//checkAnswer
function checkAnswer(answer){
    
    if(answer === questions[runningQuestion].correct){
        //answer is correct
        score=score+2;
        check.innerHTML+="<td>"+"<span style='color:#00e600;'>&checkmark;</span>"+"</td>";
    }else{
        //answer is incorrect
        score=score-1;
        check.innerHTML+="<td>"+"<span style='color:#ff0000;'>&cross;</span>"+"</td>";
    }
    if (runningQuestion<lastQuestion){
        runningQuestion++;
        renderQuestion();  
    }else{
        clearInterval(timer);
        quizDiv.style.display="none";
        scoreDiv.style.display="block";
        renderProgress();
        renderColor();
    }
}

//render progress
function renderProgress(){
    total.innerHTML="You scored: "+score+"<br>";                            
    time.innerHTML="You took "+count+"  SEC. for this quiz.<br>";
    for(var qIndex=1;qIndex<=lastQuestion+1;qIndex++){
        progress.innerHTML+="<td>"+qIndex+"</td>";
    }
}

//background color
function renderColor(){
    if(10<=score){
        scoreDiv.style.backgroundColor="#ccffcc";
    }else{
        scoreDiv.style.backgroundColor="#ff9999";
    }
}