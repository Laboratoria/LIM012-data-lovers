// import { example } from './data.js';
// import data from './data/lol/lol.js';
// import data from './data/pokemon/pokemon.js';

// import dataAtletas from './data/atletas/atletas.js';

import listaDeProductos from './data/productos/productos.js';
import {
  filtrarProductosPorValor,
} from './data.js';


// console.log(listaDeProductos);
// console.log(filtrarProductosPorValor);

const valorIngresado = document.getElementById('precio');
const ordenIngresado = document.getElementById('ordencito');
const botonCOnsultar = document.getElementById('btn-consultar');

botonCOnsultar.addEventListener('click', () => {
  const valorUsuario = parseInt(valorIngresado.value);
  const ordenUsuario = ordenIngresado.value;

  const arrayProductosFiltrados = filtrarProductosPorValor(listaDeProductos, valorUsuario, ordenUsuario);
  let stringTempalte = '';
  for (let i = 0; i < arrayProductosFiltrados.length; i++) {
    stringTempalte += `
  <div class="cards">
  <h2>${arrayProductosFiltrados[i].nombre}</h2>
  <p><strong>Sport :</strong> ${arrayProductosFiltrados[i].valor} </p>
  </div>
  `;
  }
  document.getElementById('pintar-resultado').innerHTML = stringTempalte;
});


/*
const data = (dataAtletas.atletas);

document.getElementById('container').innerHTML = `
<h2 class='title' >TODOS LOS ATLETAS</h2>
<div class="container">
${data.map(dataPrincipal => `
<div class="cards">
<h2>${dataPrincipal.name}</h2>
<p><strong>Sport :</strong> ${dataPrincipal.sport} </p>
<p><strong>Weigth :</strong> ${dataPrincipal.weigth} </p>
<p><strong>Team:</strong> ${dataPrincipal.team} </p>
</div>
`).join('')}
</div>
`;
*/


{
  /* <p>INgrese el valor del producto</p>
   <input type="text" id="precio">

     <p>INgrese el orden : mayor - menor</p>
     <input type="text" id="ordencito">

       <button id="btn-consultar">consultar</button>

       <div id="pintar-resultado"></div> */
}
genderFilters.forEach((filtro) => {
  filtro.addEventListener('click', () => {
    const valor = filtro.innerText;
    const atletheGender = document.querySelectorAll('.atlethe-gender');
    atletheGender.forEach((genero) => {
      if (genero.innerText.includes(valor) || valor === 'Todos') {
        // desde el nommbre obtenemos el '.atlethe-gender' ->subimos a .card Body ->hasta llegar a card
        genero.parentElement.parentElement.style.display = 'block';
      } else {
        genero.parentElement.parentElement.style.display = 'none';
      }
    });
  });
});

// agregue un filtro en las li dentro del.optionFilter (btnGender)
genderFilters.forEach((filtro) => {
  filtro.addEventListener('click', () => {
    const valor = filtro.innerText;
    const atletheGender = document.querySelectorAll('.atlethe-game');

    atletheGender.forEach((genero) => {
      if (genero.innerText.includes(valor) || valor === 'Todos') {
        // desde el nommbre obtenemos el '.atlethe-gender' ->subimos a .card Body ->hasta llegar a card
        genero.parentElement.parentElement.style.display = 'block';
      } else {
        genero.parentElement.parentElement.style.display = 'none';
      }
    });
  });
});

regionFilters.forEach((filter) => {
  filter.addEventListener('click', () => {
    const value = filter.innerText;
    const countryRegion = document.querySelectorAll('.country-region');

    countryRegion.forEach((region) => {
      if (region.innerText.includes(value) || value === 'All') {
        // .card -> .card-body -> .country-region
        region.parentElement.parentElement.style.display = 'block';
      } else {
        region.parentElement.parentElement.style.display = 'none';
      }
    });
  });
});
