// // 1.Find LCM of 2 numbers using functions.

let num1 = 15;
let num2 = 50;
function LCM(num1, num2) {
  let greater = Math.max(num1, num2);
  let smaller = Math.min(num1, num2);
  for (i = greater; i <= num1 * num2; i += greater) {
    if (i % smaller == 0) {
      return i;
    }
  }
}
console.log("LCM of", num1, "and", num2, "is", LCM(num1, num2));       

// Output: LCM of 15 and 50 is 150  


// 2.Find GCD of 2 numbers using functions.

const number1 = 20;
const number2 = 12;
function myFunction(a, b) {
  let smaller = Math.min(a, b);
  let hcf = 1;

  for (let i = 1; i <= smaller; i++) {
    if (a % i === 0 && b % i === 0) {
      hcf = i;
    }
  }

  return hcf;
}
console.log("GCD of the given numbers is", myFunction(number1, number2));        

// Output: GCD of the given numbers is 4


// 3.Find the Armstrong number using functions.

function sample(number) {
  const digits = number.toString().split("");
  const order = digits.length;
  const sum = digits.reduce(
    (acc, digit) => acc + Math.pow(parseInt(digit), order),
    0
  );

  if (sum === number) {
    console.log(number + " is an Armstrong Number");
  } else {
    console.log(number + " is not an Armstrong Number");
  }
}

sample(9474);
sample(520);

// Output: 9474 is an Armstrong Number
//         520 is not an Armstrong Number


// 4.Reduce the given number to single digit. 

function reduceToSingleDigit(num) {
  while (num >= 10) {
    num = num.toString().split('').reduce((sum, digit) => sum + Number(digit), 0);
  }
  return num;
}
let number = 9875;
let singleDigit = reduceToSingleDigit(number);
console.log(singleDigit); 

// Output: 2
