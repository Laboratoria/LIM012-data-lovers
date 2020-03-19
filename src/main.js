import data from './data/pokemon/pokemon.js';

const pokemonRow = document.querySelector('.stack');

const showPokemon = (arr) => {
    arr.forEach((obj) => {
        let pokemonCard = document.createElement('div');
        pokemonCard.classList.add('pokemon-card');
        pokemonCard.innerHTML = `
        <div class="pokemon-number">${obj.num}</div>
        <div class="pokemon-image"><img src = ${obj.img} class="pokemon-pic"></div>
        <div class= "pokemon-name">${obj.name}</div>
        `;
        pokemonRow.appendChild(pokemonCard);
    }
    );
};

showPokemon(data.pokemon);
