import { dinamicSearchPokemon } from './data.js';
import data from './data/pokemon/pokemon.js';

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


const putPokemonImage = (dataImgPokemon, divCardImage) => {
  const img = document.createElement('IMG');
  img.id = 'img-pokemon';
  img.setAttribute('src', dataImgPokemon);
  img.setAttribute('alt', 'Imagen Pokemón');
  divCardImage.appendChild(img);
};

/* eslint no-param-reassign: ['error', { 'props': false }] */
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

const showMessageOfSearch = (container) => {
  container.innerHTML = '<p>Lo sentimos, no encontramos resultados que coincidan con su búsqueda</p>';
};

const searchPokemon = () => {
  const cardContainer = document.getElementById('card-container');
  cardContainer.innerHTML = '';
  const wordIntroduced = document.getElementById('input-bar-search').value;
  const numberOfResult = dinamicSearchPokemon(wordIntroduced).length;
  if (numberOfResult > 0) {
    showCard(dinamicSearchPokemon(wordIntroduced));
  } else if (numberOfResult === 0 && wordIntroduced.length !== 0) {
    showMessageOfSearch(cardContainer);
  }else{
    showCard(data.pokemon);
  }
};


const createTypeButton = (type) => {
  const buttonPokemonType = document.createElement('button');
  buttonPokemonType.className = 'pokemon-type';
  buttonPokemonType.className += ' pokemon-type-button';
  const iconPokemonType = document.createElement('img');
  iconPokemonType.className = 'icon-pokemon-type';
  iconPokemonType.setAttribute('src', `images/${type}.png`);
  buttonPokemonType.appendChild(iconPokemonType);
  buttonPokemonType.appendChild(document.createTextNode(type));
  buttonPokemonType.style.background = typeColors[type];
  return buttonPokemonType;
};

const pokemonTypes = Object.keys(typeColors);

const putPokemonTypesOnLateralMenu = (aside) => {
  const typesConteiner = document.createElement('div');
  typesConteiner.id = 'types-container';
  for (let key = 0; key < pokemonTypes.length; key += 1) {
    typesConteiner.appendChild(createTypeButton(pokemonTypes[key]));
  }
  aside.appendChild(typesConteiner);
};

// let showLateralMenu = false;
let firstShowLateralMenu = false;
const showLateralMenu = () => {
  // console.log('mostran menu lateral');
  const asideLateralMenu = document.getElementsByTagName('aside')[0];
  if (firstShowLateralMenu === false) {
    putPokemonTypesOnLateralMenu(asideLateralMenu);
    firstShowLateralMenu = true;
  }
  asideLateralMenu.style.width = '80%';
};

const hideLateralMenu = () => {
  const asideLateralMenu = document.getElementsByTagName('aside')[0];
  asideLateralMenu.style.width = '0';
};

const inputBarSearch = document.getElementById('input-bar-search');
inputBarSearch.addEventListener('keyup', searchPokemon);

const buttonFilterPokemon = document.getElementsByClassName('button-filter')[0];
const buttonOrderPokemon = document.getElementsByClassName('button-filter')[1];
const buttonCloseLateralMenu = document.getElementById('btn-close');

buttonFilterPokemon.addEventListener('click', showLateralMenu);
buttonOrderPokemon.addEventListener('click', showLateralMenu);
buttonCloseLateralMenu.addEventListener('click', hideLateralMenu);
buttonCloseLateralMenu.addEventListener('click', hideLateralMenu);


const loadPage = () => {
  const wordIntroduced = document.getElementById('input-bar-search').value;
  if (wordIntroduced.length === 0) {
    showCard(data.pokemon);
  }
};


window.onload = loadPage;
