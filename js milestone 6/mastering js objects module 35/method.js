const student = { 
    name: 'kodom ali',
    money: 5000,
    study: 'math',
    subjects: ['calculus', 'algebra', 'geometry'],
    
    exam : function(){     //this is called  method
        console.log(this.name, 'is partucipating in an exam');

    },   //you have to use [this] to get any property of an object in method
    improveExam: function(subject){
        this.exam();
        return `${this.name} is taking improvement exam on ${subject}`
    },
    treatDay: function(amount, tips){
        this.money = this.money - amount - tips;
        return this.money;
    }
       
}

// student.exam();
const output = student.exam();
console.log(output)


const reExam = student.improveExam('Algebra');
console.log(reExam)

const remainingMoney = student.treatDay(900, 100);
console.log(remainingMoney)
const dolaRemaining = student.treatDay(500, 50);
console.log(dolaRemaining)
