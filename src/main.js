
import { dinamicSearchPokemon, filterPokemon, orderBy } from './data.js';

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
const positions = [0, 0, 0];
let typeChoosed = '';

const divCardContainer = document.getElementById('card-container');


const showMessageOfSearch = (container) => {
  container.innerHTML = '<p>Lo sentimos, no encontramos resultados que coincidan con su búsqueda</p>';
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

const createPokemonCard = (index, dataPokemon, container) => {
  if (typeof dataPokemon !== 'undefined') {
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
  } else {
    showMessageOfSearch(container);
  }
};

const showCard = (dataPokemon, container) => {
  for (let i = 0; i < dataPokemon.length; i += 1) {
    createPokemonCard(i, dataPokemon[i], container);
  }
};

const searchPokemon = () => {
  if (isContainerSection === true) {
    console.log('modo busqueda de pokemones');
    document.getElementById('card-container-section').style.display = 'none';
    isContainerSection = false;
    divCardContainer.style.display = 'flex';
  }
  divCardContainer.innerHTML = '';
  const wordIntroduced = document.getElementById('input-bar-search').value;
  const numberOfResult = dinamicSearchPokemon(wordIntroduced).length;
  if (numberOfResult > 0) {
    showCard(dinamicSearchPokemon(wordIntroduced), divCardContainer);
  } else if (numberOfResult === 0 && wordIntroduced.length !== 0) {
    showMessageOfSearch(divCardContainer);
  } else {
    showCard(data.pokemon, divCardContainer);
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

const putPokemonTypesOnMenu = (conteiner) => {
  for (let key = 0; key < pokemonTypes.length; key += 1) {
    typesConteiner.appendChild(createTypeButton(pokemonTypes[key]));
  }
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

const showAllByFilter = (whichFilter) => {
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
    divCardContainer.style.display = 'none';
    divContainerSections.style.display = 'block';
  }
  const divSections = divContainerSections.getElementsByClassName('slide-cards');
  divSections[0].innerHTML = '';
  divSections[1].innerHTML = '';
  divSections[2].innerHTML = '';

  putCardsOnSlider(resultTypes, divSections[0]);
  putCardsOnSlider(resultResistant, divSections[1]);
  putCardsOnSlider(resultWeaknesses, divSections[2]);
};

const filterPokemonByType = (type) => {
  resultTypes = filterPokemon('type', type);
  resultResistant = filterPokemon('resistant', type);
  resultWeaknesses = filterPokemon('weaknesses', type);
  showPokemonInSections();
};

const translateX = (pos, slide) => {
  slide.style.left = `${pos * -164}px`;
};

const goToNextItem = (slider, index) => {
  const visibleItems = (slider.offsetWidth >= 630) ? 4 : 2;
  const totalItems = slider.getElementsByClassName('pokemon-card').length;
  const hiddenItems = totalItems - visibleItems;
  if (positions[index] >= 0 && positions[index] < hiddenItems) {
    positions[index] += 1;
    translateX(positions[index], slider);
  }
};

const goToPrevItem = (slider, index) => {
  console.log('prev');
  if (positions[index] > 0) {
    positions[index] -= 1;
    translateX(positions[index], slider);
  }
};


const sliderSystem = () => {
  const conteinerSection = document.getElementById('card-container-section');
  const sliders = conteinerSection.getElementsByClassName('slide-cards');
  const ctrlPrevButtons = document.getElementsByClassName('ctrl-prev');
  const ctrlNextButtons = document.getElementsByClassName('ctrl-next');

  for (let i = 0; i < 3; i += 1) {
    ctrlPrevButtons[i].addEventListener('click', () => {
      goToPrevItem(sliders[i], i);
    });
    ctrlNextButtons[i].addEventListener('click', () => {
      goToNextItem(sliders[i], i);
    });
  }
};

const filterSystem = () => {
  document.addEventListener('click', (element) => {
    if (element.target && element.target.className === 'pokemon-type pokemon-type-button') {
      filterPokemonByType(element.target.value);
      typeChoosed = element.target.value;
      if (window.screen.width < 1024) {
        hideLateralMenu();
      }
    }
  });
};

// eslint-disable-next-line no-shadow
const menuSystem = (pokemonData) => {
  const filterOptionsContainer = document.getElementById('filter-options-container');
  const buttonOrder = document.getElementsByClassName('btn-menu')[0];
  const buttonFilter = document.getElementsByClassName('btn-menu')[1];
  // const buttonCalculator = document.getElementsByClassName('btn-menu')[2];
  let orderActive = false;
  let filterActive = false;

  putPokemonTypesOnMenu(filterOptionsContainer);

  buttonOrder.addEventListener('click', () => {
    const orderOptions = document.getElementById('ul-order-options');
    if (orderActive) {
      orderOptions.style.display = 'none';
    } else {
      orderOptions.style.display = 'block';
    }
    orderActive = !orderActive;
    if (orderActive) {
      const optionsBtnOrder = document.getElementsByClassName('order-option');
      optionsBtnOrder[0].addEventListener('click', () => { showCard(orderBy(pokemonData, 'max-cp'), divCardContainer); });
      optionsBtnOrder[1].addEventListener('click', () => { showCard(orderBy(pokemonData, 'max-hp'), divCardContainer); });
      optionsBtnOrder[2].addEventListener('click', () => { showCard(orderBy(pokemonData, 'a-z'), divCardContainer); });
    }
  });

  buttonFilter.addEventListener('click', () => {
    // const filterOptions = document.getElementById('filter-options-container');
    if (filterActive) {
      filterOptionsContainer.style.display = 'none';
    } else {
      filterOptionsContainer.style.display = 'block';
    }
    filterActive = !filterActive;
  });
};

const loadPage = () => {
  const currentData = data.pokemon;
  const wordIntroduced = document.getElementById('input-bar-search').value;
  menuSystem(currentData);
  if (wordIntroduced.length === 0 && isContainerSection === false) {
    showCard(currentData, divCardContainer);
  }
};

//menuSystem();
filterSystem();
sliderSystem();
window.onload = loadPage;

// const dataOrdened = orderBy(data.pokemon, 'a-z');
// const array = [];
// console.log(dataOrdened);
// for (let i = 0; i < dataOrdened.length; i += 1) {
//   array.push(dataOrdened[i].name);
// }
// console.log(array);
