//  DOM
//  {} cuando solo llamas a una funcion determinada no a toda la hoja
import data from './data/pokemon/pokemon.js';
import {
  showInfo, showAllData, orderBy, typeFilter,
} from './data.js';

const inputSearchElem = document.getElementById('inputSearch');
const pokemones = data.pokemon;
const searchIconElem = document.getElementById('searchIcon');
const screen1Elem = document.getElementById('screen1');
const screen2Elem = document.getElementById('screen2');
const screen3Elem = document.getElementById('screen3');
const screen4Elem = document.getElementById('screen4');
const select1Elem = document.getElementById('selectOrder');
const select2Elem = document.getElementById('selectType');
const s3dataElem = document.getElementById('s3data');
// const s3dataElem = document.getElementById('s3data');
// document.getElementsByTagName(select[]);
const mHome = document.getElementById('home');
const mPokedex = document.getElementById('pokedex');
const mCompare = document.getElementById('compare');
// Segunda Pantalla -Buscador
/* let fun=(pokemones,data)=>{
  let je=[];
  for(let i in pokemones){
    for(let j in data){
  je.push(pokemones[i][data][j].name)}
  }
  console.log(je);}
fun(pokemones,'special-attack'); */


searchIconElem.addEventListener('click', () => {
  screen1Elem.style.display = 'none';
  screen2Elem.style.display = 'block';
  screen2Elem.innerHTML = `${showInfo(pokemones, inputSearchElem)}`;
});
// Menu boton Home
mHome.addEventListener('click', () => {
  screen1Elem.style.display = 'flex';
  screen2Elem.style.display = 'none';
  screen3Elem.style.display = 'none';
  screen4Elem.style.display = 'none';
  inputSearchElem.value = '';
});
// Muestra por default Pok
mPokedex.addEventListener('click', () => {
  screen1Elem.style.display = 'none';
  screen2Elem.style.display = 'none';
  screen3Elem.style.display = 'flex';
  s3dataElem.innerHTML = `${pokemones.map(showAllData).join('')}`;
});
// Boton Select OrderBy
select1Elem.addEventListener('change', () => {
  const select1Value = select1Elem.value;
  s3dataElem.innerHTML = `${(orderBy(pokemones, select1Value)).map(showAllData).join('')}`;
});
select2Elem.addEventListener('change', () => {
  const select2Value = select2Elem.value.toLowerCase();
  s3dataElem.innerHTML = `${(typeFilter(pokemones, select2Value)).map(showAllData).join('')}`;
});

mCompare.addEventListener('click', () => {
  screen1Elem.style.display = 'none';
  screen2Elem.style.display = 'none';
  screen3Elem.style.display = 'none';
  screen4Elem.style.display = 'flex';
  // screen4Elem.innerHTML = `${showInfo(pokemones, inputSearchElem)}`;
});
