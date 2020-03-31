// import data from '../src/data/lol/lol.js';
import { ordenarCampeones } from '../src/data.js';

const firstTestExpect = [
  {
    id: 'Nautilus',
    key: '111',
    name: 'Nautilus',
    title: 'the Titan of the Depths',
  },
  {
    id: 'Aatrox',
    key: '266',
    name: 'Aatrox',
    title: 'the Darkin Blade',
  },
  {
    id: 'Taliyah',
    key: '163',
    name: 'Taliyah',
    title: 'the Stoneweaver',
  },
];

const firstTestoBe = [
  {
    id: 'Aatrox',
    key: '266',
    name: 'Aatrox',
    title: 'the Darkin Blade',
  },
  {
    id: 'Nautilus',
    key: '111',
    name: 'Nautilus',
    title: 'the Titan of the Depths',
  },
  {
    id: 'Taliyah',
    key: '163',
    name: 'Taliyah',
    title: 'the Stoneweaver',
  },
];

const secondTestoBe = [
  {
    id: 'Taliyah',
    key: '163',
    name: 'Taliyah',
    title: 'the Stoneweaver',
  },
  {
    id: 'Nautilus',
    key: '111',
    name: 'Nautilus',
    title: 'the Titan of the Depths',
  },
  {
    id: 'Aatrox',
    key: '266',
    name: 'Aatrox',
    title: 'the Darkin Blade',
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


// describe('anotherExample', () => {
//   it('is a function', () => {
//     expect(typeof anotherExample).toBe('function');
//   });

//   it('returns `anotherExample`', () => {
//     expect(anotherExample()).toBe('OMG');
//   });
// });
