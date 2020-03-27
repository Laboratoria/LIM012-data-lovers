/* eslint-disable import/extensions */
import { orderChampions } from '../src/data.js';

const property = [
  { name: 'Aatrox' },
  { name: 'Zyra' },
  { name: 'Diana' },
];

const firstOrder = [
  { name: 'Aatrox' },
  { name: 'Diana' },
  { name: 'Zyra' },
];

const secondOrder = [
  { name: 'Zyra' },
  { name: 'Diana' },
  { name: 'Aatrox' },
];

describe('orderChampions', () => {
  it('is a function', () => {
    expect(typeof orderChampions).toBe('function');
  });

  it('return sort champions from AZ', () => {
    expect(orderChampions(property, 'az')).toEqual(firstOrder);
  });

  it('return sort champions from ZA', () => {
    expect(orderChampions(property, 'za')).toEqual(secondOrder);
  });
});
