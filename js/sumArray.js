// Define a function sumArray and a function multiplyArray that sums and multiplies
// (respectively) all the numbers in an array of numbers. For example, sumArray([1,2,3,4])
// should return 10, and multiplyArray([1,2,3,4]) should return 24.

var test = [1, 2, 3, 4]

var sumArray = function (arr) {
  var total = arr.reduce(function (a, b) {
    return a + b
  })
  return total
}
sumArray(test)

var multiplyArray = function (arr) {
  var total = arr.reduce(function (a, b) {
    return a * b
  })
  return total
}
multiplyArray(test)
