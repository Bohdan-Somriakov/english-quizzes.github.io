/*quiz data */
const quizData = [
    {
      question: 'Where is Beijin situated ?',
      a: 'China',
      b: 'Japan',
      c: 'Korea',
      correct: 'a',
    },
    {
      question: 'Which of that was mentioned about smog ?',
      a: 'There are days when the smog is thick enough to block out the sky',
      b: 'There are days when the smog is thick enough to block out the sun',
      c: 'There are days when the smog is thick enough to block out the stars',
      correct: 'b',
    },
    {
      question: 'What particles were mentioned in the program ?',
      a: 'particles from coal mining',
      b: 'particles from nuclear power plants',
      c: 'particles from coal power plants',
      correct: 'c',
    },
    {
      question: 'Where do people buy bottled air from ?',
      a: 'Pakistan',
      b: 'Canada',
      c: 'Brazil',
      correct: 'b',
    },
    {
      question: 'What percent of Chinese people are exposed to unsafe air ?',
      a: '60%',
      b: '80%',
      c: '98%',
      correct: 'b',
    },
    {
        question: 'What was breathing Beijing’s air compared to ?',
        a: 'breathing Beijing’s air is like smoking a cigarette per hour all day long',
        b: 'breathing Beijing’s air is like smoking a cigarette and a third per hour all day long',
        c: 'breathing Beijing’s air is like smoking a cigarette and a half per hour all day long',
        correct: 'c',
      },
    {
        question: 'Who sealed the last breath of Thomas Edison?',
        a: 'Albert Einstein',
        b: 'Henry Ford',
        c: 'his son',
        correct: 'c',
      },  
      {
        question: 'Which of the idioms has a negative meaning ?',
        a: 'breathtaking',
        b: 'deflated',
        c: 'a breath of fresh air',
        correct: 'b',
      },  
      {
        question: 'What is the meaning of the word "moved" in the program ?',
        a: 'go in a specified direction or manner; change position',
        b: 'make progress; develop in a particular manner or direction',
        c: 'having strong feelings of sadness or sympathy',
        correct: 'c',
      },  
      {
        question: 'How do you describe the opposite of "deep breath" ?',
        a: 'shallow',
        b: 'profound',
        c: 'bottomless',
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
