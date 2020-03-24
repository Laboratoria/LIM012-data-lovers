/* eslint-disable no-plusplus */
// AQUI MANEJAMOS LAS FUNCIONES

// estas funciones son de ejemplo
// export const example = () => 'example';
// export const anotherExample = () => 'OMG';
import data from './data/lol/lol.js';

const allChampion = data.data;

export const ordenarAscendente = arrObjetos =>
  arrObjetos.sort((a, b) => {
    if (a.name > b.name) {
      return 1;
    }
    return -1;
  });

export const ordenarDescendente = Object.values(allChampion).reverse();
