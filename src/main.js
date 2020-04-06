import data from './data/lol/lol.js';

import {
  orderData,
  searchChampions,
  orderFilterTags,
  dataOrdenado,
} from './data.js';

const btnMostrar = document.getElementById('btnMostrar');
const firstScreen = document.getElementById('firstScreen');
const secondScreen = document.getElementById('secondScreen');
const thirdScreen = document.getElementById('thirdScreen');
const fourthScreen = document.getElementById('fourthScreen');
const body = document.getElementById('body');
btnMostrar.addEventListener('click', () => {
  secondScreen.classList.toggle('classNone');
  firstScreen.classList.add('classNone');
  body.classList.remove('classBody');
});

const championList = data.data;
const contentList = document.querySelector('#contentList');
const championArray = Object.values(championList);
const listOnScreen = (dataLol) => {
  let result = '';
  dataLol.forEach((champion) => {
    const showChampions = `
    <div class="container">
      <div class="card">
      <img src=${champion.splash} class="imgSplash">
      <h4 class="name">${champion.name}</h4>
      <p>Attack: ${champion.info.attack}</p>
      <p>Defense: ${champion.info.defense}</p>
      <p>Magic: ${champion.info.magic}</p>
      <p>Difficulty: ${champion.info.difficulty}</p>
      </div>
    </div>    
      `;
    result += showChampions;
  });
  contentList.innerHTML = result;
};
listOnScreen(championArray);


/* ORDENAR CAMPEONES ASCENDENTE - DESCENDENTE */
const orderChampions = document.querySelector('#order');
orderChampions.addEventListener('change', () => {
  const orderSelect = orderChampions.value;
  listOnScreen(orderData(championArray, 'name', orderSelect));
});
/* BUSCAR POR LETRA CADA CAMPEON */
const enterText = document.querySelector('#inputBuscar');
enterText.addEventListener('keyup', () => {
  const text = enterText.value.toLowerCase();
  listOnScreen(searchChampions(championArray, 'name', text));
  if (contentList.innerHTML === '') {
    contentList.innerHTML += `
      <p>ERROR!!!</p>
      `;
  }
});

