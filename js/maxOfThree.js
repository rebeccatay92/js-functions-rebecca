// Define a function maxOfThree that takes three numbers as arguments and
// returns the largest of them. Use the if-then-else construct available in Javascript.

function maxOfThree (num1, num2, num3) {
  // return biggest of the three numbers
  var largest = 0
  if (num1 > num2) {
    largest = num1
  } else largest = num2
  if (largest < num3) {
    largest = num3
  }
  return largest
}

maxOfThree(13, 25, 7)
