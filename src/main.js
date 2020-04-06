// import data from './data/lol/lol.js';
// import data from './data/pokemon/pokemon.js';
import dataAtletas from './data/atletas/atletas.js';
// import dataAtletas from './data/copy.js';

/* import {
  filterMedallaSilver,
  filterMedallaBronze,
  filterMedallaGold,
  filterTempSummer,
  filterTempWinter,
} from './data.js'; */

const data = (dataAtletas.atletas);
const atletasInfo = document.getElementById('atlethes');
const btnGender = document.getElementById('filterGender');
const btnSeason = document.getElementById('filterSeason');
const btnMedal = document.getElementById('filterMedal');
const genderFilters = btnGender.querySelectorAll('li');
const inputSearch = document.getElementById('search');


const transformaBandera = (initial) => {
  const newInitial = initial.slice(0, -1);
  return newInitial;
};


atletasInfo.innerHTML = '';
data.forEach((arrays) => {
  const card = document.createElement('div');
  card.classList.add('card');
  card.innerHTML = `
   <div>
   <img src = ${arrays.gender === 'F'
    ? './img/avatarMujer.png'
    : './img/avatarVaron.png'}
      width = 110 height = 110>
   </div>
   
   <div class="card-body">
   <h3 class="atlethe-name">${arrays.name}</h3>
   <p class = "atlethe-gender">
   <strong>gender:</strong>
   ${arrays.gender}
   </p>
   <p>
   <strong>Sport:</strong>
   ${arrays.sport}
   </p>
   <p class="country-region">
   <strong>Team:</strong>
   ${arrays.team}
   </p>
   <p class="atlethe-game">
   <strong>Temporada:</strong>
   ${arrays.sport}
   </p>
   </div>
   <img width = 40 height = 40 src = "https://www.countryflags.io/${transformaBandera(arrays.noc)}/flat/64.png">
   `;
  atletasInfo.appendChild(card);
});

/* le damos funcionalidad al div que contiene la lista de opciones de filtrado por genero */
window.addEventListener('click', (e) => {
  if (btnGender.contains(e.target)) {
    btnGender.classList.toggle('open');
  } else {
    btnGender.classList.remove('open');
  }
});
/* le damos funcionalidad al div que contiene la lista de opciones de filtrado por temporada */
window.addEventListener('click', (e) => {
  if (btnSeason.contains(e.target)) {
    btnSeason.classList.toggle('open');
  } else {
    btnSeason.classList.remove('open');
  }
});
/* le damos funcionalidad al div que contiene la lista de opciones de filtrado por medalla */
window.addEventListener('click', (e) => {
  if (btnMedal.contains(e.target)) {
    btnMedal.classList.toggle('open');
  } else {
    btnMedal.classList.remove('open');
  }
});

/* search, buscador de nombre, encuentra coincidencias */
inputSearch.addEventListener('input', (e) => {
  const {
    value,
  } = e.target;
  const atletheName = document.querySelectorAll('.atlethe-name');
  // console.log(atletheName);
  atletheName.forEach((name) => {
    if (name.innerText.toLowerCase().includes(value.toLowerCase())) {
      // desde el nommbre obtenemos el '.atlethe-name' ->subimos a .card Body ->hasta llegar a card
      name.parentElement.parentElement.style.display = 'block';
    } else {
      name.parentElement.parentElement.style.display = 'none';
    }
  });
});

// agregue un filtro en las li dentro del.optionFilter (btnGender)
genderFilters.forEach((filtro) => {
  filtro.addEventListener('click', () => {
    const valor = filtro.innerText;
    const atletheGender = document.querySelectorAll('.atlethe-gender');
    // console.log(valor);
    atletheGender.forEach((genero) => {
      if (genero.innerText.includes(valor) || valor === 'Todos') {
        // desde el nommbre obtenemos el '.atlethe-gender' ->subimos a .card Body ->hasta llegar a card
        genero.parentElement.parentElement.style.display = 'block';
      } else {
        genero.parentElement.parentElement.style.display = 'none';
      }
    });
  });
});

/* filtrar a los atletas por  */

/* const filtrardataHombres = data.filter(items => (items.gender === 'M'));
console.log('atletas hombres =>', filtrardataHombres);

const filtrardataMujeres = data.filter(items => (items.gender === 'F'));
console.log('atletas mujeres =>', filtrardataMujeres); */

/* para las opciones de temporada y medallas debemos filtar el array disciplinas de array general Atletas */
/* const filtrardataInvierno = data.filter(items => (items.disciplinas.filter(item => (item.temporada === 'winter'))));
console.log('temporada inviernop =>', filtrardataInvierno);

const filtrarmedallaOro = data.filter(items => (items.gender === 'F'));
console.log('atletas mujeres =>', filtrarmedallaOro); */

/* const filterGender = data.filter(ele => (ele.gender === 'F'));
console.log(filterGender); */

/* FILTRADOS del array Disciplina */


/* filtrado de atletas que son masculino y game summer */
// const prueba = data.filter(item => item.gender = 'M' && item.game.includes('Winter'));
// console.log(prueba);

/* const array = [1, 2, 3, 3, 2, 1, 5, 6, 7, 8, 8];
const removeDuplicates = array => [...new Set(array)]; */
// console.log(removeDuplicates(array));

/* const filterTempWinter = () => {
  const tempWinter = [];
  data.forEach((elem) => {
    if (elem.hasOwnProperty('disciplinas')) {
      elem.disciplinas.forEach((obj) => {
        if (obj.temporada === 'Winter') {
          tempWinter.push(elem);
        }
        const removeDuSummer = removeDuplicates(tempWinter);
      });
    }
  });
}; */
