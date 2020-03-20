/* eslint-disable no-console */
import { dinamicSearchPokemon, filterPokemon } from './data.js';

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

let resultTypes = [];
let resultResistant = [];
let resultWeaknesses = [];

let isContainerSection = false;
let typeChoosed = '';


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

const createPokemonCard = (index, dataPokemon, container) => {
  const divCard = document.createElement('div');
  divCard.className = 'pokemon-card';
  container.appendChild(divCard);
  const divCardName = document.createElement('div');
  const divCardImage = document.createElement('div');
  const divCardTypes = document.createElement('div');
  divCardName.className = 'pokemon-name';
  divCardImage.className = 'pokemon-image';
  divCardTypes.className = 'pokemon-types';
  putPokemonName(dataPokemon.name, divCardName);
  putPokemonImage(dataPokemon.img, divCardImage);
  putPokemonTypes(dataPokemon.type, divCardTypes);
  divCard.appendChild(divCardName);
  divCard.appendChild(divCardImage);
  divCard.appendChild(divCardTypes);
};

const showCard = (dataPokemon, container) => {
  for (let i = 0; i < dataPokemon.length; i += 1) {
    createPokemonCard(i, dataPokemon[i], container);
  }
};

const showMessageOfSearch = (container) => {
  container.innerHTML = '<p>Lo sentimos, no encontramos resultados que coincidan con su búsqueda</p>';
};

const searchPokemon = () => {
  const cardContainer = document.getElementById('card-container');
  if (isContainerSection === true) {
    console.log('modo busqueda de pokemones');
    document.getElementById('card-container-section').style.display = 'none';
    isContainerSection = false;
    cardContainer.style.display = 'flex';
  }
  cardContainer.innerHTML = '';
  const wordIntroduced = document.getElementById('input-bar-search').value;
  const numberOfResult = dinamicSearchPokemon(wordIntroduced).length;
  if (numberOfResult > 0) {
    showCard(dinamicSearchPokemon(wordIntroduced), document.getElementById('card-container'));
  } else if (numberOfResult === 0 && wordIntroduced.length !== 0) {
    showMessageOfSearch(cardContainer);
  } else {
    showCard(data.pokemon, document.getElementById('card-container'));
  }
};


