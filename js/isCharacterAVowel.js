// Write a function isCharacterAVowel that takes a character
// (i.e. a string of length 1) and returns true if it is a vowel and false, otherwise.

var input = 'c'
var vowels = 'aeiou'
// indexof will check is the input char can be found in the list of vowels
var isCharacterAVowel = function (char) {
  if (vowels.indexOf(char) > -1) {
    return true
  }
  return false
}

isCharacterAVowel(input)
