/*interacción con el DOM event listeners o event handlers, se usan las que estàn en data.js */
import {
  allSelection
} from './data.js';
import lol from './data/lol/lol.js';

const allChampionList = lol.data;
//const nameChampion = infoChampionList(allChampionList) ( es de viviana NO LO BORRES)
// console.log(allchampionList);

const allChampions = () => {
  let list = document.querySelector("#root");
  Object.values(allChampionList).forEach(champion => {
    const div = document.createElement("div");
    const img = document.createElement("img");
    const p = document.createElement("p");
    p.className = "nameOfChampion";
    img.className = "imageOfChampion";
    p.innerHTML = `${champion.name}`;
    img.src = `${champion.splash}`;
    div.appendChild(img);
    div.appendChild(p);
    list.appendChild(div);
  })
}

let buttonAllChampions = document.getElementById('button_colection');
buttonAllChampions.addEventListener('click', allChampions)

let liRoles = document.querySelectorAll('.Roles');
// console.log(typeof liRoles); /*is an object*/
liRoles.forEach((option) => {
  option.addEventListener('click', () => {
    // const functionRoles = () => {
    let typeRol = option.getAttribute('data-value')
    // console.log(typeRol);
    const functionFilterRol = allSelection(allchampionList, typeRol)
    console.log(functionFilterRol);

    let list = document.querySelector("#root");
    list.innerHTML = '';
    /*Llamamos otra vez al div que contiene list y en la linea de abajo la vaciamos, la limpiamos para que vuelva a pintar lo nuevo que vamos a darle */
    // console.log(root);
    Object.values(functionFilterRol).forEach(champion => {
      /*Generalmente se busca el valor, entonces volvemos a usar object.values para acceder a los valores de lo importado */
      const div = document.createElement("div");
      const img = document.createElement("img");
      const p = document.createElement("p");
      const p2 = document.createElement("p");
      p.className = "nameOfChampion";
      p2.className = "tagsOfChampion";
      img.className = "imageOfChampion";
      p.innerHTML = `${champion.name}`;
      p2.innerHTML = `${champion.tags}`;
      img.src = `${champion.splash}`;
      div.appendChild(img);
      div.appendChild(p);
      div.appendChild(p2);
      list.appendChild(div);
    });
  })
})
