document.getElementById('spinner').style.display = 'none'; 



const loadPhones = async(searchText, datalimit)=> {
    const url = `https://openapi.programming-hero.com/api/phones?search=${searchText}`
    const res = await fetch(url);
    const data = await res.json();
    displayPhones(data.data, datalimit)

}
const displayPhones = (phones, datalimit )=> {
    console.log(datalimit)
    const phonesContainer = document.getElementById('phones-container');
    phonesContainer.innerHTML = '';
    
    // display 10 phones only
      // phones = phones.slice(0, 10);  
      
      const showAll = document.getElementById('show-all') ;
      if( datalimit && phones.length > 10){
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
            <button onclick="loadPhoneDetails('${phone.slug}')" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">Show Detail</button>
            
         </div>
      </div>
        
        `
        phonesContainer.appendChild(phoneDiv);
    })

    // stop the spinner 
document.getElementById('spinner').style.display = 'none';

}

//  search input field enter key handler
document.getElementById('search-field').addEventListener('keypress', function(event){
  if(event.key === 'Enter'){
    processSearch(10);
  }
})


// common function 
const processSearch = (datalimit) => {
  // start the spinner 
   document.getElementById('spinner').style.display = 'block'; 

                const searchField = document.getElementById('search-field');
                const searchText = searchField.value;
                // searchField.value = '';
              loadPhones(searchText, datalimit);

}

document.getElementById('btn-search').addEventListener('click', function(){
       
processSearch(10);

})

document.getElementById('btn-show-all').addEventListener('click', function(){

  processSearch();
  
})

const loadPhoneDetails = (phoneId) => {
 console.log(phoneId)
 fetch(`https://openapi.programming-hero.com/api/phone/${phoneId}`)
 .then(res => res.json())
 .then(data => displayPhonesDetails(data.data))

}
const displayPhonesDetails = (phone) => {
  // console.log(phone)
  const {name, mainFeatures, releaseDate, image} = phone;
  // console.log(mainFeatures);
  const phoneTitle = document.getElementById('exampleModalLabel');
  phoneTitle.innerText = `${name}`
  const phoneBody = document.getElementById('phone-body');
  phoneBody.innerHTML=`
     <img  class="detail-img" src="${image}" alt="">
     <P>Storage:${mainFeatures.storage}</P>
     <P>Storage:${releaseDate}</P>

  
  
  `

}




loadPhones('iphone');