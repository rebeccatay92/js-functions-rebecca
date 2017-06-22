// Using your isPrime() function, create a function primes that will return
// an array of all prime numbers up to a certain amount.

var isPrime = function (num) {
  for (var i = 2; i < num; i++) {
    if (num % i === 0) {
      return false
    }
  }
  return true
}

var max = 5
var primes = function (needed) {
  var counter = 0 // the number to check for
  var arr = []
  // while the number of primes in the arr is less than needed
  while (arr.length < needed) {
    // check if number is a prime. add to array if true
    if (isPrime(counter)) {
      arr.push(counter)
    }
    counter++
    // increase counter by 1
  }
  return arr
}
primes(max)
