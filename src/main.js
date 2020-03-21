import { example, mostrarAtletasConSuDeporte } from './data.js';
import data from './data/atletas/atletas.js';

const atletasConDeporte = mostrarAtletasConSuDeporte(data);
atletasConDeporte.forEach(element => {
  const ulAtleta = document.createElement('ul');
  const liNombre = document.createElement('li');
  const textNombre = document.createTextNode(element.nombre);
  liNombre.appendChild(textNombre);
  ulAtleta.appendChild(liNombre);
  const liEquipo = document.createElement('li');
  const textEquipo = document.createTextNode(element.equipo);
  liEquipo.appendChild(textEquipo);
  ulAtleta.appendChild(liEquipo);
  const liDeporte = document.createElement('li');
  const textDeporte = document.createTextNode(element.deporte);
  liDeporte.appendChild(textDeporte);
  ulAtleta.appendChild(liDeporte);
  document.getElementById('root').appendChild(ulAtleta); 
  console.log (element);
});

console.log(example, data);
