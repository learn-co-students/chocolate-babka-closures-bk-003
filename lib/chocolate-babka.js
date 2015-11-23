function counterCreator(counter) {
  return function() {
    return counter += 1;
  }
}

function countAnnouncer(food, counter) {
  return function() {
    return "Now serving " + food + " number " + counter() + "!";
  }
}
