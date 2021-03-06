//Task 1

let start = +prompt(" Enter start number");
let end = +prompt("Enter end number");
let sum = 0;
for (let i = start; i < end + 1; i++) {
  sum += i;
}

alert(`Total: ${sum}`);
//Task 2
let numA = prompt(" Enter number A");
let numB = prompt("Enter number B");

let a = +numA;
let b = +numB;

while (a != 0 && b != 0) {
  a > b ? (a = a % b) : (b = b % a);
}

alert(`GCD of ${numA} and ${numB} is ${a + b} `);

//Task 3
let dividers = [];
let number = +prompt("Enter a number");

for (let i = Math.trunc(number / 2); i > 0; i--) {
  if (number % i == 0) {
    dividers.push(i);
  }
}

alert(dividers);

//Task 4

let number_ = prompt("Enter a number...");
console.log(number_.length);

//Task 5

let positive = 0;
let negative = 0;
let zero = 0;
let odd = 0;
let even = 0;

for (let i = 0; i < 10; i++) {
  let num = +prompt("Enter a number....");

  num == 0 ? zero++ : num > 0 ? positive++ : negative++;
  num % 2 ? odd++ : even++;
}

console.log(` You have entered:
Positive numbers: ${positive}
Negative numbers: ${negative}
Zeroes:           ${zero}
Odd numbers:      ${odd}
Even numbers:     ${even}`);

//Task 6
do {
  let firstNum = +prompt("Enter a number: ");
  let secondNum = +prompt("Enter another number: ");
  let operationSign = prompt("Enter the operation sign (+ - * /): ");
  switch (operationSign) {
    case "+":
      console.log(
        `${firstNum} ${operationSign} ${secondNum} = ${firstNum + secondNum}`
      );
      break;
    case "-":
      console.log(
        `${firstNum} ${operationSign} ${secondNum} = ${firstNum - secondNum}`
      );
      break;
    case "*":
      console.log(
        `${firstNum} ${operationSign} ${secondNum} = ${firstNum * secondNum}`
      );
      break;
    case "/":
      console.log(
        `${firstNum} ${operationSign} ${secondNum} = ${firstNum / secondNum}`
      );
      break;
    default: // Do nothing!!!
  }
} while (
  prompt("Another calculation? (Y - continue/ any key - finish) ") == "Y"
);

//Task 7
let numberToShift = prompt("Enter a number  ");
let shift = prompt("Enter a number of digits to shift  ");

console.log(numberToShift.slice(shift) + numberToShift.slice(0, shift));

//Task 8

let today = 0;
let dayIs;
do {
  switch (today) {
    case 0:
      dayIs = "Monday";
      break;
    case 1:
      dayIs = "Tuesday";
      break;
    case 2:
      dayIs = "Wednesday";
      break;
    case 3:
      dayIs = "Thursday";
      break;
    case 4:
      dayIs = "Friday";
      break;
    case 5:
      dayIs = "Saturday";
      break;
    case 6:
      dayIs = "Sunday";
      break;
    default: // Do nothing!!!
  }

  today = (today + 1) % 7;
} while (
  prompt(
    `Today is ${dayIs}. Do you want to see the next day? (any key - yes / n- finish) `
  ) != "n"
);

//Task 9

console.log(" Times table ");

for (let i = 2; i < 10; i++) {
  console.log(
    `
    by ${i} 
  `
  );
  for (let j = 1; j < 11; j++) {
    console.log(`${i} x ${j} = ${i * j}`);
  }
}

//Task 10
let secret = 48;
let factor = 32;
let condition;
do {
  condition = prompt(`  Your number is ${secret} ( = )
  Your number is greater than  ${secret}  ( > )
  Your number is less than  ${secret}  ( < ) `);
  condition == ">"
    ? (secret = Math.min(secret + factor, 100))
    : condition == "<"
    ? (secret = secret - factor)
    : {};
  factor = Math.max(factor / 2, 1);
} while (condition != "=");

console.log(`Your number is ${secret}`);
/* 
// Class work - All Dividers

let a = 32;
let b = 64;

while (a != 0 && b != 0) {
  a > b ? (a = a % b) : (b = b % a);
}

let gcd = a + b;
console.log(gcd);

for (let i = gcd - 1; i > 1; i--) {
  !(a % i) && !(b % i) ? console.log(i) : {};
}

console.log(1); */

/*
//Mentor's hour  - Йолка!
let rows = 6;
for (let i = 1; i <= rows; i++) {
  console.log(`${" ".repeat(rows - i)}${"*".repeat(2 * i - 1)}`);
}
 */
