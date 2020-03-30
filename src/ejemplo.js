// import { example } from './data.js';
// import data from './data/lol/lol.js';
// import data from './data/pokemon/pokemon.js';

import dataAtletas from './data/atletas/atletas.js';

import listaDeProductos from './data/productos/productos.js';
import { filtrarProductosPorValor } from './data.js';

console.log(dataAtletas);

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

console.log(dataAtletas);


{ /* <p>INgrese el valor del producto</p>
  <input type="text" id="precio">

    <p>INgrese el orden : mayor - menor</p>
    <input type="text" id="ordencito">

      <button id="btn-consultar">consultar</button>

      <div id="pintar-resultado"></div> */ }
