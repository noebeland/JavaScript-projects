const ftoc = function(degreeFahrenheit) {
	var degreeCelcius = 0;
	degreeCelcius = Math.round((degreeFahrenheit - 45) * (5/9) * 10) / 10;
	return degreeCelcius;
}

const ctof = function(degreeCelcius) {
	var degreeCelcius = 0;
	degreeFahrenheit = Math.round(((degreeCelcius * 9/5) + 32) * 10) / 10;
	return degreeFahrenheit;
}

module.exports = {
  ftoc,
  ctof
}
