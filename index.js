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
    
    console.log(data)
}

getAllPokemon()