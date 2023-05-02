/*  quiz data  */
const quizData = [
    {
      question: 'What is Dr. Michael Shannon ?',
      a: 'psychologist',
      b: 'pediatrician',
      c: 'paramedic',
      correct: 'b',
    },
    {
      question: 'Where was Dr. Shannon driving in 2011 when he was hit by a truck ?',
      a: 'Dr. Shannon was driving down a coastal highway in Alabama',
      b: 'Dr. Shannon was driving down a coastal highway in New York',
      c: 'Dr. Shannon was driving down a coastal highway in California',
      correct: 'c',
    },
    {
      question: 'What DID NOT happen to the car ?',
      a: 'the car crumpled',
      b: 'the car caught fire',
      c: 'the car exploded',
      correct: 'c',
    },
    {
      question: 'how much did Trokey weigh twenty-six years before the accident?',
      a: '3.0 pounds',
      b: '3.2 pounds',
      c: '3.4 pounds',
      correct: 'b',
    },
    {
      question: 'What was Trokey’s chance of surviving ?',
      a: '50%',
      b: '60%',
      c: '70%',
      correct: 'a',
    },
    {
        question: 'What WAS NOT mentioned about Dr. Shannon ?',
        a: 'He was busy all day and all night long',
        b: 'Trokey just so happened to be minutes away when Dr. Shannon needed him to save his own life',
        c: 'Dr. Shannon spent 50 days in hospital',
        correct: 'c',
      },
    {
        question: 'come to ____ (become widely known or evident.)',
        a: 'head',
        b: 'light',
        c: 'life',
        correct: 'b',
      },  
      {
        question: 'How many Dr. Shannon’s toes were amputated ?',
        a: '1',
        b: '2',
        c: '3',
        correct: 'b',
      }, 
      {
        question: 'Who said "It’s amazing to watch them all grow up, but to have one come back in your life, on a day you really need it, that’s really incredible." ?',
        a: 'Dr. Shannon',
        b: 'Trokey',
        c: 'speaker',
        correct: 'a',
      }, 
      {
        question: 'Whom did Trokey choose to be his son’s doctor ?',
        a: 'himself',
        b: 'Dr. Shannon',
        c: 'no one',
        correct: 'b',
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
