// import data from './data/lol/lol.js';
// import data from './data/pokemon/pokemon.js';
import dataAtletas from './data/copy.js';
// import dataAtletas from './data/atletas/atletas.js';

import {
  transformaBandera,
  removeDuplicates,
} from './data.js';

const data = dataAtletas.atletas;
const atletasInfo = document.getElementById('atlethes');
const btnGender = document.getElementById('filterGender');
const btnSeason = document.getElementById('filterSeason');
const btnMedal = document.getElementById('filterMedal');
const genderFilters = btnGender.querySelectorAll('li');
const seasonFilters = btnSeason.querySelectorAll('li');
const medalFilters = btnMedal.querySelectorAll('li');
const inputSearch = document.getElementById('search');
const btnSort = document.getElementById('sort');
const modal = document.getElementById('modal');
const closeBtn = document.getElementById('close');

const pintarData = (data) => {
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
      <p>
      <strong>Disciplina:</strong>
        ${arrays.disciplinas}
      </p>
      </div>
      <img width = 40 height = 40 src ="https://www.countryflags.io/${transformaBandera(
    arrays.noc,
  )}/flat/64.png">
   `;
    card.addEventListener('click', () => {
      modal.style.display = 'flex';
      atletheDetails(data);
    });
    atletasInfo.appendChild(card);
  });
};
pintarData(data);

// modal

const atletheDetails = (data) => {
  const modalBody = modal.querySelector('.modal').innerHTML = `
            <p>
              <strong>disciplina:</strong>
              ${modal.name}
            </p>
            <p>
              <strong>Temporada:</strong>
              ${modal.name}
            </p>
            <p>
              <strong>age:</strong>
              ${modal.name}
            </p>
            <p>
              <strong>ciudad:</strong>
              ${modal.name}
            </p>
            <p>
              <strong>medalla:</strong>
              ${modal.name}
            </p>
  `;
};


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

/* close the modal */
closeBtn.addEventListener('click', () => {
  modal.style.display = 'none';
});

/* search, buscador de nombre, encuentra coincidencias */
inputSearch.addEventListener('input', (e) => {
  const { value } = e.target;
  const atletheName = document.querySelectorAll('.atlethe-name');
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
    const filterGenderArr = data.filter(items => (items.gender === valor || valor === 'All'));
    pintarData(filterGenderArr);
  });
});

// agregue un filtro en las li dentro del.optionFilter (btnSeason)
seasonFilters.forEach((season) => {
  season.addEventListener('click', () => {
    const valor = season.innerText;
    // console.log(valor);
    const filterSeasonArr = [];
    data.forEach((elem) => {
      if (elem.hasOwnProperty('disciplinas')) {
        elem.disciplinas.forEach((obj) => {
          if (obj.temporada === valor || valor === 'All') {
            filterSeasonArr.push(elem);
          }
        });
      }
    });
    pintarData(removeDuplicates(filterSeasonArr));
  });
});

// agregue un filtro en las li dentro del.optionFilter (btnMedal)
medalFilters.forEach((medal) => {
  medal.addEventListener('click', () => {
    const valor = medal.innerText;
    // console.log(valor);
    const filterMedalArr = [];
    data.forEach((elem) => {
      if (elem.hasOwnProperty('disciplinas')) {
        elem.disciplinas.forEach((obj) => {
          if (obj.medalla === valor || valor === 'All') {
            filterMedalArr.push(elem);
          }
        });
      }
    });
    pintarData(removeDuplicates(filterMedalArr));
  });
});


btnSort.addEventListener('click', () => {
  const sortedByName = data.sort((a, b) => {
    if (a.name - b.name) {
      return 1;
    }
    if (b.name > a.name) {
      return -1;
    }
    return 0;
  });
  pintarData(sortedByName);
});

// funcion para to-top
const toTop = document.querySelector('.to-top');
window.addEventListener('scroll', () => {
  // window de la pagina y desplazamiento(pageYOffset) es mayor a 100 pixeles desde la parte superior
  if (window.pageYOffset > 900) {
    toTop.classList.add('active');
  } else {
    toTop.classList.remove('active');
  }
});
