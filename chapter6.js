var rabbit = {};
rabbit.speak = function(line) {
	console.log("say " + line);
}

rabbit.speak("Hello");
function speak(line) {
	console.log(this.type + " say " + line);
}
white = {type: "White", speak: speak};
white.speak("Hello");
speak.apply(white, ["Hello 2"]);
speak.call({type: "old rabbit"}, "oh my god.");

var protoRabbit = {
	say: function(line) {
		console.log(this.type + " says " + line);
	}
};

var redRabbit = Object.create(protoRabbit);
redRabbit.type = "Red";
redRabbit.say("I'm red guy");

function Rabbit(type) {
	this.type = type;
	this.run = function() {
		console.log(this.type + " run");
	}
}
Rabbit.prototype.speak = function(line) {
	console.log(this.type + " " + line);
}

var blackRabbit = new Rabbit("Black rabbit");
console.log(blackRabbit.type);
blackRabbit.speak("black guy");
blackRabbit.run();

var object = {};
console.log("toString" in object);