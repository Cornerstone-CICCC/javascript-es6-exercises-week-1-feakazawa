/*
Write an anonymous function expression that stores a function in a variable called "laugh" and outputs 
the number of "ha"s that you pass in as an argument.

laugh(3);
Returns: hahaha!
*/

const laugh = function (times) {
  let answer = "";
  for (let i = 0; i < times; i++) {
    answer += "ha";
  }
  console.log(`${answer}!`); // Feedback: laugh should return the string, e.g. return `${answer}!`.
};

laugh(6);
