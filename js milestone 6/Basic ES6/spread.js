const max = Math.max(44, 66, 77 ,8);
// console.log(max);



// const numbers = [44, 66, 77, 8];
// const largest = Math.max(numbers);
// console.log(numbers)
// console.log(largest);
// // directly array theke max number bar kora jai na [it will show NaN]


// find max number from an array using [...]
const heights = [12, 34, 55, 32, 17];
const highesst = Math.max(...heights);
// console.log(...heights)
// console.log(highesst)




//  without [...]
// const numbers = [44, 66, 77, 8];

// const number2 = [numbers];
// numbers.push(55);
// number2.push(99);
// console.log(number2)
// console.log(numbers)




//  with [...]
const numbers = [44, 66, 77, 8];

const number2 = [...numbers];
numbers.push(55);
number2.push(99);
console.log(number2)
console.log(numbers)



// summery of this js file 
const marks =[55, 66, 76, 88, 72];
const mark2 =[...marks];

console.log(mark2)


// you can also add value in it
const mark3 = [44, 65, 60, ...marks, 87, 77];
console.log(mark3)