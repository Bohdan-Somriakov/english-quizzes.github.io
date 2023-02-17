 / *quiz data */
 const quizData = [
    {
      question: 'What animal WAS NOT mentioned in the program ?',
      a: 'rat',
      b: 'weasel',
      c: 'whale',
      correct: 'b',
    },
    {
      question: 'When do babies start to laugh ?',
      a: 'as young as two or three days',
      b: 'as young as two or three months',
      c: 'as young as two or three years',
      correct: 'b',
    },
    {
      question: 'Which is correct? Laughing __ the other side of your face.',
      a: 'in',
      b: 'at',
      c: 'on',
      correct: 'c',
    },
    {
      question: 'What is bouts ?',
      a: 'a short period of intense activity of a specified kind',
      b: 'plural of the word "boat"',
      c: 'small boats designed for convoy escort duty',
      correct: 'a',
    },
    {
      question: 'Where does the ‘ha-ha’ sound you make when you laugh come from ?',
      a: 'Liver',
      b: 'Hypothalamus',
      c: 'Thoracic cage (Rib cage)',
      correct: 'c',
    },
    {
        question: 'Which of the words CANNOT be used to describe laughter ?',
        a: 'chuckle',
        b: 'choke',
        c: 'chortle',
        correct: 'b',
      },
    {
        question: 'When do all mammals play ?',
        a: 'when they’re fighting',
        b: 'when they’re bored',
        c: 'when they’re juveniles',
        correct: 'c',
      },  
      {
        question: 'What happens to young rats who don’t laugh back ?',
        a: 'they are more likely to get food',
        b: 'they are more likely to get a bite',
        c: 'they are more likely to be exiled',
        correct: 'b',
      },  
      {
        question: 'Why did Rob want to recap the vocabulary from the programme as fast as possible ?',
        a: 'he did not want to hear Sam’s terrible jokes',
        b: 'he did not want to talk about rats anymore',
        c: 'he needed to go to a doctor',
        correct: 'a',
      },  
      {
        question: 'How did Neil describe that program ?',
        a: 'He said "it’ been a humorous program"',
        b: 'He said "it’ been a rib tickler"',
        c: 'He said "it’ been a laugh a minute"',
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
