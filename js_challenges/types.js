console.log(typeof 15); // Prediction: number
console.log(typeof 5.5); // Prediction: number
console.log(typeof NaN); // Prediction: number
console.log(typeof 'hello'); // Prediction: string
console.log(typeof true); // Prediction: boolean
console.log(typeof (1 != 2)); // Prediction: boolean
console.log(typeof ('hamburger' + 's')); // string
console.log(typeof ('hamburgers' - 's')); // number (because this operation will return NaN)
console.log(typeof ('1' + '3')); // Prediction: string
console.log(typeof ('1' - '3')); // Prediction: number (because js will convert strings to numbers and do the operation)
console.log(typeof ('johnny' + 5)); // Prediction: string
console.log(typeof ('johnny' - 5)); // Prediction: number (because this operation will return NaN)
console.log(typeof (99 * 'luftbaloons')); // Prediction: number (because this operation will return NaN) can't multiply strings