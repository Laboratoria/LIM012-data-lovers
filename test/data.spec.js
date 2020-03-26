import {
  filterByGeneration,
  search,
  order,
  filterByType,
} from '../src/data.js';

const data = [
  {
    num: '173',
    name: 'cleffa',
    generation: {
      num: 'generation ii',
      name: 'johto',
    },
    pokemonRarity: 'normal',
    type: [
      'fairy',
    ],
  },
  {
    num: '001',
    name: 'bulbasaur',
    generation: {
      num: 'generation i',
      name: 'kanto',
    },
    pokemonRarity: 'normal',
    type: [
      'grass',
      'poison',
    ],
  },
  {
    num: '060',
    name: 'poliwag',
    generation: {
      num: 'generation i',
      name: 'kanto',
    },
    pokemonRarity: 'normal',
    type: [
      'water',
    ],
  },
  {
    num: '024',
    name: 'arbok',
    generation: {
      num: 'generation i',
      name: 'kanto',
    },
    pokemonRarity: 'normal',
    type: [
      'poison',
    ],
  },
  {
    num: '200',
    name: 'misdreavus',
    generation: {
      num: 'generation ii',
      name: 'johto',
    },
    pokemonRarity: 'normal',
    type: [
      'ghost',
    ],
  },
  {
    num: '005',
    name: 'charmeleon',
    generation: {
      num: 'generation i',
      name: 'kanto',
    },
    pokemonRarity: 'normal',
    type: [
      'fire',
    ],
  },
];

const toEqual1 = [
  {
    num: '173',
    name: 'cleffa',
    generation: {
      num: 'generation ii',
      name: 'johto',
    },
    pokemonRarity: 'normal',
    type: [
      'fairy',
    ],
  },
  {
    num: '200',
    name: 'misdreavus',
    generation: {
      num: 'generation ii',
      name: 'johto',
    },
    pokemonRarity: 'normal',
    type: [
      'ghost',
    ],
  },
];

const toEqual3 = [
  {
    num: '001',
    name: 'bulbasaur',
    generation: {
      num: 'generation i',
      name: 'kanto',
    },
    pokemonRarity: 'normal',
    type: [
      'grass',
      'poison',
    ],
  },
];

const toEqual4 = [
  {
    num: '024',
    name: 'arbok',
    generation: {
      num: 'generation i',
      name: 'kanto',
    },
    pokemonRarity: 'normal',
    type: [
      'poison',
    ],
  },
  {
    num: '001',
    name: 'bulbasaur',
    generation: {
      num: 'generation i',
      name: 'kanto',
    },
    pokemonRarity: 'normal',
    type: [
      'grass',
      'poison',
    ],
  },
  {
    num: '005',
    name: 'charmeleon',
    generation: {
      num: 'generation i',
      name: 'kanto',
    },
    pokemonRarity: 'normal',
    type: [
      'fire',
    ],
  },
  {
    num: '173',
    name: 'cleffa',
    generation: {
      num: 'generation ii',
      name: 'johto',
    },
    pokemonRarity: 'normal',
    type: [
      'fairy',
    ],
  },
  {
    num: '200',
    name: 'misdreavus',
    generation: {
      num: 'generation ii',
      name: 'johto',
    },
    pokemonRarity: 'normal',
    type: [
      'ghost',
    ],
  },
  {
    num: '060',
    name: 'poliwag',
    generation: {
      num: 'generation i',
      name: 'kanto',
    },
    pokemonRarity: 'normal',
    type: [
      'water',
    ],
  },
];

