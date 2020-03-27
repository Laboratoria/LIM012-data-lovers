import {
  athletesView,
  ordenAs,
} from '../src/data.js';

const oneExpect = [
  {
    nombre: 'Matteo Bisiani',
    genero: 'M',
    altura: '184',
    peso: '85',
    fecha: 1976,
    deporte: 'Archery',
    equipo: 'Italy',
    noc: 'ITA',
  },
  {
    nombre: 'Nataliya Andrivna Burdeina',
    genero: 'F',
    altura: '165',
    peso: '63',
    fecha: 1974,
    deporte: 'Archery',
    equipo: 'Ukraine',
    noc: 'UKR',
  },
  {
    nombre: 'Ilario Di Bu',
    genero: 'M',
    altura: '175',
    peso: '90',
    fecha: 1966,
    deporte: 'Swing',
    equipo: 'Italy',
    noc: 'ITA',
  },
];

const oneTobe = [
  {
    nombre: 'Matteo Bisiani',
    deporte: 'Archery',
    equipo: 'Italy',
  },
  {
    nombre: 'Nataliya Andrivna Burdeina',
    deporte: 'Archery',
    equipo: 'Ukraine',
  },
  {
    nombre: 'Ilario Di Bu',
    deporte: 'Swing',
    equipo: 'Italy',
  },
];

const twoTobe = [
  {
    nombre: 'Ilario Di Bu',
    genero: 'M',
    altura: '175',
    peso: '90',
    fecha: 1966,
    deporte: 'Swing',
    equipo: 'Italy',
    noc: 'ITA',
  },
  {
    nombre: 'Nataliya Andrivna Burdeina',
    genero: 'F',
    altura: '165',
    peso: '63',
    fecha: 1974,
    deporte: 'Archery',
    equipo: 'Ukraine',
    noc: 'UKR',
  },
  {
    nombre: 'Matteo Bisiani',
    genero: 'M',
    altura: '184',
    peso: '85',
    fecha: 1976,
    deporte: 'Archery',
    equipo: 'Italy',
    noc: 'ITA',
  },
];

describe('sirve para filtrar', () => {
  it('is a function', () => {
    expect(typeof athletesView).toBe('function');
  });

  it('Deberia retornar `oneTobe` para `oneExpect`', () => {
    expect(athletesView(oneExpect)).toBe(oneTobe);
  });
});


describe('sirve para ordenar', () => {
  it('is a function', () => {
    expect(typeof ordenAs).toBe('function');
  });

  it('Deberia retornar `twoTobe` para `oneExpect`', () => {
    expect(ordenAs(oneExpect)).toBe(twoTobe);
  });
});
