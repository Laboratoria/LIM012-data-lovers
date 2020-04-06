// import data from './data/atletas/atletas.js';
// import data from './data/pokemon/pokemon.js';

// AQUI MANEJAMOS EL DOM

import data from './data/lol/lol.js';
import {
  sortData, filterData, averageData, averageName,
} from './data.js';

const allChampion = data.data;
const arrObject = Object.values(allChampion);
// console.log(allChampion);
// console.log(arrObject);

// MOSTRAR DATA
const container = document.getElementById('container');

const createTemplate = (arr) => {
  arr.forEach((champion) => {
    const newElement = document.createElement('div');
    const img = document.createElement('img');
    const p = document.createElement('p');

    newElement.classList.add('class-div');
    img.classList.add('class-img');
    p.classList.add('class-name');

    img.src = `${champion.splash}`;
    p.innerHTML = `${champion.name}`;

    newElement.appendChild(img);
    newElement.appendChild(p);

    container.appendChild(newElement);
  });
};
createTemplate(arrObject);

// CREATE UN ELEMENTO P PARA MOSTRAR EL PROMEDIO
const pElement = document.createElement('p');
pElement.classList.add('class-new');

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

// FILTRAR DATA Y CALCULAR PROMEDIO

const showFilter = (arr) => {
  arr.forEach((champion) => {
    const newElement = document.createElement('div');
    const img = document.createElement('img');
    const p = document.createElement('h3');
    const pTags = document.createElement('p');
    const pAvg = document.createElement('p');
    newElement.classList.add('class-div');
    p.classList.add('class-name');
    pTags.classList.add('class-avg');
    img.classList.add('class-img');
    pAvg.classList.add('class-avg');
    p.innerHTML = `${champion.name}`;
    img.src = `${champion.splash}`;
    pTags.innerHTML = `Role : ${(champion.tags).join(' , ')}`;
    pAvg.innerHTML = `Average Offensive Statistic : ${averageName(arrObject, `${champion.name}`).toFixed(2)}`;
    newElement.appendChild(img);
    newElement.appendChild(p);
    newElement.appendChild(pTags);
    newElement.appendChild(pAvg);
    container.appendChild(newElement);
  });
};
showFilter(arrObject);

// ASESINOS
const assassin = document.getElementById('assassin');
assassin.addEventListener('click', () => {
  container.innerHTML = '';
  pElement.innerHTML = '';
  pElement.innerHTML = `Assassin Average Offensive Statistic: ${averageData(arrObject, 'Assassin').toFixed(2)}`;
  const average = document.getElementById('average');
  average.appendChild(pElement);
  showFilter(filterData(arrObject, 'Assassin'));
});


// LUCHADORES

const fighter = document.getElementById('fighter');
fighter.addEventListener('click', () => {
  container.innerHTML = '';
  pElement.innerHTML = '';
  pElement.innerHTML = `Fighter Average Offensive Statistic: ${averageData(arrObject, 'Fighter').toFixed(2)}`;
  const average = document.getElementById('average');
  average.appendChild(pElement);
  showFilter(filterData(arrObject, 'Fighter'));
});


// MAGOS

const mage = document.getElementById('mage');
mage.addEventListener('click', () => {
  container.innerHTML = '';
  pElement.innerHTML = '';
  pElement.innerHTML = `Mage Average Offensive Statistic: ${averageData(arrObject, 'Mage').toFixed(2)}`;
  const average = document.getElementById('average');
  average.appendChild(pElement);
  showFilter(filterData(arrObject, 'Mage'));
});


// TIRADORES

const marksman = document.getElementById('marksman');
marksman.addEventListener('click', () => {
  container.innerHTML = '';
  pElement.innerHTML = '';
  pElement.innerHTML = `Marksman Average Offensive Statistic: ${averageData(arrObject, 'Marksman').toFixed(2)}`;
  const average = document.getElementById('average');
  average.appendChild(pElement);
  showFilter(filterData(arrObject, 'Marksman'));
});


// SOPORTES

const support = document.getElementById('support');
support.addEventListener('click', () => {
  container.innerHTML = '';
  pElement.innerHTML = '';
  pElement.innerHTML = `Support Average Offensive Statistic: ${averageData(arrObject, 'Support').toFixed(2)}`;
  const average = document.getElementById('average');
  average.appendChild(pElement);
  showFilter(filterData(arrObject, 'Support'));
});


// TANQUES

const tank = document.getElementById('tank');
tank.addEventListener('click', () => {
  container.innerHTML = '';
  pElement.innerHTML = '';
  pElement.innerHTML = `Tank Average Offensive Statistic: ${averageData(arrObject, 'Tank').toFixed(2)}`;
  const average = document.getElementById('average');
  average.appendChild(pElement);
  showFilter(filterData(arrObject, 'Tank'));
});

// AGREGAR O ELIMINAR CLASE A <LI>,ACTIVAR AL HACER CLICK
const ul = document.querySelector('ul');
const li = document.querySelectorAll('li');

li.forEach((el) => {
  el.addEventListener('click', () => {
    ul.querySelector('.active').classList.remove('active');
    el.classList.add('active');
  });
});
