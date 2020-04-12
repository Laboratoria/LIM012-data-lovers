import {
  athletesView, ordenAs, filtrarAtletasPorDeporte, totalMedallas,
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
  ascendente.forEach((athlete) => {
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

const optionsMedallas = document.querySelector('#medallas');
optionsMedallas.addEventListener('click', () => {
  document.getElementById('seccion-medallas').classList.remove('borrar');
  document.getElementById('table').classList.add('borrar');
  document.getElementById('articulos').classList.add('borrar');

  const btnMostrarMedallas = document.querySelector('#btnMostrarMedallas');
  const opcionOlimpiadas = document.querySelector('#opcionOlimpiadas');
  const opcionPais = document.querySelector('#opcionPais');

  let ciudadSelec;
  let paisSelec;


  opcionOlimpiadas.addEventListener('change', (event) => {
    ciudadSelec = event.target.options[event.target.selectedIndex].getAttribute('data-ciudad');
  });

  opcionPais.addEventListener('change', (event) => {
    paisSelec = event.target.options[event.target.selectedIndex].getAttribute('data-pais');
  });

  const tipoOro = 'Gold';
  const tipoPlata = 'Silver';
  const tipoBronce = 'Bronze';

  btnMostrarMedallas.addEventListener('click', () => {
    const medallasOro = totalMedallas(arrAtletas, paisSelec, ciudadSelec, tipoOro);
    const medallasPlata = totalMedallas(arrAtletas, paisSelec, ciudadSelec, tipoPlata);
    const medallasBronce = totalMedallas(arrAtletas, paisSelec, ciudadSelec, tipoBronce);

    document.getElementById('rootMedallas').innerHTML = `Oro ${medallasOro} `
      + `Plata ${medallasPlata} `
      + `Bronce ${medallasBronce}`;
  });
});
