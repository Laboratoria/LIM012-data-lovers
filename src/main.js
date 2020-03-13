import { dinamicSearchPokemon } from './data.js';
import data from './data/pokemon/pokemon.js';
import pokemon from './data/pokemon/pokemon.js';
const colors = { "normal" : "#AAA284", "fire" : "#FF9C06", "grass": "#95C215",
                "water": "#168CBF","electric":"#F4C313","ice" : "#85EFF5",
                "flying" : "#20E5F1","poison" : "#C22AF8","ground" : "#AB8709",
                "psychic" : "#F013F4","rock" : "#C9AF53","bug" : "#4C6C2C",
                "dragon" : "#731E9B","ghost" : "#8968AA","dark" : "#6C695C",
                "steel" : "#9DAFC0","fairy" : "#FAB3E2","fighting" : "#BD5022",
                };
                
const createPokemonCard= (index,dataPokemon)=>{
  let divCard=document.createElement("div")
    divCard.className="pokemon-card";
    document.getElementById("card-container").appendChild(divCard);
    let divCardName=document.createElement("div");
    let divCardImage=document.createElement("div");
    let divCardTypes=document.createElement("div");
    divCardName.className="pokemon-name";
    divCardImage.className="pokemon-image";
    divCardTypes.className="pokemon-types";
    document.getElementsByClassName("pokemon-card")[index].appendChild(divCardName);
    document.getElementsByClassName("pokemon-card")[index].appendChild(divCardImage);
    document.getElementsByClassName("pokemon-card")[index].appendChild(divCardTypes);
    putPokemonName(dataPokemon.name, divCardName);
    putPokemonImage(dataPokemon.img, divCardImage);
    putPokemonTypes(dataPokemon.type, divCardTypes);
}

const createPokemonType = (type) => {
  const divPokemonType = document.createElement("div");
  divPokemonType.className = "pokemon-type";  
  divPokemonType.appendChild(document.createTextNode(type));
  divPokemonType.style.background = colors[type];
  return divPokemonType;
}

 const putPokemonImage =(dataImgPokemon, divCardImage) =>{
    let img = document.createElement("IMG");
    img.id = "img-pokemon";
    img.setAttribute("src",dataImgPokemon);
    img.setAttribute("alt", "Imagen Pokemón");
    divCardImage.appendChild(img);
 }

 const putPokemonName = (dataNamePokemon, divCardName) => {
    divCardName.textContent=dataNamePokemon;
  }

const putPokemonTypes = (dataTypesPokemon, divCardTypes) => {
  for(let i = 0; i < dataTypesPokemon.length; i++) {
    divCardTypes.appendChild(createPokemonType(dataTypesPokemon[i]));
  }
}
const showCard = (dataPokemon)=> {
    for (let i=0; i<dataPokemon.length; i++){
        createPokemonCard(i,dataPokemon[i]);
    }
  }

const searchPokemon = ()=>{
  document.getElementById("card-container").innerHTML ="";
  let wordIntroduced=document.getElementById("input-bar-search").value;
  showCard(dinamicSearchPokemon(wordIntroduced));
}

//*******************************************************************
showCard(data.pokemon);
const inputBarSearch= document.getElementById("input-bar-search");
inputBarSearch.addEventListener('keyup',searchPokemon);