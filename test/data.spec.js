import {
  // example,
  // anotherExample
} from '../src/data.js';


describe('example', () => {
  it('debería ser una función', () => {
    expect(typeof example).toBe('function');
  });

  it('debería retornar true para "Fighter"', () => {
    expect(example("Fighter")).toBe('true')
  });






});


describe('anotherExample', () => {
  it('is a function', () => {
    expect(typeof anotherExample).toBe('function');
  });

  it('returns `anotherExample`', () => {
    expect(anotherExample()).toBe('OMG');
  });
});