const createTypeButton = (type) => {
  const buttonPokemonType = document.createElement('button');
  buttonPokemonType.className = 'pokemon-type';
  buttonPokemonType.className += ' pokemon-type-button';
  buttonPokemonType.setAttribute('value', type);
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
const showLateralMenu = () => {
  const asideLateralMenu = document.getElementsByTagName('aside')[0];
  if (window.screen.width < 768) {
    asideLateralMenu.style.width = '80%';
  } else {
    asideLateralMenu.style.width = '50%';
  }
};

const hideLateralMenu = () => {
  const asideLateralMenu = document.getElementsByTagName('aside')[0];
  asideLateralMenu.style.width = '0';
};

const onlyText = (e) => {
  const key = e.keyCode || e.which;
  const tecla = String.fromCharCode(key).toLowerCase();
  const letras = ' áéíóúabcdefghijklmnñopqrstuvwxyz';

  if (letras.indexOf(tecla) === -1) {
    e.preventDefault();
  }
};

const inputBarSearch = document.getElementById('input-bar-search');
inputBarSearch.addEventListener('keyup', searchPokemon);
inputBarSearch.addEventListener('keypress', onlyText, false);

const buttonFilterPokemon = document.getElementsByClassName('button-filter')[0];
const buttonOrderPokemon = document.getElementsByClassName('button-filter')[1];
const buttonCloseLateralMenu = document.getElementById('btn-close');

buttonFilterPokemon.addEventListener('click', showLateralMenu);
buttonOrderPokemon.addEventListener('click', showLateralMenu);
buttonCloseLateralMenu.addEventListener('click', hideLateralMenu);
buttonCloseLateralMenu.addEventListener('click', hideLateralMenu);

const showAllByFilter = (whichFilter) => {
  const divCardContainer = document.getElementById('card-container');
  /* divCardContainer.classList.add('card-container-flex'); */
  divCardContainer.style.display = 'flex';
  document.getElementById('card-container-section').style.display = 'none';
  isContainerSection = false;
  divCardContainer.innerHTML = '';
  const title = document.createElement('p');
  title.className = 'title';

  switch (whichFilter) {
    case 'type':
      title.textContent = `Pokemones tipo ${typeChoosed}`;
      break;
    case 'resistant':
      title.textContent = `Pokemones resistentes al tipo ${typeChoosed}`;
      break;
    case 'weaknesses':
      title.textContent = `Pokemones debiles al tipo ${typeChoosed}`;
      break;
    default:
      // do nothing
  }
  divCardContainer.appendChild(title);
  showCard(filterPokemon(whichFilter, typeChoosed), divCardContainer);
};

const showMore = document.getElementsByClassName('show-more');
showMore[0].addEventListener('click', () => { showAllByFilter('type'); });
showMore[1].addEventListener('click', () => { showAllByFilter('resistant'); });
showMore[2].addEventListener('click', () => { showAllByFilter('weaknesses'); });

const loadPage = () => {
  const asideLateralMenu = document.getElementsByTagName('aside')[0];
  putPokemonTypesOnLateralMenu(asideLateralMenu);
  const wordIntroduced = document.getElementById('input-bar-search').value;
  if (wordIntroduced.length === 0 && isContainerSection === false) {
    showCard(data.pokemon, document.getElementById('card-container'));
  }
};

const putCardsOnSlider = (items, container) => {
  for (let i = 0; i < items.length; i += 1) {
    createPokemonCard(i, items[i], container);
  }
};

const showPokemonInSections = () => {
  const divContainerSections = document.getElementById('card-container-section');
  if (isContainerSection === false) {
    isContainerSection = true;
    console.log('modo filtro por seciciones');
    document.getElementById('card-container').style.display = 'none';
    divContainerSections.style.display = 'block';
  }
  const divSections = divContainerSections.getElementsByClassName('slide-cards');
  divSections[0].innerHTML = '';
  divSections[1].innerHTML = '';
  divSections[2].innerHTML = '';
  console.log(divSections[0].className);
  console.log(divSections[1].className);
  console.log(divSections[2].className);

  putCardsOnSlider(resultTypes, divSections[0]);
  putCardsOnSlider(resultResistant, divSections[1]);
  putCardsOnSlider(resultWeaknesses, divSections[2]);
};

const filterPokemonByType = (type) => {
  resultTypes = filterPokemon('type', type);
  resultResistant = filterPokemon('resistant', type);
  resultWeaknesses = filterPokemon('weaknesses', type);
  showPokemonInSections(4);
};

/* let position = 0;

const translateX = (pos, slide) => {
  slide.style.left = `${pos * -150}px`;
};

  const goToNextItem = (event) => {
  const slide = document.getElementById(`slide-cards ${event.value}`);
  const visibleItems = (slide.width === 630) ? 4 : 2;
  const itemsCardsHidden = slide.getElementsByClassName('pokemon-card').length - visibleItems;
  if (position >= 0 && position < itemsCardsHidden) {
    position += 1;
    translateX(position, slide);
  }
};

const goToPrevItem = (event) => {
  const slide = document.getElementById(`slide-cards ${event.value}`);
  if (position > 0) {
    position -= 1;
    translateX(position, slide);
  }
};

const ctrlPrevButtons = document.getElementsByClassName('ctrl-prev');
const ctrlNextButtons = document.getElementsByClassName('ctrl-next'); */

/* ctrlPrevButtons[0].addEventListener('click', goToPrevItem);
ctrlNextButtons[0].addEventListener('click', goToNextItem); */

window.onload = loadPage;

document.addEventListener('click', (element) => {
  if (element.target && element.target.className === 'pokemon-type pokemon-type-button') {
    // divideDivs(filterPokemonByType(element.target.value));
    filterPokemonByType(element.target.value);
    typeChoosed = element.target.value;
  }
});
