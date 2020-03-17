import { dinamicSearchPokemon } from '../src/data.js';

// primer sprint : test de segunda historia [16 de Marzo]
describe('dinamicSearchPokemon', () => {
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
