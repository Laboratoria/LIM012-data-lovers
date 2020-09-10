/* eslint-disable no-param-reassign */
import {
  dinamicSearchPokemon, filterPokemon, orderBy, changeOrder, calculateBetterCombinations,
} from './data.js';

import data from './data/pokemon/pokemon.js';


const getById = label => document.getElementById(label);
const getByClass = label => document.getElementsByClassName(label);
const getByQuery = label => document.querySelectorAll(label);


const cardContainer = document.querySelector('#cards-section');

const inputBarSearch = getById('input-bar-search');


// btn sections
const btnType = document.querySelector('#type');
const btnResistant = document.querySelector('#resistant');
const btnWeak = document.querySelector('#weak');
// sections
const titleSection = document.querySelector('.title-section');
const btnSection = document.querySelectorAll('.btn-section');

const btnHome = document.querySelector('#btn-menu');
let optionSelected = btnHome;


let resultTypes;
let resultResistant;
let resultWeaknesses;

let currentData;
let currentSection = btnSection[0];

const btnMenu = document.querySelector('.menu-btn');
const asideBar = document.querySelector('aside');

const pokemonSection = document.querySelector('.pokemon-info');

const btnGoBack = document.querySelector('.go-back');



const createPokemonCard = (pokemon, container) => {
  if (typeof pokemon !== 'undefined') {
    const card = document.createElement('article');
    card.classList.add('pokemon-card', 'flex-box');
    let types = '';
    pokemon.type.forEach((type) => {
      types += `<img class="icon-type-card" src="./images/${type}-icon.png" alt=""/>`;
    });
    card.innerHTML = `
    <div class="simple-pokemon-info">
      <h1 class="pokemon-name">${pokemon.name}</h1>
      <div class="background-pokemon-img">
      <img src="${pokemon.img}" id="${pokemon.name}" class="pokemon">
      </div>
    </div>
    <div class="types-pokemon-info flex-box">
    ${types}
    <span class="ptj">MAX CP ${pokemon.stats['max-cp']}</span><span class="ptj">MAX HP ${pokemon.stats['max-cp']}</span>
    </div>
    `;
    container.append(card);
  }
};

const showPokemonCards = (pokemons, container = cardContainer) => {
  container.innerHTML = '';
  pokemons.forEach((pokemon) => {
    createPokemonCard(pokemon, container);
  });
};

btnHome.addEventListener('click', (e) => {
  btnGoBack.classList.add('hidden');
  cardContainer.classList.remove('hidden');
  pokemonSection.classList.add('hidden');
  if (optionSelected !== e.target) {
    optionSelected.classList.remove('selected');
    e.target.classList.add('selected');
    optionSelected = e.target;
  }
  showPokemonCards(data.pokemon);
});

btnGoBack.addEventListener('click', (e) => {
  pokemonSection.classList.add('hidden');
  cardContainer.classList.remove('hidden');
  e.target.classList.add('hidden');
});

btnMenu.addEventListener('click', () => {
  asideBar.classList.toggle('show-aside');
});

const createIcons = (list) => {
  let icons = '';
  for (let i = 0; i < list.length; i += 1) {
    icons += `<img src="./images/${list[i]}-icon.png" alt=""/>`;
  }
  return icons;
};

const buildTable = (list, table) => {
  table.innerHTML = '';
  table.innerHTML = `<tr><th></th>
  <th><img class="icon-modal" src="./images/type.png"></th>
  <th><img class="icon-modal" src="./images/box.png"></th>
  <th><img class="icon-modal" src="./images/energy.png"></th>
  <th><img class="icon-modal" src="./images/time.png"></tr>`;
  for (let i = 0; i < list.length; i += 1) {
    const row = `<tr><td>${list[i].name}</td>
    <td><img class="icon-modal" src="./images/${list[i].type}-icon.png"></td>
    <td>${list[i]['base-damage']}</td>
    <td>${list[i].energy}</td>
    <td>${list[i]['move-duration-seg']}</td></tr>`;
    table.innerHTML += `${row}`;
  }
};


