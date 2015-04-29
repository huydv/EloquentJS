
	var arr = [1,2,3,4,5];

	arr.forEach(function(el) {
				console.log(el);
			});
			
	var people = [
				  {"name": "Emma de Milliano", 
				   "sex": "f",
				   "born": 1876, "died": 1956,
				   "father": "Petrus de Milliano",
				   "mother": "Sophia van Damme"},
				   
				  {"name": "Carolus Haverbeke", 
				   "sex": "m",
				   "born": 1832, "died": 1905,
				   "father": "Carel Haverbeke",
				   "mother": "Maria van Brussel"},
				   
				   {"name": "Petrus de Milliano", 
				   "sex": "m",
				   "born": 1830, "died": 1900,
				   "father": "Carel Haverbeke",
				   "mother": "Maria van Brussel"}, 
				   
				   {"name": "Sophia van Damme", 
				   "sex": "f",
				   "born": 1835, "died": 1905,
				   "father": "Test father",
				   "mother": "Test mother"}
				];


	var passed = people.filter(function(person) {
		return person.born > 1850;
	});

	console.log(passed);

	var mapped = people.map(function(p) {
		return p.name;
	});
	var ages = [{"age": 20}, {"age": 10}, {"age": 30}, {"age": 40}];
	var ar = [1,2,3,4,5];
	var min_age = ages.reduce(function(a, b) {
		console.log(a);
		console.log(b);
		return ({"age": (a.age + b.age)});
	});


	console.log(mapped);
	console.log(min_age);

	var set = ["Emma de Milliano", "Carolus Haverbeke"];
	function isInSet(set, person) {
		return set.indexOf(person.name) > -1;
	}

	console.log(people.filter(function(person) {
		return isInSet(set, person);
	}));
	//console.log(people.filter(isInSet.bind(null, set)));
		
	var nums = [[1, 2, 3], [4, 5], [6]];
	var new_arrays = nums.reduce(function(a, b) {
		return a.concat(b);
	});

	console.log(new_arrays);



