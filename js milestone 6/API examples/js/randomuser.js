const loadUsers  = () => {
    fetch('https://randomuser.me/api/?results=10')
    .then(res => res.json())
    .then(data => displayUsers(data))
}


const displayUsers = users =>{
    const userArray = users.results;
    const userContiner = document.getElementById('user-container');
    for(const eachUser of userArray){
        console.log(eachUser)
        const userDiv = document.createElement('div');
        userDiv.classList.add('user-style');
        userDiv.innerHTML= `
        <h3>user name: ${eachUser.name.first} ${eachUser.name.last} </h3>
        <img src="${eachUser.picture.large}" alt="">
        <p>Email: ${eachUser.email} </p>
        <p>user location: ${eachUser.location.city} ${eachUser.location.country}</p>
        
        `;
        userContiner.appendChild(userDiv)
    }

}


loadUsers ();