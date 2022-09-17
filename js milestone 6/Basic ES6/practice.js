// problem 1.1
const multiply =(num1, num2, num3) => num1 * num2 * num3;
const result = multiply(4, 6 , 2);
// console.log(result)


// problem 1.2
const line1 = 'I am a web developer.';
const line2  = 'I love to code.';
const line3 = 'I love to eat biryani.'
const fullLine = `${line1}${line2}${line3}`;
// console.log(fullLine)


// problem 1.3
const getAdd = (num1, num2 = 8) => {
    const total = num1 + num2;
    return total;
}
const result2 = getAdd(5);
// console.log(result2)




// // problem 2      [it will show output in number]
// const getEvenName = (names) =>{
//     const newFriends =[];
//   const allNames = names;
//   for(let name of allNames){
//     const getLength = name.length;

//     if( getLength % 2 === 0){
//         newFriends.push(getLength);
//     }
//   }return newFriends;
// }
// const friends = ['kalam', 'asraful', 'topo', 'abdulla'];
// const result3 = getEvenName(friends)
// console.log(result3)


// problem 2 [it is perfect and the output will be names]
// const getEvenName = (names) =>{
//     const newFriends =[];
//   const allNames = names;

//   for(let name of allNames){

//     if( name.length % 2 === 0){
//         newFriends.push(name);
//     }
//   }return newFriends;
// }
// const friends = ['kalama', 'asraful', 'topo', 'abdulla', 'isan', 'dipo'];
// const result3 = getEvenName(friends)
// // console.log(result3)

/* easiest way of doing problem 2 */
const friends = ['kalama', 'asraful', 'topo', 'abdulla', 'isan', 'dipo'];
const firstLetters = friends.map(friend => friend[0]);
console.log(firstLetters);
const nameLengths = friends.map(friend => friend.length);
console.log(nameLengths)






/* ----- problem 3------ */
const getAverage = (nums) => {
    const numbers = nums;
   
    let sum = 0;
    for(let number of numbers){

         square = number * number;
        // console.log(square)
         sum =sum + square;
         
         average =sum / numbers.length;
        //  average =parseFloat((sum / numbers.length).toFixed(2));

    }
    return {average, sum};
}
const numbers = [3, 6, 7, 8, 2, 4];
const result4 = getAverage(numbers);
console.log(result4)
console.log(typeof result4)



/* ----- problem 4------ */
const maxNumber =(array1, array2) => {
 
    const newArray = [...array1, ...array2];
    console.log(newArray);

    // sodo newArray dile output hisabe NaN asbe
    // const maxiumNum = Math.max(newArray); 

    const maxiumNum = Math.max(...newArray);

    return maxiumNum;

}

const firstArray = [4, 55, 666, 21, 3];
const secondArray = [2, 5, 7, 11, 9];
const result5 = maxNumber(firstArray, secondArray);
console.log(result5)

