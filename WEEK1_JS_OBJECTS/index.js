console.log("Hello, World");

var a = 100;
a = "Test";
console.log(a);

b = 200

b = "Another Test"

var b = "Red"

console.log(b);

//ES6
let c = 300;
//c = "Yet Another Test"
//let let c = 400 // This will throw an error because 'c' has already been decalred
console.log(c)

let d;
// You have the provide a value to const
const x = 600 // This will throw an error because 'x' is a constant and cannot be redeclared
//x = "test"
//const x = 700
 console.log(x)

// Declaring a function using funciton declaration
 function testLetConst(){
    const x = 700
    let c = 400
    console.log(`IN block c: ${c}`);

        

}
testLetConst();
console.log(`OUT Block c: ${c}`);

var flag = false;

console.log(typeof a) // String
console.log(typeof c) // Number
console.log(typeof flag) // Boolean 
console.log(typeof testLetConst) // Function type


//Declaring a fucntion using function expression
let sayHello = function() {
    console.log("Hello, World! Again")
}
sayHello();

//Declaring a function using arrow function
let greet = () => {
    console.log("Hello world! Again using arrow function")

}

greet();

//Array handling
let arr = [1,"TWO",3,4,5,null,false, undefined, {}, []]
console.log(arr)
console.log(arr[1])
console.log(arr.length)

var name
console.log(name)
console.log(typeof name)

let obj = null // Object type
console.log(obj)
console.log(typeof obj)

let city = {} //Object type
console.log(city)
console.log(typeof city)


//High order function
//Map
let numbers = [1,2,3,4,5]
console.log(numbers)
let newnumbers = numbers.map((num) => num * 2)
numbers.map((num) => {
    console.log(num*2)
})
console.log(newnumbers)

//Filter
numbers.filter(n=> n% 2 ===0)
let evenNumbers = numbers.filter((n) => n % 2 === 0)
console.log(evenNumbers)

//Reduce
let sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0)
console.log(sum)

//ForEach
const outNumbers = numbers.map((num) => num *2)
.filter((n) => n >2)
//.forEach((num) => console.log(num))

console.log(outNumbers)