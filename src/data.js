// estas funciones son de ejemplo
// import {
//   filterTempSummer,
// } from './data';

export const transformaBandera = initial => initial.slice(0, -1);

export const removeDuplicates = array => [...new Set(array)];

// export const filtrarProductosPorValor = (array, number, string) => {
//   const newArray = [];
//   for (let i = 0; i < array.length; i++) {
//     if (string === 'menor') {
//       if (array[i].valor < number) {
//         newArray.push(array[i]);
//       }
//     }

//     if (string === 'mayor') {
//       if (array[i].valor > number) {
//         newArray.push(array[i]);
//       }
//     }
//   }

//   return newArray;
// };
