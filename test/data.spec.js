<<<<<<< HEAD
import { example, anotherExample } from '../src/data.js';


describe('example', () => {
  it('is a function', () => {
    expect(typeof example).toBe('function');
  });

  it('returns `example`', () => {
    expect(example()).toBe('example');
  });
=======
import { typeFilter } from '../src/data';
import data from './data/pokemon/pokemon.js';

/*
describe('typeFilter', () => {
  it('is a function', () => {
    expect(typeof typeFilter).toBe('function');
  });
  it('returns `typeFilter`', () => {
    expect(typeFilter([
      {
        'num': '001',
        'name': 'bulbasaur',
        'type': [
          'grass',
          'poison',
        ],
      },
      {
        'num': '074',
        'name': 'geodude',
        'type': [
          'rock',
          'ground',
        ],
      },
      {
        'num': '137',
        'name': 'porygon',
        'type': [
          'normal',
        ],
      }], 'type', 'normal')).toStrickEqual([
      {
        'num': '137',
        'name': 'porygon',
        'type': [
          'normal',
        ],
      },
    ]);
  });
>>>>>>> ad6771bc932222bf7784eebde4133cc835ab9b3a
});
 */
/* const input = [{
        'num': '001',
        'name': 'bulbasaur',
        'type': [
          'grass',
          'poison'
        ],
      },
      {
        'num': '074',
        'name': 'geodude',
        'type': [
          'rock',
          'ground'
        ],
      },
      {
        'num': '137',
        'name': 'porygon',
        'type': [
          'normal'
        ],
      }
];

const output1 = [{
    'num': '137',
    'name': 'porygon',
    'type': [
      'normal'
    ],
}];

<<<<<<< HEAD
describe('anotherExample', () => {
  it('is a function', () => {
    expect(typeof anotherExample).toBe('function');
  });

  it('returns `anotherExample`', () => {
    expect(anotherExample()).toBe('OMG');
  });
});
=======
describe('Filtra pokemones por tipo', () => {
    it('Debería retornar a los pokemones que sean del respectivo tipo', () => {
      expect(typeFilter(input, 'normal')).toEqual(output1);
    });
  });
 */
>>>>>>> ad6771bc932222bf7784eebde4133cc835ab9b3a