const getPokemonEvolution = (poke) => {
  if (poke['next-evolution']) {
    return [{ num: poke.num, name: poke.name }].concat(getPokemonEvolution(poke['next-evolution'][0]));
  } if (poke['prev-evolution']) {
    return [{ num: poke.num, name: poke.name }].concat(getPokemonEvolution(poke['prev-evolution'][0]));
  }
  return [{ num: poke.num, name: poke.name }];
};

const evolution = (poke, prev, next) => {
  const prevs = (prev) ? getPokemonEvolution(prev[0]).reverse() : [];
  const nexts = (next) ? getPokemonEvolution(next[0]) : [];
  const pokemons = prevs.concat([{ num: poke.num, name: poke.name }]).concat(nexts);
  let cards = '';
  let objPoke;
  for (let index = 0; index < pokemons.length; index += 1) {
    objPoke = data.pokemon.find(pk => pk.name === pokemons[index].name);
    cards += `
      <div class="card-pokemon-evolition flex-box"> 
        <span class="font pokemon-name">${objPoke.name}</span>
        <img src="${objPoke.img}" alt="" class="pokemon-img-evo">
      </div>`;
    if (index !== pokemons.length - 1) cards += '<i class="fas fa-angle-right"></i><i class="fas fa-angle-down"></i>';
  }
  return cards;
};

// show pokemon info
const showInfoPokemon = (name) => {
  const pokemon = data.pokemon.find(pk => pk.name === name);
  const section = document.querySelector('.pokemon-info');
  section.innerHTML = `
    <article class="pokemon-simple-info">
      <img src="${pokemon.img}" class="pokemon-info-img" alt="" >
      <span class="pokemon-info-name">${pokemon.name}</span>
    </article>
    <article class="pokemon-about">
      <span>About <strong>${pokemon.name}</strong></span>
      <p class="about">${pokemon.about}</p>
    </article>
    <article class="pokemon-details flex-box">
      <h4>Details</h4>
      <div class="detail">
        <img src="./images/balanza.png" alt="" srcset="">
        <p>
          <span>Weight</span>
          <strong>${pokemon.size.weight}</strong>
        </p>
      </div>
      <div class="detail"><img src="" alt="" srcset="./images/cintam.png">
        <p>
          <span>Height</span>
          <strong>${pokemon.size.height}</strong>
        </p>
      </div>
      <div class="detail"><img src="./images/world.png" alt="" srcset="">
        <p>
          <span>Region</span>
          <strong>${pokemon.generation.name}</strong>
        </p>
      </div>
      <div class="detail"><img src="./images/candy.png" alt="" srcset="">
        <p>
          <span>Candy</span>
          <strong>${pokemon.evolution.candy.replace('candy', '')}</strong>
        </p>
      </div>
    </article>
    <article class="pokemon-stats flex-box">
      <h4>Stats</h4>
      <div class="graphics">
        <div class="wrap-bar">
          <div>
            <div class="bar" style="height:${(pokemon.stats['base-attack'] * 100) / 150}px"></div>
          </div>
          <span>attack</span>
        </div>
        <div class="wrap-bar">
          <div>
            <div class="bar" style="height:${(pokemon.stats['base-defense'] * 100) / 150}px"></div>
          </div>
          <span>defense</span>
        </div>
        <div class="wrap-bar">
          <div>
            <div class="bar" style="height:${(pokemon.stats['base-stamina'] * 100) / 150}px"></div>
          </div>
          <span>stamina</span>
        </div>    
      </div>       
    </article>
    <article class="pokemon-types flex-box">
      <h4>Elements</h4>
      <div><span>Type</span>${createIcons(pokemon.type)}</div>
      <div><span>Resistant</span>${createIcons(pokemon.resistant)}</div>
      <div><span>Weaknesses</span>${createIcons(pokemon.weaknesses)}</div>
      
    </article>
    <article class="pokemon-evolution flex-box">
      <h4>Evolution</h4>
      ${evolution(pokemon, pokemon.evolution['prev-evolution'], pokemon.evolution['next-evolution'])}
    </article>`;
};


