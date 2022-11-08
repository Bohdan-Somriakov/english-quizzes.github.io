/* quiz data */
const quizData = [
    {
      question: 'What is true about Rob ?',
      a: 'He has a great memory when it comes to remembering names',
      b: 'he has a photographic memory',
      c: 'He can remember people’s faces',
      correct: 'c',
    },
    {
      question: 'Who has a record-breaking memory ?',
      a: 'Jack Ma',
      b: 'Chao Lu',
      c: 'Bruce Lee',
      correct: 'b',
    },
    {
      question: 'Where is Chao Lu from?',
      a: 'China',
      b: 'Japan',
      c: 'Vietnam',
      correct: 'a',
    },
    {
      question: 'What WAS NOT mentioned by Dr Jared Horvath ?',
      a: 'You need to link new inforamtion to something you already understand if you want to remember it',
      b: 'You need to repeat new information in your head if you want to remember it',
      c: 'You need to focus on new information if you want to remember it',
      correct: 'b',
    },
    {
      question: 'What is not a synonym of "slim" ?',
      a: 'small',
      b: 'extensive',
      c: 'unlikely',
      correct: 'b',
    },
    {
        question: '"suck at" comes from...',
        a: 'American English',
        b: 'British English',
        c: 'Australian english',
        correct: 'a',
      },
    {
        question: 'What happens to students who cram for the test ?',
        a: 'students who cram for tests forget around 90% of what they studied within 72 hours',
        b: 'students who cram for tests forget around 72% of what they studied within 92 hours',
        c: 'students who cram for tests forget around 50% of what they studied within 24 hours',
        correct: 'a',
      },  
      {
        question: 'Does Dr Jared Horvath support simple memorising ?',
        a: 'Yes, he thinks that "just memorise as much as you can" is the best way of learning something',
        b: 'No, he thinks that deep learning is a better way of learning something',
        c: 'He does not care about that topic at all',
        correct: 'b',
      }, 
      {
        question: 'Why did Sam mention parrot ?',
        a: 'As an example',
        b: 'Because Dr Jared Horvath mentioned parrots',
        c: 'Because parrots are connected to the quiz question',
        correct: 'a',
      }, 
      {
        question: 'What is a digit here?',
        a: '3/5',
        b: '-5',
        c: '7',
        correct: 'c',
      }, 
      {
        question: 'How long did it take to recite pi (first 68,000 digits)?',
        a: '12 hours',
        b: '24 hours',
        c: '67 hours',
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
