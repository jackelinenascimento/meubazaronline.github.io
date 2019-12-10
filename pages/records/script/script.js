const cardSection = document.getElementById('card-section')

function cards(json){
    return `
    <div class="card m-4" style="width: 18rem;">
        <img class="card-img-top" src="${json.image}" alt="Card image cap">   
        <h5 class="card-title">Titulo: ${json.title}</h5>
        <p class="card-text">Artista: ${json.artist}</p>    
        <p class="card-text">Ano: ${json.year}</p> 
        <p class="card-text">Quantidade de discos: ${json.discs}</p> 
        <p class="card-text">Origem: ${json.origem}</p>
        <p class="card-text">Produção: ${json.productor}</p> 
    </div>`
}

async function records() {
    try{
        const response = await fetch('./data/records.json')
        if(!response.ok) throw `com o status: ${response.status}`
        const json = await response.json()
        console.log(json)
        for (let i=0; i<=json.length; i++){
            console.log(json[1])
            cardSection.innerHTML += cards(json[i])
            console.log(cards(json[1]))
        }
    }catch(e){
      
    }
}

records()

