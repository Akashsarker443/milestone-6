const KodomAli = { 
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

// const result= KodomAli.exam();

const badamAli = {
    name: 'kacha badam',
    money: 8000
}

// Borrow method from object and use it on another object
const result2 = KodomAli.exam.call(badamAli);
console.log(result2)
const badamMoney = KodomAli.treatDay.call(badamAli, 400, 40);
console.log(badamMoney)