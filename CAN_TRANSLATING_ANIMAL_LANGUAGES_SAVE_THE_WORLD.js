/*  quiz data  */
const quizData = [
    {
      question: 'How many species is the earth losing each day ?',
      a: '100 species of plants, insects and animals a day',
      b: '200 species of plants, insects and animals a day',
      c: '300 species of plants, insects and animals a day',
      correct: 'b',
    },
    {
      question: 'Why are Britt Selvitelle and Aza Raskin famous ?',
      a: 'They have impressive resumes in the field of technology',
      b: 'They have impressive resumes in the field of linguism',
      c: 'They have impressive resumes in the field of natural environment',
      correct: 'a',
    },
    {
      question: 'Britt was on the founding team of...',
      a: 'YouTube',
      b: 'Facebook',
      c: 'Twitter',
      correct: 'c',
    },
    {
      question: 'What was the flip side of Twiter ?',
      a: 'illegal market',
      b: 'scam',
      c: 'Bigots and xenophobes',
      correct: 'c',
    },
    {
      question: 'What IS NOT the synonym of the word Dismayed ?',
      a: 'appal',
      b: 'fabulous',
      c: 'daunt',
      correct: 'b',
    },
    {
        question: 'What do we take for granted, according to the program ?',
        a: 'infinite scroll',
        b: 'messengers',
        c: 'websites',
        correct: 'a',
      },
    {
        question: 'What is true about infinite scroll ?',
        a: 'it was created in 2005',
        b: 'Aza is proud of his his invention',
        c: 'infinite scroll means no longer losing your train of thought',
        correct: 'c',
      },  
      {
        question: 'How much human lifetimes a day does the infinite scroll wastes, according to Aza ?',
        a: '20000',
        b: '200000',
        c: '2000000',
        correct: 'b',
      }, 
      {
        question: 'What language WAS NOT mentioned in the program ?',
        a: 'Portuguese',
        b: 'Turkish',
        c: 'Finnish',
        correct: 'a',
      }, 
      {
        question: 'How are Aza and Britt starting to collect information for their research ?',
        a: 'They are starting with recordings of dolphin sounds',
        b: 'They are starting with recordings of orca sounds',
        c: 'They are starting with recordings of whale sounds',
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
