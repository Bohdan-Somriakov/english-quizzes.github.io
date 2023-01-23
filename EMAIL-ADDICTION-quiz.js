/*quiz data */
const quizData = [
    {
      question: 'What does IM stand for ?',
      a: 'instant messaging',
      b: 'invisible messaging',
      c: 'invulnerable messaging',
      correct: 'a',
    },
    {
      question: 'What country was mentioned in the programme ?',
      a: 'USA',
      b: 'Japan ',
      c: 'Germany',
      correct: 'c',
    },
    {
      question: 'What company WAS NOT mentioned in the programme?',
      a: 'BMW',
      b: 'Audi ',
      c: 'Volkswagen',
      correct: 'b',
    },
    {
      question: 'How much time on average do we need to get back on track after email distracts us from our daily tasks ?',
      a: '64 seconds ',
      b: '34 seconds',
      c: '144 seconds',
      correct: 'a',
    },
    {
      question: 'What does FOMO stand for ?',
      a: 'fear of moving objects',
      b: 'fear of missing out',
      c: 'not an abbreviation',
      correct: 'b',
    },
    {
        question: 'How do work-related emails affect Michael ?',
        a: 'they help him to focus on work ',
        b: 'they keep him distracted from doing his work',
        c: 'no effect at all',
        correct: 'b',
      },
    {
        question: 'What was the result of banning IM as well as email ?',
        a: 'they have recovered 25% of their work time and increased customer satisfaction and efficiency by 30%',
        b: 'they have recovered 30% of their work time and increased customer satisfaction and efficiency by 25%',
        c: 'they have recovered 15% of their work time and increased customer satisfaction and efficiency by 20%',
        correct: 'a',
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
