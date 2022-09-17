const user = {id:1 , name: 'gorib amir', job: 'actor'}
//  JavaScript Object Notation [JSON]

const stringified = JSON.stringify(user);
console.log(user)
console.log(stringified)



/* 

{ id: 1, name: 'gorib amir', job: 'actor' }  > normal js

{"id":1,"name":"gorib amir","job":"actor"}    > JSON

*/



const shop = {
    owner: 'akash',
    address: {
        stress: 'kochokhet voot ar goli',
        city: 'ranvir',
        country: 'bd'
    },
    products: ['laptop', 'tv', 'monitor', 'keyboard'],
    revenue: 45000,
    isOpen : true,
    isNew: false
};

console.log(shop)
console.log(typeof shop)
const shopJson = JSON.stringify(shop)
console.log(shopJson)
console.log(typeof shopJson)

// kono object k string a ropantor korte amra JSON.stringify use kori. kinto pore jodi aber amra oi string ta porber obosthai nite chai orthat object korte chai tohole JSON.parse use korbo

const shopObj = JSON.parse(shopJson);
console.log(shopObj)