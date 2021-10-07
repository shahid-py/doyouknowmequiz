
var readlineSync = require("readline-sync");


var score = 0;

var askName = "Hello, what is your name?\n ";
var userName = readlineSync.question(askName);
console.log(("Let's see " + userName + " how much you know about Shahid!\n"));

 var doYouKnowMe = [
    {
      question: "Who is his favorite director? \n ",
      answer: "david fincher"
    },
    {
      question: "What is his pet-name\n? ",
      answer: "shan"
    },
    {
      question: "Who is his favorite Hip Hop Artist\n? ",
      answer: "kendrick"
    }
  ]

function play (question, answer) {
  var userAns = readlineSync.question(question);
  

  if (userAns.toUpperCase() === answer.toUpperCase()) {
    console.log("you are right");
    console.log("------------");
    score = score + 1;
  } else {
    console.log("you are wrong");
    console.log("------------");
  }
}

for (var i = 0; i < doYouKnowMe.length; i++) {
  play(doYouKnowMe[i].question, doYouKnowMe[i].answer);
}

console.log("Hurray, your score is" + score);


