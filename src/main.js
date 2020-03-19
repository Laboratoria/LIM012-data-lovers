//DOM
//{} cuando solo llamas a una funcion determinada no a toda la hoja
import data from './data/pokemon/pokemon.js';
import {showInfo, showAllData} from './data.js';
const pokemones=data.pokemon;
export const inputSearchElem=document.getElementById("inputSearch");
const searchIconElem=document.getElementById("searchIcon");
const screen1Elem=document.getElementById('screen1');
const screen2Elem=document.getElementById('screen2');
const screen3Elem=document.getElementById('screen3');
const mHome= document.getElementById('home');
const mPokedex=document.getElementById('pokedex');
//Segunda Pantalla -Buscador
const showScreen2=()=>{
    screen1Elem.style.display="none";
    screen3Elem.style.display='none';
    screen2Elem.style.display="block";
    screen2Elem.innerHTML=` Hay ${pokemones.length} pokemones
    ${showInfo(data.pokemon)}`
}
//Menu boton Home
searchIconElem.addEventListener('click',showScreen2); 
mHome.addEventListener('click',()=>{
    screen2Elem.style.display='none';
    screen1Elem.style.display='block';
    screen3Elem.style.display='none';
    inputSearchElem.value='';
})
const showScreen3=()=>{
    screen3Elem.innerHTML=`${pokemones.map(showAllData).join('')}`
    screen1Elem.style.display='none';
    screen2Elem.style.display='none';
}
mPokedex.addEventListener('click',showScreen3);
