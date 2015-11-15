function counterCreator(n) {
var count = n

  return function(){
    return count += 1
  }
}

function countAnnouncer(serving, func) {
  return function() {
    return ("Now serving " + serving + "" + " number " + func() + "!")
  }
}
