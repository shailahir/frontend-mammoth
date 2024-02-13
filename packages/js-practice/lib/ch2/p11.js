// function declaration
function awesomeFunction(coolThgings) { 
    const amazingStuff = "Stuff";
    return amazingStuff;
}

console.log(awesomeFunction());

// function expression
var awesomeFunction2 = function(coolThgings) {
    const amazingStuff = "Amazing Stuff";
    return amazingStuff;
}
console.log(awesomeFunction2());

function greeting(myName) {
    console.log(`Hello, ${myName}`);
}
greeting("Kyle");

function greeting2(myName) {
    return `Hello, ${myName}`;
}
var msg = greeting2("Kyle");
console.log(msg);

var whatToSay = {
    greeting() {
        console.log('Hello!');
    },
    question() {
        console.log("What's your name?");
    },
    answer(){
        console.log("My name is Kyle.")
    }
}

whatToSay.greeting();
whatToSay.question();
whatToSay.answer();