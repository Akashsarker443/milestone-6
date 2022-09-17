document.getElementById('spinner').style.display = 'none';




const loadPhones = async(searchText, datalimit) => {
    const url = `https://openapi.programming-hero.com/api/phones?search=${searchText}`;
    const res = await fetch(url);
    const data = await res.json();
    displayPhones(data.data, datalimit)
}


// enter event handler use here
document.getElementById('search-field').addEventListener('keypress', function(event){
  if(event.key === 'Enter'){
    processSearch(10);
  }
})


const displayPhones = (phones, datalimit) => {
  //  console.log(phones.length)

   const noFound = document.getElementById('no-found-msg');
   const showAll =document.getElementById('show-all');
  // display show all button 
  if( datalimit && phones.length > 10){
    phones = phones.slice(0, 10); 
    showAll.classList.remove('d-none');
  }
  else{
    showAll.classList.add('d-none');
  }

// no found phone
  if(phones.length === 0){
     noFound.classList.remove('d-none'); 
  }
  else{
    noFound.classList.add('d-none');
  }
const phoneContainer = document.getElementById('phones-container');
phoneContainer.innerHTML = '';
// phones = phones.slice(0, 10);  
   phones.forEach(phone => {
    console.log(phone)
    const phoneDiv = document.createElement('div');
    phoneDiv.classList.add('col');
    phoneDiv.innerHTML =`
      <div class="card">
         <img src="${phone.image}" class="card-img-top" alt="...">
         <div class="card-body">
            <h5 class="card-title">${phone.phone_name}</h5>
             <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content.</p>
             <button onclick="loadPhoneDetail('${phone.slug}')" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">Show Details</button>

         </div>
    
        </div>
    
    `
    phoneContainer.appendChild(phoneDiv);
    document.getElementById('spinner').style.display = 'none';

   })
}

const processSearch = (datalimit)=>{
  document.getElementById('spinner').style.display = 'block';
    const inputField = document.getElementById('search-field');
    const searchText = inputField.value;
    
    // input field khali kore felle show button kaj korbe na karon tokon input field khali thakai dataload korte pare na 
    // inputField.value = '';
    loadPhones(searchText, datalimit);

}


document.getElementById('btn-search').addEventListener('click', function(){
  
  processSearch(10);
})


document.getElementById('btn-show-all').addEventListener('click', function(){
  
  processSearch();
})



const loadPhoneDetail= (phoneId) => {
//    console.log(phoneId)
     const url = `https://openapi.programming-hero.com/api/phone/${phoneId}`;
     fetch(url)
     .then(res => res.json())
     .then(data => displayPhoneDetail(data.data))
}

const displayPhoneDetail = (phoneDetail)=>{
console.log(phoneDetail)
const {mainFeatures, image, name} = phoneDetail;
const modalTitle = document.getElementById('exampleModalLabel');
modalTitle.innerText = `${name}`;
const modalBody = document.getElementById('main-modal');
modalBody.innerHTML = `
<img class="detail-img" src="${image}" class="card-img-top" alt="...">
<p>Storage:${mainFeatures.memory}</p>

`




}


loadPhones('iphone');