import {
  filterByName,
  filteredbyClass,
  filteredByDifficulty
} from "../src/data.js"

import data from "../src/data/lol/lol.js";
let championList = data.data;
//funcion filtrado por nombre
describe('filterByName', () => {

  it('debería ser una función', () => {
    expect(typeof filterByName).toBe('function');
  });
  it('debería retornar Campeon Morgana', () => {
    expect(filterByName(championList, 'morgana')).toStrictEqual([championList.Morgana]);
  });

  //funcion filtrado por clase
  describe('filteredbyClass', () => {

    it('debería ser una función', () => {
      expect(typeof filteredbyClass).toBe('function');
    });

    it('debería retornar clase Mage', () => {
      let filteredChampions = filteredbyClass(championList, 'Mage')
      expect(filteredChampions.length).toBe(52);
    });
  })
})

//funcion filtrar por dificultad
it('debería ser una función dificultad', () => {
  expect(typeof filteredByDifficulty).toBe('function');
});

it('debería retornar dificultad data-value 1', () => {
  let filteredChampions = filteredByDifficulty(championList, '1')
  expect(filteredChampions.length).toBe(20);
});
it('debería retornar  dificultad data-value 2', () => {
  let filteredChampions = filteredByDifficulty(championList, '2')
  expect(filteredChampions.length).toBe(64);
});
it('debería retornar dificultad data-value 3', () => {
  let filteredChampions = filteredByDifficulty(championList, '3')
  expect(filteredChampions.length).toBe(50);
});