const contentListRol = document.querySelector('#contentListRol');
const listOnScreenRol = (dataLol) => {
  let result = '';
  dataLol.forEach((champion) => {
    const showChampions = `
    <section>
      <img src=${champion.splash} class="imgSplash">
      <p class="name">${champion.name}</p><br><br>
       <p class="tags">Tags:</span> ${champion.tags}</p><br>
     </section> 
      `;
    result += showChampions;
  });
  contentListRol.innerHTML = result;
};
listOnScreenRol(championArray);
/* ORDENAR CAMPEONES ASCENDENTE - DESCENDENTE */
const orderRoles = document.querySelector('#orderRoles');
orderRoles.addEventListener('change', () => {
  const orderSelect = orderRoles.value;
  listOnScreenRol(orderData(championArray, 'name', orderSelect));
});
/* BUSCAR POR LETRA CADA CAMPEON */
const inputBuscarRoles = document.querySelector('#inputBuscarRoles');
inputBuscarRoles.addEventListener('keyup', () => {
  const text = inputBuscarRoles.value.toLowerCase();
  listOnScreenRol(searchChampions(championArray, 'name', text));
  if (contentListRol.innerHTML === '') {
    contentListRol.innerHTML += `
      <p>ERROR!!!</p>
      `;
  }
});
const btnRoles = document.getElementById('btnRoles');
btnRoles.addEventListener('click', () => {
  secondScreen.classList.toggle('classNone');
  thirdScreen.classList.toggle('classNone');
});
/* ORDENAR POR ROL ASESINO */
const video = document.getElementById('video');
const mostrarAsesinos = document.getElementById('rolAssassin');
mostrarAsesinos.addEventListener('click', () => {
  video.classList.add('classNone');
  thirdScreen.classList.remove('classNone');
  fourthScreen.classList.remove('classNone');
});
const ordenarAsesinos = document.querySelector('#rolAssassin');
ordenarAsesinos.addEventListener('click', () => {
  const ordenar = ordenarAsesinos.value;
  listOnScreenRol(orderFilterTags(championArray, 'tags', ordenar));
});
/* ORDENAR POR ROL LUCHADOR */
const mostrarTiradores = document.getElementById('rolFighter');
mostrarTiradores.addEventListener('click', () => {
  thirdScreen.classList.remove('classNone');
  fourthScreen.classList.remove('classNone');
});
const ordenarLuchador = document.querySelector('#rolFighter');
ordenarLuchador.addEventListener('click', () => {
  const ordenar = ordenarLuchador.value;
  listOnScreenRol(orderFilterTags(championArray, 'tags', ordenar));
});
/* ORDENAR POR ROL MAGOS */
const mostrarMagos = document.getElementById('rolMage');
mostrarMagos.addEventListener('click', () => {
  thirdScreen.classList.remove('classNone');
  fourthScreen.classList.remove('classNone');
});
const ordenarMago = document.querySelector('#rolMage');
ordenarMago.addEventListener('click', () => {
  const ordenar = ordenarMago.value;
  listOnScreenRol(orderFilterTags(championArray, 'tags', ordenar));
});
/* ORDENAR POR ROL TIRADORES */
const mostrarTirador = document.getElementById('rolMarksman');
mostrarTirador.addEventListener('click', () => {
  thirdScreen.classList.remove('classNone');
  fourthScreen.classList.remove('classNone');
});
const ordenarTirador = document.querySelector('#rolMarksman');
ordenarTirador.addEventListener('click', () => {
  const ordenar = ordenarTirador.value;
  listOnScreenRol(orderFilterTags(championArray, 'tags', ordenar));
});
/* ORDENAR POR ROL SOPORTE */
const mostrarSoporte = document.getElementById('rolSupport');
mostrarSoporte.addEventListener('click', () => {
  thirdScreen.classList.remove('classNone');
  fourthScreen.classList.remove('classNone');
});
const ordenarSoporte = document.querySelector('#rolSupport');
ordenarSoporte.addEventListener('click', () => {
  const ordenar = ordenarSoporte.value;
  listOnScreenRol(orderFilterTags(championArray, 'tags', ordenar));
});
/* ROL MAGOS */
const mostrarTank = document.getElementById('rolTank');
mostrarTank.addEventListener('click', () => {
  thirdScreen.classList.remove('classNone');
  fourthScreen.classList.remove('classNone');
});
const ordenarTank = document.querySelector('#rolTank');
ordenarTank.addEventListener('click', () => {
  const ordenar = ordenarTank.value;
  listOnScreenRol(orderFilterTags(championArray, 'tags', ordenar));
});
/* PROMEDIO DE ESTADÍSTICAS DEFENSIVAS */
const obStats = (arr) => {
  const newArray = arr.map(ele => ({
    splash: ele.splash,
    name: ele.name,
    sumaHp: ele.stats.hp + ele.stats.armor + ele.stats.armorperlevel
      + ele.stats.spellblock + ele.stats.spellblockperlevel,
    promedio: ((ele.stats.hp + ele.stats.armor + ele.stats.armorperlevel
        + ele.stats.spellblock + ele.stats.spellblockperlevel) / 5).toFixed(2),
  }));
  return newArray;
};
obStats(championArray);

const contentTop = document.querySelector('#contentTop');
const fTop = (dataLol) => {
  let result = '';
  dataLol.forEach((champion) => {
    const showChampions = `
    <section>
    <img src=${champion.splash} class="imgSplash">
    <p class="name">${champion.name}</p>
    <p>${champion.promedio}</p>
    </section>    
      `;
    result += showChampions;
  });
  contentTop.innerHTML = result;
};

const topTeam = document.getElementById('topTeam');
const fifthScreen = document.getElementById('fifthScreen');
topTeam.addEventListener('click', () => {
  secondScreen.classList.toggle('classNone');
  firstScreen.classList.add('classNone');
  fifthScreen.classList.remove('classNone');
  fTop(dataOrdenado(obStats(championArray)));
});
