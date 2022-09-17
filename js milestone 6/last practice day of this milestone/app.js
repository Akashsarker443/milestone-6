const student = {
    name:"loto poto miah",
    age:23, 
    subjectMarks: {
           math: 45,
           english: 65,
           bangla: 76
    },
    friends:['akash', 'abbas', 'batash'],
    group: function(){
        return this.age
    }
}

const result = student.group();
console.log(result)


const newLine = `${student.subjectMarks},
 ${student.friends[1]},
  ala miah`;
console.log(newLine)


const num = () => 89;
const result2 = num();
console.log(result2)

const division = (num1, num2) => (num1 + num2) / 2;

const result3 = division(12, 88);
console.log(result3)

const array =[35, 14, 28, 30];
const result4 = array.map(n => n / 7);
console.log(result4)