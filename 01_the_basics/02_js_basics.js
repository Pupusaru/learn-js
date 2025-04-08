// Variables
// Demonstrate how to declare variables using var, let, and const
let frankTheLion = "frank"
let frank_the_lion = "frank"

var logan

const jester = "balatro"
jester[2] = "h"

// Data Types
// Show examples of strings, numbers, booleans, arrays, and objects

// Strings
let string = "frank"
let anotherString = 'frank\'s cookie'
let templateLiteral = `franks amazing dance`

let twoStrings = string + "some phrase " + anotherString;
let templateLiteralAgain = `frank ${string} frank ${anotherString}`

// Numbers
let numbers = 12354.6586364
let py = 123

// Booleans
let booleanValue = true;

// Arrays
let array = [1, "string", [1,2,3], {name: "mouse"}]
console.log(array[3])

// Objects

let chair = { color: "red", legs: 4, material: "wood" }
let bed = {blankets: 3, legs: 4, "bed brand" : "Serta"}
// console.log(bed["bed brand"])
// console.log(chair.material)

let arrayWithObject = [1, 2, 3, {pizza: "cheese", order: "fulfilled"}, "mike"]
// console.log(arrayWithObject[3].order)

// Arrays
// Demonstrate array creation, accessing elements, and common methods like push, pop, map, and filter

let nice = ["pancakes", "good dick", "pokemon", "pizza"]
nice.push("cheese")
// nice.push("iPhone")
// nice.push("penis bunner")
// console.log("this is the pop!!", nice.pop())
// console.log("this is nice.shift!", nice.shift())
// let dick = nice.shift();
// nice.push(dick)
// console.log(nice)

// Objects
// Show how to create objects, access properties, and use methods

let frankBio = {name: "frank", occupation: "elite coder", username: "frankBlankPrime"}
frankBio.eyeColor = "blue"
console.log(Object.keys(frankBio))
console.log(Object.values(frankBio))
console.log(frankBio)

// Conditionals
// Demonstrate if-else statements, switch cases, and ternary operators

let num1 = 5
let num2 = 7

if(num1 > num2){
    console.log("The first number is larger")
} else {
    console.log("The first number is smaller!")
}

if(num1 === num2){
    console.log("The two values are exactly the same!")
}

if(num1 !== num2){
    console.log("The numbers are different!")
}

// ternary

num1 !== num2 
? console.log("The numbers are different!") 
: console.log("The numbers are the same!")


// Functions
// Write examples of function declarations, expressions, and arrow functions

function myFunction (x, y){
    let sum = x + y
    return sum
}

let result = myFunction(7, 4)
console.log(result)

console.log(myFunction(2,3))

let ten = 5 + myFunction(2,3)

// Loops
// Show examples of for, while, and do-while loops