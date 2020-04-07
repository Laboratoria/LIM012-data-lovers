import { ordenar, filtroPorArchery } from './data.js';
import data from './data/atletas/atletas.js';

const barraInicio = document.getElementById('barraInicio');
const datageneral = document.getElementById('datageneral');
const barraMedallero = document.getElementById('barraMedallero');
const filtroAz = document.getElementById('filtroAz');
const barraDeportes = document.getElementById('barraDeportes');
const dataDeportes = document.getElementById('dataDeportes');

document.getElementById('inicio').addEventListener('click', () => {
  barraInicio.classList.remove('hide');
  datageneral.classList.add('hide');
  barraMedallero.classList.add('hide');
  filtroAz.classList.add('hide');
  barraDeportes.classList.add('hide');
});

document.getElementById('medallero').addEventListener('click', () => {
  datageneral.classList.add('hide');
  barraInicio.classList.add('hide');
  barraMedallero.classList.remove('hide');
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

document.getElementById('deportes').addEventListener('click', () => {
  datageneral.classList.add('hide');
  barraInicio.classList.add('hide');
  filtroAz.classList.add('hide');
  barraDeportes.classList.remove('hide');
});


const deportes = (deportistas) => {
  let contenedorSports = '';

  const listaEncabezadoSports = `
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
    const lista1 = `
    <div class="fila">
      <div class="columna">${item.nombre}</div>
      <div class="column">${item.equipo}</div>
      <div class="column">${item.deporte}</div>
      <div class="colum">${item.peso}</div>
      <div class="colum">${item.altura}</div>
      <div class="colum">${item.genero}</div>
    </div>
  `;
    contenedorSports += lista1;
  });
  dataDeportes.innerHTML = listaEncabezadoSports + contenedorSports;
};
deportes(data.atletas);
document.getElementById('btnar').addEventListener('click', () => {
  barraInicio.classList.add('hide');
  filtroAz.classList.add('hide');
  barraDeportes.classList.add('hide');
  dataDeportes.classList.remove('hide');
  deportes(filtroPorArchery(data.atletas));
});
