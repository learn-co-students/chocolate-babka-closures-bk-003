function counterCreator(number){
	var num = number;
	return function(){
		return num += 1;
	}
};

function countAnnouncer(name, count) {
	var name = name;
	var count = count();
	return function() {
		return 'Now serving ' + name + ' number ' + count + '!';
	}
};
