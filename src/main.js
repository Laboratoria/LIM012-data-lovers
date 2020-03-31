import {
  filterByGeneration,
  search,
  order,
  filterByType,
  dpsCalculate,
  epsCalculate,
} from './data.js';
import data from './data/pokemon/pokemon.js';
//
const sectionContent = document.querySelector('.content');
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
// Creando card de pokemon
const pokemonCards = (allPokemons) => {
  let dataPokemon = '';

  for (let i = 0; i < allPokemons.length; i += 1) {
    const pokemon = `
    <div class="pokemon-card">
      <p class="pokemon-number">${allPokemons[i].num}</p>
      <img class="pokemon-image" src="${allPokemons[i].img}">
      <p class="pokemon-name">${allPokemons[i].name}</p> 
      <div class="button-container">
        <button class="button" data-modal="${allPokemons[i].num - 1}" id="features">Features</button>
        <button class="button" data-modal="${allPokemons[i].num - 1}" id="attacks">Attacks</button>
      </div>
    </div>`;
    dataPokemon += pokemon;
  }
  return dataPokemon;
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
  // borrando el contenedor del filtrado
  sectionContent.classList.remove('show');
  // Creando sección Kanto
  sectionContent.appendChild(createSub('Generation I', 'Kanto'));
  const dataKanto = document.createElement('div');
  dataKanto.className = 'cards-distribution';
  // Creando e insertando cards de pokemones
  dataKanto.innerHTML += pokemonCards(filterByGeneration(data.pokemon, 'kanto'));
  sectionContent.appendChild(dataKanto);
  // Creando sección Johto
  sectionContent.appendChild(createSub('Generation II', 'Johto'));
  const dataJohto = document.createElement('div');
  dataJohto.className = 'cards-distribution';
  // Creando e insertando cards de pokemones
  dataJohto.innerHTML += pokemonCards(filterByGeneration(data.pokemon, 'johto'));
  sectionContent.appendChild(dataJohto);
};

