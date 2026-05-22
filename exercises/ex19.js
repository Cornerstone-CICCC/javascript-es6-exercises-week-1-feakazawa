/*
Call the emotions() function so that it prints the output you see below, but instead of passing the laugh() 
function as an argument, pass an inline function expression instead.

emotions("happy", laugh(2)); // you can use your laugh function from the previous quizzes
Prints: "I am happy, haha!"
*/

function emotions(sentiment, callbackFn) {
  const laughNumber = callbackFn();
  return `I am happy, ${laughNumber}`;
}

const result = emotions("happy", function () {
  let answer = "";
  for (let i = 0; i < 2; i++) {
    answer += "ha";
  }
  return `${answer}!`;
});

console.log(result);
