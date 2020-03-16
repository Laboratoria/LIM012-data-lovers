//AQUI MANEJAMOS EL DOOM

//import { example } from './data.js';
//import data from './data/atletas/atletas.js';
import data from './data/lol/lol.js';
//import data from './data/pokemon/pokemon.js';
//console.log(example,data);
console.log(data.data);

const allChampion = data.data;

//MOSTRAR LOS VALORES DE LOS OBJETOS EN LA PANTALLA
Object.values(allChampion).map(champion => {
  const newElement = document.createElement('div'),
        img = document.createElement('img'),
         p = document.createElement('p');

         newElement.appendChild(img);
         newElement.appendChild(p);

const botonEnHtml = document.getElementById('botonEnHtml');
botonEnHtml.addEventListener('click', () => {
  document.getElementById('img').src = myObject.data.Aatrox.splash;
         img.src = `${champion.splash}`
         p.innerHTML = `${champion.name}`
         
  let all = document.getElementById('all');
  all.appendChild(newElement); 
});
