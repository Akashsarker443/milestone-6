/* -------practice problem 1.1------*/
// with for loop
function getEven(numbers){
    const evenArray = [];
    for(const number of numbers){
       const evenNumber = number + 1;
        evenArray.push(evenNumber)

    }
    return evenArray;
}
const numbers = [1, 3, 5, 7, 9];
const result = getEven(numbers);
console.log(result)

/* -------practice problem 1.1------*/
// with array.map
const numbers2 = [1, 3, 5, 7, 9];
const getevenNumber = numbers2.map(number => number + 1);
console.log(getevenNumber)




/* -------practice problem 1.2------*/
// const number3 = [33, 50, 79, 90, 101, 30];
// const getDivisible = number3.filter(number => number % 10 === 0);
// console.log(getDivisible);


/* -------practice problem 1.3------*/

const number3 = [33, 50, 79, 90, 101, 30];
const getDivisible = number3.find(number => number % 10 === 0);
console.log(getDivisible);



/* -------practice problem 2------*/
// const array = [1, 9, 17, 22];
// const addAll = array.reduce((sum, current) => sum + current, 0);  
// console.log(addAll)

//  with multiline
const array = [1, 9, 17, 22, 6];
const addAll = array.reduce((sum, current) => {
    const total = sum + current;
    return total;
}, 0);  
console.log(addAll)


/* -------practice problem 2 with for loop------*/
 
function getTotal(numbers){
    let sum = 0 ;
    for(const number of numbers){
         sum = sum + number;
    }
    return sum;
}
const numbers4 = [1, 9, 17, 22];
const result4 = getTotal(numbers4);
console.log('total:', result4)



/* -------practice problem 3------*/
//  with for loop
function getTotalAge (people){
    let sum = 0;
    for(const each of people){
        console.log(each.age)
        sum = sum + each.age;
    }
    return sum
}

const people = [
    {name: 'meena', age: 20},
    {name: 'tina', age: 15},
    {name: 'sina', age: 22}
];
const result5 = getTotalAge(people);
console.log('total age:', result5)


/* -------practice problem 3------*/
// with reduce()
const peoples = [
    {name: 'meena', age: 20},
    {name: 'tina', age: 15},
    {name: 'sina', age: 22}
];
const getAge = peoples.reduce((sum, currentAge) => {
    sum = sum + currentAge.age;
    return sum;

},0);

console.log(getAge)



/* -------practice problem 4------*/
const student = {
    name: 'nasir ahmed',
    age: 26,
}
const {age} =student;
console.log(age)
//  another way of finding age
console.log(student.age)



/* -------practice problem 5------*/
let data = {
    location: [
        {
            latitude: '34.5 , 37.8',
            longtitude : '98.77, 58.7',
            city: 'Hydrabad',
            country: 'India'
        }
    ]
}
const result6 = data.location[0].city;
console.log(result6)




/* -------practice problem 6------*/
const users = {
    id: 1,
    name: "Leanne Graham",
    username: "Bret",
    email: "Sincere@april.biz",
    address: {
      street: "Kulas Light",
      suite: "Apt. 556",
      city: "Gwenborough",
      zipcode: "92998-3874",
      geo: {
        lat: "-37.3159",
        lng: "81.1496"
      }
    },
    phone: "1-770-736-8031 x56442",
    website: "hildegard.org",
    company: {
      name: "Romaguera-Crona",
      catchPhrase: "Multi-layered client-server neural-net",
      bs: "harness real-time e-markets"
    }
}
console.log(users.email)
console.log(users.address)
console.log(users.address.city)
console.log(users.address.geo.lat)
console.log(users.company.name)