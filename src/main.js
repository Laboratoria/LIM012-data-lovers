import { ordenar } from './data.js';
import data from './data/atletas/atletas.js';

const barraInicio = document.getElementById('hola');
const datageneral = document.getElementById('datageneral');
const barraMedallero = document.getElementById('barraMedallero');
const filtroAz = document.getElementById('filtroAz');

document.getElementById('inicio').addEventListener('click', () => {
  barraInicio.classList.remove('hide');
  datageneral.classList.add('hide');
  barraMedallero.classList.add('hide');
  filtroAz.classList.add('hide');
});

document.getElementById('medallero').addEventListener('click', () => {
  datageneral.classList.add('hide');
  barraInicio.classList.add('hide');
  barraMedallero.classList.remove('hide');
  filtroAz.classList.add('hide');
});

document.getElementById('btnSidney').addEventListener('click', () => {
  barraMedallero.classList.remove('hide');
});

document.getElementById('btnAtenas').addEventListener('click', () => {
  barraMedallero.classList.remove('hide');
});

document.getElementById('btnBeijing').addEventListener('click', () => {
  barraMedallero.classList.remove('hide');
});

document.getElementById('btnLondres').addEventListener('click', () => {
  barraMedallero.classList.remove('hide');
});

document.getElementById('btnRio').addEventListener('click', () => {
  barraMedallero.classList.remove('hide');
});

document.getElementById('atletas').addEventListener('click', () => {
  datageneral.classList.remove('hide');
  barraInicio.classList.add('hide');
  barraMedallero.classList.add('hide');
  filtroAz.classList.remove('hide');

  const baseAtletas = (deportistas) => {
    let contenedor = '';

    const listaEncabezado = `

    <div class="encabezado">
        <div class="columna">Nombre</div>
        <div class="column">Pais</div>
        <div class="column">Deporte</div>
        <div class="colum">Peso</div>
        <div class="colum">Altura</div>
        <div class="colum">Género</div>
     </div>
     `;

    deportistas.forEach((item) => {
      const lista = `
    <div class="fila">
      <div class="columna">${item.nombre}</div>
      <div class="column">${item.equipo}</div>
      <div class="column">${item.deporte}</div>
      <div class="colum">${item.peso}</div>
      <div class="colum">${item.altura}</div>
      <div class="colum">${item.genero}</div>
    </div>
    `;
      contenedor += lista;
    });
    datageneral.innerHTML = listaEncabezado + contenedor;
  };

  baseAtletas(data.atletas);

  filtroAz.addEventListener('change', () => {
    const select = filtroAz.value;
    baseAtletas(ordenar(data.atletas, select));
  });
});
