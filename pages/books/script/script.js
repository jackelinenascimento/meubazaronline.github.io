const cardSection = document.getElementById('card-section')

function cards(json){
    return `
    <div class="card m-4" style="width: 18rem">
        <img class="card-img-top" src="./img/${json.image}" alt="Card image cap">   
        <h5 class="card-title text-center mt-4"><strong>${json.name}</strong></h5>
        <p class="card-text">Autor:<strong> ${json.autor}</strong></p>    
        <p class="card-text">Gênero:<strong> ${json.genre}</strong></p> 
        <p class="card-text">Lingua:<strong> ${json.language}</strong></p>
        <p class="card-text">Coleção:<strong> ${json.colection}</strong></p> 
    </div>`
}

async function books() {
    try{
        const response = await fetch('./data/books.json')
        if(!response.ok) throw `com o status: ${response.status}`
        const json = await response.json()
        for (let i=0; i<=json.length; i++){
            cardSection.innerHTML += cards(json[i])
        }
    }catch(e){
      
    }
}

books()

