/* eslint-disable indent */
// import { example, anotherExample } from '../src/data.js';


import { orderChampions } from '../src/data.js';

import data from '../src/data/lol/lol.js';

const allChampion = data.data;
const arrObjetos = [Object.values(allChampion)];

describe('orderChampions', () => {
  it('is a function', () => {
    expect(typeof orderChampions).toBe('function');
  });

  it('returns `datesOfChampions`', () => {
    expect(orderChampions(arrObjetos, 'name', document.getElementById('order').value)).toBe([arrObjetos, 'name', 'az']);
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
