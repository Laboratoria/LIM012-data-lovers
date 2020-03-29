/* eslint-disable import/named */
/* eslint-disable no-undef */
/* eslint-disable max-len */
/* eslint-disable spaced-comment */
/* eslint-disable no-multiple-empty-lines */
/* eslint-disable import/extensions */
/* eslint-disable no-plusplus */
// import data from './data/atletas/atletas.js';
// import data from './data/pokemon/pokemon.js';


//  AQUI MANEJAMOS EL DOOM

import data from './data/lol/lol.js';
import { sortData, filterData } from './data.js';

const allChampion = data.data;
const arrObjetos = Object.values(allChampion);

const crearTemplate = (arr) => {
  arr.forEach((champion) => {
    const newElement = document.createElement('div');
    newElement.classList.add('class-div');
    const img = document.createElement('img');
    img.classList.add('class-img');
    const p = document.createElement('p');
    p.classList.add('class-name');
    newElement.appendChild(img);
    newElement.appendChild(p);
    img.src = `${champion.splash}`;
    p.innerHTML = `${champion.name}`;
    const container = document.getElementById('container');
    container.appendChild(newElement);
  });
};
crearTemplate(arrObjetos);

// ORDENAR DATA
const orderAlphabetically = document.getElementById('orderAlphabetically');
orderAlphabetically.addEventListener('change', () => {
  const sortingOut = orderAlphabetically.value;
  container.innerHTML = '';
  crearTemplate(sortData(arrObjetos, 'name', sortingOut));
});

// FILTRAR DATA
const assassin = document.getElementById('assassin');
assassin.addEventListener('click', () => {
  container.innerHTML = '';
  crearTemplate(filterData(arrObjetos, 'Assassin'));
});

const fighter = document.getElementById('fighter');
fighter.addEventListener('click', () => {
  container.innerHTML = '';
  crearTemplate(filterData(arrObjetos, 'Fighter'));
});

const mage = document.getElementById('mage');
mage.addEventListener('click', () => {
  container.innerHTML = '';
  crearTemplate(filterData(arrObjetos, 'Mage'));
});

const marksman = document.getElementById('marksman');
marksman.addEventListener('click', () => {
  container.innerHTML = '';
  crearTemplate(filterData(arrObjetos, 'Marksman'));
});

const support = document.getElementById('support');
support.addEventListener('click', () => {
  container.innerHTML = '';
  crearTemplate(filterData(arrObjetos, 'Support'));
});

const tank = document.getElementById('tank');
tank.addEventListener('click', () => {
  container.innerHTML = '';
  crearTemplate(filterData(arrObjetos, 'Tank'));
});


//opcion2
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
};

document.getElementById('box').innerHTML = crearTemplate(arrObjetos);

document.getElementById('order').addEventListener('change', () => {
  const order = document.getElementById('order').value;
  document.getElementById('box').innerHTML = crearTemplate(orderChampions(arrObjetos, 'name', order));
});*/

//opcion1 original
/*document.getElementById('order').addEventListener('change', () => {
  document.getElementById('box').innerHTML = crearTemplate(orderChampions(arrObjetos, 'name', document.getElementById('order').value));
});*/


/*document.getElementById('fighter').addEventListener('click', () => {
  document.getElementById('box').innerHTML = crearTemplate(filterData(arrObjetos, 'Fighter'));
});*/

/*document.getElementById('tank').addEventListener('click', () => {
  document.getElementById('box').innerHTML = crearTemplate(filterData(arrObjetos, 'Tank'));
});*/

/*document.getElementById('mage').addEventListener('click', () => {
  document.getElementById('box').innerHTML = crearTemplate(filterData(arrObjetos, 'Mage'));
});

document.getElementById('assassin').addEventListener('click', () => {
  document.getElementById('box').innerHTML = crearTemplate(filterData(arrObjetos, 'Assassin'));
});

document.getElementById('support').addEventListener('click', () => {
  document.getElementById('box').innerHTML = crearTemplate(filterData(arrObjetos, 'Support'));
});

document.getElementById('marksman').addEventListener('click', () => {
  document.getElementById('box').innerHTML = crearTemplate(filterData(arrObjetos, 'Marksman'));
});*/

