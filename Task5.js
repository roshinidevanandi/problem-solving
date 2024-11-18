// return the count of the prime numbers in the given number

let number = 560437832;
let count = 0;
function isPrime(digit) {
  if (digit <= 1) return false;
  for (let i = 2; i <= Math.sqrt(digit); i++) {
    if (digit % i === 0) {
      return false; // Not prime if divisible by any number other than 1 and itself
    }
  }
  return true;
}

// Loop through each digit of the number
while (number > 0) {
  let digit = number % 10; // Get the last digit
  if (isPrime(digit)) {
    // Check if the digit is prime
    count++; // Increment the count if it's prime
  }
  number = Math.floor(number / 10); // Remove the last digit
}

console.log(count);

// Output: 5

// Find the fifth digit in the given number
// let num=123456 //654321 //5

let num = 123456;
reverse = 0;
while (num > 0) {
  let digit = num % 10;
  reverse = reverse * 10 + digit;
  num = Math.floor(num / 10);
}
// console.log(reverse);
result = 0;
while (reverse > 0) {
  reverse = Math.floor(reverse / 10);
  result++;
  if (result == 5) {
    console.log(result);
  }
}

// Output: 5
