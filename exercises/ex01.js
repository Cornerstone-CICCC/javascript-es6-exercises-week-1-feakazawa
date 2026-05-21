/*
Write an if…else statement that:
- Prints “even” if the number is an even number
- Prints “odd” if the number is an odd number

Hint: Use the %(modulo) operator to determine if a number is even or odd.
*/

const number = 4; // Change your number to test your if statement

if (number % 2 === 0) {
  console.log(`${number} is even`);
} else {
  console.log(`${number} is odd`);
}
