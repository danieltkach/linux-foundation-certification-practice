class Person {
	constructor(name) {
		this.name = name;
	}
	sayName() {
		console.log(this.name);
	}
}

class Student extends Person {
	constructor(name) {
		super(name);
	}
}

const codeWitcher = new Student('Daniel T.');
codeWitcher.sayName();