document.addEventListener('click', (event) => {
  const element = event.target;
  if (element.classList.contains('pokemon')) {
    btnGoBack.classList.remove('hidden');
    pokemonSection.classList.remove('hidden');
    cardContainer.classList.add('hidden');
    showInfoPokemon(element.id);
  }
});

const filterPokemonsByType = (type) => {
  resultTypes = filterPokemon('type', type);
  // resultResistant = filterPokemon('resistant', type);
  // resultWeaknesses = filterPokemon('weaknesses', type);
};


const sortSystem = (sortOptions) => {
  sortOptions.forEach((option) => {
    option.addEventListener('click', (event) => {
      if (cardContainer.classList.contains('hidden')) {
        cardContainer.classList.remove('hidden');
        pokemonSection.classList.add('hidden');
        btnGoBack.classList.add('hidden');
      }
      optionSelected.classList.remove('selected');
      option.classList.add('selected');
      optionSelected = option;
      currentData = orderBy(currentData, event.target.name);
      showPokemonCards(currentData);
    });
  });
};

const filterSystem = (filterOptions) => {
  filterOptions.forEach((option) => {
    option.addEventListener('click', () => {
      if (cardContainer.classList.contains('hidden')) {
        cardContainer.classList.remove('hidden');
        pokemonSection.classList.add('hidden');
        btnGoBack.classList.add('hidden');
      }
      optionSelected.classList.remove('selected');
      option.classList.add('selected');
      optionSelected = option;
      filterPokemonsByType(option.textContent);
      cardContainer.innerHTML = '';
      currentData = resultTypes;
      showPokemonCards(resultTypes);
    });
  });
};

btnSection.forEach((btn) => {
  cardContainer.innerHTML = '';
  btn.addEventListener('click', () => {
    switch (btn.id) {
      case 'type':
        currentSection.classList.remove('active');
        currentData = resultTypes;
        showPokemonCards(resultTypes);
        btn.classList.add('active');
        break;
      case 'resistant':
        currentSection.classList.remove('active');
        currentData = resultResistant;
        showPokemonCards(resultResistant);
        btn.classList.add('active');
        break;
      case 'weak':
        currentSection.classList.remove('active');
        currentData = resultWeaknesses;
        showPokemonCards(resultWeaknesses);
        btn.classList.add('active');
        break;
      default: // nothing
    }
    currentSection = btn;
    // btn.classList.add('active');
  });
});
// menu system
const menuSystem = () => {
  const ulSortOptions = getByQuery('.sort-option');
  const ulFilterOptions = getByQuery('.filter-option');
  filterSystem(ulFilterOptions);
  sortSystem(ulSortOptions);
};


// search pokemon
const searchPokemon = () => {
  const wordIntroduced = getById('input-bar-search').value;
  currentData = dinamicSearchPokemon(wordIntroduced);
  if (currentData.length > 0) {
    showPokemonCards(currentData);
  } else if (currentData.length === 0 && wordIntroduced.length !== 0) {
    cardContainer.innerHTML = `<p class="message">
    Sorry, no results were found for your search <span class="import-text font">${wordIntroduced}</span> make sure it is well written
    <img src="./images/pokemon.svg"/></p>`;
  } else {
    currentData = data.pokemon;
    showPokemonCards(currentData);
  }
};
//  estos son lo unicos caracteres aceptados
const onlyText = (e) => {
  const key = e.keyCode || e.which;
  const tecla = String.fromCharCode(key).toLowerCase();
  const letras = ' áéíóúabcdefghijklmnñopqrstuvwxyz';

  if (letras.indexOf(tecla) === -1) {
    e.preventDefault();
  }
};

inputBarSearch.addEventListener('keyup', searchPokemon);
inputBarSearch.addEventListener('keypress', onlyText, false);

const loadPage = () => {
  window.scrollTo(0, 0);
  currentData = data.pokemon;
  const wordIntroduced = getById('input-bar-search').value;
  menuSystem();
  if (wordIntroduced.length === 0) {
    // console.log('esta vacio');
    showPokemonCards(currentData);
  }
};
window.onload = loadPage;
