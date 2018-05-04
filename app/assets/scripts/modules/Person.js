class Person {
	constructor(fullName, favColor) {
		this.name = fullName;
		this.favoriteColor = favColor;
	}

	greet() {
	console.log("hi, my name is" + this.name + "and my favorite color is" + this.favoriteColor);
	}
	 
}

// module.exports = Person; nodejs way
export default Person; //es6



