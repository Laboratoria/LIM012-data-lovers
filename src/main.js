/* eslint-disable no-plusplus */
// import data from './data/atletas/atletas.js';
// import data from './data/pokemon/pokemon.js';
// console.log(example,data);

//  AQUI MANEJAMOS EL DOOM

import data from './data/lol/lol.js';
import { orderChampions } from './data.js';

const allChampion = data.data;
const arrObjetos = Object.values(allChampion);
// console.log(arrObjetos);
const crearTemplate = (arr) => {
  document.getElementById('box').innerHTML = '';
  const all = [];
  for (let i = 0; i < arr.length; i++) {
    all.push(`
      <div class="class-div">  
      <img src="${arr[i].splash}" class="class-img" alt="Imagen de ${arr[i].name}">
      <p class="class-name">${arr[i].name}</p>
      </div>`);
  }
  return all.join(' ');
};

document.getElementById('box').innerHTML = crearTemplate(arrObjetos);

document.getElementById('order').addEventListener('change', () => {
  const order = document.getElementById('order').value;
  document.getElementById('box').innerHTML = crearTemplate(orderChampions(arrObjetos, order));
});
