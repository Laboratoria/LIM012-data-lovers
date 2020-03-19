/*interacción con el DOM event listeners o event handlers, se usan las que estàn en data.js */
import {
  allSelection
} from './data.js';
// import data from './data/atletas/atletas.js';
import lol from './data/lol/lol.js';
// import data from './data/pokemon/pokemon.js';

const allchampionList = lol.data;
// console.log(allchampionList);
let list = document.querySelector("#root");
// console.log(root);
//objects
Object.values(allchampionList).forEach(champion => {
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
});


let listRole = document.querySelector("#rolesFighter");

let liRoles = document.querySelectorAll('.Roles');
// console.log(liRoles);
// console.log(typeof liRoles);

liRoles.forEach((option) => {
  let typeRol = option.getAttribute('data-value')
  console.log(typeRol);

  const functionFilterRol = allSelection(allchampionList, typeRol)
  console.log(functionFilterRol);
  console.log(typeof functionFilterRol);

  // /*con mayúsucla Object */
  // let arrayValuesChampions = Object.values(allchampionList);
  // arrayValuesChampions.filter((championsList) => {
  //   if (championsList.tags.indexOf("Fighter") != -1) {
  const divRole = document.createElement("div");
  const imgRole = document.createElement("img");
  const pName = document.createElement("p");
  const pTags = document.createElement("p");
  pName.className = "nameOfChampionRole";
  imgRole.className = "imageOfChampionRole";
  pTags.className = "roleTagsOfChampions";
  pName.innerHTML = functionFilterRol.name;
  imgRole.src = functionFilterRol.splash;
  pTags.innerHTML = functionFilterRol.tags;
  divRole.appendChild(imgRole);
  divRole.appendChild(pName);
  divRole.appendChild(pTags);
  listRole.appendChild(divRole);
  // console.log(arrayValuesChampions[i].name);
  // console.log(arrayValuesChampions[i].splash);
  //   }
  // })
})
