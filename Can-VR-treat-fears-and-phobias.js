 /* quiz data */
 const quizData = [
    {
      question: 'What things can VR do, according to the program ?',
      a: 'help you overcome phobias',
      b: 'encourage domestic violence',
      c: 'make your dreams come true',
      correct: 'a',
    },
    {
      question: 'What phobia WAS NOT mentioned in the program ?',
      a: 'alektorophobia',
      b: 'aerophobia',
      c: 'acrophobia',
      correct: 'b',
    },
    {
      question: 'What company has designed a system to help you overcome acrophobia ?',
      a: 'Collins VR',
      b: 'Cambridge VR',
      c: 'Oxford VR',
      correct: 'c',
    },
    {
      question: 'What gives people confidence to go higher ?',
      a: 'knowing there is a safety net',
      b: 'knowing there will be a reward',
      c: 'knowing it is only a simulation',
      correct: 'c',
    },
    {
      question: 'What project WAS NOT mentioned in the program ?',
      a: 'Virtual embodiment',
      b: 'Fear of Solitude',
      c: 'Fear of Heights',
      correct: 'b',
    },
    {
        question: 'What is Mavi Sanchez-Vives ?',
        a: 'a therapist',
        b: 'a neuroscientist',
        c: 'a psychologist',
        correct: 'b',
      },
    {
        question: 'What institute was mentioned in the program ?',
        a: 'Barcelona’s Institute',
        b: 'Massachusetts Institute of Technology',
        c: 'al-Quaraouiyine and al-Qarawiyyin',
        correct: 'a',
      },  
      {
        question: 'What happened to prisoners after participating in the "virtual embodiment" project ?',
        a: 'they escaped from the prison and joined mafia',
        b: 'they successfully reintegrating into their communities after their release from prison',
        c: 'they lost their mind and became serial killer',
        correct: 'b',
      },  
      {
        question: 'What is alektorophobia ?',
        a: 'the fear of chickens',
        b: 'the fear of frogs',
        c: 'the fear of snakes',
        correct: 'a',
      },  
      {
        question: 'What was the correct answer to the quiz question ?',
        a: 'claustrophobia',
        b: 'ophidiophobia',
        c: 'acrophobia',
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
