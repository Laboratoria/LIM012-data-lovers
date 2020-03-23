//  DOM
//  {} cuando solo llamas a una funcion determinada no a toda la hoja
import data from './data/pokemon/pokemon.js';
import {
  showInfo, showAllData, orderBy, typeFilter,
} from './data.js';

export const inputSearchElem = document.getElementById('inputSearch');
const pokemones = data.pokemon;
const searchIconElem = document.getElementById('searchIcon');
const screen1Elem = document.getElementById('screen1');
const screen2Elem = document.getElementById('screen2');
const screen3Elem = document.getElementById('screen3');
const select1Elem = document.getElementById('selectOrder');
const select2Elem = document.getElementById('selectType');
const s3defaultElem = document.getElementById('s3default');
const s3orderElem = document.getElementById('s3order');
const s3typeElem = document.getElementById('s3type');
// document.getElementsByTagName(select[]);
const mHome = document.getElementById('home');
const mPokedex = document.getElementById('pokedex');
// const mcompare = document.getElementById('compare');
// Segunda Pantalla -Buscador
searchIconElem.addEventListener('click', () => {
  screen1Elem.style.display = 'none';
  screen2Elem.style.display = 'block';
  screen2Elem.innerHTML = `${showInfo(pokemones)}`;
});
// Menu boton Home
mHome.addEventListener('click', () => {
  screen1Elem.style.display = 'flex';
  screen2Elem.style.display = 'none';
  screen3Elem.style.display = 'none';
  s3defaultElem.style.display = 'none';
  screen3Elem.style.display = 'none';
  inputSearchElem.value = '';
});
// Muestra por default Pok
mPokedex.addEventListener('click', () => {
  screen1Elem.style.display = 'none';
  screen2Elem.style.display = 'none';
  screen3Elem.style.display = 'block';
  s3defaultElem.style.display = 'block';
  s3defaultElem.innerHTML = `${pokemones.map(showAllData).join('')}`;
});
// Boton Select OrderBy
select1Elem.addEventListener('change', () => {
  s3defaultElem.style.display = 'none';
  s3orderElem.style.display = 'block';
  const select1Value = select1Elem.value;
  s3orderElem.innerHTML = `${(orderBy(pokemones, select1Value)).map(showAllData).join('')} `;
});
select2Elem.addEventListener('change', () => {
  s3defaultElem.style.display = 'none';
  s3typeElem.style.display = 'block';
  s3orderElem.style.display = 'none';
  const select2Value = select2Elem.value.toLowerCase();
  s3typeElem.innerHTML = `${(typeFilter(pokemones, select2Value)).map(showAllData).join('')}`;
});
