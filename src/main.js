import { athletesView } from './data.js';
import data from './data/atletas/atletas.js';

const optionsMenu = document.querySelectorAll('li');
optionsMenu.forEach((element) => {
  element.addEventListener('click', (event) => {
    document.getElementById('table').classList.remove('borrar');
    const paintAthletes = athletesView(data);
    if (event.target.id === '1') {
      document.getElementById('root').innerHTML = '';
      document.getElementById('articulos').classList.add('borrar');
      paintAthletes.forEach((element) => {
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
      });
    }
  });
});
