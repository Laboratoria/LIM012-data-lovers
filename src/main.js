/* eslint-disable no-restricted-syntax */

import lol from './data/lol/lol.js';
import { filtrarNombre, ordenarCampeones, filtrandoRoles } from './data.js';

const listaTodos = lol.data; // en esta variable guardo los objetos de la data
const arrayCampeones = Object.values(listaTodos);

const lista = document.querySelector('#galeria'); // selecciono la parte donde voy a poner la informacion
const cantidadCampeones = document.getElementById('cantidad');
const resultado = (data) => {
  // vaciar arreglo para que no se duplique
  lista.innerHTML = '';
  // chequear la estructura de la data, si no es un array pasa a Object.values
  const checkData = Array.isArray(data) ? data : Object.values(data);
  cantidadCampeones.innerHTML = `Cantidad de Campeones:  ${checkData.length}`;
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

const buttonRoles = document.getElementById('buttonRoles');
buttonRoles.addEventListener('click', () => {
  lista.style.display = 'none';
  document.getElementById('pantalla2').style.display = 'block';
});


// filtrando por Rol
const seccionRoles = document.querySelector('.roles');
const inputsRoles = seccionRoles.querySelectorAll('input');
for (let i = 0; i < inputsRoles.length; i += 1) {
  inputsRoles[i].addEventListener('click', (event) => {
    const rolSeleccionado = event.target.value;
    resultado(filtrandoRoles(arrayCampeones, rolSeleccionado));
    lista.style.display = 'block';
    document.getElementById('pantalla2').style.display = 'none';
  });
}

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

// boton subir
window.onscroll = () => {
  // console.log(document.documentElement.scrollTop);
  if (document.documentElement.scrollTop > 100) {
    document.querySelector('.contenedorSubir').classList.add('show');
  } else {
    document.querySelector('.contenedorSubir').classList.remove('show');
  }
};
document.querySelector('.contenedorSubir').addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth', // para que le de un efecto suave al subir
  });
});

// Descripcion de Campeon

lista.addEventListener('click', (event) => {
  const nombreCampeon = event.target.dataset.id;
  const objCampeonSeleccionado = (listaTodos[nombreCampeon]);

  const historias = document.querySelector('#detalleCampeon').innerHTML = `
  <div class = "historia imagen">
    <img src = ${objCampeonSeleccionado.splash} class="imgCampeon"/> </div>
  <div class = "descripcionCampeon">
    <p class = "historiaNombre">${objCampeonSeleccionado.name} </p> 
    <p class = "historiaTitle>${objCampeonSeleccionado.title} </p>
    <p class = "historiaCampeon>${objCampeonSeleccionado.blurb} </p>
    <p class="historiaTags"> Rol: ${objCampeonSeleccionado.tags} </p>
    <div class = "info"> 
      <p> Defensa:${objCampeonSeleccionado.info.defense} </p>
      <p> Ataque:${objCampeonSeleccionado.info.attack} </p>
      <p> Magia:${objCampeonSeleccionado.info.magic} </p>
      <p> Dificultad:${objCampeonSeleccionado.info.difficulty} </p> </div>
  </div>`;
  resultado(historias);
});
