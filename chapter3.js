// Minimum
function min(a, b) {
	return a < b ? a : b;
}

// Recursion
function isEven(n) {
	if(n < 0) return false;
	else if(n == 0) return true;
	else if(n == 1) return false;
	else return isEven(n-2);
}

// Bean counting
function countChar(s, c) {
	var count = 0;
	for(var i = 0; i < s.length; i++) {
		if(c == s.charAt(i)) count++;
	}
	return count;
}
