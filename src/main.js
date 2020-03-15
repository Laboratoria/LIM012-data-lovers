import { dinamicSearchPokemon } from './data.js';
// import data from './data/pokemon/pokemon.js';

const typeColors = {
  normal: '#AAA284',
  fire: '#FF9C06',
  grass: '#95C215',
  water: '#168CBF',
  electric: '#F4C313',
  ice: '#85EFF5',
  flying: '#20E5F1',
  poison: '#C22AF8',
  ground: '#AB8709',
  psychic: '#F013F4',
  rock: '#C9AF53',
  bug: '#4C6C2C',
  dragon: '#731E9B',
  ghost: '#8968AA',
  dark: '#6C695C',
  steel: '#9DAFC0',
  fairy: '#FAB3E2',
  fighting: '#BD5022',
};


const createPokemonType = (type) => {
  const divPokemonType = document.createElement('div');
  divPokemonType.className = 'pokemon-type';
  divPokemonType.appendChild(document.createTextNode(type));
  divPokemonType.style.background = typeColors[type];
  return divPokemonType;
};

const createPokemonTypeButton = (type) => {
  const buttonPokemonType = document.createElement('button');
  buttonPokemonType.className = 'pokemon-type';
  buttonPokemonType.className += 'pokemon-type-button';
  buttonPokemonType.appendChild(document.createTextNode(type));
  buttonPokemonType.style.background = typeColors[type];
  return buttonPokemonType;
};

const putPokemonImage = (dataImgPokemon, divCardImage) => {
  const img = document.createElement('IMG');
  img.id = 'img-pokemon';
  img.setAttribute('src', dataImgPokemon);
  img.setAttribute('alt', 'Imagen Pokemón');
  divCardImage.appendChild(img);
};

/* eslint no-param-reassign: ["error", { "props": false }] */
const putPokemonName = (dataNamePokemon, divCardName) => {
  divCardName.textContent = dataNamePokemon;
};

const putPokemonTypes = (dataTypesPokemon, divCardTypes) => {
  for (let i = 0; i < dataTypesPokemon.length; i += 1) {
    divCardTypes.appendChild(createPokemonType(dataTypesPokemon[i]));
  }
};

const createPokemonCard = (index, dataPokemon) => {
  const divCard = document.createElement('div');
  divCard.className = 'pokemon-card';
  document.getElementById('card-container').appendChild(divCard);
  const divCardName = document.createElement('div');
  const divCardImage = document.createElement('div');
  const divCardTypes = document.createElement('div');
  divCardName.className = 'pokemon-name';
  divCardImage.className = 'pokemon-image';
  divCardTypes.className = 'pokemon-types';
  document.getElementsByClassName('pokemon-card')[index].appendChild(divCardName);
  document.getElementsByClassName('pokemon-card')[index].appendChild(divCardImage);
  document.getElementsByClassName('pokemon-card')[index].appendChild(divCardTypes);
  putPokemonName(dataPokemon.name, divCardName);
  putPokemonImage(dataPokemon.img, divCardImage);
  putPokemonTypes(dataPokemon.type, divCardTypes);
};

const showCard = (dataPokemon) => {
  for (let i = 0; i < dataPokemon.length; i += 1) {
    createPokemonCard(i, dataPokemon[i]);
  }
};

const searchPokemon = () => {
  document.getElementById('card-container').innerHTML = '';
  const wordIntroduced = document.getElementById('input-bar-search').value;
  showCard(dinamicSearchPokemon(wordIntroduced));
};

const inputBarSearch = document.getElementById('input-bar-search');
inputBarSearch.addEventListener('keyup', searchPokemon);

const putPokemonTypesOnLateralMenu = (aside) => {
  for (let i = 0; i < typeColors.length; i += 1) {
    aside.appendChild(createPokemonTypeButton(typeColors[i]));
  }
};

let showLateralMenu = false;
const showOrHideLateralMenu = (asideTypes) => {
  if (showLateralMenu === false) {
    asideTypes.style.display = 'inline';
    showLateralMenu = true;
  } else {
    asideTypes.style.display = 'none';
    showLateralMenu = false;
  }
};
const buttonsFilterPokemon = document.getElementsByClassName('button-filter');
const asideLateralMenu = document.getElementsByTagName('aside');
buttonsFilterPokemon[0].addEventListener('click', showOrHideLateralMenu(asideLateralMenu[0]));
buttonsFilterPokemon[1].addEventListener('click', showOrHideLateralMenu(asideLateralMenu[0]));
putPokemonTypesOnLateralMenu(asideLateralMenu);
