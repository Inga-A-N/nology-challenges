// A function that calculates the sum of numbers

// It should throw an error if one or more parameters are not a number

// if no parameters are passed -> thor an error

// I want it to sum any number of arguments <= 1


export const sum = (...numbers) =>{
    //with spread syntax numbers are in an array
    

    if (numbers.length === 0){
        throw new Error("No parameters received")
    };

    if (numbers.filter((num) => typeof num !== "number").length > 0){
        throw new Error("One or more of the Parameters is not a number")
    }

    return numbers.reduce((acc, curr) => (acc+=curr));
};
console.log(sum(1, 2))