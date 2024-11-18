// 1. Find 6th prime number after the number if it  is even.

num = 23;//23 29 31 37 41 43 47 53 59 61 67 71 73
limit= 5
if (num > 1) {
  count = 0;
   prime=0
  while (count < limit) {
    num++;
    if(num>1){
    fact = 0;
    for (i = 2; i < num; i++) {
      if (num % i === 0) {
        fact++;
        break;
      }
    }
    if(fact==0){
        count++
        prime=num
    }
  }
  else{
    break
}
}
  if(count<limit){
    console.log("not enough primes");
  }else{
console.log(prime)
  }
}

// Output: 43


// 2.Find 6th prime number before the number if it is odd.

num = 23;//2 3 5 7 11 13 17 19 23
limit= 5
if (num > 1) {
  count = 0;
   prime=0
  while (count < limit) {//0 1 2 3 4 5 
    num--;
    if(num>1){
    fact = 0;
    for (i = 2; i < num; i++) {
      if (num % i === 0) {
        fact++;
        break;
      }
    }
    if(fact==0){
        count++
        prime=num
    }
  }
  else{
    break
}
}
  if(count<limit){
    console.log("not enough primes");
  }else{
console.log(prime)
  }
}

// Output: 7