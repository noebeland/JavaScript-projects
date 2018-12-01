function translate(string) {
	string.split(" ");
	.map(word => {
		const index = firstVowelIndex(word);
		const beginning = word.slice(0, index);
		const ending = 
	})
	

}

function firstVowelIndex(string){
	const vowels = string.match(/[aeiou]/g);

}


module.exports = {
	translate
}

