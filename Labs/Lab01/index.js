//Lab01 COMP3123- Full Stack Development 

//Excercise 1
// Write a JavaScript program to capitalize the first letter of each word of a given string.


let a = "the quick brown fox"

function CapitilzeFirstLetter(a){
    return console.log(a.split(' ').map(word => word[0].toUpperCase() + word.slice(1)).join(' '))
   


}
CapitilzeFirstLetter(a);

// Exercise 2