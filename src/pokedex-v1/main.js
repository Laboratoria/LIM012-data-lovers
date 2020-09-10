/* eslint-disable no-unused-vars */
/* eslint-disable no-param-reassign */
/* eslint-disable no-console */
/* eslint-disable no-loop-func */
import {
  dinamicSearchPokemon, filterPokemon, orderBy, changeOrder, calculateBetterCombinations,
} from '../data.js';

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
let isContainerShowMore = false;
let isShowMove = true;
let showMoreSection = '';
const positions = [0, 0, 0];
let typeChoosed = '';

const getById = (label) => { document.getElementById(label); };
const getByClass = (label) => { document.getElementsByClassName(label); };
const getByQuery = (label) => { document.getElementsByClassName(label); };

const divCardContainerFlex = getById('card-container-flex');
const divCardContainerBlock = getById('card-container-block');
let deg = 0;
const titleTop = getById('top-pagination-p');
const modalMode = getById('modal-mode');
const btnChangeOrder = getById('btn-change-order');

const divOrderBy = getByClass('menu')[0];
const divFilterBy = getByClass('menu')[1];

const modalWindow = getById('modal-window');

const orderBySelect = getById('order-by-select');
const topTitle = getById('top-pagination-p');
const iconTitle = document.querySelector('.icon-title');
const iconArrowBack = document.querySelector('.icon-back');
const iconHome = document.querySelector('#icon-nav-home');
const iconGoTop = document.querySelector('#icon-arrow-up');

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
    card.setAttribute('name', pokemon.name);
    card.className = 'pokemon-card  flex-wrap font grow';
    card.id = pokemon.name;
    card.innerHTML = `<span class="pokemon-name">${pokemon.name}</span>
                      <span class="pokemon-cp-hp">MAX CP ${pokemon.stats['max-cp']} / MAX HP ${pokemon.stats['max-cp']}</span>              
                      <img class="pokemon-img-medium" src="${pokemon.img}">
                      <span class= "pokemon-about" > ${pokemon.about}</span>`;
    putPokemonTypes(pokemon.type, card);
    container.append(card);
  }
};

const showCard = (dataPokemon, container) => {
  container.innerHTML = '';
  for (let i = 0; i < dataPokemon.length; i += 1) {
    createPokemonCard(i, dataPokemon[i], container);
  }
};

const searchPokemon = () => {
  orderBySelect.selectedIndex = 0;
  topTitle.textContent = '';
  iconTitle.style.visibility = 'hidden';
  iconArrowBack.style.visibility = 'hidden';
  if (isContainerSection === true) {
    divCardContainerBlock.style.display = 'none';
    isContainerSection = false;
    divCardContainerFlex.style.display = 'flex';
  }
  const wordIntroduced = getById('input-bar-search').value;
  currentData = dinamicSearchPokemon(wordIntroduced);
  if (currentData.length > 0) {
    showCard(currentData, divCardContainerFlex);
  } else if (currentData.length === 0 && wordIntroduced.length !== 0) {
    divCardContainerFlex.innerHTML = `<p class="message font text-aling">
    Sorry, no results were found for your search <span class="import-text font">${wordIntroduced}</span> make sure it is well written
    <i class="icon-wondering font"></i></p>`;
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
  optionsFilter.push(li);
  return li;
};

const pokemonTypes = Object.keys(typeColors);


const putPokemonTypesOnMenu = (container) => {
  for (let key = 0; key < pokemonTypes.length; key += 1) {
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
  const lateralMenu = getById('lateral-menu');
  lateralMenu.style.width = '0';
  lateralMenu.getElementsByClassName('section-filter-by')[0].style.display = 'block';
};

const onlyText = (e) => {
  const key = e.keyCode || e.which;
  const tecla = String.fromCharCode(key).toLowerCase();
  const letras = ' áéíóúabcdefghijklmnñopqrstuvwxyz';

  if (letras.indexOf(tecla) === -1) {
    e.preventDefault();
  }
};


btnChangeOrder.addEventListener('click', () => {
  deg += 180;
  btnChangeOrder.style.transform = `rotate(${deg}deg)`;
  currentData = changeOrder(currentData);
  showCard(currentData, divCardContainerFlex);
});
// const changeOrderCurrentData = () => {
// };

const inputBarSearch = getById('input-bar-search');
inputBarSearch.addEventListener('keyup', searchPokemon);
inputBarSearch.addEventListener('keypress', onlyText, false);

const topMenuFilterBtn = getByClass('top-menu-option')[0];
const topMenuOrderBtn = getByClass('top-menu-option')[1];
const btnCloseMenu = getById('close-menu');
const btnCloseModal = getById('close-modal');

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
  isShowMove = true;
  modalWindow.style.display = 'none';
  modalMode.style.display = 'none';
});

