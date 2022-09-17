function loadPosts(){
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res => res.json())
    .then(data => displayPosts(data));
}



function displayPosts(posts){
    const postContainer = document.getElementById('post-container')
    for(const post of posts){
        console.log(post)
        const div = document.createElement('div');
        
        div.classList.add('post-css');  //this line is used for using css in all the div
        div.innerHTML = `
          
        <h4>user: ${post.userId} </h4>
        <h5>post: ${post.title}</h5>
        <p>post Description: ${post.body}</p>

        `
        postContainer.appendChild(div);
         
    }
}

loadPosts();