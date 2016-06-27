function counterCreator(num) {
	var count = num;
	return function() {
		return count += 1;
	};
}

function countAnnouncer(item, counter) {
	return function() {
		return "Now serving " + item + " number " + counter() + "!";	
	};
}

// console.log(counterCreator(4));

var bakeryAnnouncer = countAnnouncer("cookie", counterCreator);

console.log(bakeryAnnouncer);
// bakeryAnnouncer;