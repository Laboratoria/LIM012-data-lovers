/*interacción con el DOM event listeners o event handlers, se usan las que estàn en data.js */
import {
  example
} from './data.js';
// import data from './data/atletas/atletas.js';
import lol from './data/lol/lol.js';
// import data from './data/pokemon/pokemon.js';

const allchampionList = lol.data;
console.log(allchampionList);
let list = document.querySelector("#root");
console.log(root);
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










// let rol = lol.data;
// let newArrays = Object.entries(rol);
// let onlyFighter = newArrays.filter()


// console.log(example, data);
