function loadComments(){
    fetch('https://jsonplaceholder.typicode.com/comments')
    .then(res => res.json())
  .then(data => displayComments(data))
}




function displayComments(comments){
    const commentContainer = document.getElementById('comment-container');
    for( const comment of comments){
        console.log(comment)
        const div = document.createElement('div');
        div.classList.add('post-css'); 
        // h1.classList.add('name-css');                         
        div.innerHTML = `
        <h1 class="name-css">Name: ${comment.name} </h1>
        <h4>Email: ${comment.email}</h4>
        <p>Comment: ${comment.body}</p>
        
        `
        commentContainer.appendChild(div);
    


    }
}

loadComments();