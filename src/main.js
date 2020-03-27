/* eslint-disable no-loop-func */
/* eslint-disable no-console */
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

const desktopSize = 1024;

let resultTypes = [];
let resultResistant = [];
let resultWeaknesses = [];
let currentData = [];
const optionsFilter = [];

let isContainerSection = false;
const positions = [0, 0, 0];
let typeChoosed = '';

const divCardContainer = document.getElementById('card-container');
const divSectionsContainer = document.getElementById('card-container-section');
const modalMode = document.getElementById('modal-mode');

const divOrderBy = document.getElementsByClassName('menu')[0];
const divFilterBy = document.getElementsByClassName('menu')[1];
// const divCalcuBy= document.getElementsByClassName('menu')[2];

const modalWindow = document.getElementById('modal-window');

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
  img.className = 'img-pokemon';
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
    divCard.id = dataPokemon.name;
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
  container.innerHTML = '';
  for (let i = 0; i < dataPokemon.length; i += 1) {
    createPokemonCard(i, dataPokemon[i], container);
  }
};

const searchPokemon = () => {
  if (isContainerSection === true) {
    console.log('modo busqueda de pokemones');
    divSectionsContainer.style.display = 'none';
    isContainerSection = false;
    divCardContainer.style.display = 'flex';
  }
  const wordIntroduced = document.getElementById('input-bar-search').value;
  currentData = dinamicSearchPokemon(wordIntroduced);
  if (currentData.length > 0) {
    showCard(currentData, divCardContainer);
  } else if (currentData.length === 0 && wordIntroduced.length !== 0) {
    showMessageOfSearch(divCardContainer);
  } else {
    currentData = data.pokemon;
    showCard(currentData, divCardContainer);
  }
};


const createTypeButton = (type) => {
  const buttonPokemonType = document.createElement('button');
  buttonPokemonType.className = 'pokemon-type pokemon-type-button';
  buttonPokemonType.setAttribute('value', type);
  const iconPokemonType = document.createElement('img');
  iconPokemonType.className = 'icon-pokemon-type';
  iconPokemonType.setAttribute('src', `images/${type}.png`);
  buttonPokemonType.appendChild(iconPokemonType);
  buttonPokemonType.appendChild(document.createTextNode(type));
  buttonPokemonType.style.background = typeColors[type];
  optionsFilter.push(buttonPokemonType);
  return buttonPokemonType;
};

const pokemonTypes = Object.keys(typeColors);


const putPokemonTypesOnMenu = (container) => {
  for (let key = 0; key < pokemonTypes.length; key += 1) {
    container.appendChild(createTypeButton(pokemonTypes[key]));
  }
  divFilterBy.appendChild(container);
};

