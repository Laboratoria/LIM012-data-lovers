/* eslint-disable no-plusplus */
//  AQUI MANEJAMOS EL DOOM

// import { example } from './data.js';
import { crearTemplate } from './data.js';

// import data from './data/atletas/atletas.js';
import data from './data/lol/lol.js';

// import data from './data/pokemon/pokemon.js';
// console.log(example,data);
console.log(data.data);

const allChampion = data.data;
const arrObjetos = [Object.values(allChampion)];
console.log(arrObjetos);

const btnMostrar = document.getElementById('btnMostrar');
// const btnOrdenar = document.getElementById('btnOrdenar');
const contenedor = document.getElementById('contenedor');

btnMostrar.addEventListener('click', () => {
  contenedor.innerHTML = crearTemplate(arrObjetos);
});

/*
btnOrdenar.addEventListener('click', () => {
  contenedor.innerHTML = '';
  contenedor.innerHTML = crearTemplate(ordenarArray(arrObjetos))
})
*/

// MOSTRAR LOS VALORES DE LOS OBJETOS EN LA PANTALLA

/* Object.values(allChampion).map(champion => {
  const newElement = document.createElement('div');
  const img = document.createElement('img');
  img.classList.add('class-img');
  const p = document.createElement('p');
  p.classList.add('class-name');
  newElement.appendChild(img);
  newElement.appendChild(p);
  img.src = `${champion.splash}`
  p.innerHTML = `${champion.name}`
  let all = document.getElementById('all');
  all.appendChild(newElement);


}); */

/* const result = Object.values(allChampion).sort().reverse();

result.map((champion) => {
  const newElement = document.createElement('div');
  const img = document.createElement('img');
  img.classList.add('class-img');
  const p = document.createElement('p');
  p.classList.add('class-name');
  newElement.appendChild(img);
  newElement.appendChild(p);
  img.src = `${champion.splash}`;
  p.innerHTML = `${champion.name}`;
  const all = document.getElementById('all');
  all.appendChild(newElement);
});

console.log(result); */