const translateX = (pos, slide, width) => {
  slide.style.left = `${pos * -width}px`;
};
let widthCard = 0;

const goToNextItem = (slide, sliderCards, index) => {
  const numCards = sliderCards.getElementsByClassName('pokemon-card').length;
  widthCard = sliderCards.offsetWidth / numCards;
  const visibleItems = Math.round(slide.offsetWidth / widthCard);
  const totalItems = sliderCards.getElementsByClassName('pokemon-card').length;
  const hiddenItems = totalItems - visibleItems;
  if (positions[index] >= 0 && positions[index] < hiddenItems) {
    positions[index] += 1;
    translateX(positions[index], sliderCards, widthCard);
  }
};

const goToPrevItem = (slider, index) => {
  if (positions[index] > 0) {
    positions[index] -= 1;
    translateX(positions[index], slider, widthCard);
  }
};

const sliderSystem = () => {
  const slideCards = divCardContainerBlock.getElementsByClassName('slide-cards');
  const slide = divCardContainerBlock.getElementsByClassName('slide');
  const ctrlPrevButtons = getByClass('ctrl-prev');
  const ctrlNextButtons = getByClass('ctrl-next');
  for (let i = 0; i < 3; i += 1) {
    ctrlPrevButtons[i].addEventListener('click', () => {
      goToPrevItem(slideCards[i], i);
    });
    ctrlNextButtons[i].addEventListener('click', () => {
      goToNextItem(slide[i], slideCards[i], i);
    });
  }
};
/* --------------------- mostrar mas pokemones ------------------------ */
const showAllPokemons = (listData) => {
  divCardContainerFlex.style.display = 'flex';
  divCardContainerBlock.style.display = 'none';
  showCard(listData, divCardContainerFlex);
  isContainerSection = false;
  isContainerShowMore = true;
};

iconArrowBack.addEventListener('click', (event) => {
  divCardContainerFlex.style.display = 'none';
  divCardContainerBlock.style.display = 'block';
  isContainerSection = true;
  event.target.style.visibility = 'hidden';
});

const showMore = getByClass('show-more');
showMore[0].addEventListener('click', () => {
  iconArrowBack.style.visibility = 'visible';
  showAllPokemons(resultTypes);
  currentData = resultTypes;
  titleTop.textContent = `${typeChoosed} Type Pokemons`;
  topTitle.textContent = typeChoosed;
  showMoreSection = 'type';
});

showMore[1].addEventListener('click', () => {
  iconArrowBack.style.visibility = 'visible';
  showAllPokemons(resultResistant);
  currentData = resultResistant;
  titleTop.textContent = `Pokemons resistant to the ${typeChoosed} Type`;
  topTitle.textContent = typeChoosed;
  showMoreSection = 'resistant';
});

showMore[2].addEventListener('click', () => {
  iconArrowBack.style.visibility = 'visible';
  showAllPokemons(resultWeaknesses);
  currentData = resultWeaknesses;
  titleTop.textContent = `Pokemons weaknesses to the ${typeChoosed} Type`;
  topTitle.textContent = typeChoosed;
  showMoreSection = 'weaknesses';
});

const showMessageInSection = (container, section) => {
  container.innerHTML = `<p class="message font text-aling" >Sorry, there are no ${section} pokemons for this type</p>`;
};

