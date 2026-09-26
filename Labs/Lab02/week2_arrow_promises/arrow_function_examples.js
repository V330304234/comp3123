//Arrow function Example

//Function Declaration
function add(a, b){
    return a + b;
}

//Function Expression
var add = function(a, b){
    return a +b;
}

//Arrow Fucniton
var add = (a, b) => {
    return a + b;
}

add = (a, b) => a +b; // Consie body syntax

var greet = (name) => {
    return `Hello, ${name}!`;
}

 greet = name => {
    return `Hello, ${name}!`;
}

greet = name => `Hello, ${name}!`;

var checkArrow = () => {
    console.log("this is an arrow function");
    console.log(this);
    console.log(arguments);

}

checkArrow();