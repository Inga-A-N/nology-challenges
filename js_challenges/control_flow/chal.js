// Challenge: Comparing Numbers
// MVP: Check for the smallest value

// Create two variables x & y Write an if / else block It should compare a number x to another number y It should print ("x is greater than y") in the console Or "x is smaller than y" Or "x is equal to y" Depending on the value of x and y


let x = 5;
let y = 10;
if (x>y){
    console.log("x is greater than y")
}
else if (x<y){
    console.log("x is smaller than y")
}
else{
    console.log("x is equal to y")
}

// Challenge: User Input Type
// MVP: Console log the user's input depending on the data type

// Create a variable userInput Write an if / else block If the input is a number, it should console log that number but squared If the input is a string, it should console log that input If the input is anythig else, the console should say "invalid input"



let someText = "Hello"

if (typeof someText === "number"){
    console.log(someText**2)
}
else if (typeof someText === "string"){
    console.log(someText)
}
else{
    console.log("Invalid input")
}

let newText = prompt("Please enter a number")

if (parseInt(newText)){
    console.log(parseInt(newText)**2)
}
else if (newText === "true" || newText === "false"){
    console.log("invalid input")
}
else {
    console.log(newText)
}

// do the rest of the challenges in controll-flow folder