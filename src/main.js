import {
  athletesView, ordenAs, filtrarAtletasPorDeporte, totalMedallasOroPorOlimpiadaPais,
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


const opcionOlimpiadas = document.querySelector('#opcionOlimpiadas');
const opcionPais = document.querySelector('#opcionPais');
/*

      opcionOlimpiadas.addEventListener('change', (event) => {
      opcionPais.addEventListener('change', (event) => {
      if (event.target.id === '3') {
        const olimpiadaSeleccionada = opcionOlimpiadas.value;
        const paisSeleccionado = opcionPais.value;
        const medallasOlimpiadas = medallasPorPais(arrAtletas, olimpiadaSeleccionada, paisSeleccionado);
        document.getElementById('root').innerHTML = 'Las medallas ganadas son: Oro, plata y bronce';
      }
    });
  }
});
*/


const btnMostrarMedallas = document.querySelector('#btnMostrarMedallas');

btnMostrarMedallas.addEventListener('click', (event) => {
  const olimpiadaConAño = opcionOlimpiadas.value;
  const pais = opcionPais.value;

  if (olimpiadaConAño !== '' && pais !== '') {
    const olimpiada = olimpiadaConAño.substring(0, olimpiadaConAño.length - 4);
    const año = olimpiadaConAño.substring(olimpiadaConAño.length - 4);

    const totalMedallasOro = totalMedallasOroPorOlimpiadaPais(arrAtletas, pais, olimpiada, año);
    alert(totalMedallasOro);
  } else {
    alert('Seleccione la olimpiada y el país');
  }
});
