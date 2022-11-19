/*  quiz data  */
const quizData = [
    {
      question: 'What disease was mentioned in the program ?',
      a: 'plague',
      b: 'smallpox',
      c: 'coronavirus',
      correct: 'c',
    },
    {
      question: 'What can help you to identify how old a tree is according to Neil ?',
      a: 'rings',
      b: 'leaves',
      c: 'squirrels',
      correct: 'a',
    },
    {
      question: 'What tree was mentioned in the program ?',
      a: 'The Great Bristlecone Pine',
      b: 'Sessile oak',
      c: 'Turkey fir. Abies bornmuelleriana',
      correct: 'a',
    },
    {
      question: 'What WAS NOT mentioned by Jurriaan Ton ?',
      a: 'Plants in particular need to have a very efficient immune system because they sit at the bottom of the food chain so there are a lot of opportunistic organisms out there, including insect herbivores and microbial pathogens who want to tap into that biochemical energy that is stored in plants',
      b: 'Plants in particular need to have a very efficient immune system because plants are rooted to the ground – they cannot escape from the stressful conditions in their environment',
      c: 'Plants in particular need to have a very efficient immune system because they need to protect themselves from Powdery mildew. Powdery mildew is one of the most common plant diseases and is easily recognized. White spots or patches with a talcum powder appearance characterize this disease',
      correct: 'c',
    },
    {
      question: 'What exapmles of opportunistic organisms WERE NOT given in the program ?',
      a: 'microbial pathogens',
      b: 'predators',
      c: 'herbivores animals',
      correct: 'b',
    },
    {
        question: 'What example of food chain was given in the program ?',
        a: 'grass → rabbit → foxes',
        b: 'grass → grasshopper → frog → snake → eagle',
        c: 'grass → deer → tiger',
        correct: 'a',
      },
    {
        question: 'What is the meaning of the word "stress" according to Neil ?',
        a: 'a divorce or a conflict',
        b: 'financial problems',
        c: 'a work deadline or moving house',
        correct: 'c',
      },  
      {
        question: 'What IS NOT the synonym for the word "hostile" ?',
        a: 'hospitable',
        b: 'belligerent',
        c: 'militant',
        correct: 'a',
      }, 
      {
        question: 'What age was mentioned in the program ?',
        a: 'Old Stone Age',
        b: 'Middle Stone Age',
        c: 'Bronze Age',
        correct: 'c',
      }, 
      {
        question: 'When do we say that we are not bothered about something ?',
        a: 'when something is bizarre',
        b: 'when something is dreadful',
        c: 'when something is not important',
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
