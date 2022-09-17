document.getElementById('spinner').style.display = 'none';
document.getElementById('search-hide').style.display = 'block';
document.getElementById('found').style.display = 'none';


const loadPlayers = () =>{
    document.getElementById('spinner').style.display = 'block';
    const searchField = document.getElementById('input-field');
    const searchValue = searchField.value;
    searchField.value = '';
    
    fetch(`https://www.thesportsdb.com/api/v1/json/2/searchplayers.php?p=${searchValue}`)
    .then(res => res.json())
    .then(data => displayPlayers(data.player))
}


const displayPlayers = (players)=>{
    document.getElementById('spinner').style.display = 'none';
    document.getElementById('found').style.display = 'block';
    
    console.log(players)
    const playerContainer = document.getElementById('player-container');
    playerContainer.innerHTML = '';
    const errorMassage = document.getElementById('error-msg');
    if(!players || players?.length === 0){
        errorMassage.classList.remove("d-none");
        return;
    }
    else{
        errorMassage.classList.add("d-none");
    }
    players.forEach(player => {
        const {strPlayer, strSport, strNationality, strDescriptionEN, strThumb, idPlayer} = player;
        // console.log(strNationality);
        // console.log(player)
        const playerDiv = document.createElement('div');
        playerDiv.classList.add('col');
        playerDiv.innerHTML =`
        <div class="card">
           <img src="${strThumb ? strThumb : "https://images.unsplash.com/photo-1560272564-c83b66b1ad12?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=449&q=80"}" class="card-img-top" alt="...">
           <div class="card-body">
             <h1 class="card-title">${strPlayer}</h1>
              <p class="card-text">Nationality: ${strNationality}</p>
              <p class="card-text">${strDescriptionEN?.slice(0, 100)}</p>
            </div>
            <div class="text-center mb-3"> <button onclick="loadPlayerDetail(${idPlayer})" class="btn btn-primary px-5">Detail</button></div>
                
        </div>
        
        `
        playerContainer.appendChild(playerDiv)
        

    })

}

const loadPlayerDetail = (playerId) =>{
    console.log(playerId)
    fetch(`https://www.thesportsdb.com/api/v1/json/2/lookupplayer.php?id=${playerId}`)
    .then(res => res.json())
    .then(data => displayPlayerDetail(data.players[0]))
    

}
const displayPlayerDetail = (playerDetail) => {
   console.log(playerDetail)
   const {strFanart1, strNationality, strPlayer} =playerDetail;
   const detailContainer =document.getElementById('detail-container');
   detailContainer.innerHTML = '';
   detailContainer.innerHTML = `
            <img src="${strFanart1 ? strFanart1 : "https://images.unsplash.com/photo-1560272564-c83b66b1ad12?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=449&q=80"}" class="card-img-top" alt="...">
           <div class="card-body">
             <h1 class="card-title">${strPlayer}</h1>
              <p class="card-text">Nationality: ${strNationality}</p>
   
   
   `
}



loadPlayers('');