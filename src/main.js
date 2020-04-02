import {
  filterByGeneration,
  search,
  order,
  filterByType,
  dpsCalculate,
  epsCalculate,
} from './data.js';
import data from './data/pokemon/pokemon.js';

const sectionContent = document.querySelector('.content');

// MODAL FEATURES
const featuresCard = (pokemon) => {
  const getTypes = (arr) => {
    let types = '';
    arr.forEach((resist) => {
      types += `${resist} `;
    });
    return types;
  };
  // Card
  const sectionModal = document.createElement('section');
  sectionModal.classList.add('modal-container', 'modal-close');
  sectionModal.classList.toggle('modal-close');
  const cardContainer = document.createElement('div');
  cardContainer.innerHTML = `
  <div class="modal">
    <p class="close green-bg">x</p>
    <section class="cards">
      <section class="pokemon-name2 green-bg">${pokemon.num} - ${pokemon.name}</section>
      <section class="info-container">
        <div class="sub-container-img">
          <p class="subtitle2">${pokemon['pokemon-rarity']}</p>
          <div class="pokemon-screen green-b">
            <img class="screen-img" src="${pokemon.img}">
          </div>
        </div>
        <div class="sub-container-text">
          <p class="subtitle2">generation</p>
          <p class="p-bottom">N° ${pokemon.generation.num.slice(10).toUpperCase()} - ${pokemon.generation.name}</p>
          <p class="subtitle2">type</p>
          <p class="p-bottom">${getTypes(pokemon.type)}</p>
          <p class="subtitle2">size</p>
          <p >Height: ${pokemon.size.height}</p>
          <p >Weight: ${pokemon.size.weight}</p>
        </div>
      </section>
      <section class="info-container">
        <div class="column">
          <p class="subtitle2 h-stat">Encounter</p>
          <div class="number-data">
            <p>Base flee rate</p>
            <p class="num-cel">${(pokemon.encounter['base-flee-rate'] * 100).toFixed(1)}%</p>
          </div>
          <div class="number-data">
            <p>Base capture rate</p>
            <p class="num-cel">${(pokemon.encounter['base-capture-rate'] * 100).toFixed(1)}%</p>
          </div>
        </div>
        <div class="column">
          <p class="subtitle2 h-stat">Spawn chance</p>
          <p class="num-cel">${(pokemon['spawn-chance'] * 100).toFixed(2)}%</p>
        </div>
      </section>

      <section class="info-container">
        <p class="subtitle2 t-evol">Evolutions</p>
        <div class="evolutions"></div>
      </section>
    </section>
  </div>
  `;

  const close = cardContainer.querySelector('.close');
  close.addEventListener('click', () => {
    sectionModal.classList.toggle('modal-close');
  });
  // Evoluciones
  const evolutionContainer = cardContainer.querySelector('.evolutions');
  const pokEvolution = pokemon.evolution;
  const arrayOne = Object.values(pokEvolution);
  const keysArrayOne = Object.keys(pokEvolution);

  const prevEvolution = Object.prototype.hasOwnProperty.call(pokEvolution, 'prev-evolution');
  const nextEvolution = Object.prototype.hasOwnProperty.call(pokEvolution, 'next-evolution');

  const evolutionCard = (nameP, evolution, cStyle) => {
    let img = 'assets/No_image_available.svg';
    for (let i = 0; i < data.pokemon.length; i += 1) {
      if (data.pokemon[i].name === nameP) {
        img = data.pokemon[i].img;
      }
    }
    const element = `
    <div class="${cStyle}">
      <img src="${img}">
      <p>${evolution}</p>
      <p>${nameP}</p>
    </div>`;
    return element;
  };
  // Pokemons con una evolución y una pre evolución
  if (prevEvolution && nextEvolution) {
    const prevName = arrayOne[keysArrayOne.indexOf('prev-evolution')][0].name;
    const nextName = arrayOne[keysArrayOne.indexOf('next-evolution')][0].name;
    evolutionContainer.innerHTML = evolutionCard(prevName, 'prev-evolution', 'eachContainer');
    evolutionContainer.innerHTML += evolutionCard(nextName, 'next-evolution', 'eachContainer');
    // Pokemons con una o varias evoluciones/pre evoluciones
  } else if (prevEvolution || nextEvolution) {
    let evolutionType = '';

    if (prevEvolution) {
      evolutionType = 'prev-evolution';
    } else { evolutionType = 'next-evolution'; }

    const arrayTwo = arrayOne[keysArrayOne.indexOf(evolutionType)];
    if (arrayTwo.length === 1) {
      evolutionContainer.innerHTML = evolutionCard(arrayTwo[0].name, evolutionType, 'eachContainer');

      if (Object.prototype.hasOwnProperty.call(arrayTwo[0], evolutionType)) {
        const arrayThree = Object.values(arrayTwo[0]);
        const keysArrayTwo = Object.keys(arrayTwo[0]);
        const lastArray = arrayThree[keysArrayTwo.indexOf(evolutionType)];
        evolutionContainer.innerHTML += evolutionCard(lastArray[0].name, evolutionType, 'eachContainer');
      }
    } else {
      // Pokemons con varias evoluciones
      arrayTwo.forEach((moreEvolutions) => {
        evolutionContainer.innerHTML += evolutionCard(moreEvolutions.name, evolutionType, 'moreContainer');
      });
    }
  } else {
    evolutionContainer.innerHTML += `
    <p>This pokemons doesn't have evolutions</p>
    `;
  }
  sectionModal.appendChild(cardContainer);
  return sectionModal;
};

