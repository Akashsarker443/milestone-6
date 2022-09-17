// for first button
const loadData =(player) => {
console.log(player)
console.log(player.innerText)
}



// for second button
document.getElementById('btn-2').addEventListener("click", function(){
    console.log(this.innerText)
    
    // using variable
    const thisValue = this;
    console.log(thisValue)
})





// for third button

// onclick use kore [this] k parameter hisabe na pathale ei this ar result [window] dekhabe
const loadDetails =() => {
    console.log(this)
}