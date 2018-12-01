function add (num1, num2) {
	return num1 + num2;

}

function subtract (num1, num2) {
	return num1 - num2;
}

function sum (array) {
	return array.reduce((current, total) => total + current, 0);
}

function multiply (array) {
	return array.reduce((current, total) => total * current, 1);
}

function power(num, power) {
	return Math.pow(num, power);
}

function factorial(n) {
	if(n == 0) return 1;

	let factor = 1;
	for(let i = n; i > 0; i--){
		factor *= i;
	}
	return factor;
}

function recursionFactorial(n){
	if(n == 0) return 1;

	return n * recursionFactorial(n - 1);
}

module.exports = {
	add,
	subtract,
	sum,
	multiply,
    power,
	factorial
}