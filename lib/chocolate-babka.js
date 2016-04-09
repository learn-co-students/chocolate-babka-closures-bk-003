function counterCreator(num){
    var countfrom = num;
     return function(){
    	 return ++countfrom;
    } 
}

function countAnnouncer(string,method) {
	 return function(){
		return "Now serving "+ string + " number "+ method() + "!";
  }

}