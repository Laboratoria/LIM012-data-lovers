import {
  athletesView, ordenAs, filtrarAtletasPorDeporte,
} from './data.js';
import data from './data/atletas/atletas.js';

const arrAtletas = data.atletas;

const optionsMenu = document.querySelectorAll('li');
optionsMenu.forEach((liMenu) => {
  liMenu.addEventListener('click', (event) => {
    document.getElementById('table').classList.remove('borrar');
    const athletes = athletesView(arrAtletas);

    if (event.target.id === '1') {
      document.getElementById('root').innerHTML = '';
      document.getElementById('articulos').classList.add('borrar');

      athletes.forEach((athlete) => {
        const ulAtleta = document.createElement('ul');
        const liNombre = document.createElement('li');
        const textNombre = document.createTextNode(athlete.nombre);
        liNombre.appendChild(textNombre);
        ulAtleta.appendChild(liNombre);
        const liEquipo = document.createElement('li');
        const textEquipo = document.createTextNode(athlete.equipo);
        liEquipo.appendChild(textEquipo);
        ulAtleta.appendChild(liEquipo);
        const liDeporte = document.createElement('li');
        const textDeporte = document.createTextNode(athlete.deporte);
        liDeporte.appendChild(textDeporte);
        ulAtleta.appendChild(liDeporte);
        document.getElementById('root').appendChild(ulAtleta);
      });
    }
  });
});
const alfhabeticOrder = document.getElementById('btn');
alfhabeticOrder.addEventListener('click', () => {
  const ascendente = ordenAs(athletesView(arrAtletas));
  document.getElementById('root').innerHTML = '';
  ascendente.forEach((item) => {
    const ulAtleta = document.createElement('ul');
    const liNombre = document.createElement('li');
    const textNombre = document.createTextNode(item.nombre);
    liNombre.appendChild(textNombre);
    ulAtleta.appendChild(liNombre);
    const liEquipo = document.createElement('li');
    const textEquipo = document.createTextNode(item.equipo);
    liEquipo.appendChild(textEquipo);
    ulAtleta.appendChild(liEquipo);
    const liDeporte = document.createElement('li');
    const textDeporte = document.createTextNode(item.deporte);
    liDeporte.appendChild(textDeporte);
    ulAtleta.appendChild(liDeporte);
    document.getElementById('root').appendChild(ulAtleta);
  });
});

const optionSports = document.querySelector('#optionSports');
optionSports.addEventListener('change', (event) => {
  const deporteSeleccionado = optionSports.value;
  const atletasPorDeporte = filtrarAtletasPorDeporte(arrAtletas, deporteSeleccionado);
  if (event.target.id === 'optionSports') {
    document.getElementById('root').innerHTML = '';
    atletasPorDeporte.forEach((athlete) => {
      const ulAtleta = document.createElement('ul');
      const liNombre = document.createElement('li');
      const textNombre = document.createTextNode(athlete.nombre);
      liNombre.appendChild(textNombre);
      ulAtleta.appendChild(liNombre);
      const liEquipo = document.createElement('li');
      const textEquipo = document.createTextNode(athlete.equipo);
      liEquipo.appendChild(textEquipo);
      ulAtleta.appendChild(liEquipo);
      const liDeporte = document.createElement('li');
      const textDeporte = document.createTextNode(athlete.deporte);
      liDeporte.appendChild(textDeporte);
      ulAtleta.appendChild(liDeporte);
      document.getElementById('root').appendChild(ulAtleta);
    });
  }
});
