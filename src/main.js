import pokedex from './data.js';
import data from './data/pokemon/pokemon.js';

// Se crea una variable donde se va a insertar los resultados de las funciones.
const sectionContent = document.querySelector('.content');
// Obteniendo todos los pokemones y separando por generación
const allDataByGenerations = () => {
  // Creando sección Kanto
  sectionContent.appendChild(pokedex.generations('I', 'Kanto'));
  const dataKanto = document.createElement('div');
  dataKanto.className = 'cards-distribution';
  // Creando e insertando cards de pokemones
  dataKanto.innerHTML += pokedex.pokemonCards(pokedex.iteringByGenerations(data.pokemon, 'kanto'));
  sectionContent.appendChild(dataKanto);
  // Creando sección Johto
  sectionContent.appendChild(pokedex.generations('II', 'Johto'));
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
//
// Evento del input que ejecuta la funcion search
searchInput.addEventListener('input', () => {
  const inputText = searchInput.value.toLowerCase();
  // Crear el contenedor con createElement para search
  const searchBox = document.createElement('div');
  // Agregar una clase a ese contenedor para que tenga su propio estilo.
  searchBox.classList.add('distribution-search');
  // Agrego el nuevo div al sctionContent con .appendChild 
  sectionContent.innerHTML = '';
  // Llamar a las funciones correspondientes de acuerdo al estado del input
  if (inputText === '') {
    allDataByGenerations();
    sectionContent.removeChild(searchBox);
  } else {
    // Iterando cada elemento del array y llamando a la función que crea las cards
    data.pokemon.forEach((element) => {
      searchBox.innerHTML += search(element, inputText);
    });
  }
  // Mensaje en caso que no se encuentre el pokemon
  if (searchBox.innerHTML === '') {
    searchBox.innerHTML += `
    No se ha encontrado el pokemon :(
  `;
  }
  // Insertando el resultado de la búsqueda al DOM
  sectionContent.appendChild(searchBox);
});
//
//
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
