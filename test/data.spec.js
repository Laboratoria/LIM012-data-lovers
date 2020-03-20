/* eslint-disable indent */
// import { example, anotherExample } from '../src/data.js';
import { crearTemplate } from '../src/data.js';

import data from '../src/data/lol/lol.js';

const allChampion = data.data;
const arrObjetos = [Object.values(allChampion)];

describe('crearTemplate', () => {
  it('is a function', () => {
    expect(typeof crearTemplate).toBe('function');
  });

  it('returns stringTemplate', () => {
    expect(crearTemplate(arrObjetos)).toBe([arrObjetos]);
  });
});

/* describe('anotherExample', () => {
  it('is a function', () => {
    expect(typeof anotherExample).toBe('function');
  });

  it('returns `anotherExample`', () => {
    expect(anotherExample()).toBe('OMG');
  });
}); */
