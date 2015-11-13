function counterCreator(number){
  var counterNum = number;

  return function(){
    return counterNum += 1;
  }
}

function countAnnouncer(lineName, counter){
  var lineName = lineName
  var counter = counter()
  return function(){ 
    return 'Now serving ' + lineName + ' number ' + counter + '!';
  }
}