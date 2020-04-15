// estas funciones son de ejemplo
// import {
// import { ordenar } from './data';
// filterTempSummer,
// } from './data';

export const transformaBandera = initial => initial.slice(0, -1);

export const removeDuplicates = array => [...new Set(array)];

export const age = birthDate => new Date().getFullYear() - birthDate;

export const sortedByNameA = (data) => {
  let result = '';
  result = data.sort((a, b) => {
    if (a.name - b.name) {
      return 1;
    }
    if (b.name > a.name) {
      return -1;
    }
    return 0;
  });
  return result;
};

export const sortedByNameD = (data) => {
  let result = '';
  result = data.sort((a, b) => {
    if (a.name - b.name) {
      return 1;
    }
    if (b.name < a.name) {
      return -1;
    }
    return 0;
  });
  return result;
};
