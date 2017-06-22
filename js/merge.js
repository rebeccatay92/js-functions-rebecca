/*
Write a function called merge. The function should take two sorted arrays
of numbers as input and return a merged array of the sorted numbers from
the input. For example, if the input arrays were var arr1 = [3,6,11];
var arr2 = [2,4,5,8,9]; Then the returned array would be: [2,3,4,5,6,8,9,11].
*/

var merge = function (arr1, arr2) {
  var unsorted = arr1.concat(arr2)
  var sorted = unsorted.sort(function (a, b) {
    return a - b
  })
  return sorted
}
// concat merges the 2 arrays
// use sort(return a-b) for ascending order
var one = [3, 6, 11]
var two = [2, 4, 5, 8, 9]
merge(one, two)