// El evento que llama a la función que inserta todos los pokemones al iniciar la página
window.addEventListener('load', () => {
  allDataByGenerations();

  // Modal del pokemon

  // Función que retorna array de evoluciones según pokemon
  const nextEvolutions = (keys, array, evolution) => {
    const arrayTwo = array[keys.indexOf(evolution)];
    const arrIndex = [];

    if (arrayTwo.length === 1) {
      const arrayThree = Object.values(arrayTwo[0]);
      arrIndex.push(parseInt(arrayTwo[0].num, 10) - 1);

      for (let i = 0; i < arrayThree.length; i += 1) {
        if (typeof arrayThree[i] === 'object') {
          arrIndex.push(parseInt(arrayThree[i][0].num, 10) - 1);
        }
      }
    } else {
      // Eevee
      for (let i = 0; i < arrayTwo.length; i += 1) {
        if (arrayTwo[i].num < 251) {
          arrIndex.push(parseInt(arrayTwo[i].num, 10) - 1);
        } else {
          arrIndex.push(arrayTwo[i].name);
        }
      }
    }
    return arrIndex;
  };

  // Función para crear card del Pokemon
  const cardContainer = document.querySelector('.cards');
  const createCard = (pokemon, index) => {
    cardContainer.innerHTML = `
    <section class="pokemon-name2"><div class="h-modal"></div>${pokemon.num} - ${pokemon.name}</section>
    <section class="info-container">
        <div class="sub-container-img">
            <p class="subtitle2">${pokemon['pokemon-rarity']}</p>
            <div class="pokemon-screen">
              <img class="screen-img" src="${pokemon.img}">
            </div>
        </div>
        <div class="sub-container-text">
            <p class="subtitle2">generation</p>
            <p class="p-bottom">N° ${pokemon.generation.num.slice(10).toUpperCase()} - ${pokemon.generation.name}</p>
            <p class="subtitle2">type</p>
            <p class="p-bottom" id="pokemon-type"></p>
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
    `;

    const type = document.getElementById('pokemon-type');
    pokemon.type.forEach((typeP) => {
      type.innerHTML += `<span>  ${typeP}</span>`;
    });

    const evolutionContainer = document.querySelector('.evolutions');
    const pEvolution = pokemon.evolution;
    const arrayOne = Object.values(pEvolution);
    const keysArrayOne = Object.keys(pEvolution);

    if (Object.prototype.hasOwnProperty.call(pEvolution, 'prev-evolution') && Object.prototype.hasOwnProperty.call(pEvolution, 'next-evolution')) {
      evolutionContainer.innerHTML += `
      <div class="eachContainer">
        <img src="${data.pokemon[index - 1].img}"
        <p>Pre-evolution</p>
        <p>${arrayOne[keysArrayOne.indexOf('prev-evolution')][0].name}</p>
      </div>
      <div class="eachContainer">
        <img src="${data.pokemon[index + 1].img}"
        <p>Next-evolution</p>
        <p>${arrayOne[keysArrayOne.indexOf('next-evolution')][0].name}</p>
      </div>
      `;
    } else if (Object.prototype.hasOwnProperty.call(pEvolution, 'prev-evolution')) {
      const arr = nextEvolutions(keysArrayOne, arrayOne, 'prev-evolution');
      arr.forEach((eachPokemon) => {
        evolutionContainer.innerHTML += `
        <div class="eachContainer">
          <img src="${data.pokemon[eachPokemon].img}"
          <p>Pre-evolution</p>
          <p>${data.pokemon[eachPokemon].name}</p>
        </div>
        `;
      });
    } else if (Object.prototype.hasOwnProperty.call(pEvolution, 'next-evolution')) {
      const arr = nextEvolutions(keysArrayOne, arrayOne, 'next-evolution');
      if (arr.length > 2) {
        arr.forEach((eachPokemon) => {
          if (typeof eachPokemon === 'number') {
            evolutionContainer.innerHTML += `
            <div class="eachContainer2">
              <img src="${data.pokemon[eachPokemon].img}"
              <p>${data.pokemon[eachPokemon].name}</p>
            </div>
            `;
          } else {
            evolutionContainer.innerHTML += `
            <div class="otherGen">
              <p>${eachPokemon}</p>
            </div>
            `;
          }
        });
      } else {
        arr.forEach((eachPokemon) => {
          evolutionContainer.innerHTML += `
          <div class="eachContainer">
            <img src="${data.pokemon[eachPokemon].img}"
            <p>Next-evolution</p>
            <p>${data.pokemon[eachPokemon].name}</p>
          </div>
          `;
        });
      }
    } else {
      evolutionContainer.innerHTML += `
      <p>This pokemons doesn't have evolutions</p>
      `;
    }
  };

  const attackCard = (pokemon) => {
    cardContainer.innerHTML += `
      <div class="allAttack">
        <section class="pokemonId">${pokemon.num} - ${pokemon.name}</section>
        <div class="pokemon-screen">
            <div class="screen-border"></div>              
            <img src="${pokemon.img}">
        </div>
        <div class="stats-container">
            <h3>Stats</h3>
            <ul class= "name-stats">
                <li>Base-attack</li>
                <li>Base-defense</li>
                <li>Base-stamina</li>
                <li>max-cp</li>
                <li>max-hp</li>
            </ul>
            <ul class= "number-stats">
                <li>${pokemon.stats['base-attack']}</li>
                <li>${pokemon.stats['base-defense']}</li>
                <li>${pokemon.stats['base-stamina']}</li>
                <li>${pokemon.stats['max-cp']}</li>
                <li>${pokemon.stats['max-hp']}</li>
            </ul>
        </div>
        <div>
            <p class="subtitle">Resistant</p>
            <div id="resistant-container">
            </div>
            <p class="subtitle">Weakness</p>
            <div id="weaknesses-container">
            </div>
        </div>
        <div>
            <h3>Quick-moves</h3>
            <div id="quick-move"></div>
        </div>
        <div>
            <h3>Special-attacks</h3>
            <div id="special-attacks></div>
        </div>
     </div>
     `;
    const resistant = document.getElementById('resistant-container');
    const weaknesses = document.getElementById('weaknesses-container');
    const quickMoveContainer = document.getElementById('quick-move');
    const specialAttackContainer = document.getElementById('special-attacks');


    pokemon.resistant.forEach((resist) => {
      resistant.innerHTML += `<span> ${resist}</span>`;
    });

    pokemon.weaknesses.forEach((weakness) => {
      weaknesses.innerHTML += `<span> ${weakness}</span>`;
    });
    pokemon['quick-move'].forEach((quickMove) => {
      quickMoveContainer.innerHTML += `
      <ul>
        <li>Name: ${quickMove.name}</li>
        <li>Type: ${quickMove.type}</li>
        <li>Base-damage: ${quickMove['base-damage']}</li>
        <li>Energy: ${quickMove.energy}</li>
        <li>Move-duration-seg: ${quickMove['move-duration-seg']}</li>
        <li>DPS: ${dpsCalculate(quickMove, pokemon.type)}</li>
        <li>EPS: ${epsCalculate(quickMove)}</li>
      </ul>
      `;
    });
    pokemon['special-attack'].forEach((attack) => {
      specialAttackContainer.innerHTML += `
      <ul>
        <li>Name: ${attack.name}</li>
        <li>Type: ${attack.type}</li>
        <li>Base-damage: ${attack['base-damage']}</li>
        <li>Energy: ${attack.energy}</li>
        <li>Move-duration-seg: ${attack['move-duration-seg']}</li>
        <li>DPS: ${dpsCalculate(attack, pokemon.type)}</li>
        <li>EPS: ${epsCalculate(attack)}</li>
      </ul>
    `;
    });
  };
  const close = document.querySelector('.close');
  const modalContainer = document.querySelector('.modal-container');
  // Llamando a las funciones para crear el modal de características
  sectionContent.addEventListener('click', (e) => {
    if (e.target.id === 'features') {
      modalContainer.classList.toggle('modal-close');
      const index = parseInt(e.target.attributes['data-modal'].value, 10);
      createCard(data.pokemon[index], index);
    } else if (e.target.id === 'attacks') {
      modalContainer.classList.toggle('modal-close');
      const index = parseInt(e.target.attributes['data-modal'].value, 10);
      attackCard(data.pokemon[index]);
    }
  });

  close.addEventListener('click', () => {
    modalContainer.classList.toggle('modal-close');
  });
});


