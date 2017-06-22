// Define a function reverseString that reverses a string. For example,
// reverseString("jag testar") should return the string "ratset gaj".

var test = 'jag testar'
// the last char in the string becomes the first in the final string
var final = ''
var reverseString = function (str) {
  for (var i = str.length - 1; i >= 0; i--) {
    final += str.charAt(i)
  }
  return final
}
reverseString(test)
