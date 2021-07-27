let inp;

// value is the text the user entered in the input
function calculate(value) {
	// eval() is a global function that evaluates the string input value as
	// JavaScript code, for example if value is "5+3", result will be the number 8
	let result = eval(value); // evaluate what the user entered

	inp.erase(); // erase the old input

	// create new input with it's initial value set to result
	inp = pc.input(result, 0, 0, calculate);
}

// create the input
inp = pc.input('', 0, 0, calculate);