// Guardando input para buscar
const searchInput = document.querySelector('#filter-search');

// Evento del input que ejecuta la funcion search
searchInput.addEventListener('input', () => {
  const inputText = searchInput.value.toLowerCase();
  // Crear el contenedor con createElement para search
  const searchBox = document.createElement('div');
  searchBox.classList.add('distribution-search');
  sectionContent.innerHTML = '';
  // Buscando pokemones
  const result = search(data.pokemon, inputText);
  if (inputText.length > 0 && result.length > 0) {
    searchBox.innerHTML += pokemonCards(result);
    sectionContent.appendChild(searchBox);
  } else if (inputText.length > 0 && result.length === 0) {
    searchBox.innerHTML += 'Pokemon not found :(';
    sectionContent.appendChild(searchBox);
  } else {
    allDataByGenerations();
  }
});
// Sort
const selection = document.getElementById('selection');
selection.addEventListener('change', () => {
  const chosenOrder = selection.value;
  sectionContent.innerHTML = '';
  const cardsContainer = document.createElement('div');
  cardsContainer.className = 'cards-distribution';
  // Llamando a la función para ordenar y crear las cards
  cardsContainer.innerHTML += pokemonCards(order(data.pokemon, chosenOrder));
  sectionContent.appendChild(cardsContainer);
  // Mostrando la data completo por generaciones como defecto
  if (chosenOrder === 'default') {
    allDataByGenerations();
  }
});
// Filter
const filterBox = document.querySelector('.sub-menu');
filterBox.addEventListener('click', (e) => {
  const typeChose = e.target.id;
  sectionContent.innerHTML = '';
  sectionContent.appendChild(createSub('Type', e.target.id));
  const filterContainer = document.createElement('div');
  filterContainer.className = 'cards-distribution';
  // Llamar a la función para filtrar por tipo elegido
  filterContainer.innerHTML += pokemonCards(filterByType(data.pokemon, typeChose));
  sectionContent.appendChild(filterContainer);
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

// Botón de subir
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

const iconSearch = document.querySelector('.flaticon-lupa');
iconSearch.addEventListener('click', () => {
  searchInput.focus();
});

// searchInput.addEventListener('focusout', () => {
//   sectionContent.innerHTML = '';
//   allDataByGenerations();
// });
