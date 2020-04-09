import data from './data/lol/lol.js';

import {
  orderData,
  searchChampions,
  orderFilterTags,
  dataOrdenado,
} from './data.js';

const firstScreen = document.getElementById('firstScreen');
const secondScreen = document.getElementById('secondScreen');
const calculationScreen = document.getElementById('calculationScreen');
const thirdScreen = document.getElementById('thirdScreen');
const fourthScreen = document.getElementById('fourthScreen');

// BOTON PARA MOSTRAR CAMPEONES
const btnMostrar = document.getElementById('btnMostrar');
btnMostrar.addEventListener('click', () => {
  firstScreen.classList.add('hide');
  secondScreen.classList.remove('hide');
});

// VER LOS CAMPEONES
const championList = data.data;
const contentList = document.querySelector('#contentList');
const contentTop = document.querySelector('#contentTop');
const championArray = Object.values(championList);
const listOnScreen = (dataLol) => {
  let result = '';
  dataLol.forEach((champion) => {
    const showChampions = `
    <div class="card-champions">
      <div class="card">
        <div class="img-box">
          <img src=${champion.splash} class="galeria-img">
        </div>
        <div class="details">
          <div class="content-info">
            <img src=${champion.img} class="small-img">
            <h4 class="title-info">"${champion.title}"</h4>
            <p class="info-champions">Attack: ${champion.info.attack}</p>
            <p class="info-champions">Defense: ${champion.info.defense}</p>
            <p class="info-champions">Magic: ${champion.info.magic}</p>
            <p class="info-champions">Difficulty: ${champion.info.difficulty}</p>
            <p class="info-champions"><span class="title-tags">Tags: </span>${champion.tags}</p>
          </div>
        </div>
      </div>
      <p class="name-champions">${champion.name}</p>
    </div>
      `;
    result += showChampions;
  });
  contentList.innerHTML = result;
};
listOnScreen(championArray);

// ORDENAR CAMPEONES ASCENDENTE - DESCENDENTE
const orderChampions = document.querySelector('#order');
orderChampions.addEventListener('change', () => {
  const orderSelect = orderChampions.value;
  listOnScreen(orderData(championArray, 'name', orderSelect));
});

// BUSCAR POR LETRA CADA CAMPEON
const enterText = document.querySelector('#inputBuscar');
enterText.addEventListener('keyup', () => {
  const text = enterText.value.toLowerCase();
  listOnScreen(searchChampions(championArray, 'name', text));
  if (contentList.innerHTML === '') {
    contentList.innerHTML += `
      <p>No results were found.</p>
      `;
  }
});
// BOTON REGRESAR A PANTALLA PRINCIPAL
const regresar = document.getElementById('back');
regresar.addEventListener('click', () => {
  secondScreen.classList.toggle('hide');
  firstScreen.classList.toggle('hide');
});
// PROMEDIOS DE ESTADÍSTICAS DEFENSIVAS
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

const fTop = (dataLol) => {
  let result = '';
  dataLol.forEach((champion) => {
    const showChampions = `
    <div class="card-top" id="top">
    <img src=${champion.splash} class="galeria-top">
    <p class="name-top">${champion.name}</p>
    <p class="promedio-top">Average: ${champion.promedio}</p>
    </div>    
      `;
    result += showChampions;
  });
  contentTop.innerHTML = result;
};
// necesita agregarle un identificador para llamarlo en CSS y llamar solo a ese elemento
// línea 80

// BOTON TOP 5
const btnTop5 = document.getElementById('btnTop5');
btnTop5.addEventListener('click', () => {
  secondScreen.classList.add('hide');
  calculationScreen.classList.remove('hide');
  fTop(dataOrdenado(obStats(championArray)));
});

// BOTON PARA MOSTRAR POR ROLES
const btnRoles = document.getElementById('btnRoles');
btnRoles.addEventListener('click', () => {
  secondScreen.classList.add('hide');
  thirdScreen.classList.remove('hide');
});
// BOTON REGRESAR A LA SEGUNDA PANTALLA
const regresarS = document.getElementById('backB');
regresarS.addEventListener('click', () => {
  thirdScreen.classList.toggle('hide');
  secondScreen.classList.toggle('hide');
});
// CONTENEDOR DE ROLES
const contentListRol = document.querySelector('#contentListRol');
const listOnScreenRol = (dataLol) => {
  let result = '';
  dataLol.forEach((champion) => {
    const showChampions = `
    <div class="card-champions">
      <div class="card">
        <div class="img-box">
          <img src=${champion.splash} class="galeria-img">
        </div>
        <div class="details">
          <div class="content-info">
            <img src=${champion.img} class="small-img">
            <h4 class="title-info">"${champion.title}"</h4>
            <p class="info-champions">Attack: ${champion.info.attack}</p>
            <p class="info-champions">Defense: ${champion.info.defense}</p>
            <p class="info-champions">Magic: ${champion.info.magic}</p>
            <p class="info-champions">Difficulty: ${champion.info.difficulty}</p>
            <p class="info-champions"><span class="title-tags">Tags: </span>${champion.tags}</p>
          </div>
        </div>
      </div>
      <p class="name-champions">${champion.name}</p>
    </div>
      `;
    result += showChampions;
  });
  contentListRol.innerHTML = result;
};
listOnScreenRol(championArray);

