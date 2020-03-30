import data from './data/lol/lol.js';

import {
  orderData,
  searchChampions,
  orderFilterTags,
} from './data.js';


const btnMostrar = document.getElementById('btnMostrar');
// const firstScreen = document.getElementById('firstScreen');
// const secondScreen = document.getElementById('secondScreen');
// const fourthScreen = document.getElementById('fourthScreen');
btnMostrar.addEventListener('click', () => {
  // firstScreen.classList.add('one');
  // secondScreen.classList.add('two');
  // fourthScreen.classList.add('four')
  // firstScreen.classList.add('twoScreen')
  document.getElementById('firstScreen').style.display = 'none';
  document.getElementById('fourthScreen').style.display = 'none';
  document.getElementById('secondScreen').style.display = 'block';
});

const championList = data.data;
const contentList = document.querySelector('#contentList');
const championArray = Object.values(championList);

const listOnScreen = (dataLol) => {
  let result = '';
  dataLol.forEach((champion) => {
    const showChampions = `
    <section>
    <img src=${champion.splash} class="imgSplash">
    <p class="name">${champion.name}</p>
    </section>    
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

const contentListAsse = document.querySelector('#contentListAsse');
const listOnScreenAs = (dataLol) => {
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
  contentListAsse.innerHTML = result;
};
listOnScreenAs(championArray);

const btnRoles = document.getElementById('btnRoles');
btnRoles.addEventListener('click', () => {
  document.getElementById('secondScreen').style.display = 'none';
  document.getElementById('fourthScreen').style.display = 'none';
  document.getElementById('thirdScreen').style.display = 'block';
});
const mostrarAsesinos = document.getElementById('rolAssassin');
mostrarAsesinos.addEventListener('click', () => {
  document.getElementById('thirdScreen').style.display = 'none';
  document.getElementById('fourthScreen').style.display = 'block';
});
const mostrarTiradores = document.getElementById('rolFighter');
mostrarTiradores.addEventListener('click', () => {
  document.getElementById('thirdScreen').style.display = 'none';
  document.getElementById('fourthScreen').style.display = 'block';
});
const mostrarMagos = document.getElementById('rolMage');
mostrarMagos.addEventListener('click', () => {
  document.getElementById('thirdScreen').style.display = 'none';
  document.getElementById('fourthScreen').style.display = 'block';
});
const mostrarTirador = document.getElementById('rolMarksman');
mostrarTirador.addEventListener('click', () => {
  document.getElementById('thirdScreen').style.display = 'none';
  document.getElementById('fourthScreen').style.display = 'block';
});
const mostrarSoporte = document.getElementById('rolSupport');
mostrarSoporte.addEventListener('click', () => {
  document.getElementById('thirdScreen').style.display = 'none';
  document.getElementById('fourthScreen').style.display = 'block';
});
const mostrarTank = document.getElementById('rolTank');
mostrarTank.addEventListener('click', () => {
  document.getElementById('thirdScreen').style.display = 'none';
  document.getElementById('fourthScreen').style.display = 'block';
});
/* ORDENAR POR ROL ASESINO */
const ordenarAsesinos = document.querySelector('#rolAssassin');
ordenarAsesinos.addEventListener('click', () => {
  const ordenar = ordenarAsesinos.value;
  listOnScreenAs(orderFilterTags(championArray, 'tags', ordenar));
});
/* ORDENAR POR ROL LUCHADOR */
const ordenarLuchador = document.querySelector('#rolFighter');
ordenarLuchador.addEventListener('click', () => {
  const ordenar = ordenarLuchador.value;
  listOnScreenAs(orderFilterTags(championArray, 'tags', ordenar));
});
/* ORDENAR POR ROL MAGOS */
const ordenarMago = document.querySelector('#rolMage');
ordenarMago.addEventListener('click', () => {
  const ordenar = ordenarMago.value;
  listOnScreenAs(orderFilterTags(championArray, 'tags', ordenar));
});
/* ORDENAR POR ROL TIRADORES */
const ordenarTirador = document.querySelector('#rolMarksman');
ordenarTirador.addEventListener('click', () => {
  const ordenar = ordenarTirador.value;
  listOnScreenAs(orderFilterTags(championArray, 'tags', ordenar));
});
/* ORDENAR POR ROL SOPORTE */
const ordenarSoporte = document.querySelector('#rolSupport');
ordenarSoporte.addEventListener('click', () => {
  const ordenar = ordenarSoporte.value;
  listOnScreenAs(orderFilterTags(championArray, 'tags', ordenar));
});
const ordenarTank = document.querySelector('#rolTank');
ordenarTank.addEventListener('click', () => {
  const ordenar = ordenarTank.value;
  listOnScreenAs(orderFilterTags(championArray, 'tags', ordenar));
});
