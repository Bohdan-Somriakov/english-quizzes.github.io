/*  quiz data  */
const quizData = [
    {
      question: 'When was Jia Jiang the founder of a small tech company ?',
      a: 'in 2011',
      b: 'in 2012',
      c: 'in 2013',
      correct: 'b',
    },
    {
      question: 'Who rejected Jia Jiang ?',
      a: 'a co-worker',
      b: 'a boss',
      c: 'an investor',
      correct: 'c',
    },
    {
      question: 'What did Jia Jiang decide to do after the rejection ?',
      a: 'He decided that he needed to give up',
      b: 'He decided that he needed rejection therapy',
      c: 'He decided that he needed to found another company',
      correct: 'b',
    },
    {
      question: 'What did Jia Jiang ask a random security guard to do ?',
      a: 'to hug him',
      b: 'to lend him $100',
      c: 'to plant a flower',
      correct: 'b',
    },
    {
      question: 'What did Jia Jiang ask a pet shop barber to do ?',
      a: 'to cut his hair',
      b: 'to participate in the Olympic Games',
      c: 'to tell him a joke',
      correct: 'a',
    },
    {
        question: 'Who did not reject Jia Jiang ?',
        a: 'a doughnut store clerk',
        b: 'an investor',
        c: 'a random security guard',
        correct: 'a',
      },
    {
        question: 'Why did the man with a dog reject Jia՚s proposal to plant a flower in his backyard ?',
        a: 'He had an allergy to flowers',
        b: 'He did not like sunflowers',
        c: 'He thought that his dog would just tear it up',
        correct: 'c',
      },  
      {
        question: 'What is the name of Jia՚s bestselling book ?',
        a: 'Rejection Proof',
        b: 'How to not be rejected',
        c: 'Theory of rejection',
        correct: 'a',
      }, 
      {
        question: 'When can fear be a useful emotion according to the program ?',
        a: 'When it helps us to avoid silly mistakes',
        b: 'When it helps us to avoid awkward situation',
        c: 'When it helps us avoid danger',
        correct: 'c',
      }, 
      {
        question: 'Finish the quote of Franklin D. Roosevelt. “The only thing we have to fear is...”',
        a: 'fear of rejection',
        b: 'fear itself',
        c: 'fear of making mistakes',
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
