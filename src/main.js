/* interacción con el DOM event listeners o event handlers, se usan las que estàn en data.js */
import {
  allSelection,
} from './data.js';
import lol from './data/lol/lol.js';

const allchampionList = lol.data;
// console.log(allchampionList);

// console.log(root);
const divContador = document.getElementById('contador');
const buttonAllChampions = document.getElementById('button_colection');

buttonAllChampions.addEventListener('click', () => {
  const list = document.querySelector('#root');
  list.innerHTML = ''; /* Primero lo vacía luego coloca todo a todos los campeones */
  Object.values(allchampionList).forEach((champion) => {
    const div = document.createElement('div');
    const img = document.createElement('img');
    const p = document.createElement('p');
    p.className = 'nameOfChampion';
    img.className = 'imageOfChampion';
    p.innerHTML = `${champion.name}`;
    img.src = `${champion.splash}`;
    div.appendChild(img);
    div.appendChild(p);
    list.appendChild(div);
    divContador.innerHTML = 'Todos los campeones 122';
  });
});

const liRoles = document.querySelectorAll('.Roles');
// console.log(typeof liRoles); /*is an object*/
liRoles.forEach((option) => {
  option.addEventListener('click', () => {
    // const functionRoles = () => {
    const typeRol = option.getAttribute('data-value');
    // console.log(typeRol);
    const functionFilterRol = allSelection(allchampionList, typeRol);
    // console.log(functionFilterRol);
    const list = document.querySelector('#root');
    list.innerHTML = '';
    /* Llamamos otra vez al div que contiene list,la limpiamos=> pinta lo nuevo que vamos a darle */
    // console.log(root);
    Object.values(functionFilterRol).forEach((champion) => {
      /* se busca el valor=>volvemos usar object.values y acceder a los valores de lo importado */
      const div = document.createElement('div');
      const img = document.createElement('img');
      const p = document.createElement('p');
      const p2 = document.createElement('p');
      p.className = 'nameOfChampion';
      p2.className = 'tagsOfChampion';
      img.className = 'imageOfChampion';
      p.innerHTML = `${champion.name}`;
      p2.innerHTML = `${champion.tags}`;
      img.src = `${champion.splash}`;
      div.appendChild(img);
      div.appendChild(p);
      div.appendChild(p2);
      list.appendChild(div);
    });
    divContador.innerHTML = (`${typeRol} ${functionFilterRol.length}`);
  });
});
