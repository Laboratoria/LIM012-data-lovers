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
import { orderChampions } from './data.js';
import { filtrarPorTags } from './data.js';

console.log(data.data);

const allChampion = data.data;
const arrObjetos = Object.values(allChampion);

//Object.values(allChampion).map((champion) => {

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
    const box = document.getElementById('box');
    box.appendChild(newElement);
  });
};

/*********************************************** */
// otra forma de pintar en el html toda la data de campeones
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

/*******************************/
// Lamando a la funcion ordenar
const orderAll = document.querySelector('#order');

orderAll.addEventListener('change',() => {
  const order = orderAll.value;
  box.innerHTML='';
  crearTemplate(orderChampions(arrObjetos, order));
});

/*document.getElementById('box').innerHTML = crearTemplate(arrObjetos);

// otra forma de llamar a la funcion de ordenar alfabeticamente
document.querySelector('#order').addEventListener('change', () => {
  const order = document.querySelector('#order').value;
  document.getElementById('box').innerHTML = crearTemplate(orderChampions(arrObjetos, order));
});*/

// console.log(arrObjetos);
// console.log(arrObjetos[0].tags);

// utilizando un ejemplo de arreglo de objetos para la funcion de filtrar
/* const array = [
  { id: 'Aatrox', tags: ['Fighter', 'Tank'], splash: 'http://ddragon.leagueoflegends.com/cdn/img/champion/splash/Aatrox_0.jpg' },
  { id: 'Ahri', tags: ['Mage', 'Assassin'], splash: 'http://ddragon.leagueoflegends.com/cdn/img/champion/splash/Ahri_0.jpg' },
  { id: 'Akali', tags: ['Assassin'], splash: 'http://ddragon.leagueoflegends.com/cdn/img/champion/splash/Akali_0.jpg' },
  { id: 'Alistar', tags: ['Tank', 'Support'], splash: 'http://ddragon.leagueoflegends.com/cdn/img/champion/splash/Alistar_0.jpg' },
  { id: 'Zyra', tags: ['Mage', 'Support'], splash: 'http://ddragon.leagueoflegends.com/cdn/img/champion/splash/Zyra_0.jpg' },
  { id: 'Zed', tags: ['Assassin', 'Fighter'], splash: 'http://ddragon.leagueoflegends.com/cdn/img/champion/splash/Zed_0.jpg' },
  { id: 'Ziggs', tags: ['Mage'], splash: 'http://ddragon.leagueoflegends.com/cdn/img/champion/splash/Ziggs_0.jpg' },
  { id: 'Zilean', tags: ['Support', 'Mage'], splash: 'http://ddragon.leagueoflegends.com/cdn/img/champion/splash/Zilean_0.jpg' },
  { id: 'Bard', tags: ['Support', 'Mage'], splash: 'http://ddragon.leagueoflegends.com/cdn/img/champion/splash/Bard_0.jpg' },
  { id: 'Amumu', tags: ['Tank', 'Mage'], splash: 'http://ddragon.leagueoflegends.com/cdn/img/champion/splash/Amumu_0.jpg' },
  { id: 'Anivia', tags: ['Mage', 'Support'], splash: 'http://ddragon.leagueoflegends.com/cdn/img/champion/splash/Anivia_0.jpg' },
  { id: 'Zac', tags: ['Tank', 'Fighter'], splash: 'http://ddragon.leagueoflegends.com/cdn/img/champion/splash/Zac_0.jpg' },
  { id: 'undefined' },
];*/


// console.log('Rol de Zyra: ', array[4].tags[0]);
// const arrPorTags = array.filter(filtrarPorTags);

// funcion de filtrar inconclusa
const arrPorTags = arrObjetos.filter(filtrarPorTags);
// crearTemplate(arrPorTags);

console.log('Array Filtrado\n', arrPorTags);
