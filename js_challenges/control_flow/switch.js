// Challenge: Tell me the day!
// MVP: Create a switch block that will log a string for each day of the week.

// Create a variable called day The switch will be given a number and return the matching days of the week e.g. if day = 2, the switch should print Today is Tuesday in the console. Your switch block should also handle numbers out of range

let dayNumber = prompt("Please enter a number");

// console.log(typeof dayNumber)

if (dayNumber >= 0){
    dayNumber %= 7;
    if (dayNumber == 0) {
        dayNumber = 7
    }
}
// dayNumber = parseInt(dayNumber) // Not required in this case, because will convert floats to integers and still return one of the cases.

// console.log(typeof dayNumber)

switch(dayNumber){
    case 1:
        console.log("Today is Monday");
        break;
    case 2:
        console.log("Today is Tuesday");
        break;
    case 3:
        console.log("Today is Wednesday");
        break;
    case 4:
    console.log("Today is Thursday");
    break;
    case 5:
        console.log("Today is Friday");
        break;
    case 6:
        console.log("Today is Saturday");
        break;
    case 7:
        console.log("Today is Sunday");
        break;
    default:
        console.log("Please enter a positiv integer.")
}

// Challenge: Eye Colour
// MVP: Tell the user what eye colour their child would have.

// Create two variables parent1 and parent2 Given the eye colour of each parent, it should console log the probability of their child having different eye colours, for example: Your eye colours are brown and blue, the chances of your child having blue eyes is --%, brown is --% and green is --% Use the following image as a reference

// Bonus: Store the value of the child’s eye colour and write a switch statement - depending on the child’s eye colour consol log if it's your favourite eye colour, your least favourite eye colour or the mediocre colour
function eyesColour(){
let parent1 = prompt("Parent1 eyes colour?");
let parent2 = prompt("Parent2 eyes colour?");
parent1 = parent1.toLowerCase()
parent2 = parent2.toLowerCase()
switch(true){ 
    case (parent1==="brown"&& parent2==="brown"):
    console.log(`Your eye colours are ${parent1} and ${parent2}. Your child's eyes colour probability is: brown - 75%, green - 18.75%, blue - 6.25%`)
    break
    case (parent1==="green"&& parent2==="brown"||parent1==="brown" && parent2==="green"):
    console.log(`Your eye colours are ${parent1} and ${parent2}. Your child's eyes colour probability is: brown - 50%, green - 37.5%, blue - 12.5%`)
    break
    case (parent1==="blue"&& parent2==="brown"||parent1==="brown" && parent2==="blue"):
    console.log(`Your eye colours are ${parent1} and ${parent2}. Your child's eyes colour probability is: brown - 50%, green - 0%, blue - 50%`)
    break
    case (parent1==="green"&& parent2==="green"):
    console.log(`Your eye colours are ${parent1} and ${parent2}. Your child's eyes colour probability is: brown - <1%, green - 75%, blue - 25%`)
    break
    case (parent1==="green"&& parent2==="blue"||parent1==="blue" && parent2==="green"):
    console.log(`Your eye colours are ${parent1} and ${parent2}. Your child's eyes colour probability is: brown - 0%, green - 50%, blue - 50%`)
    break
    case (parent1==="blue"&& parent2==="blue"):
    console.log(`Your eye colours are ${parent1} and ${parent2}. Your child's eyes colour probability is: brown - 0%, green - 1%, blue - 99%`)
    break
    default:
        console.log("Please enter blue, brown or green")
        eyesColour()
    }
}
eyesColour()