const bottle = { color: 'yellow', price: 50, isCleaned: true, capacity: 1};
// [object.keys] mane sodo keys golo k show korbe
const keys = Object.keys(bottle);
console.log(keys)
// [object.values] mane sodo values golo k show korbe 
const values= Object.values(bottle);
console.log(values)

// [object.entries] mane sob golo keys and values akta array ar vitore array akare dekhabe
const pair = Object.entries(bottle);
console.log(pair)




// how to delete any property of object and
delete bottle.isCleaned;
console.log(bottle);
// create new property in object
bottle.height = 12;
console.log(bottle)

// opore delete kora gese kinto [object.seal] korle ar delete ba noton property add kora jabe na
Object.seal(bottle);
delete bottle.capacity;
bottle.owner = 'akash';
console.log(bottle);

// tobe [oject.seal] korle o ager property ar value change kora jabe
bottle.price = 1000;
console.log(bottle)


// [object.freeze] korle kono kisoi kora jabe na amon ki property ar value o change kora jabe na 
Object.freeze(bottle);
bottle.price = 1500;
delete bottle.color;
console.log(bottle)
