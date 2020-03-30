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

const divCardConteinerFlex = document.getElementById('card-container-flex');
const divCardConteinerBlock = document.getElementById('card-container-block');
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
  divPokemonType.className = 'pokemon-type font';
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
    divCard.className = 'pokemon-card grow';
    container.appendChild(divCard);
    const divCardName = document.createElement('div');
    const divCardImage = document.createElement('div');
    const divCardTypes = document.createElement('div');
    divCardName.className = 'pokemon-name font';
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
    divCardConteinerBlock.style.display = 'none';
    isContainerSection = false;
    divCardConteinerFlex.style.display = 'flex';
  }
  const wordIntroduced = document.getElementById('input-bar-search').value;
  currentData = dinamicSearchPokemon(wordIntroduced);
  if (currentData.length > 0) {
    showCard(currentData, divCardConteinerFlex);
  } else if (currentData.length === 0 && wordIntroduced.length !== 0) {
    showMessageOfSearch(divCardConteinerFlex);
  } else {
    currentData = data.pokemon;
    showCard(currentData, divCardConteinerFlex);
  }
};


const createOptionFilter = (name) => {
  const li = document.createElement('li');
  // const a = document.createElement('a');
  const icon = document.createElement('img');
  li.className = 'option filter-option';
  icon.className = 'icon-medium icon-filter';
  icon.setAttribute('src', `images/${name}-icon.png`);
  li.textContent = name;
  li.append(icon);
  // li.append(a);
  optionsFilter.push(li);
  return li;
};

const pokemonTypes = Object.keys(typeColors);


const putPokemonTypesOnMenu = (container) => {
  for (let key = 0; key < pokemonTypes.length; key += 1) {
    // container.appendChild(createTypeButton(pokemonTypes[key]));
    container.appendChild(createOptionFilter(pokemonTypes[key]));
  }
  divFilterBy.appendChild(container);
};

const showMenu = (which) => {
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

const hideMenu = () => {
  modalMode.style.display = 'none';
  const lateralMenu = document.getElementById('lateral-menu');
  lateralMenu.style.width = '0';
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

const topMenuFilterBtn = document.getElementsByClassName('top-menu-option')[0];
const topMenuOrderBtn = document.getElementsByClassName('top-menu-option')[1];
const btnCloseMenu = document.getElementById('close-menu');
const btnCloseModal = document.getElementById('close-modal');

topMenuFilterBtn.addEventListener('click', () => {
  showMenu('filter');
  modalMode.style.display = 'block';
});
topMenuOrderBtn.addEventListener('click', () => {
  showMenu('order');
  modalMode.style.display = 'block';
});
btnCloseMenu.addEventListener('click', hideMenu);

btnCloseModal.addEventListener('click', () => {
  modalWindow.style.display = 'none';
  modalMode.style.display = 'none';
});

const showAllByFilter = (whichFilter) => {
  divCardConteinerFlex.style.display = 'flex';
  divCardConteinerBlock.style.display = 'none';
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
  divCardConteinerFlex.appendChild(title);
  currentData = filterPokemon(whichFilter, typeChoosed);
  showCard(currentData, divCardConteinerFlex);
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
    divCardConteinerFlex.style.display = 'none';
    divCardConteinerBlock.style.display = 'block';
  }
  const divSections = divCardConteinerBlock.getElementsByClassName('slide-cards');
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
  const sliders = divCardConteinerBlock.getElementsByClassName('slide-cards');
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
        console.log('open-filter');
        container.style.display = 'none';
        filterActive = false;
      } else {
        console.log('open-filter');
        container.style.display = 'block';
        filterActive = true;
      }
    }
  });

  for (let i = 0; i < optionsFilter.length; i += 1) {
    optionsFilter[i].addEventListener('click', () => {
      filterPokemonByType(optionsFilter[i].textContent);
      typeChoosed = optionsFilter[i].textContent;
      if ((window.innerWidth >= desktopSize) === false) {
        hideMenu();
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
  showCard(currentData, divCardConteinerFlex);
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
        hideMenu();
      }
    });
  }
};

// eslint-disable-next-line no-shadow
let menuConstructed = false;
const menuSystem = () => {
  // const divFilterOptions = document.getElementById('filter-options');
  const ulFilterOptions = document.getElementById('ul-filter-options');
  if (menuConstructed === false) {
    // putPokemonTypesOnMenu(divFilterOptions);
    putPokemonTypesOnMenu(ulFilterOptions);
    menuConstructed = true;
  }
  // let filterActive = false;

  const buttonOrder = document.getElementById('menu-btn-order');
  const buttonFilter = document.getElementById('menu-btn-filter');

  orderSystem(buttonOrder);
  // filterSystem(buttonFilter, divFilterOptions);
  filterSystem(buttonFilter, ulFilterOptions);
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
    showCard(currentData, divCardConteinerFlex);
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
