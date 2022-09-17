const bottle = { color: 'yellow', price: 50, isCleaned: true, capacity: 1};
// const keys = Object.keys(bottle);
// console.log(keys)

// for in loop in object
for(const key in bottle){
    console.log(key, bottle[key]);
}

// for in loop in object same using variable
for(const key in bottle){
    const value = bottle[key];
    console.log(key, value);
}


// advanced
const pair = Object.entries(bottle);
console.log(pair);
for(const [key, value] of Object.entries(bottle)){
    console.log(key, value)
}