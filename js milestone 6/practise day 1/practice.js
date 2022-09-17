const name = 'akash sarker';
let sum = '15 lakh';


const student = {
    name: 'Tanmoy Ahmed',
    age: 23, 
    college: ' Titumir college'
}


const person = `He is ${name}.
he is now owner of ${sum}.
But this is a false statement. 
one of my friend is ${student.name}.
he is studying in ${student.college}
`;

console.log(person)


// problem 3.1
const getDivisibleValue = n => n / 5;
const result = getDivisibleValue(44);
console.log(result)

// problem 3.2
const getTotal = (num1, num2) => (num1 + 2) * (num2 + 2);
const result5 = getTotal(3 , 6);
console.log(result5)

// problem 3.3
const getMultiply = (x, y, z) => x * y * z;
const result3 = getMultiply(4,  6, 9)
console.log(result3)



// problem 3.4
const getDouble = (num1, num2) => {
    const number1 = num1 + 2; 
    const number2 = num2 + 2; 
    const total = number1 * number2;
    return total;
}
const result2 = getDouble(7, 5);
console.log(result2)











//  problem 5
const numbers = [2, 4, 7, 9, 23, 16 , 17, 99];
const result6 = numbers.map(n => n * 5);
console.log(result6)


















//  problem 6
const result7 = numbers.filter(n => n % 2 === 1);
console.log(result7)

//  problem 7
const products  =[
    {name: ' laptop', price: 5000},
    {name: ' tv', price: 9000},
    {name: ' shoe', price: 7000},
    {name: ' motherboard', price: 5000},
    {name: ' pistol', price: 3000}
];
const result8 = products.find(n => n.price === 5000);
console.log(result8)

//  problem 8
const product =  {
    name: ' laptop', 
    price: 5000,
    brand: 'samsung'
};
const {brand } = product;
console.log(brand)

//  problem 9
const friends =['akash', 'batash', 'titash', 'pikash', 'nitash', 'kitash', 'minash'];
const [x, y, three, ...rest] =friends;
console.log(three)
console.log(rest)


//  problem 10 
const defultValue = (x, y, z=7) => x + y + z;
const result9 = defultValue(3, 6)
console.log(result9)