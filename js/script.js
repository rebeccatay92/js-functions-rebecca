console.log('Linked to my html')

function pausecomp (millis) {
  var date = new Date()
  var curDate = null
  while (curDate - date < millis) {
    curDate = new Date()
  }
}

pausecomp(5000)
