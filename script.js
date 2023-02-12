const questions = [ // This is Array
    { // This is Object inside Array
        'que': 'Which of the following is a markup Language',
        'a': 'HTML',
        'b': 'CSS',
        'c': 'Javascript',
        'd': 'PHP',
        'correct': 'a'
    },
    {
        'que': ' Javascript is an _______ language?',
        'a': 'Object-Oriented.',
        'b': 'Object-Based',
        'c': 'Procedural',
        'd': 'None of the above',
        'correct': 'a'
    },
    {
        'que': 'How can a datatype be declared to be a constant type?',
        'a': 'const',
        'b': 'var',
        'c': 'let',
        'd': 'constant',
        'correct': 'a'
    },
    {
        'que': 'Upon encountering empty statements, what does the Javascript Interpreter do?',
        'a': 'Throws an error',
        'b': 'Ignores the statements',
        'c': 'Gives a warning',
        'd': 'None of the above',
        'correct': 'b'
    },
    {
        'que': ' Which of the following keywords is used to define a variable in Javascript?',
        'a': 'var',
        'b': 'let',
        'c': 'Both A and B',
        'd': 'None of the above',
        'correct': 'c'
    },
    {
        'que': 'When an operators value is NULL, the typeof returned by the unary operator is:',
        'a': 'Boolean',
        'b': 'Undefined',
        'c': 'Object',
        'd': 'Integer',
        'correct': 'c'
    },
    {
        'que': 'What is the output of the following code snippet? print(NaN === NaN);',
        'a': 'true',
        'b': 'false',
        'c': 'undefined',
        'd': 'Error',
        'correct': 'b'
    },
    {
        'que': 'What will be the output of the following code snippet? print(typeof(NaN));',
        'a': 'Object',
        'b': 'Number',
        'c': 'String',
        'd': 'None of the above',
        'correct': 'b'
    },
    {
        'que': 'Which of the following are closures in Javascript?',
        'a': 'Variables',
        'b': 'Functions',
        'c': 'Objects',
        'd': 'All of the above',
        'correct': 'd'
    },
    {
        'que': 'What does the abbreviation HTML stand for?',
        'a': 'HighText Markup Language',
        'b': 'HighText Markup Language',
        'c': 'HighText Markdown Language',
        'd': 'None of the above',
        'correct': 'a'
    },
]
let index = 0;
let total = questions.length;
let right = 0;
let wrong = 0;

const questionBox = document.getElementById("quesBox");
const optionInputs = document.querySelectorAll(".options");


function loadQuestion() {
    if (index == total) {
        return endQuiz();
    }
    reset();
    const data = questions[index];
    console.log(data);

    questionBox.innerText = `${index + 1}) ${data.que}`;// back tick

    // for options  we put data in label 
    optionInputs[0].nextElementSibling.innerText = data.a;
    optionInputs[1].nextElementSibling.innerText = data.b;
    optionInputs[2].nextElementSibling.innerText = data.c;
    optionInputs[3].nextElementSibling.innerText = data.d;
}
const submitQuiz = () => {
    const data = questions[index];
    const ans = getAnswer();
    console.log(ans, data.correct);
    if (ans == data.correct) {
        right++;
    } else {
        wrong++;
    }
    index++;
    loadQuestion();
    return;
}

const getAnswer = () => {
    let answer;
    optionInputs.forEach(
        (input) => {
            if (input.checked) {
                answer = input.value;
                // console.log(input.value);
                // console.log("Yes");
            }
        }
    )
    return answer;
}

function reset() {
    optionInputs.forEach((input) => {
        input.checked = false;
    }
    )
}

const endQuiz = () => {
    document.getElementById("box").innerHTML = `
    <div>
    <h3>Thank You For Playing The Quiz😊</h3>
    <h2>${right} / ${total} are correct</h2>
    </div>
    `;
}

// Main Function
loadQuestion();