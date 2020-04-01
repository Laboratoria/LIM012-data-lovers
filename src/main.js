/* eslint-disable no-restricted-syntax */

import lol from './data/lol/lol.js';
import { filtrarNombre, ordenarCampeones, filtrandoRoles } from './data.js';

const listaTodos = lol.data; // en esta variable guardo los objetos de la data
const arrayCampeones = Object.values(listaTodos);

const lista = document.querySelector('#galeria'); // selecciono la parte donde voy a poner la informacion
const resultado = (data) => {
  // vaciar arreglo para que no se duplique
  lista.innerHTML = '';
  // chequear la estructura de la data, si no es un array pasa a Object.values
  const checkData = Array.isArray(data) ? data : Object.values(data);
  checkData.forEach((campeones) => {
    const casilla = document.createElement('div');
    const foto = document.createElement('img');
    const nombre = document.createElement('p');
    nombre.className = 'nombreCampeon'; // le pongo un class nombre para editarle los estilos
    foto.className = 'imagenCampeon';
    nombre.innerHTML = `${campeones.name}`;
    foto.src = `${campeones.splash}`;
    casilla.className = 'casillaCampeon';
    casilla.appendChild(foto);
    casilla.appendChild(nombre);
    lista.appendChild(casilla);
  });
};
resultado(listaTodos);

// buscando en el input
const buscar = document.querySelector('#buscador');
buscar.addEventListener('keyup', (evt) => {
  const texto = evt.target.value.toLowerCase();// extraemos el valor de la caja de texto
  const filtroCampeon = filtrarNombre(listaTodos, texto); // llamo mi funcion

  // CHAMPION NOT FOUND
  const errorMsj = document.querySelector('#error');
  if (filtroCampeon.length === 0) {
    errorMsj.style.display = 'block';
  } else {
    errorMsj.style.display = 'none';
  }
  resultado(filtroCampeon);
},
false);


const mostrarAssassin = document.getElementById('Assassin');
mostrarAssassin.addEventListener('click', (event) => {
  const rolSeleccionado = event.target.value;
  resultado(filtrandoRoles(arrayCampeones, rolSeleccionado));
});

const mostrarFighter = document.getElementById('Fighter');
mostrarFighter.addEventListener('click', (event) => {
  const rolSeleccionado = event.target.value;
  resultado(filtrandoRoles(arrayCampeones, rolSeleccionado));
});

const mostrarMage = document.getElementById('Mage');
mostrarMage.addEventListener('click', (event) => {
  const rolSeleccionado = event.target.value;
  resultado(filtrandoRoles(arrayCampeones, rolSeleccionado));
});

const mostrarMarksman = document.getElementById('Marksman');
mostrarMarksman.addEventListener('click', (event) => {
  const rolSeleccionado = event.target.value;
  resultado(filtrandoRoles(arrayCampeones, rolSeleccionado));
});

const mostrarAsesinos = document.getElementById('Support');
mostrarAsesinos.addEventListener('click', (event) => {
  const rolSeleccionado = event.target.value;
  resultado(filtrandoRoles(arrayCampeones, rolSeleccionado));
});

const mostrarTank = document.getElementById('Tank');
mostrarTank.addEventListener('click', (event) => {
  const rolSeleccionado = event.target.value;
  resultado(filtrandoRoles(arrayCampeones, rolSeleccionado));
});
// boton de ordenar
const ordenar = document.getElementById('ordenar');
ordenar.addEventListener('change', (evt) => {
  evt.preventDefault();
  if (evt.target.value === 'ascendente') {
    const dataOrdenada = ordenarCampeones(listaTodos, 'az');
    resultado(dataOrdenada);
  } else {
    const dataOrdenada = ordenarCampeones(listaTodos, 'za');
    resultado(dataOrdenada);
  }
});
