const loadCountries = () => {
    fetch('https://restcountries.com/v3.1/all')
    .then(res => res.json())
    .then(data => displayCountries(data))
}

const displayCountries  = countries => {
    // for(const country of countries){
    //     console.log(country)
    // }
    const countriesContainer = document.getElementById('countries-container');
    countries.forEach(country => {
        console.log(country)
        const countryDiv = document.createElement('div');
        countryDiv.classList.add('country');
        countryDiv.innerHTML =`
        <h3>name: ${country.name.common} </h3>
   
        <p class ="capital">Capital: ${country.capital} </p>
        <button class="btn" onclick="loadDetails('${country.cca2}')">Details</button>
        
        `;
        countriesContainer.appendChild(countryDiv)
    })
}

const loadDetails = (code) => {
    const url= `https://restcountries.com/v3.1/alpha/${code}`;
    fetch(url)
    .then(res => res.json())
    .then(data => displayCountryDetail(data[0]))
}

const displayCountryDetail = country => {
    console.log(country);
    const countryDetail = document.getElementById('country-detail');
    countryDetail.classList.add('detail-style')
    countryDetail.innerHTML =`
    <h3>name: ${country.name.common} </h3>
    <img class="image" src="${country.flags.png}" alt="">
    <p class ="capital">Capital: ${country.capital} </p> 
    `
}




loadCountries();