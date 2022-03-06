function test(a, b) {
	console.log('this: ', this);
}

let obj1 = {
	id: 1
};

test();
let functionExpression = test.bind(obj1);
functionExpression();