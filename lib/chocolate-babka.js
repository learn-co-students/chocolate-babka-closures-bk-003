function counterCreator(num){
  var count = num 

  return function(){
    count++
    return count
  }
}

function countAnnouncer(name, func){
  return function(){
    return "Now serving " + name + " number " + func() + "!"
  }
}