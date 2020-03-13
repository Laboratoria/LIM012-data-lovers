import { example } from './data.js';
// import data from './data/atletas/atletas.js';
import data from './data/lol/lol.js';
// import data from './data/pokemon/pokemon.js';

console.log(example, data);

const myObject = data;
console.log(myObject.data.Aatrox.img);

const botonEnHtml = document.getElementById('botonEnHtml');
botonEnHtml.addEventListener('click', () => {
  document.getElementById('img').src = myObject.data.Aatrox.img;
});