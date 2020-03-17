import data from './data/pokemon/pokemon.js';

const pokemonRow = document.querySelector('.row');
const pokemonCard = document.createElement('div');

const showPokemon = () => {
    for (let i = 0; i <= 5; i++) {
        pokemonCard.classList.add('pokemon-card');
        pokemonRow.appendChild(pokemonCard);
    }
}

showPokemon();

console.log(data.pokemon)