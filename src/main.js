/*interacción con el DOM event listeners o event handlers, se usan las que estàn en data.js */
import {
  example
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

// let rol = lol.data;


let arrayKeysChampions = Object.keys(allchampionList);
let arrayValuesChampions = Object.values(allchampionList);
// console.log(prueba2);
let prueba3 = Object.entries(allchampionList); /*solo para hacer las pruebas */

for (let i = 0; i < arrayKeysChampions.length; i++) {
  // console.log(prueba3[i][1]);
  // console.log(prueba2[i].tags);
  let roleChampions = arrayValuesChampions[i].tags;
  // console.log(roleChampions);
  for (let j = 0; j < roleChampions.length; j++) {
    // console.log(roleChampions[j]) /*aparecen todos los roles */

    if (roleChampions[j] === "Fighter") {

      const divRole = document.createElement("div");
      const imgRole = document.createElement("img");
      const pName = document.createElement("p");
      const pTags = document.createElement("p");
      pName.className = "nameOfChampionRole";
      imgRole.className = "imageOfChampionRole";
      pTags.className = "roleTagsOfChampions";
      pName.innerHTML = arrayValuesChampions[i].name;
      imgRole.src = arrayValuesChampions[i].splash;
      pTags.innerHTML = arrayValuesChampions[i].tags;
      divRole.appendChild(imgRole);
      divRole.appendChild(pName);
      divRole.appendChild(pTags);
      listRole.appendChild(divRole);
      // console.log(arrayValuesChampions[i].name);
      // console.log(arrayValuesChampions[i].splash);
    }
  }
}
/*con mayúsucla Object */
