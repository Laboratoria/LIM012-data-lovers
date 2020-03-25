/* eslint-disable import/extensions */
//  AQUI MANEJAMOS EL DOOM

// import { example } from './data';
import { orderChampions } from './data.js';
import data from './data/lol/lol.js';


// import data from './data/atletas/atletas.js';
// import data from './data/pokemon/pokemon.js';

// console.log(example, data);

const allChampion = data.data;

const arrObjetos = Object.values(allChampion);

/* const contenedor = document.getElementById("contenedor"), */

const crearTemplate = (arr) => {
  document.getElementById('box').innerHTML = '';
  const all = [];
  // eslint-disable-next-line no-plusplus
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
  document.getElementById('box').innerHTML = crearTemplate(orderChampions(arrObjetos, 'name', document.getElementById('order').value));
  // console.log(orderChampions(arrObjetos, 'name', document.getElementById('order').value));
});

/* crearTemplate = (arr) => {

    let stringTemplate = "";

    for (let i = 0; i < arr.length; i++) {

        for (let j = 0; j < arr[i].length; j++) {

            stringTemplate += `
                <div class="class-div">
                <img class="class-img" alt="Imagen de ${arr[i][j].id}" src=${arr[i][j].splash}>
                <p class="class-name">${arr[i][j].id}</p>
                </div>`;
            // console.log(arr[0][0].id);

        }

        return stringTemplate;

    }

    return stringTemplate;

};

window.onload = () => {

    contenedor.innerHTML = crearTemplate(arrObjetos);

}; */
