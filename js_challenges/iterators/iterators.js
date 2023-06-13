// You have an array of names all in lowercase you want a new array with all names but uppercase

const names = ["john", "jack", "anna"]

const upperNames = names.map((item)=>{
    return (item.toUpperCase())
})

console.log(upperNames)

// You have an array of numbers, you want a new array with each number decremented by 5

const numbers = [2, 5, 7, 3]

const decrNumbers = numbers.map((i)=>i-5)

console.log(decrNumbers)