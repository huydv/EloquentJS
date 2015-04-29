function range() {
	var length = arguments.length;
	var num1 = 0;
	var num2 = 0;
	var num3 = 0;
	var check = 1 // 1: increase
				  // 0: decrease
	if(length == 1) {
		num1 = arguments[0];
		num3 = -1;
		check = 0;
	} else if(length == 2) {
		num1 = arguments[0];
		num2 = arguments[1];
		if(num1 > num2) {
			check = 0;
			num3 = -1;
		}
	} else {
		num1 = arguments[0];
		num2 = arguments[1];
		num3 = arguments[2];
		if(num1 > num2) {
			check = 0;
			if(num3 > 0) num3 *= -1;
		}
	}

	var nums = [];
	if(check == 1) {
		for(var i = num1; i < num2; i += num3) {
			nums.push(i);
		}
	} else if(check == 0) {
		for(var i = num1; i > num2; i += num3) {
			nums.push(i);
		}
	}
	console.log(nums);
}

function reverseArray(arr) {
	var length = arr.length;
	var new_arr = [];
	for (var i = 0; i < length; i++) {
		new_arr.unshift(arr[i]);
	}
	return new_arr;
}

function reverseInPlace(arr) {
	var length = arr.length;
	var middle = Math.floor(length / 2);
	var temp = 0;
	for(var i = 0; i <= middle; i++) {
		temp = arr[i];
		arr[i] = arr[length - 1 - i];
		arr[length - 1 - i] = temp;
	}
}

function arrayToList(arr) {
	var length = arr.length;
	var rest = null;
	var list = {};
	for(var i = length - 1; i >= 0; i--) {
		list = {value : arr[i],
			    rest  : rest
			   };
		rest = list;
	}
	return list;
}
function listToArray(list) {
	var arr = [];
	while(list != null) {
		arr.push(list.value);
		list = list.rest;
	}
	return arr;
}

function prepend(val, list) {
	return {value: val,
			rest: list
		   };
}

function nth(list, val) {
	var i = 0;
	while(list != null) {
		if(list.value == val) {
			return i;
		}
		i++;
		list = list.rest;
	}
	return -1;
}

function deepEqual(obj1, obj2) {
	var key1s = Object.keys(obj1);
	var key2s = Object.keys(obj2);
	
	if(key1s.length != key2s.length) return false;
	else {
		for(key in obj1) {
			if(!obj2.hasOwnProperty(key)) {
				return false; 
			} else {
				if(isObject(obj1[key]) && isObject(obj2[key]) ) {
					return deepEqual(obj1[key], obj2[key]);
				} else {
					return obj1[key] === obj2[key];
				}
			}
		}
	}
}

function isObject(obj) {
	return (obj != null && typeof(obj) == "object");
}






















