let selectedQuestions = [];

function startQuiz(mode){

  let count = 20;

  if(mode==="OWL") count = 20;
  if(mode==="NEWT") count = 50;
  if(mode==="HEADMASTER") count = 100;

  const pool = QUESTION_BANK.filter(q=>q.level===mode);

  selectedQuestions = shuffle([...pool]).slice(0,count);

  currentQuestion = 0;
  score = 0;

  renderQuestion();
}
