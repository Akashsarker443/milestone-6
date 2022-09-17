const loadUser =() => {

    fetch('https://randomuser.me/api/?results=10')
    .then(response => response.json())
    .then(data => displayUsers(data.results))

}

const displayUsers = (users) => {
    const usersContainer = document.getElementById('users-container');

   console.log(users)
   users.forEach(user => {
    const { name, email, location, picture} =user;
    const userDiv = document.createElement('div');
    userDiv.innerHTML =`
           
          <img src="${picture.large}" alt="">
          <h1>${name.first} ${name.last}</h1>
          <p>${email}</p>
          <p>street:${location.street.number} ${location.street.name} </p>
          <p>City: ${location.city}</p>
          <p>timezone: ${location.timezone.offset}</p>
    
    
    `
    usersContainer.appendChild(userDiv);





   })
}


loadUser();