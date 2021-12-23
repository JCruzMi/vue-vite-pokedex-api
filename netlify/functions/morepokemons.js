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

    let pokemons = []

    for (let i = 1; i<= 20; i++){
        
        const pokemon = await fetch(`https://pokeapi.co/api/v2/pokemon/`+i)
        let pokemonData = await pokemon.json()
    
        let color = PokemonTypeColors[pokemonData.types[0].type.name]
    
        let types= []
    
        for (type in pokemonData.types){
          types.push({
            key: pokemonData.types[type].type.name,
            value: PokemonTypeColors[pokemonData.types[type].type.name]
          })
        }
    
        let stats = []
    
        for ((index) in pokemonData.stats){
          stats.push({
            key: pokemonData.stats[index]["stat"].name,
            value : pokemonData.stats[index].base_stat
          })
        }
    
        pokemons.push({
            name: pokemonData.name,
            id: pokemonData.id,
            img: "https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/" + zerofill(pokemonData.id)  + ".png",
            color: color,
            types: types,
            stats: stats
        })
    }    

    return {
      statusCode: 200,
      body: JSON.stringify(pokemons)
  }
}

