/*
    Pokedex
    
    Write an async function 
        that uses fetch() to fetch all 
        Pokemon from pokemon.json
    
    Display all the Pokemon
        ID, English Name, 
        Type(s), 
        Stats: HP/Attack/Defense/Speed
*/

async function getAllPokemon() {
    let response = await fetch("pokemon.json")
    let data = await response.json()
    return data    
}

getAllPokemon().then(allPokemon => {
    let samplePokemon = allPokemon[0]
    console.log(samplePokemon)
    document.body.innerHTML = `
        <div class="a-pokemon">
            <div class="a-pokemon-id">${samplePokemon.id}</div>
            
            <div class="a-pokemon-name">${samplePokemon.name.english}</div>
            <div class="a-pokemon-type">${samplePokemon.type.join(' / ')}</div>
            
            <div class="a-pokemon-stat">${samplePokemon.base.HP}</div>
            <div class="a-pokemon-stat">${samplePokemon.base.Attack}</div>
            <div class="a-pokemon-stat">${samplePokemon.base.Defense}</div>
            <div class="a-pokemon-stat">${samplePokemon.base.Speed}</div>
        </div>
    `
})