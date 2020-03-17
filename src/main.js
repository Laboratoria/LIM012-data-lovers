// import { example } from './data.js';
import data from './data/pokemon/pokemon.js';

const result = document.querySelector('.content');
// Cargando data de pokemones
const init = (div1, div2) => {
  const div3 = div1;
  const div4 = div2;
  // Iterando la data
  for (let i = 0; i < data.pokemon.length; i += 1) {
    if (data.pokemon[i].generation.name === 'kanto') {
      const pokemon = `
        <div class="pokemon-card">
          <p class="pokemon-number left">${data.pokemon[i].num}</p>
          <img class="pokemon-image" src = "${data.pokemon[i].img}">
          <p class="pokemon-name">${data.pokemon[i].name}</p> 
        </div>
        `;
      div3.innerHTML += pokemon;
      result.appendChild(div3);
    } else {
      const pokemon = `
        <div class="pokemon-card">
          <p class="pokemon-number left">${data.pokemon[i].num}</p>
          <img class="pokemon-image" src = "${data.pokemon[i].img}">
          <p class="pokemon-name">${data.pokemon[i].name}</p> 
        </div>
        `;
      div4.innerHTML += pokemon;
      result.appendChild(div4);
    }
  }
};

window.addEventListener('load', () => {
  const divKanto = document.createElement('div');
  divKanto.className = 'generations';
  divKanto.setAttribute('id', 'kanto');
  const divJohto = document.createElement('div');
  divJohto.className = 'generations';
  divJohto.setAttribute('id', 'johto');

  init(divKanto, divJohto);
});
const searchInput = document.querySelector('#filter-search');
// Buscando pokemones por letras
const filtrar = () => {
  result.innerHTML = '';
  const inputText = searchInput.value.toLowerCase();

  // if (inputText === '') {
  //   init();
  // } else {
  // recorriendo cada pokemon
  data.pokemon.forEach((property) => {
    // guardando en una variable el nombre del pokemon
    const nameP = property.name;
    const lengthText = inputText.length;
    // buscando pokemones con las letras ingresadas
    if (nameP.slice(0, lengthText) === inputText) {
      result.innerHTML += `
      <div class="pokemon-card">
        <p class="pokemon-number left">${property.num}</p>
        <img class="pokemon-image" src = "${property.img}">
        <p class="pokemon-name">${property.name}</p> 
      </div>
    `;
    }
  });
  // mensaje en caso que no se encuentre
  if (result.innerHTML === '') {
    result.innerHTML += `
      No se ha encontrado el pokemon :(
    `;
  }
  // }
};
// evento que ejecuta la funcion filtrar
searchInput.addEventListener('input', () => {
  filtrar();
});