/* -------- muestra mokempnes despues del filrtado por tipo -----------*/
const showPokemonInSections = () => {
  if (isContainerSection === false) {
    isContainerSection = true;
    divCardContainerFlex.style.display = 'none';
    btnChangeOrder.style.visibility = 'hidden';
    divCardContainerBlock.style.display = 'block';
  }
  const sliders = divCardContainerBlock.getElementsByClassName('slider');
  const divSections = divCardContainerBlock.getElementsByClassName('slide-cards');
  divSections[0].innerHTML = '';
  divSections[1].innerHTML = '';
  divSections[2].innerHTML = '';
  showCard(resultTypes, divSections[0]);
  if (resultResistant.length > 0) {
    showCard(resultResistant, divSections[1]);
  } else {
    sliders[1].querySelector('.show-more').style.visibility = 'hidden';
    sliders[1].getElementsByTagName('button')[0].style.visibility = 'hidden';
    sliders[1].getElementsByTagName('button')[1].style.visibility = 'hidden';
    showMessageInSection(divSections[1], 'resistant');
  }

  if (resultWeaknesses.length > 0) {
    showCard(resultWeaknesses, divSections[2]);
    sliders[2].querySelector('.show-more').style.visibility = 'visible';
    sliders[2].getElementsByTagName('button')[0].style.visibility = 'visible';
    sliders[2].getElementsByTagName('button')[1].style.visibility = 'visible';
  } else {
    sliders[2].querySelector('.show-more').style.visibility = 'hidden';
    sliders[2].getElementsByTagName('button')[0].style.visibility = 'hidden';
    sliders[2].getElementsByTagName('button')[1].style.visibility = 'hidden';
    showMessageInSection(divSections[2], 'resistant');
  }
};

const filterPokemonsByType = (type) => {
  resultTypes = filterPokemon('type', type);
  resultResistant = filterPokemon('resistant', type);
  resultWeaknesses = filterPokemon('weaknesses', type);
};

const filterSystem = () => {
  titleTop.textContent = '';
  const titleSlider = getByClass('title-slider-p');
  const resultSlider = getByClass('result');
  for (let i = 0; i < optionsFilter.length; i += 1) {
    optionsFilter[i].addEventListener('click', () => {
      window.scrollTo(0, window.scrollY);
      orderBySelect.selectedIndex = 0;
      // eslint-disable-next-line no-return-assign
      optionsFilter.forEach(element => element.style.background = '#1B262C');
      optionsFilter[i].style.background = 'var(--color-blue-3)';
      isContainerShowMore = false;
      if (window.innerWidth < desktopSize) hideMenu();
      btnChangeOrder.style.visibility = 'hidden';
      isContainerShowMore = false;
      topTitle.textContent = optionsFilter[i].textContent;
      iconTitle.setAttribute('src', `images/${optionsFilter[i].textContent}-icon.png`);
      iconTitle.style.visibility = 'visible';
      filterPokemonsByType(optionsFilter[i].textContent);
      typeChoosed = optionsFilter[i].textContent;
      resultSlider[0].textContent = `${resultTypes.length}`;
      resultSlider[1].textContent = `${resultResistant.length}`;
      resultSlider[2].textContent = `${resultWeaknesses.length}`;
      titleSlider[0].textContent = `${typeChoosed} Pokemons`;
      titleSlider[1].textContent = `Pokemons resistant to ${typeChoosed}`;
      titleSlider[2].textContent = `Pokemons weak to ${typeChoosed} `;
      showPokemonInSections();
    });
  }
};

// revisando codigo
const orderSections = (option) => {
  resultTypes = orderBy(resultTypes, option);
  resultResistant = orderBy(resultResistant, option);
  resultWeaknesses = orderBy(resultWeaknesses, option);
  showPokemonInSections();
};

