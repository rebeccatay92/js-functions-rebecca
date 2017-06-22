/*
Write a function that takes a string that finds out how many times a
character occurs. For example, the string "apple" would print the following:
a - 1
p - 2
l - 1
e - 1
Hint: Loop through each letter, and increment the value to a key in an object.
The key should be that object.
BONUS: Make sure that lower case letters and upper case letters count for the
same character. Also, ignore spaces and punctuation.
*/

var letterCount = function (str) {
  // empty object
  var unique = {}
  // convert str to lowercase, only keep alphabets
  var scrubbed = str.toLowerCase().replace(/[^a-z]/g, '')

  for (var i = 0; i < scrubbed.length; i++) {
    // for each char in scrubbed string
    var alphabet = scrubbed.charAt(i)
    // check if key alrdy exists in object
    var presentInObject = unique.hasOwnProperty(alphabet)
    // if key does not exist, add key-value pair. else increase value by 1
    if (!presentInObject) {
      unique[alphabet] = 1
    } else {
      unique[alphabet] ++
    }
  }
  // pull out array with keys and values
  var keyArray = Object.keys(unique)
  var valueArray = Object.values(unique)
  // print out in the key - value format
  for (var j = 0; j < keyArray.length; j++) {
    console.log(keyArray[j] + ' - ' + valueArray[j])
  }
}

 // var test = "A Bb Ccc Dddd Eeeee 234?$@~";
var test = 'apple'
letterCount(test)
