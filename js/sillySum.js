// Write a function that takes an array of numbers, and returns the sum of each
// number multiplied by its index.
// count += (number * index)

var test = [1, 3, 6, 9, 11]

var sillySum = function (arr) {
  var count = 0
  for (var i = 0; i < arr.length; i++) {
    count += arr[i] * i
  }
  return count
}
sillySum(test)
