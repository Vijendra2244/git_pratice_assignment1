function checkPrime(num) {
  let count = 0;
  for (let i = 0; i <= num; i++) {
    if (num % i == 0) {
      count++;
    }
  }
  if (count == 2) {
    return "Prime";
  } else {
    return "Not Prime";
  }
}
let prime = checkPrime(23);
console.log(prime);
