/* eslint-disable no-unused-vars */
/* eslint-disable no-param-reassign */
/* eslint-disable no-console */
/* eslint-disable no-loop-func */
import {
  dinamicSearchPokemon, filterPokemon, orderBy, changeOrder, calculateBettersCombination,
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
// const optionsOrder = [];
let isContainerSection = false;
let isContainerShowMore = false;
let isShowMove = true;
let showMoreSection = '';
const positions = [0, 0, 0];
let typeChoosed = '';

const divCardContainerFlex = document.getElementById('card-container-flex');
const divCardContainerBlock = document.getElementById('card-container-block');
let deg = 0;
const titleTop = document.getElementById('top-pagination-p');
const modalMode = document.getElementById('modal-mode');
const imgChange = document.getElementById('btn-change-order');

const divOrderBy = document.getElementsByClassName('menu')[0];
const divFilterBy = document.getElementsByClassName('menu')[1];

const btnChangeOrder = document.getElementById('btn-change-order');
const modalWindow = document.getElementById('modal-window');


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

const showMessageOfSearch = (container) => {
  container.innerHTML = '<p>Lo sentimos, no encontramos resultados que coincidan con su búsqueda</p>';
};
const createPokemonCard = (index, pokemon, container) => {
  if (typeof pokemon !== 'undefined') {
    const card = document.createElement('div');
    card.setAttribute('name', pokemon.name);
    card.className = 'pokemon-card  flex-wrap font grow';
    card.id = pokemon.name;
    card.innerHTML = `<span class="pokemon-name">${pokemon.name}</span>
                      <span class="pokemon-cp-hp">MAX CP ${pokemon.stats['max-cp']} / MAX HP ${pokemon.stats['max-cp']}</span>              
                      <img class="pokemon-img" src="${pokemon.img}">
                      <span class= "pokemon-about" > ${pokemon.about}</span>`;
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


const changeOrderCurrentData = () => {
  deg = 0;
  btnChangeOrder.addEventListener('click', () => {
    deg += 180;
    imgChange.style.transform = `rotate(${deg}deg)`;
    currentData = changeOrder(currentData);
    showCard(currentData, divCardContainerFlex);
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
  // console.log(`total ${sliderCards.offsetWidth / totalItems}`);
  const hiddenItems = totalItems - visibleItems;
  // console.log(hiddenItems, visibleItems);
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
  const ctrlPrevButtons = document.getElementsByClassName('ctrl-prev');
  const ctrlNextButtons = document.getElementsByClassName('ctrl-next');
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

const showMore = document.getElementsByClassName('show-more');
showMore[0].addEventListener('click', () => {
  showAllPokemons(resultTypes);
  currentData = resultTypes;
  titleTop.textContent = `${typeChoosed} Type Pokemons`;
  showMoreSection = 'type';
});

showMore[1].addEventListener('click', () => {
  showAllPokemons(resultResistant);
  currentData = resultResistant;
  titleTop.textContent = `Pokemons resistant to the ${typeChoosed} Type`;
  showMoreSection = 'resistant';
});

showMore[2].addEventListener('click', () => {
  showAllPokemons(resultWeaknesses);
  currentData = resultWeaknesses;
  titleTop.textContent = `Pokemons weaknesses to the ${typeChoosed} Type`;
  showMoreSection = 'weaknesses';
});

/* -------- muestra mokempnes despues del filrtado por tipo -----------*/
const showPokemonInSections = () => {
  if (isContainerSection === false) {
    console.log('de ver mas a filtrado');
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


const filterPokemonsByType = (type) => {
  console.log(`tipo: ${type}`);
  resultTypes = filterPokemon('type', type);
  resultResistant = filterPokemon('resistant', type);
  resultWeaknesses = filterPokemon('weaknesses', type);
};

const filterSystem = () => {
  titleTop.textContent = '';
  const titleSlider = document.getElementsByClassName('title-slider-p');
  const resultSlider = document.getElementsByClassName('result');
  for (let i = 0; i < optionsFilter.length; i += 1) {
    optionsFilter[i].addEventListener('click', () => {
      console.log(optionsFilter);
      // eslint-disable-next-line no-return-assign
      optionsFilter.forEach(element => element.style.background = '#1B262C');
      optionsFilter[i].style.background = 'var(--color-blue-3)';
      isContainerShowMore = false;
      if (window.innerWidth < desktopSize) {
        hideMenu();
      }
      btnChangeOrder.style.visibility = 'visible';
      isContainerShowMore = false;
      filterPokemonsByType(optionsFilter[i].textContent);
      typeChoosed = optionsFilter[i].textContent;
      resultSlider[0].textContent = `${resultTypes.length}`;
      resultSlider[1].textContent = `${resultResistant.length}`;
      resultSlider[2].textContent = `${resultWeaknesses.length}`;
      titleSlider[0].textContent = `${typeChoosed}-Type Pokemons`;
      titleSlider[1].textContent = `${typeChoosed}-Resistant Pokemons`;
      titleSlider[2].textContent = `${typeChoosed}-Weaknesses Pokemons`;
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
  const whichOrder = ['max-cp', 'max-hp', 'a-z'];
  const optionsOrder = document.getElementsByClassName('order-option');
  for (let i = 0; i < optionsOrder.length; i += 1) {
    optionsOrder[i].addEventListener('click', () => {
      for (let j = 0; j < optionsOrder.length; j += 1) {
        optionsOrder[j].style.background = 'rgb(43, 41, 41)';
      }
      optionsOrder[i].style.background = '#0F4C75';
      btnChangeOrder.style.visibility = 'visible';
      if (isContainerSection) {
        orderSections(whichOrder[i]);
      } else {
        currentData = orderBy(currentData, whichOrder[i]);
        showCard(currentData, divCardContainerFlex);
        changeOrderCurrentData(divCardContainerFlex);
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

const showEvolution = (poke, container, prev, next) => {
  container.innerHTML = '';
  let divContainer; let pokemon;
  if (prev !== undefined) {
    for (let i = 0; i < prev.length; i += 1) {
      pokemon = data.pokemon.find(pk => pk.name === prev[i].name);
      if (pokemon !== undefined) {
        divContainer = document.createElement('div');
        divContainer.className = 'card-pokemon-evolition';
        divContainer.innerHTML = `<span class="font">${pokemon.name}</span>
                                  <img src="${pokemon.img}" alt="" class="pokemon-img-small">`;
        container.append(divContainer);
      }
    }
  }
  divContainer = document.createElement('div');
  divContainer.className = 'card-pokemon-evolition';
  divContainer.innerHTML = `<span class="font">${poke.name}</span>
                            <img src="${poke.img}" alt="" class="pokemon-img-small">`;
  container.append(divContainer);

  if (next !== undefined) {
    for (let i = 0; i < next.length; i += 1) {
      pokemon = data.pokemon.find(pk => pk.name === next[i].name);
      if (pokemon !== undefined) {
        divContainer = document.createElement('div');
        divContainer.className = 'card-pokemon-evolition';
        divContainer.innerHTML = `<span class="font">${pokemon.name}</span>
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
const divMoveAndAttacks = document.getElementById('move-and-attack');
const divcalculateMove = document.getElementById('calculate-damage');

const showDamageOfMove = (btn) => {
  if (isShowMove) {
    divMoveAndAttacks.style.display = 'none';
    divcalculateMove.style.display = 'block';
    btn.textContent = 'Moves & Attacks';
    isShowMove = false;
  } else {
    divMoveAndAttacks.style.display = 'flex';
    divcalculateMove.style.display = 'none';
    isShowMove = true;
    btn.textContent = 'Calculate Damage';
  }
};
// let isCalculate = false;
const calculeDamage = (num, container, list) => {
  container.innerHTML = '';
  container.innerHTML += '<tr><th>Quick Move</th><th></th><th>Special Attack</th><th></th><th>Damage</th></tr>';
  for (let i = 0; i < num; i += 1) {
    container.innerHTML += `<tr><td>${list[i][0]}</td><td><img src="images/plus1.png" class="icon-small"></td>
                            <td>${list[i][1]}</td><td><img src="images/igual1.png" class="icon-small"></td>
                            <td>${list[i][2]}</td></tr>`;
  }
};

const showInfoPokemon = (name) => {
  modalWindow.style.display = 'block';
  const pokemon = data.pokemon.find(pk => pk.name === name);
  document.getElementById('img-pokemon-modal').setAttribute('src', pokemon.img);
  document.getElementById('div-pokemon-name-modal').textContent = pokemon.name;
  document.getElementById('height').textContent = pokemon.size.height;
  document.getElementById('candy').textContent = pokemon.evolution.candy.replace('candy', '');
  document.getElementById('region').textContent = pokemon.generation.name;
  document.getElementById('weight').textContent = pokemon.size.weight;
  const btnCalc = document.getElementById('get-set-move');
  const types = document.getElementById('types');
  const resistant = document.getElementById('resistant');
  const weaknesses = document.getElementById('weaknesses');
  types.innerHTML = '';
  resistant.innerHTML = '';
  weaknesses.innerHTML = '';
  createIcons(pokemon.type, types);
  createIcons(pokemon.resistant, resistant);
  createIcons(pokemon.weaknesses, weaknesses);
  const specialAttacks = document.getElementById('special-attacks-table');
  const quickMove = document.getElementById('quick-move-table');
  const calcDamage = document.getElementById('table-damage');
  calcDamage.innerHTML = '';
  isShowMove = true;
  btnCalc.addEventListener('click', () => {
    let count = calculateBettersCombination(pokemon).length;
    count = (count > 5) ? 5 : count;
    showDamageOfMove(btnCalc);
    calculeDamage(count, calcDamage, calculateBettersCombination(pokemon));
  });
  buildTable(pokemon['special-attack'], specialAttacks);
  buildTable(pokemon['quick-move'], quickMove);
  const evolution = document.getElementById('evolution');

  showEvolution(pokemon, evolution, pokemon.evolution['prev-evolution'], pokemon.evolution['next-evolution']);
};

const loadPage = () => {
  currentData = data.pokemon;
  const wordIntroduced = document.getElementById('input-bar-search').value;
  menuSystem();
  if (wordIntroduced.length === 0 && isContainerSection === false) {
    showCard(currentData, divCardContainerFlex);
  }
};

document.addEventListener('click', (event) => {
  const element = event.target.parentNode;
  if (element.className === 'pokemon-card  flex-wrap font grow') {
    modalMode.style.display = 'block';
    showInfoPokemon(element.id);
  }
});


sliderSystem();
window.onload = loadPage;
