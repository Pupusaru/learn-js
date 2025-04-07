let code = ""
// Ignore this stuff ^ 
// ----------------------------------


// Comments

// They are ignored by the JavaScript engine.

// This is a single-line comment

/* This is a multi-line comment.
   It can span multiple lines.
   It is also ignored by the JavaScript engine. */

// Some developers use @ markers to indicate important information.
// For example, @TODO can indicate that something needs to be done.
// @param can indicate an expected parameter in a function.
// @return can indicate an expected return value from a function.
// It's helpful for debugging and understanding someone else's code.

// You can use ctrl + / to toggle comments in VS Code. Highlight a line and 
// press ctrl + / to comment or uncomment it.

// @TODO: comment out the lines below to see what happens
"try commenting these lines out to see what happens";
"you can comment out multiple lines at once!";

// ----------------------------------

// Indenting

// JavaScript is a whitespace-sensitive language.
// This means that the indentation of your code matters.
// For example, if you have a block of code that is not indented properly,
// it can cause errors or unexpected behavior.

// Indentation is important for readability and maintainability.
// It helps you understand the structure of your code and makes it easier to read.

// You can use the tab key to indent your code.

if(code){
code = "This is some code that is not indented properly.";
}


// You can also change the indent level of multiple lines at once.
// To do this, highlight the lines you want to indent and press tab.

if(code){
code = "This is some code that is not indented properly.";
let frank = 'cool'
}

// You can use ctrl + [ to decrease or
//  ctrl + ] to increase the indent level.

if(code){
            code = "This is some code that is not indented properly.";
            let frank = 'cool'
}


// ----------------------------------

// Debugging

// You can use the console.log() function to print messages to the console.
// This is helpful for debugging and understanding what your code is doing.

// There are many other methods you can use on the console object, such as: 
// console.error(), console.warn(), console.info(), and console.table().
// These methods are helpful for debugging and understanding what your code is doing.
// But for the most part, console.log() is the most commonly used method.

console.log("This is a message that will be printed to the console.");
console.log("I can use emoji or whatever I want. 👅")

// In order for us to see the console, we need to open it.
// In VS Code, you can open the console by pressing ctrl + shift + ` (tick).

// In the terminal, type the node command followed by the name of the file you want to run.
// For example, if you want to run the file named 01_vsc_basics.js,
// type the following command in the terminal:

// node 01_vsc_basics.js

// This will run this file's instructions and print the output to the console.

// Once you've run a file, you can use the 
// up arrow key to cycle through the commands you've already run.
// This is helpful for quickly running the same command again without having to type it out again.

// ----------------------------------