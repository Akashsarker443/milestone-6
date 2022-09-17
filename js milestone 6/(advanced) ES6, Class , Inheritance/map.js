// const numbers = [2, 4, 8, 6, 3];
// const output = [];
// for (const number of numbers) {
//   const doubled = number * 2;
//   output.push(doubled);
// }
// console.log(output)


// function getDoubles(numbers) {
//   const output = [];
//   for (const number of numbers) {
//     const doubled = number * 2;
//     output.push(doubled);
//   }
//   return output;
// }

// const numbers = [2, 4, 8, 6, 3];
// const result = getDoubles(numbers);
// console.log(result)




//  call function within another function

// function getDoubles(numbers) {
//   const output = [];
//   for (const number of numbers) {
//     const doubled = doubleItOld(number);
//     output.push(doubled);
//   }
//   return output;
// }
// const numbers = [2, 22, 8, 6, 3];
// const result = getDoubles(numbers);
// console.log(result)

// function doubleItOld(number){
//     return number * 2;
// }
// // const doubleItNew = num => num * 2;
// // it is as like as the function written above




// simplified way of doung the same task [task is to make double of all the element of this array]

const numbers = [2, 22, 88, 60, 3];
const doubleIt = num => num * 2;
const makeDouble = numbers.map(doubleIt);
// console.log(makeDouble)

// same thing doing directly 
const makeDoubleDirectly = numbers.map(num => num * 2);
// console.log(makeDoubleDirectly)


// make five times using array directly
const makeFiveTimes = [4, 6, 2, 3, 9].map(num => num * 5);
// console.log(makeFiveTimes)







const power = numbers.map(num => num ** 2);
console.log(power)



const power3 = numbers.map(num => num ** 3);
console.log(power3)

// using Math.pow
const power4 = numbers.map(num => Math.pow(num, 3));
console.log(power4)
