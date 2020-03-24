/* eslint-disable no-plusplus */
//  AQUI MANEJAMOS EL DOOM

// import { example } from './data.js';
import data from './data/lol/lol.js';

import { ordenarAscendente, ordenarDescendente } from './data.js';

// import { crearTemplate } from './data.js';

// import data from './data/atletas/atletas.js';

// import data from './data/pokemon/pokemon.js';
// console.log(example,data);
// console.log(data.data);

const allChampion = data.data;
const arrObjetos = [Object.values(allChampion)];
// console.log(arrObjetos);
const contenedor = document.getElementById('contenedor');

// const btnMostrar = document.getElementById('btnMostrar');
const btnOrdenar = document.getElementById('btnOrdenar');

const crearTemplate = arr => {
  let stringTemplate = '';
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      stringTemplate += `
      <div class="class-div">     
        <img class="class-img" alt="Imagen de ${arr[i][j].id}" src=${arr[i][j].splash}>
        <p class="class-name">${arr[i][j].id}</p>
      </div>`;
    }
    return stringTemplate;
  }
  return stringTemplate;
};

/* window.onload = () => {
  contenedor.innerHTML = crearTemplate(arrObjetos);
}; */

const ordenando = document.querySelector('#ordenar');

ordenando.addEventListener('click', event => {
  console.log(event.target.id);

  if (event.target.id === 'a') {
    contenedor.innerHTML = crearTemplate(ordenarAscendente(arrObjetos));
  } else {
    contenedor.innerHTML = crearTemplate(
      ordenarDescendente(Object.values(allChampion).reverse())
    );
  }
});

/* const ordenarArray = (arr) => {
 const newArray = [];
 ///
 ///
 ///
 //
 return [{nombre:'teresa', edad:20},{nombre:'una', edad : 10}]
}
*/

/*  arrObjetos.sort(function(a, b) {
  if (a.id < b.id) {
    return -1;
  }
  if (a.id > b.id) {
    return 1;
  }
  return 0;
});

arrObjetos.sort((a, b) => a.id.localeCompare(b.id));

const mixedCaseAnimals = arrObjetos;
// ['Cat', 'dog', 'Elephant', 'bee', 'ant'];

mixedCaseAnimals.reverse(function(a, b) {
  for (let i = 0; i < mixedCaseAnimals.length; i++) {
    for (let j = 0; j < mixedCaseAnimals[i].length; j++) {
      const x = a.toUpperCase();
      const y = b.toUpperCase();
      return x == y ? 0 : x > y ? -1 : 1; // orden de la Z a la A
    }
  }
});
console.log(mixedCaseAnimals);

/* const sort = array => {
  const arry2 = [];
  let pos = 0;
  let max = array[0];
  let min = array[0];

  // maximum number
  for (let j = 0; j < array.length; j++) {
    if (max < array[j]) {
      max = array[j];
    }
  }
  // two for loop
  for (let i = 0; i < array.length; i++) {
    // find the minimun number
    for (let k = 0; k < array.length; k++) {
      if (array[k] != null) {
        if (min > array[k]) {
          min = array[k];
          pos = k;
        }
      }
    }
    arry2[i] = min;
    array[pos] = null;
    min = max;
  }
  return arry2;
};

// const arry = [1, -5, -3, 2, 4];
console.log(sort([Object.values(allChampion)])); */

/*
const ordenarArray = arr => {
  const newArray = [];
  const result = Object.values(allChampion).sort();
  function compare(a, b) {
    if (a < b) {
      return -1;
    }
    if (a > b) {
      return 1;
    }
    // a debe ser igual b
    return 0;
  }
  
  const arrayChampion.sort compare(a, b) => {
    if (a.id > b.id) {
      return 1;
    }
    if (a.id < b.id) {
      return -1;
    }
    // a must be equal to b
    return 0;
  });
  */
/*
btnOrdenar.addEventListener('click', () => {
  contenedor.innerHTML = '';
  contenedor.innerHTML = crearTemplate(ordenarArray(arrObjetos));
});
*/
// parte de la primera historia cuando para ver los campeones y sus nombres primero se hacia click en el boton mostrar
// Ahora es con window onload
/* btnMostrar.addEventListener('click', () => {
  contenedor.innerHTML = crearTemplate(arrObjetos);
});
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

const result = Object.values(allChampion).reverse();
console.log(result);
/*
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
