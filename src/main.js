// import data from './data/lol/lol.js';
// import data from './data/pokemon/pokemon.js';
import dataAtletas from './data/copy.js';
// import dataAtletas from './data/atletas/atletas.js';

import {
  transformaBandera,
  removeDuplicates,
  edad,
  sortedByNameA,
  sortedByNameD,
  FilterTemporada,
  filterMedalla,
  searchInput,
  genderFiler,
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
const btnSortD = document.getElementById('sortD');
const modal = document.getElementById('modal');
const closeBtn = document.getElementById('close');

// modal
const atletheDetails = (arrays) => {
  const modalContainer = modal.querySelector('.modal-head');

  modalContainer.innerHTML = `
    <div>
    <img src = ${arrays.gender === 'F'
    ? './img/avatarMujer.png'
    : './img/avatarVaron.png'}
    width = 110 height = 110> 
    </div>
    <div class="infoHead" >
      <h1>
      <strong>${arrays.name}</strong>
      </h1>
      <p><strong>Edad:</strong>
        ${edad(arrays['date-birth'])}
      </p>
      <p><strong>Weigth:</strong>
        ${arrays.weight}
      </p>
      <p><strong>Height:</strong>
        ${arrays.height}
      </p>
      <p><strong>Team:</strong>
        ${arrays.team}
      </p>
    </div>
    <div class="modal-body">
      <p><strong>disciplina:</strong>
        ${arrays.disciplinas.map(elem => elem.disciplina)}
      </p>
      <p><strong>Temporada:</strong>
        ${arrays.disciplinas.map(elem => elem.temporada)}
      </p>
      <p><strong>age:</strong>
        ${arrays.disciplinas.map(elem => elem.año)}
      </p>
      <p><strong>ciudad:</strong>
        ${arrays.disciplinas.map(elem => elem.ciudad)}
      </p>
      <p><strong>medalla:</strong>
        ${arrays.disciplinas.map(elem => elem.medalla)}
      </p>
    </div>         
        
  `;
};


const pintarData = (newData) => {
  atletasInfo.innerHTML = '';
  newData.forEach((arrays) => {
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
      <strong>Medal:</strong>
        ${arrays.game}
      </p>
      </div>
      <img width = 40 height = 40 src ="https://www.countryflags.io/${transformaBandera(
    arrays.noc,
  )}/flat/64.png">
   `;
    // modal
    card.addEventListener('click', () => {
      modal.style.display = 'flex';
      atletheDetails(arrays);
    });
    atletasInfo.appendChild(card);
  });
};
pintarData(data);


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
  pintarData(searchInput(data, value));
});

// agregue un filtro en las(data,values
genderFilters.forEach((filtro) => {
  filtro.addEventListener('click', () => {
    const valor = filtro.innerText;
    pintarData(genderFiler(data, valor));
  });
});

// agregue un filtro en las li dentro del.optionFilter (btnSeason)
seasonFilters.forEach((season) => {
  season.addEventListener('click', () => {
    const valor = season.innerText;
    // console.log(valor);
    // pinta data removiendo duplicados del filtro por temporada
    pintarData(removeDuplicates(FilterTemporada(data, valor)));
  });
});

// agregue un filtro en las li dentro del.optionFilter (btnMedal)
medalFilters.forEach((medal) => {
  medal.addEventListener('click', () => {
    const valor = medal.innerText;
    // pinta data removiendo duplicados del filtro por medalla
    pintarData(removeDuplicates(filterMedalla(data, valor)));
  });
});

// btn de filtrado ascendente
btnSort.addEventListener('click', () => {
  pintarData(sortedByNameA(data));
});

// btn de filtrado descendente
btnSortD.addEventListener('click', () => {
  pintarData(sortedByNameD(sortedByNameA(data)));
});


// funcion para to-top
const toTop = document.querySelector('.to-top');
window.addEventListener('scroll', () => {
  // window de la pagina y desplazamiento(pageYOffset) es mayor a 100 pixeles
  // desde la parte superior
  if (window.pageYOffset > 900) {
    toTop.classList.add('active');
  } else {
    toTop.classList.remove('active');
  }
});