const toEqual5 = [
  {
    num: '060',
    name: 'poliwag',
    generation: {
      num: 'generation i',
      name: 'kanto',
    },
    pokemonRarity: 'normal',
    type: [
      'water',
    ],
  },
  {
    num: '200',
    name: 'misdreavus',
    generation: {
      num: 'generation ii',
      name: 'johto',
    },
    pokemonRarity: 'normal',
    type: [
      'ghost',
    ],
  },
  {
    num: '173',
    name: 'cleffa',
    generation: {
      num: 'generation ii',
      name: 'johto',
    },
    pokemonRarity: 'normal',
    type: [
      'fairy',
    ],
  },
  {
    num: '005',
    name: 'charmeleon',
    generation: {
      num: 'generation i',
      name: 'kanto',
    },
    pokemonRarity: 'normal',
    type: [
      'fire',
    ],
  },
  {
    num: '001',
    name: 'bulbasaur',
    generation: {
      num: 'generation i',
      name: 'kanto',
    },
    pokemonRarity: 'normal',
    type: [
      'grass',
      'poison',
    ],
  },
  {
    num: '024',
    name: 'arbok',
    generation: {
      num: 'generation i',
      name: 'kanto',
    },
    pokemonRarity: 'normal',
    type: [
      'poison',
    ],
  },
];

const toEqual6 = [
  {
    num: '001',
    name: 'bulbasaur',
    generation: {
      num: 'generation i',
      name: 'kanto',
    },
    pokemonRarity: 'normal',
    type: [
      'grass',
      'poison',
    ],
  },
  {
    num: '005',
    name: 'charmeleon',
    generation: {
      num: 'generation i',
      name: 'kanto',
    },
    pokemonRarity: 'normal',
    type: [
      'fire',
    ],
  },
  {
    num: '024',
    name: 'arbok',
    generation: {
      num: 'generation i',
      name: 'kanto',
    },
    pokemonRarity: 'normal',
    type: [
      'poison',
    ],
  },
  {
    num: '060',
    name: 'poliwag',
    generation: {
      num: 'generation i',
      name: 'kanto',
    },
    pokemonRarity: 'normal',
    type: [
      'water',
    ],
  },
  {
    num: '173',
    name: 'cleffa',
    generation: {
      num: 'generation ii',
      name: 'johto',
    },
    pokemonRarity: 'normal',
    type: [
      'fairy',
    ],
  },
  {
    num: '200',
    name: 'misdreavus',
    generation: {
      num: 'generation ii',
      name: 'johto',
    },
    pokemonRarity: 'normal',
    type: [
      'ghost',
    ],
  },
];
const toEqual7 = [
  {
    num: '001',
    name: 'bulbasaur',
    generation: {
      num: 'generation i',
      name: 'kanto',
    },
    pokemonRarity: 'normal',
    type: [
      'grass',
      'poison',
    ],
  },
  {
    num: '024',
    name: 'arbok',
    generation: {
      num: 'generation i',
      name: 'kanto',
    },
    pokemonRarity: 'normal',
    type: [
      'poison',
    ],
  },
];

describe('filterByGeneration', () => {
  it('is a function', () => {
    expect(typeof filterByGeneration).toBe('function');
  });

  it('deberían retornar los pokemones con la generación correspondiente', () => {
    expect(filterByGeneration(data, 'johto')).toEqual(toEqual1);
  });
});


describe('search', () => {
  it('is a function', () => {
    expect(typeof search).toBe('function');
  });

  it('debería retornar un array vacío cuando la búsqueda no coincide con las letras ingresadas', () => {
    expect(search(data, 'xxwe')).toEqual([]);
  });

  it('debería retornar el pokemon cuyas primeras letras coincidan', () => {
    expect(search(data, 'bul')).toEqual(toEqual3);
  });
});

// Test para ordenar albabéticamente
describe('order', () => {
  it('is a function', () => {
    expect(typeof order).toBe('function');
  });

  it('debería retornar el array completo ordenado de A a Z', () => {
    expect(order(data, 'A-Z')).toEqual(toEqual4);
  });

  it('debería retornar el array completo ordenado de Z a A', () => {
    expect(order(data, 'Z-A')).toEqual(toEqual5);
  });

  it('debería retornar el array completo ordenado de forma ascendente', () => {
    expect(order(data, 'default')).toEqual(toEqual6);
  });
});

// Test para filtrar por tipo
describe('filterByType', () => {
  it('is a function', () => {
    expect(typeof filterByType).toBe('function');
  });

  it('debería retornar el array de pokemones que tienen el mismo tipo', () => {
    expect(filterByType(data, 'poison')).toEqual(toEqual7);
  });
});
