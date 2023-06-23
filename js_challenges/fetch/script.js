// Have a look at the documentation for Countries API

// When the user clicks the button, country info gets displayed on the page
// Get the country from the input
// Use async/await over .then
const COUNTRIES_URL = "https://restcountries.com/v3.1/all?fields=name";

const getCountry = async () => {
    
    const response = await fetch (`${COUNTRIES_URL}`);
    console.log(response)
    const information = await response.json();
    console.log(information)
    
    const {common, ...rest} = information;
    console.log(common)}
    
console.log(getCountry())
const btn = document.querySelector("button");

btn.addEventListener("submit", async (event) => {
    event.preventDefault();

    
})