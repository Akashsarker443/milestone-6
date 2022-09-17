class instructor {
    name;
    designation = 'web course instructor'
    team = 'web team'
    location;
    constructor(name, location){
        this.name = name;
        this.location = location;
    }
    startSupportSession(time){
        console.log(`start the support session at ${time}`)
    }
    createQuiz(module){
        console.log(`Please create quiz for module ${module}`)
    }
}
const amir = new instructor('amir', 'dhaka');
console.log(amir);
amir.startSupportSession(9);
amir.createQuiz(60);
const solaiman = new instructor('Solaiman', 'usa');
console.log(solaiman);