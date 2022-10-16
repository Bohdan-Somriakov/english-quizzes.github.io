/* quiz data  */
const quizData = [
    {
        question: 'What language WAS NOT mentioned in the programme ?',
        a: 'French',
        b: 'Chinese',
        c: 'Spanish',
        correct: 'b',
      },
      {
        question: 'What is the meaning of the word "polyglot" ?',
        a: 'many words',
        b: 'many sounds',
        c: 'many tongues',
        correct: 'c',
    },
    {
      question: 'What is the synonym for the word "polyglot" ?',
      a: 'polymath',
      b: 'polygon',
      c: 'superlinguists',
      correct: 'c',
    },
    {
      question: 'Where was Richard Simcot born ?',
      a: 'UK',
      b: 'USA',
      c: 'India',
      correct: 'a',
    },
    {
      question: 'What does Richard Simcot think of the term "polyglot" ?',
      a: 'somebody who learns languages that they do not necessarily need for their lives',
      b: 'somebody who speaks more than 10 languages',
      c: 'somebody who was born speaking more than 3 languages',
      correct: 'a',
    },
    {
        question: '"If you talk to a man in a language he understands, that goes to his head. If you talk to him in his language, that goes to his heart" Who said that quote ?',
        a: 'Ronald Reagan',
        b: 'Nelson Mandela',
        c: 'Cyril Ramaphosa',
        correct: 'b',
      },
    {
        question: 'Which phrase was mentioned in the programme?',
        a: 'To have another language is to possess a second soul',
        b: 'To have another language is to possess a second heart',
        c: 'To have another language is to possess a second motherland',
        correct: 'a',
      },  
      {
        question: 'Who researched the effects of speaking multiple languages on the brains of growing children ?',
        a: 'Nelson Mandela',
        b: 'Eve Fedorenko',
        c: 'Richard Simcot',
        correct: 'b',
      },
      {
        question: 'What IS NOT the synonym of the word "shrink" ?',
        a: 'diminish',
        b: 'dwindle',
        c: 'increment',
        correct: 'c',
      },
      {
        question: 'Who DID NOT use the word proficiency in hes speech ?',
        a: 'Neil',
        b: 'Rob',
        c: 'Eve Fedorenko',
        correct: 'b',
      },
      {
        question: 'What did become more efficient ?',
        a: 'thalamus',
        b: 'medula oblongata',
        c: 'brain tissue',
        correct: 'c',
      },
  ];

  /*Grabing all the elements */
const question = document.getElementById('question');
const a = document.getElementById('a+');
const b = document.getElementById('b+');
const c = document.getElementById('c+');
const btn = document.getElementById('submit');
const all_answer = document.querySelectorAll('.answer');

let index = 0;
let score = 0;
//get the getSelected answer
function getSelected() {
  let ans = undefined;
  all_answer.forEach((el) => {
    if (el.checked) {
      ans = el.id;
    }
  });
  return ans;
}
//disselect all answer
function deselectans() {
  all_answer.forEach((el) => {
    el.checked = false;
  });
}
//load the quiz data
function getquiz() {
  deselectans();
  question.innerText = quizData[index].question;
  a.innerText = quizData[index].a;
  b.innerText = quizData[index].b;
  c.innerText = quizData[index].c;
}
//move forward the quiz
function startquiz() {
  btn.addEventListener('click', () => {
    let ans = getSelected();
    if (ans) {
      if (ans == quizData[index].correct) {
        score++;
      }
    }
    index++;
    if (index < quizData.length) {
      getquiz();
    } else {
      alert('score: ' + score + ' out of ' + quizData.length);
      location.reload();
    }
  });
}
getquiz();
startquiz();
