import {
  allSelection,
  // example,
  // anotherExample,
} from '../src/data.js';

describe('allSelection', () => {
  it('debería ser una función', () => {
    expect(typeof allSelection).toBe('function');
  });

  it('Fighter existe en el array', () => {
    expect(allSelection()).toContain('Fifhter');
  });
  it('debería retornar true para "Mage"', () => {
    expect(allSelection()).toBe(true);
  });
  it('debería retornar true para "Assassin"', () => {
    expect(allSelection('Assassin')).toBe(true);
  });
  it('debería retornar false para "Luchador"', () => {
    expect(allSelection('Fighter')).toBe(false);
  });
});


// describe('anotherExample', () => {
//   it('is a function', () => {
//     expect(typeof anotherExample).toBe('function');
//   });

//   it('returns `anotherExample`', () => {
//     expect(anotherExample()).toBe('OMG');
//   });
// });
