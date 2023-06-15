console.log("js working")


const age = "25";

console.log(age)

const country = "Australia";

console.log(country)

const drunk = 4;
console.log(drunk)

const formInput = (age, country, drunk) => {
    
    if (age >= 21 && country  && drunk <= 3){
        
        console.log("You can enter");
    }

    else {
        console.log("you can't enter")
    }
}

formInput(age, country, drunk)