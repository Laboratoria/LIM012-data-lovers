import {
  orderData,
  searchChampions,
  orderFilterTags,
  dataOrdenado,
} from '../src/data.js';

const champA = [
  {
    id: 'Morgana',
    key: 25,
    name: 'Morgana',
    title: 'Fallen Angel',
    tags: ['Support'],
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
const searchA = [
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
const rolTank = [
  {
    id: 'Rammus',
    key: 33,
    name: 'Rammus',
    title: 'the Armordillo',
    tags: ['Tank'],
  },
  {
    id: 'Shen',
    key: 98,
    name: 'Shen',
    title: 'the Eye of Twilight',
    tags: ['Tank'],
  },
];
const rolAsse = [
  {
    id: 'Shaco',
    key: 35,
    name: 'Shaco',
    title: 'the Demon Jester',
    tags: ['Assassin'],
  },
];
const rolSupport = [
  {
    id: 'Morgana',
    key: 25,
    name: 'Morgana',
    title: 'Fallen Angel',
    tags: ['Support'],
  },
];
const calculo = [
  {
    name: 'Alistar',
    promedio: 134.92,
  },
  {
    name: 'Tryndamere',
    promedio: 137.24,
  },
  {
    name: 'Trundle',
    promedio: 135.97,
  },
  {
    name: 'Garen',
    promedio: 136.03,
  },
  {
    name: 'Zac',
    promedio: 135.07,
  },
];
const ordenado = [
  {
    name: 'Tryndamere',
    promedio: 137.24,
  },
  {
    name: 'Garen',
    promedio: 136.03,
  },
  {
    name: 'Trundle',
    promedio: 135.97,
  },
  {
    name: 'Zac',
    promedio: 135.07,
  },
  {
    name: 'Alistar',
    promedio: 134.92,
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
    expect(orderFilterTags(champA, 'tags', 'Assassin')).toEqual(rolAsse);
  });
  it('Debería retornar los campeones de Rol: Tank', () => {
    expect(orderFilterTags(champA, 'tags', 'Tank')).toEqual(rolTank);
  });
  it('Debería retornar los campeones de Rol: Support', () => {
    expect(orderFilterTags(champA, 'tags', 'Support')).toEqual(rolSupport);
  });
});
describe('BUSCAR POR NOMBRES', () => {
  it('searchChampions() es una función:', () => {
    expect(typeof searchChampions).toBe('function');
  });
  it('Debería retornar los campeones que contiene en su nombre la letra s', () => {
    expect(searchChampions(champA, 'name', 's')).toEqual(searchA);
  });
});
describe('CÁLCULO ESTADÍSTICO - PROMEDIO ESTADÍSTICO DE DEFENSA', () => {
  it('dataOrdenado() es una función:', () => {
    expect(typeof dataOrdenado).toBe('function');
  });
  it('Debería retornar a los campones con mejores puntajes', () => {
    expect(dataOrdenado(calculo)).toEqual(ordenado);
  });
});
