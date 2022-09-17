const numbers = [2, 4, 1, 9, 5, 36, 7];
// console.log('without using ... :', numbers)
// console.log('with using ... :',...numbers)


const numbers2 = [4, 7, 8, 33, 45];

const newArr = [...numbers, ...numbers2];
// console.log(newArr)



// how to get any element from array by destructuring

const [a , b] =numbers;
// console.log(a, b)

//  how to get first 1/2/3 etc and put the rest of the element into another array
const [x, y, ...rest ] = numbers;
// console.log(x, y , rest)
// console.log(rest)



//  copy array [ kinto ababe copy korle pore array1 a new element push korle ta array2  a o dokhe jabe ]
const array1 = [3, 5, 7, 12];
const array2 = array1;

array1.push(44, 55)

// console.log(array1, array2)



// copy array by (...) . [ ababe copy korle pore jekono tate  new element push korle ta akta arektar modde   a  dokhe jabe  na ]

const arr1 = [4, 6, 8, 9, 15];
const arr2 = [...arr1];

arr1.push(399);
arr2.push(777, 444 , 5, 898)
console.log(arr1)
console.log(arr2)