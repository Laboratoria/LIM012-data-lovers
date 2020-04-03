/* eslint-disable import/named */
import { sortData, filterData, averageData } from '../src/data.js';


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

const DataAverage = [
  {
    name: 'Aatrox',
    tags: ['Fighter', 'Tank'],
    stats: {
      hp: 592.64,
    },
  },
  {
    name: 'Aatrox',
    tags: ['Fighter', 'Tank'],
    stats: {
      hp: 600,
    },
  },
  {
    name: 'Zyra',
    tags: ['Mage', 'Support'],
    stats: {
      hp: 517.76,
    },
  },
  {
    name: 'Diana',
    tags: ['Fighter', 'Mage'],
    stats: {
      hp: 514.4,
    },
  },
];

const AverageHpFighter = 569.0133333333333;
// 592.64 + 600 + 514.4 = 1707.04 / 3 = 569.0133333333333

describe('sortData', () => {
  it('is a function', () => {
    expect(typeof sortData).toBe('function');
  });

  it('return sort champions from AZ', () => {
    expect(sortData(data, 'name', 'ascending')).toEqual(firstOrder);
  });

  it('return sort champions from ZA', () => {
    expect(sortData(data, 'name', 'descending')).toEqual(secondOrder);
  });

  it('return all champions from ZA', () => {
    expect(sortData(data, 'name', 'descending')).toEqual(secondOrder);
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

describe('averageData', () => {
  it('is a function', () => {
    expect(typeof averageData).toBe('function');
  });

  it('returns the champion average HP for a selected role', () => {
    expect(averageData(DataAverage, 'Fighter')).toEqual(AverageHpFighter);
  });
});
