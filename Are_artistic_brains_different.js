 /*quiz data */
const quizData = [
    {
      question: 'What is true about Sam ?',
      a: 'She plays the piano a bit',
      b: 'She plays football',
      c: 'She plays the guitar a bit',
      correct: 'a',
    },
    {
      question: 'Who worked so hard that he never took a bath ?',
      a: 'Johannes Vermeer',
      b: 'Michelangelo ',
      c: 'Leonardo da Vinci',
      correct: 'b',
    },
    {
      question: 'What did Jimi Hendrix once do?',
      a: 'He set fire to his guitar on stage',
      b: 'He set the stage on fire',
      c: 'He set himself on fire',
      correct: 'a',
    },
    {
      question: 'Who was considered a child prodigy ?',
      a: 'Rebecca',
      b: 'Michelangelo',
      c: 'Mozart',
      correct: 'c',
    },
    {
      question: 'What is the word to describe "the rapid movements our eyes make as they jump from one thing to another" ?',
      a: 'cicadas',
      b: 'saccades',
      c: 'saccharides',
      correct: 'b',
    },
    {
        question: 'How was the BBC World Service programme called ?',
        a: 'CrowdScience ',
        b: 'ArtisticScience',
        c: 'PsychologyScience',
        correct: 'a',
      },
    {
        question: 'What word WAS NOT used by Rebecca Chamberlain ?',
        a: 'gist',
        b: 'processing',
        c: 'tips',
        correct: 'c',
      },  
      {
        question: 'trainable – a word from...',
        a: 'British English',
        b: 'American English',
        c: 'Australian English',
        correct: 'b',
      },  
      {
        question: 'What is a jigsaw puzzle?',
        a: 'a tiling puzzle that requires the assembly of often irregularly shaped interlocking and mosaiced pieces, each of which typically has a portion of a picture',
        b: 'a logic-based, combinatorial number-placement puzzle',
        c: 'a classic puzzle that consists of two identical bent nails',
        correct: 'a',
      },  
      {
        question: 'What happened to Mozart by the age of six ?',
        a: 'Mozart performed in front of the Emperor of France – twice',
        b: 'Mozart performed in front of the Emperor of Germany – twice',
        c: 'Mozart performed in front of the Emperor of Austria – twice',
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