const orderSystem = () => {
  if (window.innerWidth >= desktopSize) {
    orderBySelect.addEventListener('change', (event) => {
      deg = 0;
      btnChangeOrder.style.transform = `rotate(${deg}deg)`;
      if (event.target.value !== '') {
        btnChangeOrder.style.visibility = (isContainerSection) ? 'hidden' : 'visible';
        if (isContainerSection) {
          orderSections(event.target.value);
        } else {
          currentData = orderBy(currentData, event.target.value);
          showCard(currentData, divCardContainerFlex);
          // changeOrderCurrentData(divCardContainerFlex);
        }
      }
    });
  } else {
    const whichOrder = ['max-cp', 'max-hp', 'a-z'];
    const optionsOrder = getByClass('order-option');
    for (let i = 0; i < optionsOrder.length; i += 1) {
      optionsOrder[i].addEventListener('click', () => {
        deg = 0;
        btnChangeOrder.style.transform = `rotate(${deg}deg)`;
        hideMenu();
        for (let j = 0; j < optionsOrder.length; j += 1) {
          optionsOrder[j].style.background = 'rgb(43, 41, 41)';
        }
        optionsOrder[i].style.background = '#0F4C75';
        btnChangeOrder.style.visibility = (isContainerSection) ? 'hidden' : 'visible';
        if (isContainerSection) {
          orderSections(whichOrder[i]);
        } else {
          currentData = orderBy(currentData, whichOrder[i]);
          showCard(currentData, divCardContainerFlex);
          // changeOrderCurrentData(divCardContainerFlex);
        }
      });
    }
  }
};

// eslint-disable-next-line no-shadow
let menuConstructed = false;
const menuSystem = () => {
  const ulFilterOptions = getById('ul-filter-options');
  if (menuConstructed === false) {
    putPokemonTypesOnMenu(ulFilterOptions);
    menuConstructed = true;
  }

  const buttonOrder = getById('menu-btn-order');
  const buttonFilter = getById('menu-btn-filter');

  orderSystem(buttonOrder);
  filterSystem(buttonFilter, ulFilterOptions);
};
const createIconType = (type) => {
  const iconType = document.createElement('img');
  iconType.className = 'icon-medium';
  iconType.setAttribute('src', `images/${type}-icon.png`);
  return iconType;
};

const showEvolution = (poke, container, prev, next) => {
  container.innerHTML = '';
  let divContainer; let pokemon;
  if (prev !== undefined) {
    for (let i = 0; i < prev.length; i += 1) {
      pokemon = data.pokemon.find(pk => pk.name === prev[i].name);
      if (pokemon !== undefined) {
        divContainer = document.createElement('div');
        divContainer.className = 'card-pokemon-evolition';
        divContainer.innerHTML = `<span class="font pokemon-name">${pokemon.name}</span>
                                  <img src="${pokemon.img}" alt="" class="pokemon-img-small">`;
        container.append(divContainer);
      }
    }
  }
  divContainer = document.createElement('div');
  divContainer.className = 'card-pokemon-evolition';
  divContainer.innerHTML = `<span class="font pokemon-name">${poke.name}</span>
                            <img src="${poke.img}" alt="" class="pokemon-img-small">`;
  container.append(divContainer);

  if (next !== undefined) {
    for (let i = 0; i < next.length; i += 1) {
      pokemon = data.pokemon.find(pk => pk.name === next[i].name);
      if (pokemon !== undefined) {
        divContainer = document.createElement('div');
        divContainer.className = 'card-pokemon-evolition';
        divContainer.innerHTML = `<span class="font pokemon-name">${pokemon.name}</span>
                                  <img src="${pokemon.img}" alt="" class="pokemon-img-small">`;
        container.append(divContainer);
      }
    }
  }
};

const createIcons = (list, container) => {
  for (let i = 0; i < list.length; i += 1) {
    container.append(createIconType(list[i]));
  }
};

const buildTable = (list, table) => {
  table.innerHTML = '';
  table.innerHTML = `<tr><th></th>
                    <th><img class="icon-small" src="images/type.png"></th>
                    <th><img class="icon-small" src="images/box.png"></th>
                    <th><img class="icon-small" src="images/energy.png"></th>
                    <th><img class="icon-small" src="images/time.png"></tr>`;
  for (let i = 0; i < list.length; i += 1) {
    const row = `<tr><td>${list[i].name}</td>
                    <td><img class="icon-small" src="/images/${list[i].type}-icon.png"></td>
                    <td>${list[i]['base-damage']}</td>
                    <td>${list[i].energy}</td>
                    <td>${list[i]['move-duration-seg']}</td></tr>`;
    table.innerHTML += `${row}`;
  }
};
const divMoveAndAttacks = getById('move-and-attack');
const divcalculateMove = getById('calculate-damage');

