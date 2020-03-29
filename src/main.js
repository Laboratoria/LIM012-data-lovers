/* eslint-disable no-undef */
/* eslint-disable space-infix-ops */
/* eslint-disable comma-spacing */
/* eslint-disable array-callback-return */
/* eslint-disable spaced-comment */
/* eslint-disable import/extensions */
/* eslint-disable no-plusplus */
// import data from './data/atletas/atletas.js';
// import data from './data/pokemon/pokemon.js';


//  AQUI MANEJAMOS EL DOOM

import data from './data/lol/lol.js';
import { sortData , filterData } from './data.js';

console.log(data.data);

const allChampion = data.data;
const arrObjetos = Object.values(allChampion);


// Funcion para pintar toda la data en el HTML usando appendChild y createElement
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

/*********************************************** */
// otra forma de pintar en el html toda la data de campeones

// document.getElementById('box').innerHTML = crearTemplate(arrObjetos);

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

/*******************************/
// Lamando a la funcion ordenar
const orderAlphabetically = document.getElementById('orderAlphabetically');
orderAlphabetically.addEventListener('click',() => {
  const sortingOut = orderAlphabetically.value;
  container.innerHTML='';
  crearTemplate(sortData(arrObjetos, 'name', sortingOut));
});

/**************************************** */
// //otra forma de llamar a la funcion de ordenar alfabeticamente
// document.querySelector('#order').addEventListener('change', () => {
//   const order = document.querySelector('#order').value;
//   document.getElementById('box').innerHTML = crearTemplate(orderChampions(arrObjetos, order));
// });

// console.log(arrObjetos);
// console.log(arrObjetos[0].tags);


/************************************************ */
// #1 lemi probando modificacion del DOM para filtrar por rol

const fighter = document.getElementById('fighter');
fighter.addEventListener('click',() => {
  container.innerHTML='';
  crearTemplate(filterData(arrObjetos, 'Fighter'));
});

const tank = document.getElementById('tank');
tank.addEventListener('click',() => {
  container.innerHTML='';
  crearTemplate(filterData(arrObjetos, 'Tank'));
});

const mage = document.getElementById('mage');
mage.addEventListener('click',() => {
  container.innerHTML='';
  crearTemplate(filterData(arrObjetos, 'Mage'));
});

const assassin = document.getElementById('assassin');
assassin.addEventListener('click',() => {
  container.innerHTML= '';
  crearTemplate(filterData(arrObjetos, 'Assassin'));
});

const support = document.getElementById('support');
support.addEventListener('click',() => {
  container.innerHTML='';
  crearTemplate(filterData(arrObjetos, 'Support'));
});

const marksman = document.getElementById('marksman');
marksman.addEventListener('click',() => {
  container.innerHTML='';
  crearTemplate(filterData(arrObjetos, 'Marksman'));
});
