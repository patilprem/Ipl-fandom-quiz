//IPL QUIZ
const chalk = require("chalk");
const readlineSync = require("readline-sync");
var questions = [
  {
  question: "Which IPL team has most wins? ",
  answer: "mi"
  },

  {
  question: "Which team has never won IPL? ",
  answer: "rcb"
  },
  
  {
  question: "Apart from CSK, which team was banned from IPL? ",
  answer: "rr"
  },

  {
  question: "Which is the only team in IPL that has never changed its captain? ",
  answer: "csk"
  },

  {
  question: "Which team has used most captains in IPL history? ",
  answer: "pk"
  }

]

console.log(chalk.bgYellow.black("Hello " + readlineSync.question("What is your name? ") + ", Welocme to IPL 2021 quiz"))
console.log("---------------------------") 
var score = 0
//console.log(questions[0].question)
function quiz(question, answer){
  var userAnswer = readlineSync.question(question);
  if(userAnswer === answer)
  { console.log(chalk.green("You're right"));
    score = score + 1;
  }
  else if(score != 0)
  { console.log(chalk.red("You're Wrong"));
    score = score - 1;
  }
  else {chalk.red(console.log("You're Wrong"))};
  console.log(chalk.yellow("Your score is: " + score));
  console.log("---------------------------")  
};

for(var i=0; i<questions.length; i++){
  
  quiz(questions[i].question, questions[i].answer)
  
};