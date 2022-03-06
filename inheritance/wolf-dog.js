class Wolf {
	constructor(name) {
		this.name = name;
	}
	howl() { console.log(this.name + ': awoooooooo'); }
}

class Dog extends Wolf {
	constructor(name) {
		super(name + ' the dog');
	}
	woof() { console.log(this.name + ': woof'); }
}

const rufus = new Dog('Rufus');

rufus.woof(); // prints "Rufus the dog: woof"
rufus.howl(); // prints "Rufus the dog: awoooooooo"