// 1
const movie = {
    title: "Dead Poets Society",
    yearReleased: 1989,
    director: "Peter Weir",
    genre: ["Drama", "Teen", "Comedy"],
};

// Using object destructuring, create a function that returns a string that says what the title and the genres of the passed object are.

// @param {title: string, yearReleased: number, director: string, genres: string[]}

// @returns 'The genres of the movie title are genre1, genre2'

const {title, genre} = movie;


console.log(title)
console.log(genre)



const getTitleAndGenre = (obj) => {
    const {title, genre} = obj;
    return `The genres of the movie ${title} are ${genre.join(", ")}`};

// checking if returned the right value
console.log(getTitleAndGenre(movie));

// 2
const recipe = {
    name: "Spaghetti Bolognese",
    country: "Italy",
    isVegetarian: false,
    mealIngredients: [
        "Minced beef",
        "tomato sugo",
        "basil",
        "onion",
        "garlic",
        "parmesan",
    ],
};

// Using object destructuring, create a function that renames the key of an object. It should not modify the original object.

// @param {name: string, country: string, isVegetarian: boolean, mealIngredients: string[]}
// @returns {name; string, country: string, isVegetarian: boolean, ingredients: string[]}

// const {name, country, isVegetarian, mealIngredients} = recipe;

const renameKey = (obj) => {
    const {mealIngredients, ...rest} = obj;
    const newRecipe = {ingredients:mealIngredients, ...rest}
    return newRecipe
};

console.log(renameKey(recipe));

// 3

const codingSchool = {
    name: "_nology",
    languages: ["JavaScript", "Java"],
    offices: [
        {
            country: "Australia",
            city: "Sydney",
        },
        {
            country: "UK",
            city: "Bristol",
        },
    ],
};

// Using destructuring, create a function that returns the city of the first office of the given company

// @param {name: string, languages: string[], offices: {country: string, city: string}[]}

// @returns {string}  the name of the city of the first office

const returnFirstCity = (obj) => {
    const {offices} = obj;
    return offices[0].city;


};

console.log(returnFirstCity(codingSchool));

// 4

const postsArray = [
    {
        id: 123,
        createdBy: "user16",
        commentNo: 5,
    },
    {
        id: 456,
        createdBy: "user20",
        commentNo: 5,
    },
    {
        id: 789,
        createdBy: "user32",
        commentNo: 5,
    },
];

// given an array of post objects create a function that returns a new array of posts, each object in the new array should have keys renamed as per the example.

// @param {{id: number, createdBy: number, commentNo: number}[]}

// @returns {{postId: number, creator: number, postComment: number}[]}
const newPostArr = (arr) => {
    return arr.map((obj) => {
        const { id, createdBy, commentNo } = obj;
        return { postId: id, creator: createdBy, postComment: commentNo };
      });
};

console.log(newPostArr(postsArray));

// 5
const forecast = {
    yesterday: { low: 14, high: 32 },
    today: { low: 18, high: 34 },
    tomorrow: { low: 20, high: 28 },
};

// using object destructuring, create a function that returns the value of the low temperature for today

// @param { yesterday: { low: number, high: number }, today: { low: number, high: number }, tomorrow: { low: number, high: number } }

// return {number} the value of the low temperature for today
const getTodayLow = (obj) => { const {today, ...rest} = obj 
const {low, ...todayRest} = today
return `${low} the value of the low temperature for today`};

console.log(getTodayLow(forecast));


// Swap keys with values

const translate = {
    apple: "jablko",
    pear: "gruszka",
    strawberry: "truskawka",
};

/* const newObj = {
    jablko: "apple",
    gruszka: "pear",
    truskawka: "strawberry"
} */
function flipKeysAndValues(obj) {
    const entries = Object.entries(obj);
    const flippedEntries = entries.map(entry => entry.reverse());
    const output = Object.fromEntries(flippedEntries);
    return output;
}

console.log(translate);
console.log(flipKeysAndValues(translate));

// Using reduce with an object {} accumulator

// const swapKeys = (obj) => {
//     const keyArr = Object.keys(obj)
//     const valueArr = Object.values(obj)

//     return valueArr.reduce((result, value, index) => {
//         result[value] = keyArr[index]
//         return result
//     }, {})
// };


console.log(flipKeysAndValues(translate))