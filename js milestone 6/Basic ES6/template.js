const person = "Asad mia";
const person2 = 'Dronal Trump';
const person3 = `Kele Pocha`;


// const multiline = 'First line of code \n' + 
// 'second line of code \n' +
// 'third line of code \n' + 
// 'Forth line of the code';
// console.log(multiline);


/* simplified way of writing multiline  */

const newMultiline = `First line of code 
Second line of code 
Third line of the code 
Final line of the code`;
console.log(newMultiline)



// //  without using gap
// const a = 30 ;
// const b = 20;
// const summery = 'sum of:' + a + 'and' + b + 'is:' + (a+b);
// console.log(summery)


//  with using gap
const a = 30 ;
const b = 20;
const summery = 'sum of: '  + a +  ' and ' + b + ' is: ' + (a+b);
console.log(summery)

// simplified way with backtick sign
const newSummery = `sum of ${a} and ${b} is: ${a+b}`;
console.log(newSummery)