const fish = {
    name: 'King Hilsha',
    address: 'Chadpur',
    color: 'silver',
    phone: '01752868458',
    price: 4000
}
const phone = fish.phone;
const price = fish.price;
const color = fish.color;

console.log(phone)
console.log(price)

const {address}= fish;
console.log(address)




const {age, name}= {name: 'almas', age: 56, profession:'teacher'}
console.log(age)


// array destructuring 
const [first, second] = [44, 53, 66, 99, 78];
console.log(first);


const nayoks = ['sakib', 'bappi', 'raj'];
const [King, lost, noton] = nayoks;
console.log(noton)



function getNames(){
    return ['alim', 'hakim'];

}
const [baba, chacha]= getNames();
console.log(chacha , baba)