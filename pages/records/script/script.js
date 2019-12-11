const cardSection = document.getElementById('card-section')

function cards(json){
    return `
    <div class="card m-4" style="width: 18rem">
        <img class="card-img-top" src="./img/${json.image}" alt="Card image cap">   
        <h5 class="card-title text-center mt-4">Título:<strong> ${json.title}</strong></h5>
        <p class="card-text">Artista:<strong> ${json.artist}</strong></p>    
        <p class="card-text">Quantidade de discos:<strong> ${json.discs}</strong></p> 
        <p class="card-text">Origem:<strong> ${json.origem}</strong></p>
        <p class="card-text">Produção:<strong> ${json.productor}</strong></p> 
    </div>`
}

async function records() {
    try{
        const response = await fetch('./data/records.json')
        if(!response.ok) throw `com o status: ${response.status}`
        const json = await response.json()
        for (let i=0; i<=json.length; i++){
            cardSection.innerHTML += cards(json[i])
        }
    }catch(e){
      
    }
}

records()
