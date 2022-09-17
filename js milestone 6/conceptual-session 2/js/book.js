document.getElementById('error-massage').style.display = "none";
document.getElementById('found').style.display = "none";
document.getElementById('spinner').style.display = "none";
const searchBooks = () => {
    const searchField = document.getElementById('input-field')
    const searchValue = searchField.value;
    searchField.value = '';
    if(searchValue === ""){
      document.getElementById('error-massage').style.display = "block";
    }
    else{
      document.getElementById('spinner').style.display = "block";
      document.getElementById('found').style.display = "none";
      console.log(searchValue);
      fetch(`http://openlibrary.org/search.json?q=${searchValue}`)
      .then(res => res.json())
      .then(data => displaySearchResult(data.docs))
      
    }
}

const displaySearchResult  = books => {
  document.getElementById('error-massage').style.display = "none";
  document.getElementById('spinner').style.display = "none";
  document.getElementById('heading').style.display = "none";
  document.getElementById('found').style.display = "block";
    console.log(books)
    const resultContainer = document.getElementById('result-container');
    const displayFoundedBooks = document.getElementById('display-founded-books');
    displayFoundedBooks.innerText = books.length;
    
    resultContainer.innerHTML = ``;
    // for(const book of books){
    //     console.log(book)
    // }
     
    // akhane slice use kora heyese books namok array ar modde theke sodo 5 element k display korte. 
    books.slice(0, 5).forEach(singleBook => {
         console.log(singleBook)
         const {title, publish_date, author_name, cover_i, author_key} = singleBook;
         console.log(title, author_key);
        const bookCard = document.createElement('div');
        bookCard.classList.add('col');
        bookCard.innerHTML =`
        <div class="card">
          <img src="https://covers.openlibrary.org/b/id/${cover_i}-M.jpg
          " class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title">Book Name: ${title}</h5>
              <p class="card-text">Author Name: ${author_name}</p>
              <p class="card-text">Pulishing Date:${publish_date}</p>
            </div>
            <div class="card-footer"><button onclick="loadAuthorDetails('${author_key ? author_key[0] : 'not found'}')" class="btn btn-outline btn-outline-success">Author Details</button></div>
              
    
        </div>
          
        `
        resultContainer.appendChild(bookCard)
        

        



    })
 

}
const loadAuthorDetails = (authorId) => {
  fetch(` https://openlibrary.org/authors/${authorId}.json`)
  .then(res => res.json())
  .then(data => displayAuthorDetail(data))
  // console.log(authorId)

}
const displayAuthorDetail = (author) => {
  // console.log(author)
  const {name, birth_date, bio} = author;
  const detailContainer = document.getElementById('detail-container');
  detailContainer.innerHTML =`
  <h5 class="card-title">Book Name: ${name}</h5>
  <p class="card-text">Author Name: ${birth_date ? birth_date : "n/a"}</p>
  <p class="card-text">Pulishing Date:${bio ? bio : "n/a"}</p>
  
  
  `

}

