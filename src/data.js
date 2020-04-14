// estas funciones son de ejemplo
// import {
// import { ordenar } from './data';
// filterTempSummer,
// } from './data';

export const transformaBandera = initial => initial.slice(0, -1);

export const removeDuplicates = array => [...new Set(array)];

// export const ordenar = (dataArray, condicion)
// sortedByName = data.sort((a, b) => {
//   if (a.name - b.name) {
//     return 1;
//   }
//   if (b.name > a.name) {
//     return -1;
//   }
//   return 0;
// });

// export const ordenar = (data, sortByName, condition) => {
//   let result;
//   if (condition === 'a-z') {
//     result = data.sort((a, b) => {
//       if (a[sortByName] > b[sortByName]) {
//         return 1;
//       }
//       return -1;
//     });
//   } else {
//     result = data.sort((a, b) => {
//       if (b[sortByName] > a[sortByName]) {
//         return 1;
//       }
//       return -1;
//     });
//   }
//   return result;
// };


// export const ordenar = (ordenarData, seleccion) => {
//   let resultado = [];
//   if (seleccion === 'a-z') {
//     resultado = ordenarData.sort((a, b) => {
//       if (a.nombre > b.nombre) {
//         return 1;
//       }
//       if (a.nombre < b.nombre) {
//         return -1;
//       }
//       return 0;
//     });
//   } else {
//     resultado = ordenarData.sort((a, b) => {
//       if (a.nombre < b.nombre) {
//         return 1;
//       }
//       if (a.nombre > b.nombre) {
//         return -1;
//       }
//       return 0;
//     });
//   }

//   return resultado;
// };