// ORDENAR CAMPEONES ASCENDENTE - DESCENDENTE - ROLES
const orderRoles = document.querySelector('#orderRoles');
orderRoles.addEventListener('change', () => {
  const orderSelect = orderRoles.value;
  listOnScreenRol(orderData(championArray, 'name', orderSelect));
});

// BUSCAR POR LETRA CADA CAMPEON - ROLES
const inputBuscarRoles = document.querySelector('#inputBuscarRoles');
inputBuscarRoles.addEventListener('keyup', () => {
  const text = inputBuscarRoles.value.toLowerCase();
  listOnScreenRol(searchChampions(championArray, 'name', text));
  if (contentListRol.innerHTML === '') {
    contentListRol.innerHTML += `
      <p>No results were found.</p>
      `;
  }
});

// ORDENAR POR ROL ASESINO
const video = document.getElementById('video');
const showAssassin = document.getElementById('rolAssassin');
showAssassin.addEventListener('click', () => {
  video.classList.add('hide');
  thirdScreen.classList.remove('hide');
  fourthScreen.classList.remove('hide');
  const titleAssassin = document.getElementById('rolAssassin').value;
  if (titleAssassin) {
    document.getElementById('title-fourthScreen').innerHTML = 'Assassin';
  }
});
const orderAssassin = document.querySelector('#rolAssassin');
orderAssassin.addEventListener('click', () => {
  const order = orderAssassin.value;
  listOnScreenRol(orderFilterTags(championArray, 'tags', order));
});

// ORDENAR POR ROL LUCHADOR
const showFighter = document.getElementById('rolFighter');
showFighter.addEventListener('click', () => {
  thirdScreen.classList.remove('hide');
  fourthScreen.classList.remove('hide');
  video.classList.add('hide');

  const titleFighter = document.getElementById('rolFighter').value;
  if (titleFighter) {
    document.getElementById('title-fourthScreen').innerHTML = 'Fighter';
  }
});
const orderFighter = document.querySelector('#rolFighter');
orderFighter.addEventListener('click', () => {
  const order = orderFighter.value;
  listOnScreenRol(orderFilterTags(championArray, 'tags', order));
});

// ORDENAR POR ROL MAGOS
const showMage = document.getElementById('rolMage');
showMage.addEventListener('click', () => {
  thirdScreen.classList.remove('hide');
  fourthScreen.classList.remove('hide');
  video.classList.add('hide');
  const titleMage = document.getElementById('rolMage').value;
  if (titleMage) {
    document.getElementById('title-fourthScreen').innerHTML = 'Mage';
  }
});
const orderMage = document.querySelector('#rolMage');
orderMage.addEventListener('click', () => {
  const order = orderMage.value;
  listOnScreenRol(orderFilterTags(championArray, 'tags', order));
});

// ORDENAR POR ROL TIRADORES
const showMarksman = document.getElementById('rolMarksman');
showMarksman.addEventListener('click', () => {
  thirdScreen.classList.remove('hide');
  fourthScreen.classList.remove('hide');
  video.classList.add('hide');
  const titleMarksman = document.getElementById('rolMarksman').value;
  if (titleMarksman) {
    document.getElementById('title-fourthScreen').innerHTML = 'Marksman';
  }
});
const orderMarksman = document.querySelector('#rolMarksman');
orderMarksman.addEventListener('click', () => {
  const order = orderMarksman.value;
  listOnScreenRol(orderFilterTags(championArray, 'tags', order));
});

// ORDENAR POR ROL SOPORTE
const showSupport = document.getElementById('rolSupport');
showSupport.addEventListener('click', () => {
  thirdScreen.classList.remove('hide');
  fourthScreen.classList.remove('hide');
  video.classList.add('hide');
  const titleSupport = document.getElementById('rolSupport').value;
  if (titleSupport) {
    document.getElementById('title-fourthScreen').innerHTML = 'Support';
  }
});
const orderSupport = document.querySelector('#rolSupport');
orderSupport.addEventListener('click', () => {
  const order = orderSupport.value;
  listOnScreenRol(orderFilterTags(championArray, 'tags', order));
});

// ORDENAR POR ROL TANQUE
const showTank = document.getElementById('rolTank');
showTank.addEventListener('click', () => {
  thirdScreen.classList.remove('hide');
  fourthScreen.classList.remove('hide');
  video.classList.add('hide');
  const titleTank = document.getElementById('rolTank').value;
  if (titleTank) {
    document.getElementById('title-fourthScreen').innerHTML = 'Tank';
  }
});
const orderTank = document.querySelector('#rolTank');
orderTank.addEventListener('click', () => {
  const order = orderTank.value;
  listOnScreenRol(orderFilterTags(championArray, 'tags', order));
});
