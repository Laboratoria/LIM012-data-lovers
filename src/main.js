// import { example } from './data.js';
import data from './data/pokemon/pokemon.js';

const johto = document.querySelector('.generation-II');

for (let i = 0; i < data.pokemon.length; i += 1) {
  if (data.pokemon[i].generation.name === 'johto') {
    const pokemon = `
          <div>
              <p>${data.pokemon[i].num}</p>
              <img src = "${data.pokemon[i].img}">
              <p>${data.pokemon[i].name}</p> 
          </div>
      `;
    johto.innerHTML += pokemon;
  }
}

// console.log(example, data);
//
//
// for (let element of data.pokemon) {
//   // console.log(element.name, element.num, element.img);
//   // console.log(element.generation.name);
//   if (element.generation.name === 'johto') {
//     const pokemon = `
//         <div>
//             <p>${element.num}</p>
//             <img src = "${element.img}">
//             <p>${element.name}</p>
//         </div>
//     `;
//   johto.innerHTML += pokemon;
//   // console.log(element.name, element.num, element.img);
//   }
// }
