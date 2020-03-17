//DOM
//{} cuando solo llamas a una funcion determinada no a toda la hoja

import data from './data/pokemon/pokemon.js';
import {showInfo} from './data.js';

const pokemones=data.pokemon;

export const inputSearchElem=document.getElementById("inputSearch");
const searchIconElem=document.getElementById("searchIcon");
const screen1Elem=document.getElementById('screen1');
const screen2Elem=document.getElementById('screen2');



const showScreen2=()=>{
    screen1Elem.style.display="none";
    screen2Elem.style.display="block";

    screen2Elem.innerHTML=` Hay ${pokemones.length} pokemones
    ${showInfo(pokemones)}`

}
searchIconElem.addEventListener('click',showScreen2); 

//pokemones.map(showInfo)
