const loadComment =() => {

    fetch('https://jsonplaceholder.typicode.com/comments?_limit=20')
    .then(response => response.json())
    .then(data => displayComments(data))

}

const displayComments = (comments) => {
    // console.log(comments)
    const commentContainer = document.getElementById('comment-container');
    
    comments.slice(0, 20).forEach( comment => {
        const {name, email, body, id} =comment;
        const singleComment = document.createElement('div');
        singleComment.classList.add('css-comment');
        singleComment.innerHTML = `
        <h1>Name: ${name}</h1>
        <p>Email: ${email}</p>
        <p>Comment: ${body}</p>
        <button onclick="loadDetail(${id})">Detail</button>
        `
        commentContainer.appendChild(singleComment);
    })

}
 
const loadDetail =(commenterId) => {
    fetch(`https://jsonplaceholder.typicode.com/comments/${commenterId}`)
    .then(response => response.json())
    .then(data => displayDetails(data))

}

const displayDetails = detail => {
    console.log(detail)
    // const {name, email} = detail;
    // console.log(name, email)
    const detailContainer = document.getElementById('detail-container');
    detailContainer.classList.add('style')
    detailContainer.innerHTML =`
    <h1>Name: ${detail.name}</h1>
        <p>Email: ${detail.email}</p>

    `
   
}
 
// loadComment();