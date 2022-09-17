function loadPhotos(){
    fetch('https://jsonplaceholder.typicode.com/photos')
    .then(res => res.json())
  .then(data => displayPhotos(data))
}

function displayPhotos(photos){
    const photoContainer =document.getElementById('photo-container');
    for(const photo of photos){
      console.log(photo)
      const div = document.createElement('div');
      div.innerHTML = `
      <h1>userId:${photo.id} </h1>
      <img src="${photo.thumbnailUrl}" alt="">
      
      <p>Description: ${photo.title}</p>
      <a href="${photo.url}">Follow him </a>
      
      `
      photoContainer.appendChild(div)
    }
}


loadPhotos();