import { orderData, searchChampions } from '../src/data.js';

const champAscend = [
  {
    id: 'Morgana',
    key: 25,
    name: 'Morgana',
    title: 'Fallen Angel',
  },
  {
    id: 'Rammus',
    key: 33,
    name: 'Rammus',
    title: 'the Armordillo',
  },
  {
    id: 'Shaco',
    key: 35,
    name: 'Shaco',
    title: 'the Demon Jester',
  },
  {
    id: 'Shen',
    key: 98,
    name: 'Shen',
    title: 'the Eye of Twilight',
  },
];
const champDescend = [
  {
    id: 'Shen',
    key: 98,
    name: 'Shen',
    title: 'the Eye of Twilight',
  },
  {
    id: 'Shaco',
    key: 35,
    name: 'Shaco',
    title: 'the Demon Jester',
  },
  {
    id: 'Rammus',
    key: 33,
    name: 'Rammus',
    title: 'the Armordillo',
  },
  {
    id: 'Morgana',
    key: 25,
    name: 'Morgana',
    title: 'Fallen Angel',
  },
];
describe('orderData', () => {
  it('orderData es una funcion', () => {
    expect(typeof orderData).toBe('function');
  });
  it('Debe ordenar de manera ascendente', () => {
    expect(orderData(champAscend, 'name', 'ascendente')).toEqual(champAscend);
  });
  it('Debe ordenar de manera descendente', () => {
    expect(orderData(champDescend, 'name', 'descendente')).toEqual(champDescend);
  });
});

describe('searchChampions', () => {
  it('searchChampions es una funcion', () => {
    expect(typeof searchChampions).toBe('function');
  });
  it('Deberá de mostrar un array', () => {
    expect(typeof searchChampions([champAscend])).toBe('object');
  });
});
