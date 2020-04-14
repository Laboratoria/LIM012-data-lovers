import { ordenar, filtroPorDeporte, filtroResultadoMedallas } from '../src/data.js';

const testOrder2 = [
  {
    nombre: 'Kateryna',
  },
  {
    nombre: 'Cornelia',
  },
  {
    nombre: 'Olena',
  },
  {
    nombre: 'Cornelia',
  },
];

const testOrder3 = [
  {
    nombre: 'Olena',
  },
  {
    nombre: 'Cornelia',
  },
  {
    nombre: 'Kateryna',
  },
  {
    nombre: 'Cornelia',
  },
];

/* const testOrder4 = [
  {
    nombre: 'Cornelia',
  },
  {
    nombre: 'kateryna',
  },
  {
    nombre: 'Olena',
  },
]; */

/* const testOrder5 = [
  {
    nombre: 'Daniel',
  },
  {
    nombre: 'Cecilia',
  },
  {
    nombre: 'Belinda',
  },
  {
    nombre: 'Ana',
  },
]; */
describe('ordenar', () => {
  it('is a function', () => {
    expect(typeof ordenar).toBe('function');
  });

  it('Debe retornar Atletas ordenados de A a Z', () => {
    expect(ordenar(testOrder2, 'a-z')).toEqual(testOrder2);
  });

  it('Debe retornar Atletas ordenados de Z a A', () => {
    expect(ordenar(testOrder3, 'z-a')).toEqual(testOrder3);
  });
});


describe('filtroPorDeporte', () => {
  it('is a function', () => {
    expect(typeof filtroPorDeporte).toBe('function');
  });

  it('Deberia retornar un array con objetos tengan el mismo tipo de deporte', () => {
    const prueba1 = [
      {
        nombre: 'Matteo Bisiani',
        equipo: 'Italy',
        deporte: 'Archery',
        peso: '85',
        altura: '184',
        genero: 'M',

      },
    ];

    const respuestaPrueba = [

      {
        nombre: 'Matteo Bisiani',
        equipo: 'Italy',
        deporte: 'Archery',
        peso: '85',
        altura: '184',
        genero: 'M',

      },
    ];
    expect(filtroPorDeporte(prueba1, 'Archery')).toEqual(respuestaPrueba);
  });
});


describe('filtroResultadoMedallas', () => {
  it('is a function', () => {
    expect(typeof filtroResultadoMedallas).toBe('function');
  });


  it('Debe retornar un numero', () => {
    const baseMedallero = [
      {
        nombre: 'Mao Asada',
        genero: 'F',
        altura: '163',
        peso: '50',
        Nacimiento: 1991,
        deporte: 'Figure Skating',
        equipo: 'Japan',
        noc: 'JPN',
      },
      {
        nombre: 'Mao Asada',
        genero: 'F',
        altura: '163',
        peso: '50',
        Nacimiento: 1991,
        deporte: 'Figure Skating',
        equipo: 'Japan',
        noc: 'JPN',
        disciplinas: [
          {
            disciplina: 'Figure Skating Womens Singles',
            temporada: 'Winter',
            año: 2010,
            ciudad: 'Vancouver',
            medalla: 'Silver',
          },
        ],
      },
      {
        nombre: 'Michael Allen Oswald Bingham',
        genero: 'M',
        altura: '183',
        peso: '75',
        Nacimiento: 1986,
        deporte: 'Athletics',
        equipo: 'Great Britain',
        noc: 'GBR',
        disciplinas: [
          {
            disciplina: 'Athletics Mens 4 x 400 metres Relay',
            temporada: 'Summer',
            año: 2008,
            ciudad: 'Beijing',
            medalla: 'Bronze',
          },
        ],
      },
      {
        nombre: 'Matteo Bisiani',
        genero: 'M',
        altura: '184',
        peso: '85',
        Nacimiento: 1976,
        deporte: 'Archery',
        equipo: 'Italy',
        noc: 'ITA',
        disciplinas: [
          {
            disciplina: 'Archery Mens Team',
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
        equipo: 'Ucrania',
        noc: 'UKR',
        disciplinas: [
          {
            disciplina: 'Archery Womens Team',
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
        Nacimiento: 1966,
        deporte: 'Archery',
        equipo: 'Italy',
        noc: 'ITA',
        disciplinas: [
          {
            disciplina: 'Archery Mens Team',
            temporada: 'Summer',
            año: 2000,
            ciudad: 'Sydney',
            medalla: 'Silver',
          },

        ],
      },
    ];

    expect(filtroResultadoMedallas(baseMedallero, 'Vancouver', 'Silver')).toEqual(1);
  });
});
