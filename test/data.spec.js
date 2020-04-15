import {
  sortedByNameA,
  sortedByNameD,
} from '../src/data.js';

const arrayAs = [
  {
    name: 'Ilario Di Bu',
    gender: 'M',
    height: 175,
    weight: 90,
  },
  {
    name: 'Matteo Bisiani',
    gender: 'M',
    height: 184,
    weight: 85,
  },
  {
    name: 'Nataliya Andrivna Burdeina',
    gender: 'F',
    height: 165,
    weight: 63,
  },
];
const arrayDes = [
  {
    name: 'Nataliya Andrivna Burdeina',
    gender: 'F',
    height: 165,
    weight: 63,
  },
  {
    name: 'Matteo Bisiani',
    gender: 'M',
    height: 184,
    weight: 85,
  },
  {
    name: 'Ilario Di Bu',
    gender: 'M',
    height: 175,
    weight: 90,
  },
];
describe('ORDENAR DE FORMA ASCENDENTE Y DESCENDENTE', () => {
  it('Debería ordenar de manera ascendente', () => {
    expect(sortedByNameA(arrayAs)).toEqual(arrayAs);
  });
  it('Debería ordenar de manera descendente', () => {
    expect(sortedByNameD(arrayDes)).toEqual(arrayDes);
  });
});

// describe('example', () => {
//   it('is a function', () => {
//     expect(typeof example).toBe('function');
//   });

//   it('returns `example`', () => {
//     expect(example()).toBe('example');
//   });
// });


// describe('anotherExample', () => {
//   it('is a function', () => {
//     expect(typeof anotherExample).toBe('function');
//   });

//   it('returns `anotherExample`', () => {
//     expect(anotherExample()).toBe('OMG');
//   });
// });
