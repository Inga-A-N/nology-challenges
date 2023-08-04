let myName = "Inga";
// myName = 25; won't work as it has to be a string, type number is not asignable to string
let otherName: string = "Mary"; // Same as myName re type

// let otherName: any = "Mary"; // any - can be any type but not good practice

const add = (a:number, b:number) => {
    return a + b
}; //With typescript we don't need to check if a and b are numbers as the code won't run at all if they are not

let result = add(1, 2);

const add1 = (a:number, b:number):number => {
    return a + b
}; // can only return a number becase we stated it with (...):number

const add2 = (a:number, b:number) => {
    if(a<0||b<0){
        return "Add positive numbers"
    }
    return a + b
}; //Will return either number or string

let result2 = add2(1, 2); //

const names: string[] = ["Alice", "Bob", "Charlie"]; // Can't push number into array which type has been declared explicitly

const names1 = ["Alice", "Bob", "Charlie", 10]; //Can push number into array which type has not been declared explicitly and now it's an array of strings and numbers

// TypeScript has support for generics
const combineArrays = <T>(arr1:T[], arr2:T[]) => {
    return [...arr1, ...arr2];
} //Combining arrays of the same type

const combined = combineArrays([1, 2, 3], [4, 5,6]);