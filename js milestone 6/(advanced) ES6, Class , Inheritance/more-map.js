const numbers = [4, 55, 88, 99];
const third = numbers.map( x => x / 3);
// console.log(third)


const friends = ['tom cruse', 'alash', 'david', 'solaiman tom', 'batapora shourav'];
const firstLetters = friends.map(friend => friend[0]);
// console.log(firstLetters);
const nameLengths = friends.map(friend => friend.length);
console.log(nameLengths)







const products = [
    {id: 1, name: 'laptap', price: 45000},
    {id: 1, name: 'mobile', price: 25000},
    {id: 1, name: 'watch', price: 54000},
    {id: 1, name: 'tablet', price: 35000},
];
const items = products.map(product => product.name);
// console.log(items)
const prices = products.map(product => product.price);
// console.log(prices)
const prices3 = products.map(product => product.price * 2);
console.log(prices3)