function counterCreator(num) {
	return function() {
		return ++num
	}
}

function countAnnouncer(line, number) {
	return function() {
		return 'Now serving ' + line + ' number ' + number() + '!'
	}
}