const numbers =[1, 2, 3, 4, 5];
//  .reduce (accumulatorFunction, initial value)
// accumulatorFunction use two parameter 

const total = numbers.reduce((previous, current) => previous + current , 0);
// console.log(total);

const total2 = numbers.reduce((previous, current) => previous * current , 1);
// console.log(total2);




// same code using multiline 
const total3 = numbers.reduce((previous, current) =>{
         console.log(previous , current)
         return  previous + current;
} , 0);
console.log(total3);
