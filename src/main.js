// import { example } from './data.js';
import lol from './data/lol/lol.js';

const listaTodos = lol.data;
// console.log(listaTodos);
const lista = document.querySelector('#galeria');
// console.log(lista);

Object.values(listaTodos).forEach((campeones) => {
  const casilla = document.createElement('div');
  const foto = document.createElement('img');
  const nombre = document.createElement('p');
  casilla.className = 'casillaCampeon';
  nombre.className = 'nombreCampeon';
  foto.className = 'imagenCampeon';
  nombre.innerHTML = `${campeones.name}`;
  foto.src = `${campeones.splash}`;

  casilla.appendChild(foto);
  casilla.appendChild(nombre);
  lista.appendChild(casilla);
});
