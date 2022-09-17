const students = {
    name: 'kalam uddin',
    age: 15,
    class: 'ten',
    marks: {
        math: 78,
        physics: 87,
        chemistry: 65

    }
}
const marks = students.marks;
// console.log(marks)
const marks1 = students.marks.chemistry;
// console.log(marks1)


const chemistry = students['marks'] ['chemistry']
// console.log(chemistry)

const subject = 'math';
const subjectMarks = students.marks[subject];
console.log(subjectMarks);


//  it will not work if you write . instead of []   because this is a variable
const subject2 = 'physics';
const subjectMarks2 = students.marks.subject2;
console.log(subjectMarks2)