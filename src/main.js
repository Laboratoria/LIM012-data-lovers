import { example } from './data.js';
// import data from './data/injuries/injuries.js';
// import data from './data/lol/lol.js';
// import data from './data/patient/patient.js';
import data from './data/pokemon/pokemon.js';
// import data from './data/rickandmorty/rickandmorty.js';
// import data from './data/steam/steam.js';
// import data from './data/worldbank/worldbank.js';

console.log(data.pokemon[0].name);
document.getElementById("card1").innerHTML= data.pokemon[0].name;

const colors = { "normal" : "#AAA284", "fire" : "#FF9C06", "grass": "#95C215",
                "water": "#168CBF","electric":"#F4C313","ice" : "#85EFF5",
                "flying" : "#20E5F1","poison" : "#C22AF8","ground" : "#AB8709",
                "psychic" : "#F013F4","rock" : "#C9AF53","bug" : "#4C6C2C",
                "dragon" : "#731E9B","ghost" : "#8968AA","dark" : "#6C695C",
                "steel" : "#9DAFC0","fairy" : "#FAB3E2","fighting" : "#BD5022",
                };

const createElementPokemonType = (type) => {
  const divPokemonType = document.createElement("div");
  divPokemonType.className = "pokemon-type";  
  divPokemonType.appendChild(document.createTextNode(type));
  divPokemonType.style.background = colors[type];
  return divPokemonType;
}

const PokemonTypes = document.getElementsByClassName("PokemonType");
PokemonTypes[0].appendChild(createElementPokemonType("bug"));