 /* quiz data */
 const quizData = [
    {
      question: 'What IS NOT the synonym of the word "chores" ?',
      a: 'duty',
      b: 'work',
      c: 'choir',
      correct: 'c',
    },
    {
      question: 'What do Daniel Reeves and Bethany Soule attribute their happiness to ?',
      a: 'not fighting about chores, but instead paying each other to shoulder the responsibilities they don’t want to do themselves',
      b: 'not fighting about chores, but instead dividing the responsibilities equally',
      c: 'not fighting about chores, but instead asking their 2 children to do the job',
      correct: 'a',
    },
    {
      question: 'What sum of money WAS NOT mentioned in the program ?',
      a: '$4',
      b: '$20',
      c: '$300 000',
      correct: 'c',
    },
    {
      question: 'How do Daniel Reeves and Bethany decide how to name their children?',
      a: 'The one who is willing to pay more money will be the one who will give a name to a child',
      b: 'They spin a wheel of fortune to decide what name will be given to a child',
      c: 'They ask strangers for pieces of advice',
      correct: 'a',
    },
    {
      question: 'being __ each other’s throats',
      a: 'on',
      b: 'at',
      c: 'in',
      correct: 'b',
    },
    {
        question: 'What do other couples think about trivializing everything with a dollar amount ?',
        a: 'Many couples find that idea to be a magnificent solution',
        b: 'Many couples consider that system to be unusual but sometimes effective',
        c: 'Many couples can’t imagine using such a system',
        correct: 'c',
      },
    {
        question: 'Do the children of Daniel Reeves and Bethany understand the system of cold hard cash?',
        a: 'yes',
        b: 'no, but they probably will',
        c: 'they are the ones who created it',
        correct: 'b',
      },  
      {
        question: 'How is the app called ?',
        a: 'Beeminder',
        b: 'Goalminder',
        c: 'Failminder',
        correct: 'a',
      },  
      {
        question: 'What is the key to success, acccording to Daniel Reeves and Bethany?',
        a: 'love',
        b: 'patience',
        c: 'money',
        correct: 'c',
      },  
      {
        question: 'How much money do you lose you pledged if you are unable to stay on track ?',
        a: '10%',
        b: '50%',
        c: '100%',
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
