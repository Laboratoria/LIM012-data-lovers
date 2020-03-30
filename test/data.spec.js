import { ordenar } from '../src/data.js';

const testOrder1 = [
  {
    nombre: 'Cornelia Pfohl (-Griem)',
    genero: 'F',
    altura: '175',
    peso: '58',
  },
  {
    nombre: 'Olena Anatolivna Sadovnycha',
    genero: 'F',
    altura: '168',
    peso: '60',
  },
  {
    nombre: 'Kateryna Valerivna Serdiuk (-Sumko)',
    genero: 'F',
    altura: '185',
    peso: '80',
  },
];

const testOrder2 = [
  {
    nombre: 'Cornelia Pfohl (-Griem)',
    genero: 'F',
    altura: '175',
    peso: '58',
  },
  {
    nombre: 'Kateryna Valerivna Serdiuk (-Sumko)',
    genero: 'F',
    altura: '185',
    peso: '80',
  },
  {
    nombre: 'Olena Anatolivna Sadovnycha',
    genero: 'F',
    altura: '168',
    peso: '60',
  },
];

describe('ordenar', () => {
  it('is a function', () => {
    expect(typeof ordenar).toBe('function');
  });

  it('Debe retornar Atletas ordenados de A a Z', () => {
    expect(ordenar(testOrder1)).toEqual(testOrder2);
  });
});


// describe('anotherExample', () => {
//   it('is a function', () => {
//     expect(typeof anotherExample).toBe('function');
//   });
//
//   it('returns `anotherExample`', () => {
//     expect(anotherExample()).toBe('OMG');
//   });
// });
