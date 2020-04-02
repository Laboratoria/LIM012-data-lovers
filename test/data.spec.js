import { ordenar } from '../src/data.js';

const testOrder2 = [
  {
    nombre: 'Cornelia Pfohl (-Griem)',
  },
  {
    nombre: 'Kateryna Valerivna Serdiuk (-Sumko)',
  },
  {
    nombre: 'Olena Anatolivna Sadovnycha',
  },
];

const testOrder3 = [
  {
    nombre: 'Olena Anatolivna Sadovnycha',
  },
  {
    nombre: 'Kateryna Valerivna Serdiuk (-Sumko)',
  },
  {
    nombre: 'Cornelia Pfohl (-Griem)',
  },
];

describe('ordenar', () => {
  it('is a function', () => {
    expect(typeof ordenar).toBe('function');
  });

  it('Debe retornar Atletas ordenados de A a Z', () => {
    expect(ordenar(testOrder2)).toEqual(testOrder3);
  });

  it('Debe retornar Atletas ordenados de Z a A', () => {
    expect(ordenar(testOrder3)).toEqual(testOrder2);
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
