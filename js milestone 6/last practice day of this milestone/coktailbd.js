document.getElementById('no-found-msg').style.display ="none";



const loadDrinkData = (searchText) => {
  
  
  const url = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${searchText}`;
  fetch(url)
  .then(res => res.json())
  .then(data => displayDrinkData(data.drinks))
  .catch(error => console.log(error))
  
}

const displayDrinkData = (drinks) => {
  console.log(drinks)
  if(drinks.length === 0){
         document.getElementById('no-found-msg').style.display ="block";

       }
      const searchField = document.getElementById('search-field');
      const searchText = searchField.value;
      const drinkItemName = document.getElementById('item-name');
      drinkItemName.innerText = searchText;
      const drinkItemAmount = document.getElementById('item-amount');
      drinkItemAmount.innerText = drinks.length;
      
     const dricksContainer = document.getElementById('drinks-container');
     dricksContainer.innerHTML = '';
    drinks.forEach(drink => {
        const drinkDiv = document.createElement('div');
        drinkDiv.classList.add('col');
        drinkDiv.innerHTML =`
     
            <div class="card">
              <img src="${drink.strDrinkThumb}" class="card-img-top" alt="...">
              <div class="card-body">
                <h5 class="card-title">${drink.strDrink}</h5>
                <p class="card-text">${drink.strInstructionsIT.slice(0, 100)}</p>
                <button onclick='loadDrinkDetails("${drink.idDrink}")' class="btn btn-primary">Details</button>
              </div>
            </div>
          
        `
        dricksContainer.appendChild(drinkDiv)

    })

 
}

const processSearch = () => {
  const searchField = document.getElementById('search-field');
  const searchText = searchField.value;
  loadDrinkData(searchText);
}


//  search input field enter key handler
document.getElementById('search-field').addEventListener('keypress', function(event){
  if(event.key === 'Enter'){
       processSearch();
  }
})


document.getElementById('search-btn').addEventListener('click', function(){
  // document.getElementById('drinks-container').innerHTML ='';
  
  processSearch();

})


const loadDrinkDetails =(detailId) =>{
  console.log(detailId)
}



loadDrinkData('wine');

