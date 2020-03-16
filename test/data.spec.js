import { dinamicSearchPokemon } from '../src/data.js';

// primer sprint : test de segunda historia [16 de Marzo]
describe('dinamicSearchPokemon', () => {
  it('deberia ser una funcion', () => {
    expect(typeof dinamicSearchPokemon).toBe('function');
  });

  it('deberia retornar mensaje para "piic"', () => {
    const numberOfResult = dinamicSearchPokemon('piic').length;
    expect(numberOfResult).toEqual(0);
  });

  it('retorna una lista de pokemones con nombre que coincida con "ch"', () => {
    const result = dinamicSearchPokemon('pikachu');
    for (let i = 0; i < result.length; i += 1) {
      expect(result[i].name).toContain('pikachu');
    }
  });
});
