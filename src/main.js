/* eslint-disable spaced-comment */
/* eslint-disable no-restricted-globals */
/* eslint-disable no-plusplus */
/* eslint-disable no-undef */
// import data from './data/atletas/atletas.js';
// import data from './data/pokemon/pokemon.js';

import data from './data/lol/lol.js';
import { sortData, filterData, averageData } from './data.js';

const allChampion = data.data;
const arrObject = Object.values(allChampion);
// console.log(allChampion);
// console.log(arrObject);

// SHOW DATA
const createTemplate = (arr) => {
  arr.forEach((champion) => {
    const newElement = document.createElement('div');
    const img = document.createElement('img');
    const p = document.createElement('p');
    // const h3 = document.createElement('h3');
    newElement.classList.add('class-div');
    img.classList.add('class-img');
    p.classList.add('class-name');
    // h3.classList.add('class-tags');
    img.src = `${champion.splash}`;
    p.innerHTML = `${champion.name}`;
    // h3.innerHTML = `${champion.tags}`;
    newElement.appendChild(img);
    newElement.appendChild(p);
    // newElement.appendChild(h3);
    const container = document.getElementById('container');
    container.appendChild(newElement);
  });
};
createTemplate(arrObject);

// CREATE A P LABEL TO SHOW THE AVERAGE
const pElement = document.createElement('p');
pElement.classList.add('class-name');

// ORDER DATA
const orderAz = document.getElementById('orderAz');
orderAz.addEventListener('click', () => {
  container.innerHTML = '';
  pElement.innerHTML = '';
  createTemplate(sortData(arrObject, 'name', 'ascending'));
});

const orderZa = document.getElementById('orderZa');
orderZa.addEventListener('click', () => {
  container.innerHTML = '';
  pElement.innerHTML = '';
  createTemplate(sortData(arrObject, 'name', 'descending'));
});

// FILTER DATA AND CALCULATE AVERAGE
// ASSASSIN BUTTON
const assassin = document.getElementById('assassin');
assassin.addEventListener('click', () => {
  container.innerHTML = '';
  pElement.innerHTML = '';
  pElement.innerHTML = `Assassin Average HP: ${averageData(arrObject, 'Assassin').toFixed(2)}`;
  const average = document.getElementById('average');
  average.appendChild(pElement);
  createTemplate(filterData(arrObject, 'Assassin'));
});

// FIGHTER BUTTON
const fighter = document.getElementById('fighter');
fighter.addEventListener('click', () => {
  container.innerHTML = '';
  pElement.innerHTML = '';
  pElement.innerHTML = `Fighter Average HP: ${averageData(arrObject, 'Fighter').toFixed(2)}`;
  const average = document.getElementById('average');
  average.appendChild(pElement);
  createTemplate(filterData(arrObject, 'Fighter'));
});

// MAGE BUTTON
const mage = document.getElementById('mage');
mage.addEventListener('click', () => {
  container.innerHTML = '';
  pElement.innerHTML = '';
  pElement.innerHTML = `Mage Average Hp: ${averageData(arrObject, 'Mage').toFixed(2)}`;
  const average = document.getElementById('average');
  average.appendChild(pElement);
  createTemplate(filterData(arrObject, 'Mage'));
});

// MARKSMAN BUTTON
const marksman = document.getElementById('marksman');
marksman.addEventListener('click', () => {
  container.innerHTML = '';
  pElement.innerHTML = '';
  pElement.innerHTML = `Marksman Average Hp: ${averageData(arrObject, 'Marksman').toFixed(2)}`;
  const average = document.getElementById('average');
  average.appendChild(pElement);
  createTemplate(filterData(arrObject, 'Marksman'));
});

// SUPPORT BUTTON
const support = document.getElementById('support');
support.addEventListener('click', () => {
  container.innerHTML = '';
  pElement.innerHTML = '';
  pElement.innerHTML = `Support Average Hp: ${averageData(arrObject, 'Support').toFixed(2)}`;
  const average = document.getElementById('average');
  average.appendChild(pElement);
  createTemplate(filterData(arrObject, 'Support'));
});

// TANK BUTTON
const tank = document.getElementById('tank');
tank.addEventListener('click', () => {
  container.innerHTML = '';
  pElement.innerHTML = '';
  pElement.innerHTML = `Tank Average Hp: ${averageData(arrObject, 'Tank').toFixed(2)}`;
  const average = document.getElementById('average');
  average.appendChild(pElement);
  createTemplate(filterData(arrObject, 'Tank'));
});

/*const currentLocation = location.href;
const menuItems = document.querySelectorAll('a');
const menuLengths = menuItems.length;
for (let i = 0; i % menuLengths; i++) {
  if (menuItems[i].href === currentLocation) {
    menuItems[i].className = 'active';
  }
}*/

//AGREGAR O ELIMINAR CLASE,ACTIVAR AL HACER CLICK
const ul = document.querySelector('ul');
const li = document.querySelectorAll('li');

li.forEach((el) => {
  el.addEventListener('click', () => {
    ul.querySelector('.active').classList.remove('active');
    el.classList.add('active');
  });
});
