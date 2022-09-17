document.getElementById('spinner').style.display = 'none';
document.getElementById('copyright').style.display = 'none';


/*----- load data from the api ----*/
const loadCategoryData = () =>{
    const url = `https://openapi.programming-hero.com/api/news/categories`;
    fetch(url)
    .then(res => res.json())
    .then(data => displalyCategoryName(data.data.news_category))
    .catch(error => console.log(error))
    
};




/* ----- category data  display---- */
const displalyCategoryName = (categories) => {
    // console.log(categories)
    const categoryContainer = document.getElementById('category-container');
    categories.forEach(category => {
    
        const eachCategoryName =document.createElement('li');
        eachCategoryName.innerHTML =`
         <li class="px-4 me-2 mt-1 text-nowrap" onclick="loadNewsData(this, '${category.category_id}' )">${category.category_name}</li>
        `
        categoryContainer.appendChild(eachCategoryName);
        

    })

}


const loadNewsData = (list, categoryId) => {

    document.getElementById('spinner').style.display = 'block';

    console.log('clicked')
    const itemCategoryName =document.getElementById('item-found-category');
    itemCategoryName.innerText = list.innerText;
    const noFoundCategoryName = document.getElementById('no-found-category');
    noFoundCategoryName.innerText = list.innerText;
    
    
    list.style.color = 'blue';
   
    
    
    console.log(categoryId)
    const url = `https://openapi.programming-hero.com/api/news/category/${categoryId}`;
    fetch(url)
    .then(res => res.json())
    .then(data => displayNews(data.data))
    .catch(error => console.log(error))
    
}




const displayNews = (news)=>{
    const newsLength = news.length;

    const itemFoundMassage = document.getElementById('item-found-msg');
    itemFoundMassage.innerText =newsLength;
    const noFoundMassage= document.getElementById('no-found-msg');
    if(newsLength === 0){
        document.getElementById('copyright').style.display = 'none';
        document.getElementById('spinner').style.display = 'none';
        noFoundMassage.classList.remove('d-none');
        document.getElementById('item-found-hide').style.display = "none";
    }
    else{
        
        noFoundMassage.classList.add('d-none');
        document.getElementById('item-found-hide').style.display = "block";
        
    }
 
    const newsContainer = document.getElementById('news-container');
    newsContainer.innerHTML ='';
    news.forEach(singleNews => {
        console.log(singleNews)
        const {total_view, title, thumbnail_url, author, details, _id} =singleNews;
        const newsDiv = document.createElement('div');
        newsDiv.classList.add('col');
        newsDiv.innerHTML =`
        <div class="col">
        <div class="card mb-3" style="max-width: 540px;">
            <div class="row g-0">
                    <div class="col-md-4">
                        <img src="${thumbnail_url}" class="img-fluid news-img rounded-start" alt="...">
                    </div>
                <div class="col-md-8">
                    <div class="card-body">
                            <h5 class="card-title">${title}</h5>
                            <p class="card-text">${details.slice(0 , 150)}<span>...<?span></p>
                            <div class="d-flex justify-content-between align-items-center">
                                    <div><img class="rounded-circle me-2" src="${author.img}" alt="" width="36" height="34"></div>
                                    <div class="author-name">
                                        <p class="p-0 m-0">${author.name}</p>
                                        <p class="p-0 m-0 text-secondary">${author.published_date}</p>
                                    </div>
                                    
                                    <div>
                                        <i class="fa-regular fa-star-half-stroke text-secondary"></i>
                                        <i class="fa-regular fa-star"></i>
                                        <i class="fa-regular fa-star"></i>
                                        <i class="fa-regular fa-star"></i>
                                    </div>
                                                                  
                            </div>
                            
                            <div class="d-flex justify-content-evenly align-items-center">
                                <div class="d-flex">
                                    <div><i class="fa-solid fa-eye"></i></div>
                                    <div class="ms-2 mt-1"><h6>${total_view ? total_view : 'No View' }</h6></div>
                                </div>
                                <div class=" my-3" onclick="loadNewsDetails('${_id}')"><button class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">Details</button>
                                </div>

                            </div>                                                                           
                    </div>
                </div>
            </div>
        </div>
    </div>          
        `
        newsContainer.appendChild(newsDiv);
        document.getElementById('copyright').style.display = 'block';
        
        
        document.getElementById('spinner').style.display = 'none';
         
    })
}

const loadNewsDetails =(newsId)=> {
    console.log(newsId)
    const url = `https://openapi.programming-hero.com/api/news/${newsId}`;
    fetch(url)
    .then(res => res.json())
    .then(data => displayNewsDetails(data.data[0]))
    .catch(error => console.log(error))
    

}

const displayNewsDetails =(newsDetails) =>{
    console.log(newsDetails)
    const {title, thumbnail_url, details, total_view, author} = newsDetails;
    const modalTitle = document.getElementById('exampleModalLabel');
    modalTitle.innerText = `${title}`;
    const mainModalBody = document.getElementById('modalBody');
    mainModalBody.innerHTML =`
    <img class="d-block mx-auto img-m mb-2" src="${thumbnail_url}" alt="">
    <p class="p-2 textJustify">${details.slice(0, 600)} <span>...</span></p>
    
    `


}




loadCategoryData();