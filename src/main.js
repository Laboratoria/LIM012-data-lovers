import data from './data/pokemon/pokemon.js';

const pokemonRow = document.querySelector('.row');

document.body.onload = showPokemon;

const showPokemon = (arr) => {
        arr.forEach((obj) => {
                const mainCard = document.createElement("div");
                pokemonRow.appendChild(mainCard));
        }