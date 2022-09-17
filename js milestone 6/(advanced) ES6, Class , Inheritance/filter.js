const numbers = [2, 12, 22, 28, 87, 60, 55, 33, 44, 88, 42, 3];
const bigNums = numbers.filter(num => num > 40);
// console.log(bigNums)
const tinyNums = numbers.filter(num => num < 20);
// console.log(tinyNums)
const even = numbers.filter(num => num % 2 === 0);
// console.log(even)

const even2 = numbers.filter(num => num < 30 && num % 2 === 0);
console.log(even2)



const products = [
    {id: 1, name: 'laptap', price: 45000},
    {id: 1, name: 'mobile', price: 25000},
    {id: 1, name: 'watch', price: 54000},
    {id: 1, name: 'Tv', price: 30000},
    {id: 1, name: 'tablet', price: 35000}
];

const expensive = products.filter(product => product.price > 30000);
console.log(expensive)
const expensive2 = products.filter(product => product.price > 100000);
console.log(expensive2)
const expensive3 = products.filter(product => product.name.length > 5);
console.log(expensive3)