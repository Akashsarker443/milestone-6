// function add(first, second){
//     console.log(first, second)
//     if(second === undefined){
//         second = 0;
//     }
//     const total = first + second;
//     return total;
// }
// const result = add(10);
// console.log(result);



function add(first, second = 0){
    // second = 0 holo defult value ja second parameter a kiso na dile kaj korbe , otherwise kaj korbe na 
    const total = first + second;
    return total;
}
const result = add(10);
console.log(result);

// function fullName(first, last = 'chowdhury'){
//     const name = first + ' ' + last;
//     return name
// }
// const name = fullName('Akash')
// console.log(name);


//  using second parameter

function fullName(first, last = 'chowdhury'){
    const name = first + ' ' + last;
    return name
}
const name = fullName('Akash', 'sarker')
console.log(name);