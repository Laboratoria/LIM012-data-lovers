/* eslint-disable no-undef */
/* eslint-disable space-infix-ops */
/* eslint-disable comma-spacing */
/* eslint-disable array-callback-return */
/* eslint-disable spaced-comment */
/* eslint-disable import/extensions */
/* eslint-disable no-plusplus */
// import data from './data/atletas/atletas.js';
// import data from './data/pokemon/pokemon.js';
// console.log(example,data);

//  AQUI MANEJAMOS EL DOOM

import data from './data/lol/lol.js';
import { orderChampions } from './data.js';

const allChampion = data.data;
const arrObjetos = Object.values(allChampion);

//Object.values(allChampion).map((champion) => {

const crearTemplate = (arr) => {
  arr.forEach((champion) => {
    const newElement = document.createElement('div');
    const img = document.createElement('img');
    img.classList.add('class-img');
    const p = document.createElement('p');
    p.classList.add('class-name');
    newElement.appendChild(img);
    newElement.appendChild(p);
    img.src = `${champion.splash}`;
    p.innerHTML = `${champion.name}`;
    const box = document.getElementById('box');
    box.appendChild(newElement);
  });
};
crearTemplate(arrObjetos);

/*const crearTemplate = (arr) => {
  const all = [];
  for (let i = 0; i < arr.length; i++) {
    all.push(`
      <div class="class-div">
      <img src="${arr[i].splash}" class="class-img" alt="Imagen de ${arr[i].name}">
      <p class="class-name">${arr[i].name}</p>
      </div>`);
  }
  return all.join('');
};*/

const orderAll = document.querySelector('#order');

orderAll.addEventListener('change',() => {
  const order = orderAll.value;
  box.innerHTML='';
  crearTemplate(orderChampions(arrObjetos, order));
});

/*document.getElementById('box').innerHTML = crearTemplate(arrObjetos);

document.getElementById('order').addEventListener('change', () => {
  const order = document.getElementById('order').value;
  document.getElementById('box').innerHTML = crearTemplate(orderChampions(arrObjetos, order));
});*/
