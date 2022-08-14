const kelvin = 0;
// The forecast today is 293 Kelvin
const celsius = kelvin - 273;
// Celsius is 273 degrees less than Kelvin
let fahrenheit = celsius * (9/5) + 32;
// Calculation to convert to fahrenheit
fahrenheit = Math.floor(fahrenheit);
// Rounds down fahrenheit
console.log(`The temperature is ${fahrenheit} degrees Fahrenheit.`);
let newton = celsius * (33/100);
newton = Math.floor(newton);
console.log(`The temperature is ${newton} degrees Newton.`);