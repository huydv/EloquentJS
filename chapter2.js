function displayTriangle() {
	var i = 0;
	while(i < 7) {
		var s = "";
		for(var j = 0; j <= i; j++) {
			s += "#";
		}
		console.log(s);
		i++;
	}
}

function fizzBuzz() {
	for (var i = 1; i <= 100; i++) {
		var s = "" + i;
		if(i % 3 == 0) {
			if(i % 5 == 0) {
				s = "FizzBuzz";
			} else {
				s = "Fizz";
			}
		} else if(i % 5 == 0) {
			s = "Buzz";
		}

		console.log(s); 
	}
}

function chessBoard(n){
	var line1 = "";
	var line2 = "";
	for(var i = 0; i < n; i++) {
		if(i % 2 == 0) {
			line1 += " ";
			line2 += "#";
		} else {
			line1 += "#";
			line2 += " ";
		}
	}
	var i = 0;
	while(i < n) {
		console.log(line1);
		i++;
		if(i < n) {
			console.log(line2);
			i++;
		}
	}





}