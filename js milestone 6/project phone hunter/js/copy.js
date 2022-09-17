document.getElementById('spinner').style.display = 'none'; 





const loadPhones = async(searchText)=> {
    const url = `https://openapi.programming-hero.com/api/phones?search=${searchText}`
    const res = await fetch(url);
    const data = await res.json();
    displayPhones(data.data)

}
const displayPhones = phones => {
    // console.log(phones)
    const phonesContainer = document.getElementById('phones-container');
    phonesContainer.innerHTML = '';
    
    // display 10 phones only
      // phones = phones.slice(0, 10);  
      
      const showAll = document.getElementById('show-all') ;
      if(phones.length > 10){
        phones = phones.slice(0, 10);  
        showAll.classList.remove('d-none')
      }
      else{
        showAll.classList.add('d-none')
      }



      // display no phone found
      const noPhone = document.getElementById('no-found-msg');
      if(phones.length === 0){
        noPhone.classList.remove('d-none')
      }
      else{
          noPhone.classList.add('d-none')
      }

    phones.forEach(phone => {
        const phoneDiv = document.createElement('div');
        phoneDiv.classList.add('col');
        phoneDiv.innerHTML =`
        <div class="card">
        <img src="${phone.image}" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">${phone.phone_name}</h5>
          <P>Brand:${phone.brand}</p>
          <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content.!!</p>
        </div>
      </div>
        
        `
        phonesContainer.appendChild(phoneDiv);
    })

    // stop the spinner 
document.getElementById('spinner').style.display = 'none';



}

document.getElementById('btn-search').addEventListener('click', function(){
// start the spinner 
document.getElementById('spinner').style.display = 'block';


  const searchField = document.getElementById('search-field');
  const searchText = searchField.value;
  searchField.value = '';
  loadPhones(searchText);

})



loadPhones();