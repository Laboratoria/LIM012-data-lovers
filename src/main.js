/* eslint-disable no-restricted-syntax */

import lol from './data/lol/lol.js';
import { filtroNombre, ordenarCampeones } from './data.js';

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
  const filtroCampeon = filtroNombre(listaTodos, texto); // llamo mi funcion

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

// boton roles
const btnRoles = document.getElementById('roles');
const pantalla1 = document.getElementById('pantalla1');
// const pantalla3 = document.getElementById('pantalla3');
const pantalla2 = document.getElementById('pantalla2');
btnRoles.addEventListener('click', () => {
  // pantalla1.classList.add('none');
  // pantalla2.classList.remove('none');
  pantalla1.cla
});

// botones: Assassin, Fighter, Mage, Marksman, Support, Tank
const mostrarAsesinos = document.getElementById('Assassin');
mostrarAsesinos.addEventListener('click', () => {
  const pantalla2 = document.getElementById('pantalla2');
  pantalla2.classList.add('ocultar');
  const pantalla3 = document.getElementById('pantalla3');
  pantalla3.classList.remove('ocultar');
});
const mostrarLuchadores = document.getElementById('rolFighter');
mostrarLuchadores.addEventListener('click', () => {
  const pantalla2 = document.getElementById('pantalla2');
  pantalla2.classList.add('ocultar');
  const pantalla3 = document.getElementById('pantalla3');
  pantalla3.classList.remove('ocultar');
});
const mostrarMagos = document.getElementById('rolMage');
mostrarMagos.addEventListener('click', () => {
  const pantalla2 = document.getElementById('pantalla2');
  pantalla2.classList.add('ocultar');
  const pantalla3 = document.getElementById('pantalla3');
  pantalla3.classList.remove('ocultar');
});
const mostrarTirador = document.getElementById('rolMarksman');
mostrarTirador.addEventListener('click', () => {
  const pantalla2 = document.getElementById('pantalla2');
  pantalla2.classList.add('ocultar');
  const pantalla3 = document.getElementById('pantalla3');
  pantalla3.classList.remove('ocultar');
});
const mostrarSoporte = document.getElementById('rolSupport');
mostrarSoporte.addEventListener('click', () => {
  const pantalla2 = document.getElementById('pantalla2');
  pantalla2.classList.add('ocultar');
  const pantalla3 = document.getElementById('pantalla3');
  pantalla3.classList.remove('ocultar');
});
const mostrarTank = document.getElementById('rolTank');
mostrarTank.addEventListener('click', () => {
  const pantalla2 = document.getElementById('pantalla2');
  pantalla2.classList.add('ocultar');
  const pantalla3 = document.getElementById('pantalla3');
  pantalla3.classList.remove('ocultar');
});

// <div> de almacen (asesinos)
const contenedorAsesino = document.querySelector('#listaAsesino');
const mostrandoAsesinos = (dataLol) => {
  let result = '';
  dataLol.forEach((champion) => {
    const casillaCamp = `
    <section>
      <img src=${champion.splash} class="imgSplash">
      <p class="name">${champion.name}</p><br><br>
       <p class="tags">Tags:</span> ${champion.tags}</p><br>
     </section>
      `;
    result += casillaCamp;
  });
  contenedorAsesino.innerHTML = result;
};
mostrandoAsesinos(arrayCampeones);


const seccionRoles = document.querySelector('.roles');
const inputsRoles = seccionRoles.querySelectorAll('input');
for (let i = 0; i < inputsRoles.length; i++) {
  inputsRoles[i].addEventListener('click', (event) => {
    const rolSelccionado = event.target.value;

    console.log(filtrandoRoles(arrayCampeones, rolSelccionado));
  });
}

// mostrando la lista de los campeones por cada rol
/* const listaAsesinos = document.querySelector('#Assassin');
listaAsesinos.addEventListener('click', () => {
  const mostrar = listaAsesinos.value.toLowerCase();
  mostrandoAsesinos(filtrandoRoles(arrayCampeones, mostrar));
});

const listaLuchador = document.querySelector('#Fighter');
listaLuchador.addEventListener('click', () => {
  const mostrar = listaLuchador.value;
  mostrandoAsesinos(filtrandoRoles(arrayCampeones, mostrar));
});

const ordenarMago = document.querySelector('#Mage');
ordenarMago.addEventListener('click', () => {
  const mostrar = ordenarMago.value;
  mostrandoAsesinos(filtrandoRoles(arrayCampeones, mostrar));
});

const ordenarTirador = document.querySelector('#rolMarksman');
ordenarTirador.addEventListener('click', () => {
  const mostrar = ordenarTirador.value;
  mostrandoAsesinos(filtrandoRoles(arrayCampeones, mostrar));
});

const ordenarSoporte = document.querySelector('#rolSupport');
ordenarSoporte.addEventListener('click', () => {
  const mostrar = ordenarSoporte.value;
  mostrandoAsesinos(filtrandoRoles(arrayCampeones, mostrar));
});

const ordenarTank = document.querySelector('#rolTank');
ordenarTank.addEventListener('click', () => {
  const mostrar = ordenarTank.value;
  mostrandoAsesinos(filtrandoRoles(arrayCampeones, mostrar));
}); */

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

// // Filtrado de Roles
// const orderLuchador = document.querySelector('#luchador');
// orderLuchador.addEventListener('click', () => {
//   const orderSelectLuchador = orderLuchador.value;
//   resultado(filtroLuchador(listaTodos, 'tags', orderSelectLuchador));
// });


// const filtro = document.querySelector('#luchador');
// filtro.addEventListener('click', () => {
//   const tagsData = Object.values(listaTodos.tags);
//   console.log(tagsData);
// });
/* const rolesEnLaData = Object.values(tagsData);
  // console.log(rolesEnLaData);
  const filtroRol = evt.target.filtrarRoles(rolesEnLaData, rolEscogido);
  return filtroRol;
}); */
