let sumOfSquares = 0;
let squareOfSum = 0;

for (let i = 1; i <= 100; i++) {
  sumOfSquares = sumOfSquares + (i*i);
//  console.log(sumOfSquares);
}

console.log("The sum of the squares of the first 100 natural numbers is: " + sumOfSquares + ".");

for (let i = 1; i <= 100; i++) {
  squareOfSum = squareOfSum + i;
//  console.log(squareOfSum);
  if (i === 100) {
    squareOfSum = squareOfSum * squareOfSum;
//    console.log(squareOfSum);
  }
}

console.log("The square of the sum of the first 100 natural numbers is: " + squareOfSum + ".");

let total = squareOfSum - sumOfSquares;
console.log("The difference between the sum of the squares of the first 100 natural numbers and the square of the sum is " + squareOfSum + " - " + sumOfSquares + " = " + total + ".");
