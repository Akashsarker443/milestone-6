const numbers = [2, 12, 87, 60, 55, 33, 44, 88, 42, 3];
const fives = numbers.find(num => num % 5 === 0);
console.log(fives)
const fivesAll = numbers.filter(num => num % 5 === 0);
console.log(fivesAll)


const products = [
    {id: 1, name: 'laptap', price: 65000},
    {id: 1, name: 'mobile', price: 25000},
    {id: 1, name: 'watch', price: 54000},
    {id: 1, name: 'Tv', price: 30000},
    {id: 1, name: 'tablet', price: 35000}
];

const cheap = products.find(product => product.price < 40000);
console.log(cheap)