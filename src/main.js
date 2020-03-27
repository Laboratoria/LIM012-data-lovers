/* eslint-disable no-plusplus */
// import data from './data/atletas/atletas.js';
// import data from './data/pokemon/pokemon.js';


//  AQUI MANEJAMOS EL DOOM

import data from './data/lol/lol.js';
import { orderChampions } from './data.js';

console.log(data.data);

const allChampion = data.data;
const arrObjetos = Object.values(allChampion);

console.log(arrObjetos);
console.log(arrObjetos[0].tags);

const array = [
  { id: 'Aatrox', tags: 'Fighter', splash: 'http://ddragon.leagueoflegends.com/cdn/img/champion/splash/Aatrox_0.jpg' },
  { id: 'Ahri', tags: 'Mage', splash: 'http://ddragon.leagueoflegends.com/cdn/img/champion/splash/Ahri_0.jpg' },
  { id: 'Akali', tags: 'Fighter', splash: 'http://ddragon.leagueoflegends.com/cdn/img/champion/splash/Akali_0.jpg' },
  { id: 'Alistar', tags: 'Tank', splash: 'http://ddragon.leagueoflegends.com/cdn/img/champion/splash/Alistar_0.jpg' },
  { id: 'Zyra', tags: ['Mage', 'Support'], splash: 'http://ddragon.leagueoflegends.com/cdn/img/champion/splash/Zyra_0.jpg' },
  { },
  { tags: 'Support' },
  { tags: 'Assassin' },
  { id: 'Bardo', tags: 'Mage', splash: '' },
  { },
  { id: null },
  { id: NaN },
  { id: 'undefined' },
];

let entradasInvalidas = 0;
// Si el elemento tiene un atributo id, y su valor correspondiente es un numero
// Y no es el valor NaN, entonces es una entrada válida
function filtrarPorTags(obj) {
  if ('tags' in obj && obj.tags.indexOf() !== -1) {
    return obj;
  }
  entradasInvalidas++;
  return false;
}

console.log('Rol de Zyra: ', array[4].tags[0]);
const arrPorTags = array.filter(filtrarPorTags);

console.log('Array Filtrado\n', arrPorTags);
// [{ id: 15 }, { id: -1 }, { id: 0 }, { id: 3 }, { id: 12.2 }]

console.log('Número de Entradas Invalidas = ', entradasInvalidas);

const crearTemplate = (arr) => {
  const all = [];
  for (let i = 0; i < arr.length; i++) {
    all.push(`
      <div class="class-div">  
      <img src="${arr[i].splash}" class="class-img" alt="Imagen de ${arr[i].name}">
      <p class="class-name">${arr[i].name}</p>
      </div>`);
  }
  return all.join('');
};

document.getElementById('box').innerHTML = crearTemplate(arrObjetos);

document.querySelector('#order').addEventListener('change', () => {
  const order = document.querySelector('#order').value;
  document.getElementById('box').innerHTML = crearTemplate(orderChampions(arrObjetos, order));
});
