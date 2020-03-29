import {
  filterByGeneration,
  search,
  order,
  filterByType,
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
        <button class="button features" id="${allPokemons[i].num - 1}">Features</button>
        <button class="button attacks" id="${allPokemons[i].num - 1}">Attacks</button>
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
    const arrPokemons = [];

    if (arrayTwo.length === 1) {
      const arrayThree = Object.values(arrayTwo[0]);
      arrPokemons.push(arrayTwo[0].name);

      for (let i = 0; i < arrayThree.length; i += 1) {
        if (typeof arrayThree[i] === 'object') {
          arrPokemons.push(arrayThree[i][0].name);
        }
      }
    } else {
      // Eevee
      for (let i = 0; i < arrayTwo.length; i += 1) {
        arrPokemons.push(arrayTwo[i].name);
      }
    }
    return arrPokemons;
  };

  // Función para crear card del Pokemon
  const cardContainer = document.querySelector('.cards');
  const createCard = (pokemon) => {
    cardContainer.innerHTML = `
    <section class="pokemon-name2">${pokemon.num} - ${pokemon.name}</section>
    <section class="info-container">
        <div class="sub-container-img">
            <p class="subtitle2">${pokemon['pokemon-rarity']}</p>
            <div class="pokemon-screen">
                <div class="screen-border"></div>              
                <img class="screen-img" src="${pokemon.img}">
            </div>
        </div>
        <div class="sub-container-text">
            <p class="subtitle2">generation</p>
            <p class="p-bottom">N° ${pokemon.generation.num.slice(10).toUpperCase()} - ${pokemon.generation.name}</p>
            <p class="subtitle2">type</p>
            <p class="p-bottom" id="pokemon-type"></p>
            <p class="subtitle2">size</p>
            <p class="">Height: ${pokemon.size.height}</p>
            <p class="">Weight: ${pokemon.size.weight}</p>
        </div>
    </section>
    <section class="info-container">
        <table class="table-container t1">
            <tr>
                <th colspan="2">Encounter</th>
                <th>Spawn chance</th>
            </tr>
            <tr>
                <td>Base flee rate</td>
                <td class ="num-cel">${(pokemon.encounter['base-flee-rate'] * 100).toFixed(2)}%</td>
                <td class ="num-cel" colspan="2" rowspan="2">${(pokemon['spawn-chance'] * 100).toFixed(2)}%</td>
            </tr>
            <tr>
                <td>Base capture rate</td>
                <td class ="num-cel">${(pokemon.encounter['base-capture-rate'] * 100).toFixed(2)}%</td>
            </tr>
        </table>
    </section>

    <section class="evolutions"></section>
    `;

    const type = document.getElementById('pokemon-type');
    pokemon.type.forEach((typeP) => {
      type.innerHTML += `<span> ${typeP}</span>`;
    });

    const evolutionContainer = document.querySelector('.evolutions');
    const pEvolution = pokemon.evolution;
    const arrayOne = Object.values(pEvolution);
    const keysArrayOne = Object.keys((pEvolution));

    if (Object.prototype.hasOwnProperty.call(pEvolution, 'prev-evolution') && Object.prototype.hasOwnProperty.call(pEvolution, 'next-evolution')) {
      evolutionContainer.innerHTML += `
      <p>Pre-evolution ${arrayOne[keysArrayOne.indexOf('prev-evolution')][0].name}</p>
      <p>Next-evolution ${arrayOne[keysArrayOne.indexOf('next-evolution')][0].name}</p>
      `;
    } else if (Object.prototype.hasOwnProperty.call(pEvolution, 'prev-evolution')) {
      const arr = nextEvolutions(keysArrayOne, arrayOne, 'prev-evolution');

      arr.forEach((eachPokemon) => {
        evolutionContainer.innerHTML += `
          <p>Pre-evolution ${eachPokemon}</p>
          `;
      });
    } else if (Object.prototype.hasOwnProperty.call(pEvolution, 'next-evolution')) {
      const arr = nextEvolutions(keysArrayOne, arrayOne, 'next-evolution');

      arr.forEach((eachPokemon) => {
        evolutionContainer.innerHTML += `
        <p>Next-evolution ${eachPokemon}</p>
        `;
      });
    } else {
      evolutionContainer.innerHTML += `
      <p>Este pokemon no tiene evoluciones</p>
      `;
    }
  };

  const close = document.querySelector('.close');
  const modalContainer = document.querySelector('.modal-container');
  // Llamando a las funciones para crear el modal de características
  sectionContent.addEventListener('click', (e) => {
    modalContainer.classList.toggle('modal-close');
    createCard(data.pokemon[e.target.id]);
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
    searchBox.innerHTML += 'No se ha encontrado el pokemon :(';
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
