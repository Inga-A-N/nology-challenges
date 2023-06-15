// # Lad in the pub

// 1. Create a function that takes 3 parameters (age, country level of drunk) and returns a string or a boolean that says if someone can enter the pub or not (drunk above 3 is too much)



const age = document.getElementById("age");
//console.log(age)

const country = document.getElementById("country");
//console.log(country)

const drunk = document.getElementById("drunk");
//console.log(drunk);

const picture = document.querySelector("img");
//console.log(picture)

const createNewEl = (element, text, parent) => {
    
    const newEl = document.createElement(element);
    newEl.setAttribute("id", "pyosIKot")
    const textNode = document.createTextNode(text);
    newEl.appendChild(textNode);
    parent.appendChild(newEl)
};


const formInput = (age, country, drunk) => {
    if (document.getElementById("pyosIKot")) {
        document.getElementById("message").removeChild(document.getElementById("pyosIKot"))
    }       
    if (age >= 21 && country  && drunk <= 3){
        
              
        createNewEl("p", "Come in and have a beer", document.getElementById("message"));
        submitBtn.style.backgroundColor = "green";
        picture.src = "./assets/green_beer.svg"
        
        
    }
    else {
        
        createNewEl("p", "You can't have a beer", document.getElementById("message"))
        submitBtn.style.backgroundColor = "red";
        picture.src = "./assets/red_beer.svg"
        
    }
}



// // 2. Add a script.js file to the provided code and add the following functionality:


// // -   The function should be triggered on form submit.

const submitBtn = document.querySelector("#btn");

submitBtn.addEventListener("click", () => {
    formInput(age.value, country.value, drunk.value);
})

// -   a message should be rendered under the form "Come in and have a beer" / "You can't have a beer"
// -   If the person is allowed to enter the pub, the colour of the bottle and the button background should change to green.
// -   If the person is not allowed to enter the pub, the bottle and the message div background should be red.
// -   Only one message should be rendered, if there is already a message on the page, it should be removed when the user clicks the button again and a new one should be displayed.

// BONUS: Familiarise yourself with the following docs: https://developer.mozilla.org/en-US/docs/Web/API/FormData and implement the challenge using FormData


