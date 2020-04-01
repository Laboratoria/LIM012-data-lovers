import {
  dinamicSearchPokemon, filterPokemon, orderBy, calculateBetterCombinations,
} from '../src/data.js';

import data from '../src/data/pokemon/pokemon.js';

// primer sprint : test de segunda historia [16 de Marzo]
describe('Test de la función buscar', () => {
  it('deberia ser una funcion', () => {
    expect(typeof dinamicSearchPokemon).toBe('function');
  });

  it('deberia retornar un array vacío para "piic"', () => {
    const numberOfResult = dinamicSearchPokemon('piic').length;
    expect(numberOfResult).toEqual(0);
  });

  it('retorna una lista de pokemones con nombre que coincida con "bul"', () => {
    const result = dinamicSearchPokemon('bul');
    for (let i = 0; i < result.length; i += 1) {
      expect(result[i].name).toContain('bul');
    }
  });

  it('retorna una lista de pokemones con nombre que coincida con "pikachu"', () => {
    const result = dinamicSearchPokemon('pikachu');
    for (let i = 0; i < result.length; i += 1) {
      expect(result[i].name).toContain('pikachu');
    }
  });
});

describe('Test de la función filtrar', () => {
  it('deberia ser una funcion', () => {
    expect(typeof filterPokemon).toBe('function');
  });

  it('retorna una lista de pokemones que coincida con el tipo agua', () => {
    const result = filterPokemon('type', 'water');
    for (let i = 0; i < result.length; i += 1) {
      expect(result[i].type).toContain('water');
    }
  });

  it('retorna una lista de pokemones que son resistentes al tipo fuego', () => {
    const result = filterPokemon('resistant', 'fire');
    for (let i = 0; i < result.length; i += 1) {
      expect(result[i].resistant).toContain('fire');
    }
  });

  it('retorna una lista de pokemones que son debiles al tipo roca', () => {
    const result = filterPokemon('weaknesses', 'rock');
    for (let i = 0; i < result.length; i += 1) {
      expect(result[i].weaknesses).toContain('rock');
    }
  });
});

describe('Test de la función ordenar', () => {
  it('deberia ser una funcion', () => {
    expect(typeof orderBy).toBe('function');
  });

  it(' Verifica que se ordena de menor a mayor max-cp', () => {
    const dataOrdened = orderBy(data.pokemon, 'max-cp');
    // eslint-disable-next-line radix
    const array = [parseInt(dataOrdened[0].stats['max-cp'])];
    for (let i = 1; i < dataOrdened.length; i += 1) {
      // eslint-disable-next-line radix
      array.push(parseInt(dataOrdened[i].stats['max-cp']));
      expect(array[i - 1]).toBeLessThanOrEqual(array[i]);
    }
  });

  it(' Verifica que se ordena de menor a mayor max-hp', () => {
    const dataOrdened = orderBy(data.pokemon, 'max-hp');
    // eslint-disable-next-line radix
    const array = [parseInt(dataOrdened[0].stats['max-hp'])];
    for (let i = 1; i < dataOrdened.length; i += 1) {
      // eslint-disable-next-line radix
      array.push(parseInt(dataOrdened[i].stats['max-hp']));
      expect(array[i - 1]).toBeLessThanOrEqual(array[i]);
    }
  });

  it(' Ordena de menor a mayor alfabéticamente', () => {
    const dataOrdened = orderBy(data.pokemon, 'a-z');
    const array = [dataOrdened[0].name];
    for (let i = 1; i < dataOrdened.length; i += 1) {
      array.push(dataOrdened[i].name);
      expect(array[i - 1].localeCompare(array[i])).toBe(-1);
    }
  });
});

describe('Test función calcular', () => {
  it('calculateBetterCombinations deberia ser una funcion', () => {
    expect(typeof calculateBettersCombination).toBe('function');
  });

  it('Deberia mostrar a lo máximo 5 arrays', () => {
    for (let i = 0; i < data.pokemon.length; i += 1) {
      expect(calculateBetterCombinations(data.pokemon[i]).length).toBeLessThanOrEqual(5);
    }
  });

  it('Deberia ordenar de mayor a menor según orden de daño', () => {
    for (let i = 0; i < data.pokemon.length; i += 1) {
      const betterCombinations = calculateBetterCombinations(data.pokemon[i]);
      const array = [betterCombinations[0][2]];
      for (let j = 1; j < 5; j += 1) {
        array.push(betterCombinations[j][2]);
        expect(betterCombinations[j - 1][2].localeCompare(betterCombinations[j][2])).toBe(-1);
      }
    }
  });
});
