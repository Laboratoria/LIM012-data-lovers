/* eslint-disable no-console */
/* eslint-disable no-loop-func */
import {
  dinamicSearchPokemon, filterPokemon, orderBy, changeOrder,
} from './data.js';

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

const desktopSize = 1025;

let resultTypes = [];
let resultResistant = [];
let resultWeaknesses = [];
let currentData = [];
const optionsFilter = [];

let isContainerSection = false;
const positions = [0, 0, 0];
let typeChoosed = '';

const divCardContainerFlex = document.getElementById('card-container-flex');
const divCardContainerBlock = document.getElementById('card-container-block');
let deg = 0;
const titleTop = document.getElementById('top-pagination-p');
// const divTopPagination = document.getElementById('top-pagination');
const modalMode = document.getElementById('modal-mode');
const imgChange = document.getElementById('btn-change-order');

const divOrderBy = document.getElementsByClassName('menu')[0];
const divFilterBy = document.getElementsByClassName('menu')[1];
// const divCalcuBy= document.getElementsByClassName('menu')[2];

const btnChangeOrder = document.getElementById('btn-change-order');
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

const putPokemonTypes = (dataTypesPokemon, divCardTypes) => {
  for (let i = 0; i < dataTypesPokemon.length; i += 1) {
    divCardTypes.appendChild(createPokemonType(dataTypesPokemon[i]));
  }
};

const createPokemonCard = (index, pokemon, container) => {
  if (typeof pokemon !== 'undefined') {
    const card = document.createElement('div');
    card.className = 'pokemon-card  flex-wrap font';
    card.innerHTML = `<span class="pokemon-name">${pokemon.name}</span>              
                      <img class="pokemon-img" src="${pokemon.img}" >
                      <span class="pokemon-cp-hp">MAX CP ${pokemon.stats['max-cp']} / MAX HP ${pokemon.stats['max-cp']}</span>`;
    putPokemonTypes(pokemon.type, card);
    container.append(card);
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
    divCardContainerBlock.style.display = 'none';
    isContainerSection = false;
    divCardContainerFlex.style.display = 'flex';
  }
  const wordIntroduced = document.getElementById('input-bar-search').value;
  currentData = dinamicSearchPokemon(wordIntroduced);
  if (currentData.length > 0) {
    showCard(currentData, divCardContainerFlex);
  } else if (currentData.length === 0 && wordIntroduced.length !== 0) {
    showMessageOfSearch(divCardContainerFlex);
  } else {
    currentData = data.pokemon;
    showCard(currentData, divCardContainerFlex);
  }
};


const createOptionFilter = (name) => {
  const li = document.createElement('li');
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

const changeOrderCurrentData = (container) => {
  deg = 0;
  btnChangeOrder.addEventListener('click', () => {
    console.log('cambiar');
    deg += 180;
    console.log(deg);
    imgChange.style.transform = `rotate(${deg}deg)`;
    currentData = changeOrder(currentData);
    showCard(currentData, container);
  });
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
  divCardContainerFlex.style.display = 'flex';
  btnChangeOrder.style.visibility = 'visible';
  divCardContainerBlock.style.display = 'none';
  isContainerSection = false;
  currentData = filterPokemon(whichFilter, typeChoosed);
  titleTop.textContent = `${typeChoosed}-${whichFilter} pokemons`;
  showCard(currentData, divCardContainerFlex);
};

const showMore = document.getElementsByClassName('show-more');
showMore[0].addEventListener('click', () => { showAllByFilter('type'); });
showMore[1].addEventListener('click', () => { showAllByFilter('resistant'); });
showMore[2].addEventListener('click', () => { showAllByFilter('weaknesses'); });

const showPokemonInSections = () => {
  if (!isContainerSection) {
    isContainerSection = true;
    divCardContainerFlex.style.display = 'none';
    btnChangeOrder.style.visibility = 'hidden';
    divCardContainerBlock.style.display = 'block';
  }
  const divSections = divCardContainerBlock.getElementsByClassName('slide-cards');
  divSections[0].innerHTML = '';
  divSections[1].innerHTML = '';
  divSections[2].innerHTML = '';
  showCard(resultTypes, divSections[0]);
  showCard(resultResistant, divSections[1]);
  showCard(resultWeaknesses, divSections[2]);
};

const filterPokemonByType = (type) => {
  console.log(`tipo: ${type}`);
  resultTypes = filterPokemon('type', type);
  resultResistant = filterPokemon('resistant', type);
  resultWeaknesses = filterPokemon('weaknesses', type);
  console.log(resultTypes, resultResistant, resultWeaknesses);
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
  if (positions[index] > 0) {
    positions[index] -= 1;
    translateX(positions[index], slider);
  }
};


const sliderSystem = () => {
  const sliders = divCardContainerBlock.getElementsByClassName('slide-cards');
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
  // let filterActive = false;
  titleTop.textContent = '';
  const titleSlider = document.getElementsByClassName('title-slider-p');
  console.log(btn);
  // btn.addEventListener('click', () => {
  //   console.log('====================');
  //   if (window.innerWidth >= desktopSize) {
  //     if (filterActive) {
  //       console.log('open-filter');
  //       container.style.display = 'none';
  //       filterActive = false;
  //     } else {
  //       console.log('open-filter');
  //       container.style.display = 'block';
  //       filterActive = true;
  //     }
  //   }
  // });

  for (let i = 0; i < optionsFilter.length; i += 1) {
    btnChangeOrder.style.visibility = 'visible';
    optionsFilter[i].addEventListener('click', () => {
      console.log(optionsFilter[i]);

      filterPokemonByType(optionsFilter[i].textContent);
      typeChoosed = optionsFilter[i].value;
      titleSlider[0].textContent = `${typeChoosed}-type pokemons`;
      titleSlider[1].textContent = `${typeChoosed}-resistant pokemons`;
      titleSlider[2].textContent = `${typeChoosed}-weaknesses pokemons`;
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
  showCard(currentData, divCardContainerFlex);
};

const orderSystem = (btn) => {
  const whichOrder = ['max-cp', 'max-hp', 'a-z'];
  // let orderActive = false;
  const optionsBtnOrder = document.getElementsByClassName('order-option');
  // const orderOptions = document.getElementById('ul-order-options');

  // const desktopMode = (window.innerWidth >= desktopSize);
  // btn.addEventListener('click', () => {
  //   if (window.innerWidth >= desktopSize) {
  //     if (orderActive) {
  //       orderOptions.style.display = 'none';
  //       orderActive = false;
  //     } else {
  //       orderOptions.style.display = 'block';
  //       orderActive = true;
  //     }
  //   }
  // });

  for (let i = 0; i < optionsBtnOrder.length; i += 1) {
    optionsBtnOrder[i].addEventListener('click', () => {
      btnChangeOrder.style.visibility = 'visible';
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
  changeOrderCurrentData(divCardContainerBlock);
};

// eslint-disable-next-line no-shadow
let menuConstructed = false;
const menuSystem = () => {
  const ulFilterOptions = document.getElementById('ul-filter-options');
  if (menuConstructed === false) {
    putPokemonTypesOnMenu(ulFilterOptions);
    menuConstructed = true;
  }

  const buttonOrder = document.getElementById('menu-btn-order');
  const buttonFilter = document.getElementById('menu-btn-filter');

  orderSystem(buttonOrder);
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
    showCard(currentData, divCardContainerFlex);
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
