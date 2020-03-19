import { pokemonCard, search } from '../src/data.js';

const pokemonData = {
  num: '001',
  name: 'bulbasaur',
  img: 'https://www.serebii.net/pokemongo/pokemon/001.png',
};

describe('pokemonCard', () => {
  it('is a function', () => {
    expect(typeof pokemonCard).toBe('function');
  });

  it('debería retornar elementos html del pokemon indicado', () => {
    expect(pokemonCard(pokemonData)).toBe(`
    <div class="pokemon-card">
      <p class="pokemon-number left">001</p>
      <img class="pokemon-image" src="https://www.serebii.net/pokemongo/pokemon/001.png">
      <p class="pokemon-name">bulbasaur</p> 
    </div>`);
  });
});


describe('search', () => {
  it('is a function', () => {
    expect(typeof search).toBe('function');
  });

  it('debería retornar string vacío cuando la búsqueda no coincide con el pokemon', () => {
    expect(search(pokemonData, 'pik')).toBe('');
  });

  it('debería retornar los pokemones cuyas primeras letras coincidan', () => {
    expect(search(pokemonData, 'bul')).toBe(`
    <div class="pokemon-card">
      <p class="pokemon-number left">001</p>
      <img class="pokemon-image" src="https://www.serebii.net/pokemongo/pokemon/001.png">
      <p class="pokemon-name">bulbasaur</p> 
    </div>`);
  });
});
