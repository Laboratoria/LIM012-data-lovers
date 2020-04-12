// import data from '../src/data/lol/lol.js';
import {
  ordenarCampeones, filtrarNombre, filtrandoRoles, calculoStats,
} from '../src/data.js';

const firstTestExpect = [
  {
    id: 'Nautilus',
    key: '111',
    name: 'Nautilus',
    title: 'the Titan of the Depths',
    tags: ['Tank', 'Fighter'],
  },
  {
    id: 'Taliyah',
    key: '163',
    name: 'Taliyah',
    title: 'the Stoneweaver',
    tags: ['Mage', 'Support'],
  },
  {
    id: 'Aatrox',
    key: '266',
    name: 'Aatrox',
    title: 'the Darkin Blade',
    tags: ['Fighter', 'Tank'],
  },
  {
    id: 'Taric',
    key: '44',
    name: 'Taric',
    title: 'the Shield of Valoran',
    tags: ['Support', 'Fighter'],
  },
];

const firstTestoBe = [
  {
    id: 'Aatrox',
    key: '266',
    name: 'Aatrox',
    title: 'the Darkin Blade',
    tags: ['Fighter', 'Tank'],
  },
  {
    id: 'Nautilus',
    key: '111',
    name: 'Nautilus',
    title: 'the Titan of the Depths',
    tags: ['Tank', 'Fighter'],
  },
  {
    id: 'Taliyah',
    key: '163',
    name: 'Taliyah',
    title: 'the Stoneweaver',
    tags: ['Mage', 'Support'],
  },
  {
    id: 'Taric',
    key: '44',
    name: 'Taric',
    title: 'the Shield of Valoran',
    tags: ['Support', 'Fighter'],
  },
];

const secondTestoBe = [
  {
    id: 'Taric',
    key: '44',
    name: 'Taric',
    title: 'the Shield of Valoran',
    tags: ['Support', 'Fighter'],
  },
  {
    id: 'Taliyah',
    key: '163',
    name: 'Taliyah',
    title: 'the Stoneweaver',
    tags: ['Mage', 'Support'],
  },
  {
    id: 'Nautilus',
    key: '111',
    name: 'Nautilus',
    title: 'the Titan of the Depths',
    tags: ['Tank', 'Fighter'],
  },
  {
    id: 'Aatrox',
    key: '266',
    name: 'Aatrox',
    title: 'the Darkin Blade',
    tags: ['Fighter', 'Tank'],
  },
];

describe('ordenarCampeones', () => {
  it('is a function', () => {
    expect(typeof ordenarCampeones).toBe('function');
  });

  it('Debe retornar los campeones ordenados de a-z', () => {
    expect(ordenarCampeones(firstTestExpect, 'az')).toEqual(firstTestoBe);
  });
  it('Debe retornar los campeones ordenados de z-a', () => {
    expect(ordenarCampeones(firstTestExpect, 'za')).toEqual(secondTestoBe);
  });
});

const searchTestExpect = [
  {
    id: 'Taliyah',
    key: '163',
    name: 'Taliyah',
    title: 'the Stoneweaver',
    tags: ['Mage', 'Support'],
  },
  {
    id: 'Taric',
    key: '44',
    name: 'Taric',
    title: 'the Shield of Valoran',
    tags: ['Support', 'Fighter'],
  },
];

describe('filtrarNombre', () => {
  it('es una función', () => {
    expect(typeof filtrarNombre).toBe('function');
  });

  it('debería retornar todos los campeones cuyo nombre empiecen con t', () => {
    expect(filtrarNombre(firstTestExpect, 't')).toEqual(searchTestExpect);
  });
});

const roleTestExpect = [
  {
    id: 'Taliyah',
    key: '163',
    name: 'Taliyah',
    title: 'the Stoneweaver',
    tags: ['Mage', 'Support'],
  },
  {
    id: 'Taric',
    key: '44',
    name: 'Taric',
    title: 'the Shield of Valoran',
    tags: ['Support', 'Fighter'],
  },
];

describe('filtrandoRoles', () => {
  it('es una función', () => {
    expect(typeof filtrandoRoles).toBe('function');
  });

  it('Debe retornar campeones que tengan el Rol: Support', () => {
    expect(filtrandoRoles(firstTestExpect, 'Support')).toEqual(roleTestExpect);
  });
});

const secondTestExpect = [
  {
    id: 'Akali',
    key: '84',
    name: 'Akali',
    stats: {
      hp: 587.8,
      movespeed: 350,
      attackdamage: 58.376,
    },
  },
  {
    id: 'Bard',
    key: '432',
    name: 'Bard',
    stats: {
      hp: 535,
      movespeed: 330,
      attackdamage: 52,
    },
  },
  {
    id: 'Ekko',
    key: '245',
    name: 'Ekko',
    stats: {
      hp: 580,
      movespeed: 340,
      attackdamage: 55,
    },
  },
  {
    id: 'Morgana',
    key: '25',
    name: 'Morgana',
    stats: {
      hp: 547.48,
      movespeed: 335,
      attackdamage: 55.46,
    },
  },
];


describe('calculoStats', () => {
  it('es una función', () => {
    expect(typeof calculoStats).toBe('function');
  });

  it('Debe retornar el promedio de HP de los campeones', () => {
    expect(calculoStats(secondTestExpect, 'hp')).toBe('16.79');
  });
  it('Debe retornar el promedio de MOVESPEED de los campeones', () => {
    expect(calculoStats(secondTestExpect, 'movespeed')).toBe('10.11');
  });
  it('Debe retornar el promedio de ATTACKDAMAGE de los campeones', () => {
    expect(calculoStats(secondTestExpect, 'attackdamage')).toBe('1.65');
  });
});
