import {
  athletesView, ordenAs, filtrarAtletasPorDeporte, totalMedallas,
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

const medallero = [
  {
    nombre: 'Matteo Bisiani',
    genero: 'M',
    altura: '184',
    peso: '85',
    nacimiento: 1976,
    deporte: 'Archery',
    equipo: 'Italy',
    noc: 'ITA',
    disciplinas: [
      {
        disciplina: "Archery Men's Team",
        temporada: 'Summer',
        año: 2000,
        ciudad: 'Sydney',
        medalla: 'Silver',
      },
    ],
  },
  {
    nombre: 'Nataliya Andrivna Burdeina',
    genero: 'F',
    altura: '165',
    peso: '63',
    nacimiento: 1974,
    deporte: 'Archery',
    equipo: 'Ukraine',
    noc: 'UKR',
    disciplinas: [
      {
        disciplina: "Archery Women's Team",
        temporada: 'Summer',
        año: 2000,
        ciudad: 'Sydney',
        medalla: 'Silver',
      },
    ],
  },
  {
    nombre: 'Ilario Di Bu',
    genero: 'M',
    altura: '175',
    peso: '90',
    nacimiento: 1966,
    deporte: 'Archery',
    equipo: 'Italy',
    noc: 'ITA',
    disciplinas: [
      {
        disciplina: "Archery Men's Team",
        temporada: 'Summer',
        año: 2000,
        ciudad: 'Sydney',
        medalla: 'Silver',
      },
      {
        disciplina: "Archery Men's Team",
        temporada: 'Summer',
        año: 2008,
        ciudad: 'Beijing',
        medalla: 'Silver',
      },
    ],
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

  it('Deberia retornar un array con objetos tengan el mismo tipo de deporte', () => {
    const threeOutput = [
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
    ];
    expect(filtrarAtletasPorDeporte(input, 'Archery')).toEqual(threeOutput);
  });
});

describe('totalMedallas', () => {
  it('is a function', () => {
    expect(typeof totalMedallas).toBe('function');
  });

  it('Deberia retornar un numero unico con la cantidad de medallas', () => {
    const resultado = 2;
    expect(totalMedallas(medallero, 'Italy', 'Sydney', 'Silver')).toEqual(resultado);
  });
});
