/*quiz data */
const quizData = [
    {
        question: 'What is an English phrase that means to achieve two goals with one action ?',
        a: 'kill two rabbits with one stone',
        b: 'kill two birds with one stone',
        c: 'kill two hares with one stone',
        correct: 'b',
      },
      {
        question: 'How old was Patty Hearst when she was kidnapped ?',
        a: '19',
        b: '17',
        c: '16',
        correct: 'a',
    },
    {
      question: 'How the group of criminals was called ?',
      a: 'LAS',
      b: 'SAL',
      c: 'SLA',
      correct: 'c',
    },
    {
      question: 'Where did SLA keep Patty ?',
      a: 'basement',
      b: 'closet',
      c: 'storehouse',
      correct: 'b',
    },
    {
      question: 'What did news show two months after her kidnapping ?',
      a: 'a gun-toting Patty enthusiastically robbing a villa',
      b: 'a gun-toting Patty enthusiastically robbing a shop',
      c: 'a gun-toting Patty enthusiastically robbing a bank',
      correct: 'c',
    },
    {
        question: 'What was her new name ?',
        a: 'Tania ',
        b: 'Ann',
        c: 'Sarah',
        correct: 'a',
      },
    {
        question: 'Which is correct ?',
        a: 'turn the tables on someone',
        b: 'turn the tables in someone',
        c: 'turn the tables at someone',
        correct: 'a',
      },  
      {
        question: 'When did police catch Tania ?',
        a: '1 year later',
        b: '2 years later',
        c: '3 years later',
        correct: 'b',
      },
      {
        question: 'What is the synonym of "trial" ?',
        a: 'victim',
        b: 'court case',
        c: 'entity',
        correct: 'b',
      },
      {
        question: 'From what did Patty suffer ?',
        a: 'Stockholm Syndrome',
        b: 'Stockton Syndrome',
        c: 'Sacramento Syndrome',
        correct: 'a',
      },
      {
        question: 'What did happen to the bank hostages after just five days of being captive ?',
        a: 'the bank hostages broke free',
        b: 'the bank hostages were rescued by American special forces',
        c: 'the bank hostages refused help from police and instead defended their captors',
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
