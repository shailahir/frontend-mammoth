console.log(3 === 3.0); // true
console.log("yes" === "yes"); // true
console.log(null === null); // true
console.log(false === false); // true

console.log(42 === "42"); // false
console.log("hello" === "Hello"); // false
console.log(true === 1); // false
console.log(0 === null); // false
console.log("" === null); // false
console.log(null === undefined); //false

// === and == both checks the euqlity and type of the values both, but
// === does not allow coercion and == allows it.


console.log(NaN === NaN); // false , use Number.isNaN()
console.log(0 === -0); //true, use Object.is()

const arComp = [1, 2, 3] === [1, 2, 3]; //false
console.log(arComp);

const objComp = { a: 42 } === { a: 42 }; //false
console.log(objComp);

const exprComp = (x => x * 2) === (x => x * 2); // false
console.log(exprComp);

var x = [1,2,3];
// assignment is by reference-copy, so
// y references the same array as x,
// not another copy of it

var y = x;

console.log(y === x); // true
console.log(y === [1,2,3]); // false
console.log(x === [1,2,3]); // false