const showDamageOfMove = (btn) => {
  if (btn.name === 'calculate') {
    divMoveAndAttacks.style.display = 'none';
    divcalculateMove.style.display = 'block';
    btn.textContent = 'Moves & Attacks';
    btn.name = 'moves';
  } else {
    divMoveAndAttacks.style.display = 'flex';
    divcalculateMove.style.display = 'none';
    btn.textContent = 'Calculate Damage';
    btn.name = 'calculate';
  }
};
// let isCalculate = false;
const calculeDamage = (container, list) => {
  container.innerHTML = '';
  container.innerHTML += '<tr><th>Quick Move</th><th></th><th>Special Attack</th><th></th><th>Damage</th></tr>';
  for (let i = 0; i < list.length; i += 1) {
    container.innerHTML += `<tr><td>${list[i][0]}</td><td><img src="images/plus1.png" class="icon-small"></td>
                            <td>${list[i][1]}</td><td><img src="images/igual1.png" class="icon-small"></td>
                            <td>${list[i][2]}</td></tr>`;
  }
};

const btnCalc = getById('get-set-move');
btnCalc.addEventListener('click', () => {
  showDamageOfMove(btnCalc);
});

const showInfoPokemon = (name) => {
  modalWindow.style.display = 'block';
  const pokemon = data.pokemon.find(pk => pk.name === name);
  getById('img-pokemon-modal').setAttribute('src', pokemon.img);
  getById('div-pokemon-name-modal').textContent = pokemon.name;
  getById('height').textContent = pokemon.size.height;
  getById('candy').textContent = pokemon.evolution.candy.replace('candy', '');
  getById('region').textContent = pokemon.generation.name;
  getById('weight').textContent = pokemon.size.weight;
  const types = getById('types');
  const resistant = getById('resistant');
  const weaknesses = getById('weaknesses');
  types.innerHTML = '';
  resistant.innerHTML = '';
  weaknesses.innerHTML = '';
  createIcons(pokemon.type, types);
  createIcons(pokemon.resistant, resistant);
  createIcons(pokemon.weaknesses, weaknesses);
  const specialAttacks = getById('special-attacks-table');
  const quickMove = getById('quick-move-table');
  const calcDamage = getById('table-damage');
  calcDamage.innerHTML = '';
  calculeDamage(calcDamage, calculateBetterCombinations(pokemon));
  buildTable(pokemon['special-attack'], specialAttacks);
  buildTable(pokemon['quick-move'], quickMove);
  const evolution = getById('evolution');
  showEvolution(pokemon, evolution, pokemon.evolution['prev-evolution'], pokemon.evolution['next-evolution']);
};

const loadPage = () => {
  window.scrollTo(0, 0);
  currentData = data.pokemon;
  const wordIntroduced = getById('input-bar-search').value;
  menuSystem();
  if (wordIntroduced.length === 0 && isContainerSection === false) {
    showCard(currentData, divCardContainerFlex);
  }
};

document.addEventListener('click', (event) => {
  const element = event.target.parentNode;
  if (element.className === 'pokemon-card  flex-wrap font grow') {
    modalMode.style.display = 'block';
    divMoveAndAttacks.style.display = 'flex';
    divcalculateMove.style.display = 'none';
    btnCalc.name = 'calculate';
    btnCalc.textContent = 'Calculate Damage';
    showInfoPokemon(element.id);
  }
});

iconHome.addEventListener('click', () => {
  isContainerSection = false;
  divCardContainerBlock.style.display = 'none';
  divCardContainerFlex.style.display = 'flex';
  iconTitle.style.visibility = 'hidden';
  titleTop.textContent = '';
  currentData = data.pokemon;
  showCard(currentData, divCardContainerFlex);
});

iconGoTop.addEventListener('click', () => {
  window.scrollTo(0, 0);
});

window.addEventListener('scroll', () => {
  iconGoTop.style.height = (window.scrollY > 500) ? '60px' : '0px';
});

sliderSystem();
window.onload = loadPage;
