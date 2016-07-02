function counterCreator(n) {
  var counter = n;
  return function() {
    return counter += 1;

  }
}

function countAnnouncer(string, count) {
  return function() {
    return "Now serving " + string + " number " + count() + "!";
  }
}
