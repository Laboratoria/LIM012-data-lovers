import data from './data/pokemon/pokemon.js';

export const dinamicSearchPokemon = (wordIntroduced) => {
  const pokemonFilter = [];
  let word;
  for (let i = 0; i < data.pokemon.length; i++) {
    word = data.pokemon[i].name.substring(0, wordIntroduced.length);
    if (wordIntroduced.length <= data.pokemon[i].name.length && wordIntroduced.length !== 0) {
      if (wordIntroduced.toLowerCase() === word.toLowerCase()) {
        pokemonFilter.push(data.pokemon[i]);
      }
    }
  }
  return pokemonFilter;
};
