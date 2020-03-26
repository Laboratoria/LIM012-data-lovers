/* eslint-disable no-restricted-syntax */

import lol from './data/lol/lol.js';
// import { ascendente, descendente } from './data.js';

const listaTodos = lol.data; // en esta variable guardo los objetos de la data
const lista = document.querySelector('#galeria'); // selecciono la parte donde voy a poner la informacion
// const cargarVista = (listaTodos) => {
const resultado = () => {
  Object.values(listaTodos).forEach((campeones) => {
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
// };
// cargarVista(listaTodos);
// console.log(cargarVista);

/* boton de ordenar */
/* const AZ = document.getElementById('ascendente');
AZ.addEventListener('click', () => {
  lista.innerHTML = cargarVista(ascendente(listaTodos));
});
const ZA = document.getElementById('descendente');
ZA.addEventListener('click', () => {
  lista.innerHTML = cargarVista(descendente(listaTodos));
}); */

/* input buscar campeon */
const buscar = document.querySelector('#buscar');
const botonBuscar = document.querySelector('#botonBuscar');
const filtrar = () => {
  // console.log(buscar.value);
  resultado.innerHTML = ''; // para q no se concatene con el += y siempre comience en cero
  const texto = buscar.value.toLowerCase();// lo que se ingresa en el input tiene que estar en minucula para poder compararlo
  for (const campeonBuscado of listaTodos) { // hacemos un recorrido para buscar
    const nombre = campeonBuscado.name.toLowerCase(); // campeonBuscado esta tomando el primero, en el primer ciclo pero a la propiedad name pasado a minuscula para que pueda ser comparado
    if (nombre.indexOf(texto) !== -1) { // evalua lo ingresado(texto) y si coindice lo q escriba lo retorna cualquiera excepto -1 (tiene que ser distinto a -1 por que quiere decir que lo encontro)
      // no me coge el codigo, con la variable resultado
      resultado.innerHTML += `   
      <div>${campeonBuscado.img} - ${campeonBuscado.name}</div}
      `;
    }
  }
  if (resultado.innerHTML === '') {
    resultado.innerHTML += `   
    ${'No hay coincidencias'} 
    `;
  }
};
botonBuscar.addEventListener('click', filtrar); // evento si utiliza el boton
buscar.addEventListener('keyup', filtrar); // evento mientras va escribiendo le aparecen las opcines en la parte de abajo

filtrar(); // para que siempre se mantenga la funcion
