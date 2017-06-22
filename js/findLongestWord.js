// Write a function findLongestWord that takes an array of words and
// returns the length of the longest word in the array.

var test = ['a', 'abcd', 'ac', 'abcdefghijklmnop', 'abcdefg']

var findLongestWord = function (arr) {
  var charLengths = arr.map(function (i) {
    return i.length
  })
  var sorted = charLengths.sort(function (a, b) {
    return b - a
  })
  return sorted[0]
}

findLongestWord(test)