// MODAL ATTACK
const attackCard = (pokemon) => {
  const getTypes = (arr) => {
    let types = '';
    arr.forEach((resist) => {
      types += `${resist} `;
    });
    return types;
  };
  const sectionModal = document.createElement('section');
  sectionModal.classList.add('modal-container', 'modal-close');
  sectionModal.classList.toggle('modal-close');
  // Card
  const cardContainer = document.createElement('div');
  cardContainer.innerHTML = `
    <div class="modal">
      <p class="close red-bg">x</p>
      <section class="cards">
        <section class="pokemon-name2 red-bg">${pokemon.num} - ${pokemon.name}</section>
        <section class="info-container">
          <div class="sub-container-img">
            <div class="pokemon-screen red-b">
              <img class="screen-img" src="${pokemon.img}">
            </div>
          </div>
          <div class="stats-container">
            <p class="borderRows subtitle2">Stats</p>
            <div class= "name-stats">
              <p>Base attack: ${pokemon.stats['base-attack']}</p>
              <p>Base defense: ${pokemon.stats['base-defense']}</p>
              <p>Base stamina: ${pokemon.stats['base-stamina']}</p>
              <p>Max CP: ${pokemon.stats['max-cp']}</p>
              <p>Max HP: ${pokemon.stats['max-hp']}</p>
            </div>
          </div>
        </section>
        <section class="info-container">
          <div class="column2">
            <p class="borderRows subtitle2">Resistant</p>
            <p>${getTypes(pokemon.resistant)}</p>
          </div>
          <div class="column2">
            <p class="borderRows subtitle2">Weakness</p>
            <p>${getTypes(pokemon.weaknesses)}</p>
          </div>
        </section> 
        <section class="calculate">
          <p class="subtitle2 attack-title">Quick-Moves</p>
          <div class="calculateStats">
            <p class="longElementName textTitle">Name</p>
            <p class="longElement textTitle">Type</p>
            <p class="element textTitle">BD</p>
            <p class="element textTitle">E</p>
            <p class="element textTitle">MD</p>
            <p class="element textTitle">DPS</p>
            <p class="element textTitle">EPS</p>
          </div> 
          <div class="quick-move"></div>
          <p class="subtitle2 attack-title">Special-attacks</p>
          <div class="calculateStats">
            <p class="longElementName textTitle">Name</p>
            <p class="longElement textTitle">Type</p>
            <p class="element textTitle">BD</p>
            <p class="element textTitle">E</p>
            <p class="element textTitle">MD</p>
            <p class="element textTitle">DPS</p>
            <p class="element textTitle">EPS</p>
          </div>
          <div class="special-attack"></div>
          <div class="legends">BD: base damage, E: energy, MD: move duration, DPS: damage per second, EPS: energy per second</div>
        </section>
      </section>  
    </div>`;

  const quickMoveContainer = cardContainer.querySelector('.quick-move');
  const specialAttackContainer = cardContainer.querySelector('.special-attack');
  // Cálculos
  pokemon['quick-move'].forEach((quickMove) => {
    const divElement = document.createElement('div');
    divElement.innerHTML = `
    <div class="borderRows">
      <p class="longElementName borderColumn textBreak">${quickMove.name}</p>
      <p class="longElement borderColumn textTitle">${quickMove.type}</p>
      <p class="element borderColumn textContent">${quickMove['base-damage']}</p>
      <p class="element borderColumn textContent">${quickMove.energy}</p>
      <p class="element borderColumn textContent">${quickMove['move-duration-seg']}</p>
      <p class="element borderColumn textContent">${dpsCalculate(quickMove, pokemon.type)}</p>
      <p class="element textContent ">${epsCalculate(quickMove)}</p>
    </div>`;
    quickMoveContainer.appendChild(divElement);
  });

  pokemon['special-attack'].forEach((attack) => {
    const divElement = document.createElement('div');
    divElement.innerHTML = `
    <div class="borderRows"> 
      <p class="longElementName borderColumn textBreak">${attack.name}</p>
      <p class="longElement  borderColumn textTitle">${attack.type}</p>
      <p class="element borderColumn textContent">${attack['base-damage']}</p>
      <p class="element borderColumn textContent">${attack.energy}</p>
      <p class="element borderColumn textContent">${attack['move-duration-seg']}</p>
      <p class="element borderColumn textContent">${dpsCalculate(attack, pokemon.type)}</p>
      <p class="element textContent">${epsCalculate(attack)}</p>
    </div>
    `;
    specialAttackContainer.appendChild(divElement);
  });

  const close = cardContainer.querySelector('.close');
  close.addEventListener('click', () => {
    sectionModal.classList.toggle('modal-close');
  });

  sectionModal.appendChild(cardContainer);
  return sectionModal;
};


