function counterCreator(num) {

    num++;
    return function() {
        
        return num++;
    }

}

function countAnnouncer(goods,bakeryCount){
  
  return function (){
  // counterCreator(goods)
    return "Now serving " + goods + " number " + bakeryCount() + '!'
  }

}


