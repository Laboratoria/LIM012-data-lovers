import { example } from './data.js';
// import data from './data/injuries/injuries.js';
// import data from './data/lol/lol.js';
// import data from './data/patient/patient.js';
import data from './data/pokemon/pokemon.js';
import pokemon from './data/pokemon/pokemon.js';
// import data from './data/rickandmorty/rickandmorty.js';
// import data from './data/steam/steam.js';
// import data from './data/worldbank/worldbank.js';

let pokemonNames=document.getElementsByClassName("pokemon-name");
let pokemonImg=document.getElementsByClassName("pokemon-image");
for(let i=0; i<1;i++){
        
        pokemonNames[i].innerHTML=data.pokemon[i].name;
        //cargar imagen
        let img= document.createElement("IMG");
        img.setAttribute("src",data.pokemon[i].img );
        img.setAttribute("alt", "Imagen Pokemón");
        pokemonImg[i].appendChild(img);
    }
    let div1=document.createElement("div")
    div1.className="pokemon-card";
    document.getElementById("card-container").appendChild(div1);
    
    let div2=document.createElement("div");
    div2.className="pokemon-name";
    let div3=document.createElement("div");
    div3.className="pokemon-image";
    document.getElementsByClassName("pokemon-card")[1].appendChild(div2);
    document.getElementsByClassName("pokemon-card")[1].appendChild(div3);


