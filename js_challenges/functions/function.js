// Challenge: Calculating Moon Orbits
// MVP Write a function that takes in a number of earth days, and returns the number of orbits the moon can perform given days.

// moonOrbits(54) => 2
// moonOrbits(365) => 13.359

function moonOrbits(days){
    const orbit = 27.3;
    const numberOfOrbits= days/orbit;
    console.log(numberOfOrbits)
    return numberOfOrbits;
    
}
moonOrbits(365)


// Challenge: Working with Circles
// MVP Write a function that takes the radius of a circle and return its area. Write a function that takes the radius of a circle and return its perimeter.

function circleArea(radius){
   const areaCirc = (Math.PI*(radius**2)).toFixed(2)
   console.log("Area = ", areaCirc)
   return areaCirc
}

circleArea(10)

function circlePerimeter(radius){
    const areaPer = 2*Math.PI*radius
    console.log(areaPer)
    return areaPer
 }

 circlePerimeter(10)

// circleArea(10) => 314.16
// circlePerimeter(10) => 62.83

// Challenge: Years to Days & Seconds
// MVP Create a function that takes your age in years and returns your age in days. Create a function that takes your age in years and returns your age in seconds.

function yearsInDaysSeconds(years){
    const inDays = years * 365 + (parseInt(years/4));
    console.log(inDays)
    const inSeconds = inDays * 60*60*24
    console.log(inSeconds)
    return inDays, inSeconds
}

yearsInDaysSeconds(32)

// ageInDays(32) => 11680
// ageInSeconds(32) => 1009152000


// Challenge: Return the Remainder from Two Numbers
// MVP There is a single operator in JavaScript, capable of providing the remainder of a division operation. Two numbers are passed as parameters. The first parameter divided by the second parameter will have a remainder, possibly zero. Return that value.

const remainder = (num1, num2) => num1 % num2

console.log(remainder(5, 5))

// remainder(1, 3) ➞ 1

// remainder(3, 4) ➞ 3

// remainder(-9, 45) ➞ -9

// remainder(5, 5) ➞ 0

// Challenge: Basketball Points
// MVP You are counting points for a basketball game, given the amount of 2-pointers scored and 3-pointers scored, find the final points for the team and return that value.

function finalScore(twoPointers, threePointers){
    const score = twoPointers * 2 + threePointers * 3
    console.log(`The final score is ${score}.`)
    return score
}

finalScore(10, 10)

// Challenge: Less Than 100?
// MVP Given two numbers, return true if the sum of both numbers is less than 100. Otherwise return false.

function lessThan100(num1, num2){
    const sumOfNums = num1 + num2
    console.log(sumOfNums < 100)
    return (sumOfNums < 100)
}

lessThan100(83, 34)

// lessThan100(22, 15) ➞ true
// // 22 + 15 = 37

// lessThan100(83, 34) ➞ false
// // 83 + 34 = 117

// lessThan100(3, 77) ➞ true