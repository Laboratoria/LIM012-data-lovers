
import lol from './data/lol/lol.js';
import {
  filtrarNombre, ordenarCampeones, filtrandoRoles, calculoStats,
} from './data.js';

const listaTodos = lol.data; // en esta variable guardo los objetos de la data
const arrayCampeones = Object.values(listaTodos);

const lista = document.querySelector('#galeria'); // selecciono la parte donde voy a poner la informacion

const pantalla2 = document.getElementById('pantalla2');
const pantalla3 = document.getElementById('pantalla3');
const pantalla4 = document.getElementById('pantalla4');
const cantidadCampeones = document.getElementById('cantidad');


// Descripcion de Campeon
const crearVistaCampeon = (campeon) => {
  document.querySelector('#detalleCampeon').innerHTML = `
  <div class = "historia imagen">
    <img src = ${campeon.splash} class="imgCampeon"/> </div>
  <div class = "descripcionCampeon">
    <p class = "historiaNombre">${campeon.name} </p>
    <p class = "historiaTitle">${campeon.title} </p>
    <p class = "historiaCampeon">${campeon.blurb} </p>
    <p class="historiaTags"> Rol: ${campeon.tags} </p>
    <div class = "info">
      <p> Defensa:${campeon.info.defense} </p>
      <p> Ataque:${campeon.info.attack} </p>
      <p> Magia:${campeon.info.magic} </p>
      <p> Dificultad:${campeon.info.difficulty} </p> </div>
  </div>`;
};

const resultado = (data) => {
  // vaciar arreglo para que no se duplique
  lista.innerHTML = '';
  pantalla2.classList.add('ocultar');
  pantalla4.classList.add('ocultar');
  // chequear la estructura de la data, si no es un array pasa a Object.values
  const checkData = Array.isArray(data) ? data : Object.values(data);
  cantidadCampeones.innerHTML = `Number Of Champions:  ${checkData.length}`;
  checkData.forEach((campeones) => {
    const casilla = document.createElement('div');
    const foto = document.createElement('img');
    const nombre = document.createElement('p');
    nombre.className = 'nombreCampeon'; // le pongo un class nombre para editarle los estilos
    foto.className = 'imagenCampeon';
    nombre.innerHTML = `${campeones.name}`;
    foto.src = `${campeones.splash}`;
    casilla.className = 'casillaCampeon';
    casilla.id = campeones.name;
    casilla.appendChild(foto);
    casilla.appendChild(nombre);
    lista.appendChild(casilla);
    // casilla agregar add event ... crearVistaCampeon(identificador);
    casilla.addEventListener('click', (evt) => {
      const nombreId = evt.path[1].id;
      // console.log(listaTodos[nombreId]);
      crearVistaCampeon(listaTodos[nombreId]);
      lista.innerHTML = '';
      pantalla3.classList.add('mostrar');
      pantalla4.classList.add('ocultar');
    });
    pantalla4.classList.add('ocultar');
    pantalla2.classList.add('ocultar');
  });
};
resultado(listaTodos);

// boton todos
const btnAll = document.getElementById('todos');
btnAll.addEventListener('click', () => {
  lista.classList.add('mostrar');
  resultado(listaTodos);
});

// Evento cerrar Modal
const cerrar = document.getElementById('cerrar');
const contenedorVideo = document.getElementById('contenedorVideo');
cerrar.addEventListener('click', () => {
  contenedorVideo.classList.add('ocultar');
});

// buscando en el input
const buscar = document.querySelector('#buscador');
buscar.addEventListener('keyup', (evt) => {
  const texto = evt.target.value.toLowerCase();// extraemos el valor de la caja de texto
  const filtroCampeon = filtrarNombre(listaTodos, texto); // llamo mi funcion

  // CHAMPION NOT FOUND
  const errorMsj = document.querySelector('#error');
  if (filtroCampeon.length === 0) {
    errorMsj.classList.add('mostrar');
  } else {
    errorMsj.classList.add('ocultar');
  }
  resultado(filtroCampeon);
},
false);

// funcionalidad de boton role
const buttonRoles = document.getElementById('buttonRoles');
buttonRoles.addEventListener('click', () => {
  pantalla2.classList.add('mostrar');
  lista.innerHTML = '';
  lista.classList.add('ocultar');
  cantidadCampeones.classList.add('mostrar');
  pantalla4.innerHTML = '';
});


// filtrando por Rol
const seccionRoles = document.querySelector('.roles');
const inputsRoles = seccionRoles.querySelectorAll('input');
for (let i = 0; i < inputsRoles.length; i += 1) {
  inputsRoles[i].addEventListener('click', (event) => {
    const rolSeleccionado = event.target.value;
    resultado(filtrandoRoles(arrayCampeones, rolSeleccionado));
    lista.classList.add('ocultar');
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
  cantidadCampeones.classList.add('mostrar');
  pantalla4.classList.add('ocultar');
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
    top: 0, // para que suba - inicio
    behavior: 'smooth', // para que le de un efecto suave al subir
  });
});

// funcionalidad de boton habilidades
const habilidades = document.getElementById('habilidades');
habilidades.addEventListener('click', () => {
  lista.innerHTML = '';
  pantalla4.classList.add('mostrar');
  pantalla3.classList.add('ocultar');
});

const hpChampion = document.querySelector('#hpChampion');
hpChampion.innerHTML = ` Champions Life Span: "${calculoStats(arrayCampeones, 'hp')}"`;
const movespeedChampion = document.querySelector('#movespeedChampion');
movespeedChampion.innerHTML = ` Average Movement Speed: "${calculoStats(arrayCampeones, 'movespeed')}"`;
const attackChampion = document.querySelector('#attackChampion');
attackChampion.innerHTML = ` Average Attack Damage: "${calculoStats(arrayCampeones, 'attackdamage')}"`;


// promedio hp
