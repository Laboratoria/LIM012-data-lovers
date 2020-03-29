/* eslint-disable import/extensions */
import { sortData, filterData } from '../src/data.js';


const data = [
  {
    name: 'Aatrox',
    tags: ['Fighter', 'Tank'],
  },
  {
    name: 'Aatrox',
    tags: ['Fighter', 'Tank'],
  },
  {
    name: 'Zyra',
    tags: ['Mage', 'Support'],
  },
  {
    name: 'Diana',
    tags: ['Fighter', 'Mage'],
  },
];

const firstOrder = [
  {
    name: 'Aatrox',
    tags: ['Fighter', 'Tank'],
  },
  {
    name: 'Aatrox',
    tags: ['Fighter', 'Tank'],
  },
  {
    name: 'Diana',
    tags: ['Fighter', 'Mage'],
  },
  {
    name: 'Zyra',
    tags: ['Mage', 'Support'],
  },
];

const secondOrder = [
  {
    name: 'Zyra',
    tags: ['Mage', 'Support'],
  },
  {
    name: 'Diana',
    tags: ['Fighter', 'Mage'],
  },
  {
    name: 'Aatrox',
    tags: ['Fighter', 'Tank'],
  },
  {
    name: 'Aatrox',
    tags: ['Fighter', 'Tank'],
  },
];

const filterMage = [
  {
    name: 'Zyra',
    tags: ['Mage', 'Support'],
  },
  {
    name: 'Diana',
    tags: ['Fighter', 'Mage'],
  },
];

describe('sortData', () => {
  it('is a function', () => {
    expect(typeof sortData).toBe('function');
  });

  it('return sort champions from AZ', () => {
    expect(sortData(data, 'name', 'ascendente')).toEqual(firstOrder);
  });

  it('return sort champions from ZA', () => {
    expect(sortData(data, 'name', 'descendente')).toEqual(secondOrder);
  });

  it('return sort champions from ZA', () => {
    expect(sortData(data, 'name', 'descendente')).toEqual(secondOrder);
  });
});

describe('filterData', () => {
  it('is a function', () => {
    expect(typeof filterData).toBe('function');
  });

  it('return champion filter by role', () => {
    expect(filterData(data, 'Mage')).toEqual(filterMage);
  });
});
