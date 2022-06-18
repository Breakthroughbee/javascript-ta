// complete the function
function prime (num) {
  if (num <= 1) {
    return false;
  } else {
    for (let i = 2; i < num; i++) {
      if (num % i == 0) {
        return false;
      }
    } 
    return true;
  }
  const isPrime = prime(2);
  console.log(isPrime);
    if (isPrime) {
      console.log(`${number} is a prime number`);
    } else {
      console.log(`${number} is not a prime number`);
    } 
  //code goes here  
}

function solution (arg) {
  return prime(arg);
}

if (typeof require !== "undefined" && require.main === module) {
  if (process.argv.length <= 2) {
    throw Error("Require argument");
  }

  const arg = process.argv[2];
  console.log(solution(arg));
}

module.exports = { solution };

