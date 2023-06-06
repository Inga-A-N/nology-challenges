// Challenge: Eye Colour
// MVP: Tell the user what eye colour their child would have.

// Create two variables parent1 and parent2 Given the eye colour of each parent, it should console log the probability of their child having different eye colours, for example: Your eye colours are brown and blue, the chances of your child having blue eyes is --%, brown is --% and green is --% Use the following image as a reference

// Bonus: Store the value of the child’s eye colour and write a switch statement - depending on the child’s eye colour consol log if it's your favourite eye colour, your least favourite eye colour or the mediocre colour
function eyesColour() {
  let parent1 = prompt("Parent1 eyes colour?");
  let parent2 = prompt("Parent2 eyes colour?");
  let childEyeColour;
  parent1 = parent1.toLowerCase();
  parent2 = parent2.toLowerCase();

  if (parent1 === "brown" && parent2 === "brown") {
    console.log(`Your eye colours are ${parent1} and ${parent2}. Your child's eyes colour probability is: brown - 75%, green - 18.75%, blue - 6.25%`);
    childEyeColour = "brown";
  } 
  else if ((parent1 === "green" && parent2 === "brown") || (parent1 === "brown" && parent2 === "green")) {
    console.log(`Your eye colours are ${parent1} and ${parent2}. Your child's eyes colour probability is: brown - 50%, green - 37.5%, blue - 12.5%`);
    childEyeColour = "brown";
  } 
  else if ((parent1 === "blue" && parent2 === "brown") || (parent1 === "brown" && parent2 === "blue")) {
    console.log( `Your eye colours are ${parent1} and ${parent2}. Your child's eyes colour probability is: brown - 50%, green - 0%, blue - 50%`);
    childEyeColour = "blue";
  } 
  else if (parent1 === "green" && parent2 === "green") {
    console.log(`Your eye colours are ${parent1} and ${parent2}. Your child's eyes colour probability is: brown - <1%, green - 75%, blue - 25%`);
    childEyeColour = "green";
  } 
  else if ((parent1 === "green" && parent2 === "blue") || (parent1 === "blue" && parent2 === "green")) {
    console.log(`Your eye colours are ${parent1} and ${parent2}. Your child's eyes colour probability is: brown - 0%, green - 50%, blue - 50%`);
    childEyeColour = "green"
  } 
  else if (parent1 === "blue" && parent2 === "blue") {
    console.log(`Your eye colours are ${parent1} and ${parent2}. Your child's eyes colour probability is: brown - 0%, green - 1%, blue - 99%`);
    childEyeColour = "blue";
  } 
  else {
    console.log("Please enter blue, brown or green");
    eyesColour();
  }

  switch(childEyeColour){
    case "blue":
        console.log(childEyeColour);
        consile.log("This is the most awsome eye colour");
    break
    case "green":
        console.log(childEyeColour);
        console.log("This is the most magnificent eye colour");
    break
    case "brown":
        console.log(childEyeColour);
        console.log("This is the most gorgeous eye colour");
  }
}

eyesColour();
