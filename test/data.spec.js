// import data from '../src/data/lol/lol.js';
import { ordenarCampeones, filtrarNombre } from '../src/data.js';

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
  },
  {
    id: 'Taric',
    key: '44',
    name: 'Taric',
    title: 'the Shield of Valoran',
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


// describe('anotherExample', () => {
//   it('is a function', () => {
//     expect(typeof anotherExample).toBe('function');
//   });

//   it('returns `anotherExample`', () => {
//     expect(anotherExample()).toBe('OMG');
//   });
// });
