//import { example, anotherExample } from '../src/data.js';
import { crearTemplate } from '../src/data.js';

import data from "../src/data/lol/lol.js";
let allChampion = data.data;

describe('crearTemplate', () => {
  it('is a function', () => {
    expect(typeof crearTemplate).toBe('function');
  });

  it('returns Campeon Aatrox', () => {
    expect(crearTemplate(allChampion,'Aatrox')).toBe([allChampion.Aatrox]);
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
