 /* quiz data */
 const quizData = [
    {
      question: 'What CANNOT be the synonym of the word "domesticated" ?',
      a: '(of an animal) tame and kept as a pet or on a farm',
      b: '(of a plant) cultivated for food; naturalized',
      c: '(of a place) perfectly clean, neat, or tidy',
      correct: 'c',
    },
    {
      question: 'What cartoon character WAS NOT mentioned in the program ?',
      a: 'Bugs Bunny',
      b: 'Mickey Mouse',
      c: 'Donald Duck',
      correct: 'a',
    },
    {
      question: 'Where is Skippy from? ',
      a: 'New Zealand',
      b: 'Australia',
      c: 'Malaysia',
      correct: 'b',
    },
    {
      question: 'What is Dr Karen Hiestand ?',
      a: 'microbiologist',
      b: 'neuroscientist',
      c: 'anthrozoologist',
      correct: 'c',
    },
    {
      question: 'What solitary creatures were mentioned in the program ?',
      a: 'wild cats',
      b: 'ancient breeds of wolves',
      c: 'Mickey Mouse :)',
      correct: 'a',
    },
    {
        question: 'How do you spell __stress (feelings of worry, sadness or pain) ?',
        a: 'distress',
        b: 'unstress',
        c: 'instress',
        correct: 'a',
      },
    {
        question: 'Who was visibly concerned after the experiment ?',
        a: 'cats',
        b: 'dogs',
        c: 'both',
        correct: 'b',
      },  
      {
        question: 'What was some cat’s reaction to the experiment ?',
        a: 'cats were petrified and standing still',
        b: 'cats did nothing except carry on grooming',
        c: 'cats rushed to help the master',
        correct: 'b',
      },  
      {
        question: 'What idea did the experiment confirm ?',
        a: 'cats are cold and antisocial',
        b: 'cats are friendly and social',
        c: 'cats are neither cold nor friendly',
        correct: 'a',
      },  
      {
        question: 'How high can Skippy jump ?',
        a: '3 metres in a single hop',
        b: '6 metres in a single hop',
        c: '9 metres in a single hop',
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
