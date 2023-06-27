// Have a look at the documentation for Countries API

// When the user clicks the button, country info gets displayed on the page
// Get the country from the input
// Use async/await over .then
const COUNTRIES_URL = "https://restcountries.com/v3.1/all";

const getCountry = async (countryData) => {
    
    const response = await fetch (`${COUNTRIES_URL}`);
    //console.log(response)
    const information = await response.json();

    console.log(information)
    //console.log(information[0])
    //console.log(information[0].name)
    //console.log(information[0].name.common)

    //const {name} = information[0];
    //console.log(name.common)

    for (let i = 0; i < information.length; ++i ){
        const name = information[i].name.common
        // console.log(name)

        if (name === countryData){
            console.log(name)
                                   
            return information[i]
            }
        }
      
    }
     

    

    // const names = (information.map((name) => {

    //     const commonName = (name.map)

    // }))
// }

// console.log(getCountry())


const btn = document.querySelector("form");

btn.addEventListener("submit", async (event) => {
    event.preventDefault();
        
    const input = document.querySelector("#country")
    const countryData = await getCountry(input.value)
    console.log(countryData)

    const div = document.querySelector("div")



    const {capital, area, continents} = countryData
    const selectedCountry = `Capital : ${capital}, Area : ${area} km², Continent : ${continents} `
    const countryName = countryData.name.common

    createCard(div, countryName, selectedCountry)
    
})

const createCard = (parent, countryName, selectedCountry) => {
    
    const paragraph = document.createElement("p");
    paragraph.className = "info";
    const heading = document.createElement("h3");
    const nameText = document.createTextNode(countryName);
    heading.appendChild(nameText);
    
    const countryText = document.createTextNode(selectedCountry);
    paragraph.appendChild(countryText);
    // div.appendChild(heading);
    // div.appendChild(para);
    parent.appendChild(heading);
    parent.appendChild(paragraph);
};