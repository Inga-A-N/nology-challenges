// // given an array of character codes, convert the codes to letters and reduce it to a single string

// const arrOfCodes = [114, 101, 100, 117, 99, 101];
// const letterString = arrOfCodes.reduce((acc, curr) => {
//     console.log({acc, curr})
//     return (acc + String.fromCharCode(curr))

// }, "")

// console.log(letterString)

// // given an array of letters, reduce them to get the sum of character codes
// const lettArr = ["c", "h", "e", "e", "s", "e"];

// const codesSum = lettArr.reduce((acc, curr) => {
//     console.log({acc, curr})
//     return (acc + curr.charCodeAt())
    
// }, 0)

// console.log(codesSum)

// // use reduce to filter an array to only get numbers greater than 10

const numsArr = [1, 345, 545, 2, 5, 7, 907];

// const greaterTen = numsArr.reduce((acc, curr) => {
//     console.log({acc, curr})
//     if (curr > 10){
//         acc.push(curr);
//     }
//     return acc
// }, [])
//  console.log (greaterTen)


// // use reduce to create an array of numbers (use numsArr) to the power of 2

const powerOfTwo = numsArr.reduce((acc, curr) => {
    console.log({acc, curr})
    acc.push(curr**2);
    return acc;
}, [])
 console.log ("Power if two: ", powerOfTwo)