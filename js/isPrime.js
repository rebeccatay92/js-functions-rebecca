// Create a function to return true or false if a number passed in a prime number.

function prime (num) {
  for (var i = 2; i < num; i++) {
    if (num % i === 0) {
      return false
    }
  }
  return true
}
prime(17)
