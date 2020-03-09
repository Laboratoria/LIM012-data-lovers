// import data from './data/injuries/injuries.js';
import data from './data/lol/lol.js';
// import data from './data/patient/patient.js';
//import data from './data/pokemon/pokemon.js';
// import data from './data/rickandmorty/rickandmorty.js';
// import data from './data/steam/steam.js';
// import data from './data/worldbank/worldbank.js';
console.log(data.data);
const championList = data.data;
let list = document.querySelector("#list");
console.log(list);
//object values
Object.values(championList).map(champion => {
  const div = document.createElement("div");
  const img = document.createElement("img");
  const p = document.createElement("p");
  p.className = "championName";
  img.className = "championSplash";
  img.src = `${champion.splash}`
  p.innerHTML = `${champion.name}`
  div.appendChild(img);
  div.appendChild(p);
  list.appendChild(div);
});
//funcion evaluar que tiene dos cadenas 
//tengo que hacer un nuevo arreglo que tengan solo los campeones que cumplan con la condicion
let newArray = Object.values(championList).filter(champion => {
  champion.tags[1] = true
  // if (condicion que evalua lo que quieres con champion)
  // return champion
});

const filterByClass = (tags, selectedClass) => {

};
