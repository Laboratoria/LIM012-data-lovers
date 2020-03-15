import {
  filterByName,
  filteredbyClass,
} from "../src/data.js"

import data from "../src/data/lol/lol.js";
let championList = data.data;
describe('filterByName', () => {

  it('debería ser una función', () => {
    expect(typeof filterByName).toBe('function');
  });

  describe('filteredbyClass', () => {

    it('debería ser una función', () => {
      expect(typeof filteredbyClass).toBe('function');
    });

    it('debería retornar Campeon Morgana', () => {
      expect(filterByName(championList, 'morgana')).toStrictEqual([championList.Morgana]);
    });
  })
})
it('debería retornar clase Mage', () => {
  let filteredChampions = filteredbyClass(championList, 'Mage')
  expect(filteredChampions.length).toBe(52);
});
