import { ordenar } from './data.js';
import data from './data/atletas/atletas.js';

window.alert('Quedate en casa. Las autoridades estan haciendo su trabajo en vista del brote de COVID-19, pero necesitan de la disciplina de todos. No salgas de casa a menos que tengas una urgencia personal o familiar, mientras tanto puedes disfrutar de esta página.');

const barraInicio = document.getElementById('contenedorInicio');
const datageneral = document.getElementById('datageneral');
const barraMedallero = document.getElementById('barraMedallero');
const botonTop = document.querySelector('.botonTop');
const contenedorAtletas = document.getElementById('contenedorAtletas');
const barraSedes = document.getElementById('barraSedes');
const filtroAz = document.getElementById('filtroAz');

const scroll = () => {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    botonTop.classList.add('showScrollUp');
  } else {
    botonTop.classList.remove('showScrollUp');
  }
};

window.addEventListener('scroll', scroll);

const backToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
};

botonTop.addEventListener('click', backToTop);

document.getElementById('inicio').addEventListener('click', () => {
  barraInicio.classList.remove('hide');
  datageneral.classList.add('hide');
  barraMedallero.classList.add('hide');
  contenedorAtletas.classList.add('hide');
  barraSedes.classList.add('hide');
});

document.getElementById('medallero').addEventListener('click', () => {
  datageneral.classList.add('hide');
  barraInicio.classList.add('hide');
  barraMedallero.classList.remove('hide');
  contenedorAtletas.classList.add('hide');
  barraSedes.classList.add('hide');
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
  contenedorAtletas.classList.remove('hide');
  barraSedes.classList.add('hide');

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

document.getElementById('sedes').addEventListener('click', () => {
  barraInicio.classList.add('hide');
  datageneral.classList.add('hide');
  barraMedallero.classList.add('hide');
  contenedorAtletas.classList.add('hide');
  barraSedes.classList.remove('hide');
});