const showLateralMenu = (which) => {
  const asideLateralMenu = document.getElementsByTagName('aside')[0];
  asideLateralMenu.style.width = (window.screen.width < 768) ? '80%' : '50%';
  if (which === 'filter') {
    divOrderBy.style.display = 'none';
    divFilterBy.style.display = 'block';
  } else {
    divFilterBy.style.display = 'none';
    divOrderBy.style.display = 'block';
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
const btnCloseMenu = document.getElementById('close-menu');
const btnCloseModal = document.getElementById('close-modal');

buttonFilterPokemon.addEventListener('click', () => {
  showLateralMenu('filter');
});
buttonOrderPokemon.addEventListener('click', () => {
  showLateralMenu('order');
});
btnCloseMenu.addEventListener('click', hideLateralMenu);
btnCloseModal.addEventListener('click', () => {
  modalWindow.style.display = 'none';
  modalMode.style.display = 'none';
});

const showAllByFilter = (whichFilter) => {
  divCardContainer.style.display = 'flex';
  divSectionsContainer.style.display = 'none';
  isContainerSection = false;
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
  currentData = filterPokemon(whichFilter, typeChoosed);
  showCard(currentData, divCardContainer);
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
  if (!isContainerSection) {
    isContainerSection = true;
    console.log('modo filtro por seciciones');
    divCardContainer.style.display = 'none';
    divSectionsContainer.style.display = 'block';
  }
  const divSections = divSectionsContainer.getElementsByClassName('slide-cards');
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
  const sliders = divSectionsContainer.getElementsByClassName('slide-cards');
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

const filterSystem = (btn, container) => {
  // const desktopMode = (window.innerWidth >= desktopSize);
  let filterActive = false;
  btn.addEventListener('click', () => {
    if (window.innerWidth >= desktopSize) {
      if (filterActive) {
        container.style.display = 'none';
        filterActive = false;
      } else {
        container.style.display = 'block';
        filterActive = true;
      }
    }
  });

  for (let i = 0; i < optionsFilter.length; i += 1) {
    optionsFilter[i].addEventListener('click', () => {
      filterPokemonByType(optionsFilter[i].value);
      typeChoosed = optionsFilter[i].value;
      if ((window.innerWidth >= desktopSize) === false) {
        hideLateralMenu();
      }
    });
  }
};


const orderSections = (option) => {
  resultTypes = orderBy(resultTypes, option);
  resultResistant = orderBy(resultResistant, option);
  resultWeaknesses = orderBy(resultWeaknesses, option);
  showPokemonInSections();
};

const orderSimpleData = (option) => {
  currentData = orderBy(currentData, option);
  showCard(currentData, divCardContainer);
};

const orderSystem = (btn) => {
  const whichOrder = ['max-cp', 'max-hp', 'a-z'];
  let orderActive = false;
  const optionsBtnOrder = document.getElementsByClassName('order-option');
  const orderOptions = document.getElementById('ul-order-options');

  // const desktopMode = (window.innerWidth >= desktopSize);
  btn.addEventListener('click', () => {
    if (window.innerWidth >= desktopSize) {
      if (orderActive) {
        orderOptions.style.display = 'none';
        orderActive = false;
      } else {
        orderOptions.style.display = 'block';
        orderActive = true;
      }
      console.log(`orderActive: ${orderActive}`);
    }
  });

  for (let i = 0; i < optionsBtnOrder.length; i += 1) {
    optionsBtnOrder[i].addEventListener('click', () => {
      if (isContainerSection) {
        orderSections(whichOrder[i]);
      } else {
        orderSimpleData(whichOrder[i]);
      }

      if ((window.innerWidth >= desktopSize) === false) {
        hideLateralMenu();
      }
    });
  }
};

// eslint-disable-next-line no-shadow
let menuConstructed = false;
const menuSystem = () => {
  const divFilterOptions = document.getElementById('filter-options');
  if (menuConstructed === false) {
    putPokemonTypesOnMenu(divFilterOptions);
    menuConstructed = true;
  }
  // let filterActive = false;

  const buttonOrder = document.getElementById('menu-btn-order');
  const buttonFilter = document.getElementById('menu-btn-filter');

  orderSystem(buttonOrder);
  filterSystem(buttonFilter, divFilterOptions);
};
const createIconType = (type) => {
  const iconType = document.createElement('img');
  iconType.className = 'icon-medium';
  iconType.setAttribute('src', `images/${type}-icon.png`);
  return iconType;
};

const showEvolution = (currentPokemon, container, prev, next) => {
  container.innerHTML = '';
  console.log(prev);
  if (prev !== undefined) {
    for (let i = 0; i < prev.length; i += 1) {
      const divContainer = document.createElement('div');
      divContainer.className = 'div-evolution-img';
      const img = document.createElement('img');
      img.className = 'pokemon-img-small';
      const pokemon = data.pokemon.find(pk => pk.name === prev[i].name);
      img.setAttribute('src', pokemon.img);
      divContainer.append(img);
      container.append(img);
    }
  }
  const imgCurr = document.createElement('img');
  imgCurr.className = 'pokemon-img-small';
  imgCurr.style.border = 'rgb(238, 222, 76) solid 1px';
  imgCurr.setAttribute('src', currentPokemon);
  container.append(imgCurr);

  // console.log(next);
  if (next !== undefined) {
    for (let i = 0; i < next.length; i += 1) {
      const divContainer = document.createElement('div');
      divContainer.className = 'div-evolution-img';
      const img = document.createElement('img');
      img.className = 'pokemon-img-small';
      const pokemon = data.pokemon.find(pk => pk.name === next[i].name);
      img.setAttribute('src', pokemon.img);
      divContainer.append(img);
      container.append(img);
    }
  }
};

const showInfoPokemon = (name) => {
  modalWindow.style.display = 'block';
  const pokemon = data.pokemon.find(pk => pk.name === name);
  document.getElementById('img-pokemon-modal').setAttribute('src', pokemon.img);
  document.getElementById('div-pokemon-name-modal').textContent = pokemon.name;
  document.getElementById('height').textContent = pokemon.size.height;
  document.getElementById('region').textContent = pokemon.generation.name;
  document.getElementById('weight').textContent = pokemon.size.weight;
  const types = document.getElementById('types');
  const resistant = document.getElementById('resistant');
  const weaknesses = document.getElementById('weaknesses');
  types.innerHTML = '';
  resistant.innerHTML = '';
  weaknesses.innerHTML = '';
  for (let i = 0; i < pokemon.type.length; i += 1) {
    types.append(createIconType(pokemon.type[i]));
  }
  for (let i = 0; i < pokemon.resistant.length; i += 1) {
    resistant.append(createIconType(pokemon.resistant[i]));
  }
  for (let i = 0; i < pokemon.weaknesses.length; i += 1) {
    weaknesses.append(createIconType(pokemon.weaknesses[i]));
  }
  document.getElementById('max-cp').textContent = pokemon.stats['max-cp'];
  document.getElementById('max-hp').textContent = pokemon.stats['max-hp'];
  const specialAttacks = document.getElementById('special-attacks');
  specialAttacks.innerHTML = '';
  for (let i = 0; i < pokemon['special-attack'].length; i += 1) {
    const span = document.createElement('span');
    span.className = 'text-aling label-data';
    span.textContent = pokemon['special-attack'][i].name;
    specialAttacks.append(span);
  }
  const evolution = document.getElementById('evolution');

  showEvolution(pokemon.img, evolution, pokemon.evolution['prev-evolution'], pokemon.evolution['next-evolution']);
};

const loadPage = () => {
  currentData = data.pokemon;
  const wordIntroduced = document.getElementById('input-bar-search').value;
  menuSystem();
  if (wordIntroduced.length === 0 && isContainerSection === false) {
    showCard(currentData, divCardContainer);
  }
  const listOfPokemonCards = document.getElementsByClassName('pokemon-card');
  for (let i = 0; i < listOfPokemonCards.length; i += 1) {
    listOfPokemonCards[i].addEventListener('click', () => {
      modalMode.style.display = 'block';
      showInfoPokemon(listOfPokemonCards[i].id);
    });
  }
};

sliderSystem();
window.onload = loadPage;
