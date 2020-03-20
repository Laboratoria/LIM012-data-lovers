import pokedex from './data.js';
import data from './data/pokemon/pokemon.js';

// Se crea una variable donde se va a insertar los resultados de las funciones.
const sectionContent = document.querySelector('.content');
// Creando subtítulo de Generación
const generations = (geNumber, geName) => {
  const subtitle = document.createElement('div');
  subtitle.className = 'subtitles margin-bottom';
  subtitle.innerHTML = `
  <div class="arrow">
    <h2>Generacion ${geNumber} - ${geName}</h2>
  </div>
  <div class="line hide"></div>
  `;
  return subtitle;
};
// Obteniendo todos los pokemones y separando por generación
const allDataByGenerations = () => {
  // Creando sección Kanto
  sectionContent.appendChild(generations('I', 'Kanto'));
  const dataKanto = document.createElement('div');
  dataKanto.className = 'cards-distribution';
  // Creando e insertando cards de pokemones
  dataKanto.innerHTML += pokedex.pokemonCards(pokedex.iteringByGenerations(data.pokemon, 'kanto'));
  sectionContent.appendChild(dataKanto);
  // Creando sección Johto
  sectionContent.appendChild(generations('II', 'Johto'));
  const dataJohto = document.createElement('div');
  dataJohto.className = 'cards-distribution';
  // Creando e insertando cards de pokemones
  dataJohto.innerHTML += pokedex.pokemonCards(pokedex.iteringByGenerations(data.pokemon, 'johto'));
  sectionContent.appendChild(dataJohto);
};
  // El evento que llama a la función que inserta todos los pokemones al iniciar la página
window.addEventListener('load', () => {
  allDataByGenerations();
});
//
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
  const result = pokedex.search(data.pokemon, inputText);
  if (inputText.length > 0 && result.length > 0) {
    searchBox.innerHTML += pokedex.pokemonCards(result);
    sectionContent.appendChild(searchBox);
  } else if (inputText.length > 0 && result.length === 0) {
    searchBox.innerHTML += 'No se ha encontrado el pokemon :(';
    sectionContent.appendChild(searchBox);
  } else {
    allDataByGenerations();
  }
});
//
// Creando el evento change para sort




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

const iconSearch = document.querySelector('.icon-search');
iconSearch.addEventListener('click', () => {
  searchInput.focus();
});

// searchInput.addEventListener('focusout', () => {
//   sectionContent.innerHTML = '';
//   allDataByGenerations();
// });
