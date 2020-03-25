import { example, anotherExample, orderChampions } from '../src/data';
import data from '../src/data/lol/lol';

const allChampion = data.data;
const arrObjetos = Object.values(allChampion);

describe('orderChampions', () => {
  it('is a function', () => {
    expect(typeof orderChampions).toBe('function');
  });
  it('returns `datesOfChampions`', () => {
    expect(orderChampions(orderChampions(arrObjetos, 'Aatrox', 'Zyra', 'Taric', 'az'))).toBe('Aatrox', 'Taric', 'Zyra');
  });
});

describe('example', () => {
  it('is a function', () => {
    expect(typeof example).toBe('function');
  });

  it('returns `example`', () => {
    expect(example()).toBe('example');
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
