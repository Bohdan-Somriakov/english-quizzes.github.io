/* quiz data */
const quizData = [
    {
      question: 'Which is correct "They wanted the world to become __ utopia" ?',
      a: 'a',
      b: 'an',
      c: 'both are wrong',
      correct: 'a',
    },
    {
      question: 'When did Australian nurse, Bronnie Ware, write her bestselling book, The Top Five Regrets of the Dying ?',
      a: '1992',
      b: '2002',
      c: '2012',
      correct: 'c',
    },
    {
      question: '"I wish I had followed my dreams" means... ?',
      a: 'I want to follow my dreams in the future',
      b: 'I want to follow my dreams now',
      c: 'I regret not following my dreams in the past',
      correct: 'c',
    },
    {
      question: 'What place was mentioned in the program ?',
      a: 'New Caledonia',
      b: 'New Zealand',
      c: 'New York',
      correct: 'b',
    },
    {
      question: 'Who calls Riverside outlandish ?',
      a: 'some local people',
      b: 'New Zealand government',
      c: 'Neil and Beth',
      correct: 'a',
    },
    {
        question: 'How much money did Herman and Candelaria Zapp have when they set off from Argentina to travel around the world ?',
        a: '3.500 dollars',
        b: '4.500 dollars',
        c: '5.500 dollars',
        correct: 'a',
      },
    {
        question: 'What happened to Herman after travelling ?',
        a: 'He became more arrogant',
        b: 'He became more hubmle',
        c: 'He became more honest',
        correct: 'b',
      },  
      {
        question: 'What did Herman compare himself to ?',
        a: 'a beautiful but tiny piece of resilience',
        b: 'a beautiful but tiny piece of hope',
        c: 'a beautiful but tiny piece of sand',
        correct: 'c',
      }, 
      {
        question: 'Who can remind us that dreams can come true ?',
        a: 'Bronnie Ware',
        b: 'Neil and Beth',
        c: 'Daisy and Herman',
        correct: 'c',
      }, 
      {
        question: 'What is not the synonym to the word "utopia" ',
        a: 'paradise',
        b: 'dystopia',
        c: 'ideal place',
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
