import { filterByGeneration, search } from '../src/data.js';
import data from '../src/data/pokemon/pokemon.js';

describe('filterByGeneration', () => {
  it('is a function', () => {
    expect(typeof filterByGeneration).toBe('function');
  });

  it('deberían retornar los pokemones con la generación correspondiente', () => {
    expect(filterByGeneration(data.pokemon, 'johto')).toEqual(data.pokemon.slice(151));
  });
});


describe('search', () => {
  it('is a function', () => {
    expect(typeof search).toBe('function');
  });

  it('debería retornar un array vacío cuando la búsqueda no coincide con las letras ingresadas', () => {
    expect(search(data.pokemon, 'xxwe')).toEqual([]);
  });

  it('debería retornar el pokemon cuyas primeras letras coincidan', () => {
    expect(search(data.pokemon, 'bul')).toEqual([data.pokemon[0]]);
  });
});
