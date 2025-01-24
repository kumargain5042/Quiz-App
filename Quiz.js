const Question = [
    {
        'que': 'What of the following is a markup language?',
        'a': 'HTML',
        'b': 'CSS',
        'c': 'JavaScript',
        'd': 'Java',
        'correct': 'a'
    },
    {
        'que': 'What year was javaScript launched?',
        'a': '1996',
        'b': '1995',
        'c': '1994',
        'd': '1993',
        'correct': 'b'
    }, {
        'que': 'What of the following is a programming language?',
        'a': 'HTML',
        'b': 'CSS',
        'c': 'Javascript',
        'd': 'None of the above',
        'correct': 'c'
    },
    {
        'que': 'What of the following is styling language?',
        'a': 'HTML',
        'b': 'CSS',
        'c': 'JavaScript',
        'd': 'Java',
        'correct': 'b'
    },
    {
        'que': 'What does CSS stand for?',
        'a': 'Cascading Style Sheet',
        'b': 'Cascading Style Script',
        'c': 'Cascading Style System',
        'd': 'Cascading Style Syntax',
        'correct': 'a'
    },
    {
        'que': 'What does HTML stand for?',
        'a': 'Hyper Text Markup Language',
        'b': 'Hyper Text Makeup Language ',
        'c': 'Hyper Text Markup Level',
        'd': 'Hyper Tech Markup LAnguage',
        'correct': 'a'
    },
    {
        'que': 'what does JS stand for?',
        'a': 'Java Style',
        'b': 'JAva Script',
        'c': 'Java System',
        'd': 'JAva Syntax',
        'correct': 'b'
    },
    {
        'que': 'what does DOM stand for?',
        'a': 'Document Object Model',
        'b': 'Document Object Markup',
        'c': 'DOcument Object Method',
        'd': 'Document Object Module',
        'correct': 'a'

    }
]

let index = 0;
let Total = Question.length;
let right = 0,
    wrong = 0;

const queBox = document.getElementById("queBox");
const optioninput = document.querySelectorAll('.options')

const LoadQuestion = () => {

    if(index=== Total){
 return endQuiz();
    }else{
        reset();
    }
    
    const data = Question[index];
    // console.log(data)
    queBox.innerText = `${index + 1}) ${data.que}`;
    optioninput[0].nextElementSibling.innerText = data.a;
    optioninput[1].nextElementSibling.innerText = data.b;
    optioninput[2].nextElementSibling.innerText = data.c;
    optioninput[3].nextElementSibling.innerText = data.d;

}

const submitQuiz = () => {

    const data = Question[index];
    const ans = getAnswer()
    if (ans === data.correct) {

        right++;
    } else {
        wrong++;
    }

    index++;
    LoadQuestion();
    return;

}
const getAnswer = () => {
    let answer;
    optioninput.forEach((input) => {
        if (input.checked) {
            answer= input.value;
            
        }

    })
return answer;

}


const reset = () => {

    optioninput.forEach((input) => {
        input.checked = false;
    })
}

const endQuiz=()=>{

    document.getElementById("box").innerHTML=`
    <div style="text-align:center">
    <h3> Thank you for Playing   the Quiz</h3>
    
    <h2>${right} / ${Total} are correct </h2>
    </div>
    `

}

LoadQuestion();