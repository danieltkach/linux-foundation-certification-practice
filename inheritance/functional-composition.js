function wolf(name) {
	const howl = () => {
		console.log(name + ': awoooooooo');
	};
	return { howl: howl };
}

function dog(name) {
	name = name + ' the dog';
	const woof = () => { console.log(name + ': woof'); };
	return {
		...wolf(name),
		woof: woof
	};
}
const rufus = dog('Rufus');

rufus.woof(); // prints "Rufus the dog: woof"
rufus.howl(); // prints "Rufus the dog: awoooooooo"