/* eslint-disable spaced-comment */
/* eslint-disable no-restricted-globals */
/* eslint-disable no-plusplus */
/* eslint-disable no-undef */
// import data from './data/atletas/atletas.js';
// import data from './data/pokemon/pokemon.js';

//  AQUI MANEJAMOS EL DOOM

import data from './data/lol/lol.js';
import {
  sortData, filterData, filterFighter, filterMage,
  filterAssassin, filterMarksman, filterSupport, filterTank,
} from './data.js';

const allChampion = data.data;
const arrObjetos = Object.values(allChampion);
// console.log(allChampion);
// console.log(arrObjetos);


const crearTemplate = (arr) => {
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
crearTemplate(arrObjetos);

// CREAR PARRAFO PARA MOSTRAR ESTADISTICA DE CALCULO AGREGADO
const pElement = document.createElement('p');
pElement.classList.add('class-name');

// ORDENAR DATA
const orderAz = document.getElementById('orderAz');
orderAz.addEventListener('click', () => {
  container.innerHTML = '';
  pElement.innerHTML = '';
  crearTemplate(sortData(arrObjetos, 'name', 'ascendente'));
});

const orderZa = document.getElementById('orderZa');
orderZa.addEventListener('click', () => {
  container.innerHTML = '';
  pElement.innerHTML = '';
  crearTemplate(sortData(arrObjetos, 'name', 'descendente'));
});

// FILTRAR DATA
const assassin = document.getElementById('assassin');
assassin.addEventListener('click', () => {
  container.innerHTML = '';

  pElement.innerHTML = '';
  pElement.innerHTML = `Assassin Average HP: ${filterAssassin(arrObjetos)}`;
  const average = document.getElementById('average');
  average.appendChild(pElement);

  crearTemplate(filterData(arrObjetos, 'Assassin'));
});

const fighter = document.getElementById('fighter');
fighter.addEventListener('click', () => {
  container.innerHTML = '';

  pElement.innerHTML = '';
  pElement.innerHTML = `Fighter Average HP: ${filterFighter(arrObjetos)}`;
  const average = document.getElementById('average');
  average.appendChild(pElement);

  crearTemplate(filterData(arrObjetos, 'Fighter'));
});

const mage = document.getElementById('mage');
mage.addEventListener('click', () => {
  container.innerHTML = '';

  pElement.innerHTML = '';
  pElement.innerHTML = `Mage Average Hp: ${filterMage(arrObjetos)}`;
  const average = document.getElementById('average');
  average.appendChild(pElement);

  crearTemplate(filterData(arrObjetos, 'Mage'));
});

const marksman = document.getElementById('marksman');
marksman.addEventListener('click', () => {
  container.innerHTML = '';

  pElement.innerHTML = '';
  pElement.innerHTML = `Marksman Average Hp: ${filterMarksman(arrObjetos)}`;
  const average = document.getElementById('average');
  average.appendChild(pElement);

  crearTemplate(filterData(arrObjetos, 'Marksman'));
});

const support = document.getElementById('support');
support.addEventListener('click', () => {
  container.innerHTML = '';

  pElement.innerHTML = '';
  pElement.innerHTML = `Support Average Hp: ${filterSupport(arrObjetos)}`;
  const average = document.getElementById('average');
  average.appendChild(pElement);

  crearTemplate(filterData(arrObjetos, 'Support'));
});

const tank = document.getElementById('tank');
tank.addEventListener('click', () => {
  container.innerHTML = '';

  pElement.innerHTML = '';
  pElement.innerHTML = `Tank Average Hp: ${filterTank(arrObjetos)}`;
  const average = document.getElementById('average');
  average.appendChild(pElement);

  crearTemplate(filterData(arrObjetos, 'Tank'));
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


// const filterfighter = arrObjetos.filter(champeon => champeon.tags.includes('Fighter'));
// console.log(('Campeones filtrados que son Fighter:'), filterfighter);

// const reducehpfighter = filterfighter.reduce((total, next) => total + next.stats.hp, 0);
// console.log(('suma de hp de los Fighter'), reducehpfighter);

// const averagehpfighter = filterfighter.reduce((total, next) =>
// total + next.stats.hp, 0) / filterfighter.length;
// console.log(('promedio de hp de los Fighter'), averagehpfighter);

// const averagemsfighter = filterfighter.reduce((total, next) =>
// total + next.stats.movespeed, 0) / filterfighter.length;
// console.log(('promedio de movespeed de los Fighter'), averagemsfighter);
