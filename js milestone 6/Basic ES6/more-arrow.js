const add = (first, second) => first + second;
const getFullName = (first, last) => first + ' ' + last;
const multiply = (a, b) => a * b;

const result = multiply(6, 9);
console.log(result);

const addAll = (a, b, c, d, e, f) => a + b + c + d + e + f;
const result1 = addAll(1, 3 ,5, 6, 7, 8);
console.log(result1)



// no parameter arrow function 
const getPie = () => 3.1416;


// one parameter 
const doubleIt = (num) => num * 2;

// one parameter simple version
const fiveTimes = num => num * 5;


// multi line arrow function 
// in multi line arrow function you have to use return ,    while in one line arrow function you need not use return

const doMath =(x, y, z) => {
    const firstSum = x + y;
    const secondSum = y + z;
    const multiplyResult = firstSum * secondSum;
    const total = multiplyResult / 2;
    return total;
}
const result3 = doMath(5, 3, 2);
console.log(result3)