// Creando card de pokemon
const pokemonCards = (allPokemons) => {
  const cardContainer = document.createElement('div');
  cardContainer.classList.add('cards-distribution');

  for (let i = 0; i < allPokemons.length; i += 1) {
    const divElement = document.createElement('div');
    divElement.setAttribute('class', 'pokemon-card');

    divElement.innerHTML = `
      <p class="pokemon-number">${allPokemons[i].num}</p>
      <img class="pokemon-image" src="${allPokemons[i].img}">
      <p class="pokemon-name">${allPokemons[i].name}</p> 
      <div class="button-container">
        <button class="button features">Features</button>
        <button class="button attacks">Attacks</button>
      </div>`;
    cardContainer.appendChild(divElement);
    // Evento del modal features
    const btnFeatures = divElement.querySelector('.features');
    btnFeatures.addEventListener('click', (e) => {
      e.preventDefault();
      divElement.appendChild(featuresCard(allPokemons[i]));
    });

    // Evento del modal attack
    const btnAttack = divElement.querySelector('.attacks');
    btnAttack.addEventListener('click', (e) => {
      e.preventDefault();
      divElement.appendChild(attackCard(allPokemons[i]));
    });
  }

  return cardContainer;
};

// Creando subtítulos
const createSub = (principal, second) => {
  const subtitle = document.createElement('div');
  subtitle.className = 'subtitles margin-bottom';
  subtitle.innerHTML = `
  <div class="arrow">
    <h2>${principal}: ${second}</h2>
  </div>
  <div class="line hide"></div>
  `;
  return subtitle;
};

