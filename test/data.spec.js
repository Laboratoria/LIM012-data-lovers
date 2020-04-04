import {
  orderData,
  orderFilterTags,
} from '../src/data.js';

const champA = [
  {
    id: 'Morgana',
    key: 25,
    name: 'Morgana',
    title: 'Fallen Angel',
    tags: ['Mage', 'Support'],
  },
  {
    id: 'Rammus',
    key: 33,
    name: 'Rammus',
    title: 'the Armordillo',
    tags: ['Tank'],
  },
  {
    id: 'Shaco',
    key: 35,
    name: 'Shaco',
    title: 'the Demon Jester',
    tags: ['Assassin'],
  },
  {
    id: 'Shen',
    key: 98,
    name: 'Shen',
    title: 'the Eye of Twilight',
    tags: ['Tank'],
  },
];

const champD = [
  {
    id: 'Shen',
    key: 98,
    name: 'Shen',
    title: 'the Eye of Twilight',
    tags: ['Tank', 'Melee'],
  },
  {
    id: 'Shaco',
    key: 35,
    name: 'Shaco',
    title: 'the Demon Jester',
    tags: ['Assassin'],
  },
  {
    id: 'Rammus',
    key: 33,
    name: 'Rammus',
    title: 'the Armordillo',
    tags: ['Tank', 'Fighter'],
  },
  {
    id: 'Morgana',
    key: 25,
    name: 'Morgana',
    title: 'Fallen Angel',
    tags: ['Mage', 'Support'],
  },
];

describe('ORDENAR DE FORMA ASCENDENTE Y DESCENDENTE', () => {
  it('orderData es una funcion', () => {
    expect(typeof orderData).toBe('function');
  });
  it('Debería ordenar de manera ascendente', () => {
    expect(orderData(champA, 'name', 'ascendente')).toEqual(champA);
  });
  it('Debería ordenar de manera descendente', () => {
    expect(orderData(champD, 'name', 'descendente')).toEqual(champD);
  });
});
describe('FILTRAR POR ROLES', () => {
  it('orderFilterTags es una funcion', () => {
    expect(typeof orderFilterTags).toBe('function');
  });
  it('Debería retornar los campeones de Rol: Assessin', () => {
   
  });
  it('Debería retornar los campeones de Rol: Tank', () => {
    
  });
});
