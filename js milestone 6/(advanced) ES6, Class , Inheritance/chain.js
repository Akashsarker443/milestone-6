// ata undefined  asbe 
const users =[{id: 1, name:'abul', job: 'doctor'}];
// console.log(users.name)

// array ar bitorer object theke value pete nicher system use kora hoi
const users1 =[{id: 1, name:'abul', job: 'doctor'}];
// console.log(users1[0].name)
// console.log(users1[0].job)



const data = {
    count : 5000,
    data : [ 
        {id: 1, name:'kasem', job: 'doctor'},
        {id: 1, name:'selim', job: 'buisnessman'}
    ]
}
console.log(data.data[0].job)
console.log(data.data[1].name)





const user = {
    id: 5003,
    name: 'Thomas alba edison',
    address:{
        street:{
            first: '45/A kochukhet lane',
            second: 'Third floor',
            third: 'right side'
        },
        postOffice: 'cantonmant',
        city: 'Dhaka'
    }
}

const userFloor = user.address.stret?.third;
console.log(userFloor)