// Obteniendo todos los pokemones y separando por generación
const allDataByGenerations = () => {
  sectionContent.innerHTML = '';
  sectionContent.classList.remove('show');

  // Creando sección Kanto
  sectionContent.appendChild(createSub('Generation I', 'Kanto'));
  const dataKanto = document.createElement('div');
  dataKanto.className = 'cards-distribution';
  // Creando e insertando cards de pokemones
  dataKanto.appendChild(pokemonCards(filterByGeneration(data.pokemon, 'kanto')));
  sectionContent.appendChild(dataKanto);

  // Creando sección Johto
  sectionContent.appendChild(createSub('Generation II', 'Johto'));
  const dataJohto = document.createElement('div');
  dataJohto.className = 'cards-distribution';
  // Creando e insertando cards de pokemones
  dataJohto.appendChild(pokemonCards(filterByGeneration(data.pokemon, 'johto')));
  sectionContent.appendChild(dataJohto);
};

// El evento que llama a la función que inserta todos los pokemones al iniciar la página
window.addEventListener('load', () => {
  allDataByGenerations();
});


// EVENTOS PARA MANIPULAR ARRAYS DE POKEMONES

// SEARCH
const searchInput = document.querySelector('#filter-search');
searchInput.addEventListener('input', () => {
  const inputText = searchInput.value.toLowerCase();
  sectionContent.innerHTML = '';
  // Buscando pokemones
  const result = search(data.pokemon, inputText);
  if (inputText.length > 0 && result.length > 0) {
    sectionContent.appendChild(pokemonCards(result));
  } else if (inputText.length > 0 && result.length === 0) {
    sectionContent.textContent = 'Pokemon not found :(';
  } else {
    allDataByGenerations();
  }
});

// SORT
const selection = document.getElementById('selection');
selection.addEventListener('change', () => {
  const chosenOrder = selection.value;
  sectionContent.innerHTML = '';
  sectionContent.appendChild(pokemonCards(order(data.pokemon, chosenOrder)));
  // Mostrando la data completa por generaciones como defecto
  if (chosenOrder === 'default') {
    allDataByGenerations();
  }
});

// FILTER
const filterbox = document.getElementsByTagName('aside')[0];
const main = document.getElementsByTagName('main')[0];
// Barra de filtros
const btnFilter = document.getElementById('filter');
btnFilter.addEventListener('click', () => {
  if (btnFilter.checked === true) {
    main.classList.add('adapt');
    filterbox.classList.remove('hide-f');
  } else if (btnFilter.checked === false) {
    main.classList.remove('adapt');
    filterbox.classList.add('hide-f');
  }
});
const btnByType = document.getElementById('filter-by-type');
const subMenu = document.querySelector('.sub-menu');
btnByType.addEventListener('click', () => {
  if (btnByType.checked === true) {
    subMenu.classList.remove('hide-f');
  } else if (btnByType.checked === false) {
    subMenu.classList.add('hide-f');
  }
});
// Evento filter
const filterBox = document.querySelector('.sub-menu');
filterBox.addEventListener('click', (e) => {
  const typeChose = e.target.id;
  sectionContent.innerHTML = '';
  sectionContent.appendChild(createSub('Type', e.target.id));
  // Llamar a la función para filtrar por tipo elegido
  sectionContent.appendChild(pokemonCards(filterByType(data.pokemon, typeChose)));
});
// All pokémons
const allPokemons = document.getElementById('all-pokemons');
allPokemons.addEventListener('click', () => {
  pokemonCards(order(data.pokemon, ''));
  allDataByGenerations();
});

// HOME
const home = document.getElementById('home');
home.addEventListener('click', () => {
  // eslint-disable-next-line no-restricted-globals
  location.reload();
});

// BOTÓN DE SUBIR
window.onscroll = () => {
  if (document.documentElement.scrollTop > 100) {
    document.querySelector('.go-top-container').classList.add('show');
  } else {
    document.querySelector('.go-top-container').classList.remove('show');
  }
};
document.querySelector('.go-top-container').addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
});
// Focus input
const iconSearch = document.querySelector('.flaticon-lupa');
iconSearch.addEventListener('click', () => {
  searchInput.focus();
});
