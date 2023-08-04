var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var myName = "Inga";
// myName = 25; won't work as it has to be a string, type number is not asignable to string
var otherName = "Mary"; // Same as myName re type
// let otherName: any = "Mary"; // any - can be any type but not good practice
var add = function (a, b) {
    return a + b;
}; //With typescript we don't need to check if a and b are numbers as the code won't run at all if they are not
var result = add(1, 2);
var add1 = function (a, b) {
    return a + b;
}; // can only return a number becase we stated it with (...):number
var add2 = function (a, b) {
    if (a < 0 || b < 0) {
        return "Add positive numbers";
    }
    return a + b;
}; //Will return either number or string
var result2 = add2(1, 2); //
var names = ["Alice", "Bob", "Charlie"]; // Can't push number into array which type has been declared explicitly
var names1 = ["Alice", "Bob", "Charlie", 10]; //Can push number into array which type has not been declared explicitly and now it's an array of strings and numbers
// TypeScript has support for generics
var combineArrays = function (arr1, arr2) {
    return __spreadArray(__spreadArray([], arr1, true), arr2, true);
}; //Combining arrays of the same type
var combined = combineArrays([1, 2, 3], [4, 5, 6]);
