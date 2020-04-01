import {
  athletesView,
  ordenAs,
  filtrarAtletasPorDeporte,

} from '../src/data.js';

const input = [
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

describe('athletesView', () => {
  it('is a function', () => {
    expect(typeof athletesView).toBe('function');
  });
  it('Deberia retornar un array con las propiedades: nombre, equipo, noc', () => {
    const output = [
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
    expect(athletesView(input)).toEqual(output);
  });
});

describe('ordenAs', () => {
  it('is a function', () => {
    expect(typeof ordenAs).toBe('function');
  });

  it('Deberia retornar un array ordenado alfabeticamente a partir de la propiedad nombre', () => {
    const twoOutput = [
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
<<<<<<< HEAD
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
    ];
    expect(ordenAs(input)).toEqual(twoOutput);
  });
});

describe('filtrarAtletasPorDeporte', () => {
  it('is a function', () => {
    expect(typeof filtrarAtletasPorDeporte).toBe('function');
  });

  it('Deberia retornar un array con atletas que solo hayan participado en el deporte Archery', () => {
    const threeOutput = [
      {
=======
>>>>>>> e5b21a3af6970e7343a4fd0900e327610d44a277
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
    ];
    expect(filtrarAtletasPorDeporte((input, 'Archery'))).toEqual(threeOutput);
  });
});
