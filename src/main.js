import { example } from './data.js';
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
    for (let i=0; i<data.pokemon.length ; i++){
        createCard(i,data.pokemon[i].name,data.pokemon[i].img);
    }
  }
showCard();


