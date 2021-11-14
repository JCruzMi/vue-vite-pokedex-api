const fetch = require('node-fetch').default

function zerofill(number){
    var num = number.toString()
    if (num.length === 1) {
        num = "00" + number
    } else if (num.length === 2) {
        num = "0" + number
    }
    return num
}

const PokemonTypeColors = {
    normal: {
      light: "#CDCDB9",
      medium: "#C4C4A4",
    },
    fire: {
      light: "#F4934D",
      medium: "#F08030",
    },
    fighting: {
      light: "#BA5852",
      medium: "#C03028",
    },
    water: {
      light: "#85A5F0",
      medium: "#6890F0",
    },
    flying: {
      light: "#B8A5F2",
      medium: "#A890F0",
    },
    grass: {
      light: "#99D07D",
      medium: "#78C850",
    },
    poison: {
      light: "#A768A7",
      medium: "#A040A0",
    },
    electric: {
      light: "#F9DF78",
      medium: "#F8D030",
    },
    ground: {
      light: "#EDD081",
      medium: "#E0C068",
    },
    psychic: {
      light: "#F47DA1",
      medium: "#F85888",
    },
    rock: {
      light: "#C5B059",
      medium: "#B8A038",
    },
    ice: {
      light: "#B3E1E1",
      medium: "#98D8D8",
    },
    bug: {
      light: "#B5C534",
      medium: "#A8B820",
    },
    dragon: {
      light: "#8656FA",
      medium: "#7038F8",
    },
    ghost: {
      light: "#7D6B9B",
      medium: "#705898",
    },
    dark: {
      light: "#756459",
      medium: "#705848",
    },
    steel: {
      light: "#C1C1D1",
      medium: "#B8B8D0",
    },
    fairy: {
      light: "#EFA7B7",
      medium: "#EE99AC",
    },
  };

exports.handler = async function() {
    for (let i= 1; i<= 898; i++){
        const pokemonApiData = await fetch("https://pokeapi.co/api/v2/ability/" + i +"/").then(response => 
        response => {

            let type = PokemonTypeColors[response.data.types[0].type.name]

            let poke = {
                name: response.data.name,
                id: response.data.id,
                img: "https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/" + zerofill(response.data.id)  + ".png",
                color: type
            }

        }).json()
    }

    const PokeData = 

    const PokeApiData = await fetch('https://pokeapi.co/api/v2/pokedex/2/').then(response => response.json()
    )

    const pokeData = PokeApiData.pokemon_entries 
        ? PokeApiData.pokemon_entries.map(pokemon => {
        
            const pokemonName = 
                pokemon.pokemon_species.name[0].toUpperCase() + 
                pokemon.pokemon_species.name.substring(1)
            
            const pokeImg = "https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/" + zerofill(pokemon.entry_number)  + ".png"

            return {
                id: pokemon.entry_number,
                name : pokemonName,
                img : pokeImg
            }
        })
    :[]

    return {
      statusCode: 200,
      body: JSON.stringify(pokeData)
  }
}

