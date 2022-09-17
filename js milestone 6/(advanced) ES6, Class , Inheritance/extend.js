class TeamMember{
    name;
    location;
    constructor(name, location){
        this.name = name;
        this.location = location;
    }
    provideFeedback(){
        console.log(`${this.name} thank you for your feedback`)
    }
}



class instructor extends TeamMember {
    
    designation = 'web course instructor'
    team = 'web team'
    constructor(name, location){
     super(name, location);
    }
    startSupportSession(time){
        console.log(`start the support session at ${time}`)
    }
    createQuiz(module){
        console.log(`Please create quiz for module ${module}`)
    }
}


class Developer extends TeamMember {
    designation = 'web course instructor'
    team = 'web team'
    tech;
    constructor(name, location, tech){
        super(name, location);
        this.tech = tech;
    }
    developFeature(feature){
        console.log(`Please develop the ${feature}`)
    }
    release(version){
        console.log(`Please release the version ${version}`)
    }
   
}


class JobPlacement extends TeamMember {
    designation = 'Job placement comandos'
    team = 'Job placement'
    region;
    constructor(name, location, region){
        super(name, location);
        this.region = region;
    }
    provideResume(feature){
        console.log(`Please develop the ${feature}`)
    }
    prepareStudent(version){
        console.log(`Please release the version ${version}`)
    }
    
}

const akash = new Developer('Akash Sarker', 'Dhaka', 'React');
console.log(akash)
akash.provideFeedback();
const asraful = new JobPlacement('Asraful Sarker', 'Dhaka', 'Indonesia');
console.log(asraful)
const akram = new instructor('Akram khan', 'nowakhali');
console.log(akram)
