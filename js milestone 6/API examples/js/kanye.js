const loadQuotes = () => {
    fetch('https://api.kanye.rest/')
    .then(res => res.json())
    .then(data => displayQuotes(data))
}


const displayQuotes = quotes => {
     const blockqoutes = document.getElementById('quote');
     blockqoutes.innerText = quotes.quote;   
}


