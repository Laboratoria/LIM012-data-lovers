import { dinamicSearchPokemon } from './data.js';
// import data from './data/injuries/injuries.js';
// import data from './data/lol/lol.js';
// import data from './data/patient/patient.js';
import data from './data/pokemon/pokemon.js';
import pokemon from './data/pokemon/pokemon.js';
// import data from './data/rickandmorty/rickandmorty.js';
// import data from './data/steam/steam.js';
// import data from './data/worldbank/worldbank.js';

const createCard= (i,dataNamePokemon,dataImgPokemon)=>{
    let divCard=document.createElement("div")
    divCard.className="pokemon-card";
    document.getElementById("card-container").appendChild(divCard);
    let divCardName=document.createElement("div");
    let divCardImage=document.createElement("div");
    let divCardTypes=document.createElement("div");
    divCardName.className="pokemon-name";
    divCardImage.className="pokemon-image";
    divCardTypes.className="pokemon-types";
    document.getElementsByClassName("pokemon-card")[i].appendChild(divCardName);
    document.getElementsByClassName("pokemon-card")[i].appendChild(divCardImage);
    document.getElementsByClassName("pokemon-card")[i].appendChild(divCardTypes);
    putName(dataNamePokemon, divCardName);
    putImage(dataImgPokemon, divCardImage);
}
 const putImage =(dataImgPokemon, divCardImage) =>{
    let img=document.createElement("IMG");
    img.setAttribute("src",dataImgPokemon);
    img.setAttribute("alt", "Imagen Pokemón");
    divCardImage.appendChild(img);
 }

 const putName = (dataNamePokemon, divCardName) => {
    divCardName.textContent=dataNamePokemon;
  }
 const showCard = ()=> {
    for (let i=0; i<data.pokemon.length; i++){
        createCard(i,data.pokemon[i].name,data.pokemon[i].img);
    }

  }

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
showCard();
//const PokemonTypes = document.getElementsByClassName("PokemonType");
//PokemonTypes[0].appendChild(createElementPokemonType("bug"));

const searchPokemon = ()=>{
  document.getElementById("card-container").innerHTML ="";
  let wordIntroduced=document.getElementById("input-bar-search").value;
  for (let i=0; i<data.pokemon.length; i++){
  let word=data.pokemon[i].name.substring(0, wordIntroduced.length);
  if( wordIntroduced.length <= data.pokemon[i].name.length && wordIntroduced.length!= 0 && data.pokemon[i].name.length!=0){
    if(wordIntroduced.toLowerCase() == word.toLowerCase()){
      console.log(data.pokemon[i].name);
    }
  }
  }
}
const inputBarSearch= document.getElementById("input-bar-search");
inputBarSearch.addEventListener('keyup',searchPokemon);