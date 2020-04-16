import { ordenar, filtroPorDeporte, filtroResultadoMedallas } from './data.js';
import data from './data/atletas/atletas.js';

// eslint-disable-next-line no-alert
window.alert('Quedate en casa. Las autoridades estan haciendo su trabajo en vista del brote de COVID-19, pero necesitan de la disciplina de todos. No salgas de casa a menos que tengas una urgencia personal o familiar, mientras tanto puedes disfrutar de esta página.');

const barraInicio = document.getElementById('contenedorInicio');
const datageneral = document.getElementById('datageneral');
const barraMedallero = document.getElementById('barraMedallero');
const botonTop = document.querySelector('.botonTop');
const contenedorAtletas = document.getElementById('contenedorAtletas');
const barraSedes = document.getElementById('barraSedes');
const filtroAz = document.getElementById('filtroAz');
const barraDeportes = document.getElementById('barraDeportes');
const summerSports = document.getElementById('summerSports');
const resultadoMedallero = document.getElementById('resultadoMedallero');
const ciudadSelect = document.getElementById('ciudad');
const medallaSelect = document.getElementById('medalla');
const ciudadSelect1 = document.getElementById('ciudad1');
const medallaSelect1 = document.getElementById('medalla1');
const dataSports = document.getElementById('dataSports');


// ------Barra/inicio-----//
document.getElementById('inicio').addEventListener('click', () => {
  barraInicio.classList.remove('hide');
  datageneral.classList.add('hide');
  barraMedallero.classList.add('hide');
  contenedorAtletas.classList.add('hide');
  barraDeportes.classList.add('hide');
  dataSports.classList.add('hide');
  barraSedes.classList.add('hide');
});

// ------Barra/medallero---//
document.getElementById('medallero').addEventListener('click', () => {
  datageneral.classList.add('hide');
  barraInicio.classList.add('hide');
  barraMedallero.classList.remove('hide');
  contenedorAtletas.classList.add('hide');
  barraDeportes.classList.add('hide');
  barraSedes.classList.add('hide');
});

// ----Barra/medallero(Select con olimpiadas de verano) --------//
let ciudad = '';
ciudadSelect.addEventListener('change', (event) => {
  ciudad = event.target.value;
});
let medalla = '';
medallaSelect.addEventListener('change', (event) => {
  medalla = event.target.value;
  resultadoMedallero.innerHTML = `
  <div class="columna"> Se ganaron ${filtroResultadoMedallas(data.atletas, ciudad, medalla)} medallas en esta sede olimpica</div>`;
  resultadoMedallero.classList.remove('hide');
  barraMedallero.classList.remove('hide');
});

// ----Barra/medallero(Select con olimpiadas de invierno)--------//
let ciudad1 = '';
ciudadSelect1.addEventListener('change', (event) => {
  ciudad1 = event.target.value;
});
let medalla1 = '';
medallaSelect1.addEventListener('change', (event) => {
  medalla1 = event.target.value;
  resultadoMedallero.innerHTML = `
  <div class="columna"> Se ganaron ${filtroResultadoMedallas(data.atletas, ciudad1, medalla1)} medallas en esta sede olimpica</div>`;
  resultadoMedallero.classList.remove('hide');
  barraMedallero.classList.remove('hide');
});

// -----Barra/atletas--------------//
document.getElementById('atletas').addEventListener('click', () => {
  datageneral.classList.remove('hide');
  barraInicio.classList.add('hide');
  barraMedallero.classList.add('hide');
  contenedorAtletas.classList.remove('hide');
  barraSedes.classList.add('hide');

  // -----Barra/atletas(boton scroll)--------------//
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

  // -----Ejecuta función ordenar  por nombre (a-z),(z-a)----//
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
// -----Barra/Sedes olímpicas (link)--------------//
document.getElementById('sedes').addEventListener('click', () => {
  barraInicio.classList.add('hide');
  datageneral.classList.add('hide');
  barraMedallero.classList.add('hide');
  contenedorAtletas.classList.add('hide');
  barraDeportes.classList.add('hide');
  dataSports.classList.add('hide');
  barraSedes.classList.remove('hide');
});

// -----Barra/Deportes--------------//
document.getElementById('deportes').addEventListener('click', () => {
  barraDeportes.classList.remove('hide');
  barraInicio.classList.add('hide');
  datageneral.classList.add('hide');
  barraMedallero.classList.add('hide');
  contenedorAtletas.classList.add('hide');
  barraSedes.classList.add('hide');
});


// -----------------Ejecuta la funcionalidad de los iconos (filtro por deportes)----//
const filtroIconos = (deportistas) => {
  let contenedor1 = '';

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
    contenedor1 += lista1;
  });
  dataSports.innerHTML = listaEncabezado + contenedor1;
};

document.querySelectorAll('.botonDeporte').forEach((element) => {
  element.addEventListener('click', () => {
    filtroIconos(filtroPorDeporte(data.atletas, element.dataset.deporte));
    dataSports.classList.remove('hide');
    barraInicio.classList.add('hide');
    datageneral.classList.add('hide');
    barraMedallero.classList.add('hide');
    contenedorAtletas.classList.add('hide');
    barraDeportes.classList.add('hide');
    summerSports.classList.add('hide');
    barraSedes.classList.add('hide');
  });
});
