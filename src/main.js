// import { example } from './data.js';
import data from './data/pokemon/pokemon.js';

const kanto = document.getElementById('generation-I')
const johto = document.getElementById('generation-II');

for (let i = 0; i < data.pokemon.length; i += 1) {
  if (data.pokemon[i].generation.name === 'kanto') {
    const pokemon = `
          <div class="pokemon-card">
              <p>${data.pokemon[i].num}</p>
              <img src = "${data.pokemon[i].img}">
              <p>${data.pokemon[i].name}</p> 
          </div>
      `;
    kanto.innerHTML += pokemon;
  } else {
    const pokemon = `
  <div class="pokemon-card">
      <p>${data.pokemon[i].num}</p>
      <img src = "${data.pokemon[i].img}">
      <p>${data.pokemon[i].name}</p> 
  </div>
`;
    johto.innerHTML += pokemon;
  }
}

// console.log(example, data);
/*
for (let i = 0; i < data.pokemon.length; i += 1) {
    // console.log(element.name, element.num, element.img);
    // console.log(element.generation.name);
    if (data.pokemon[i].generation.name === 'kanto') {
      // Agregando imagen
      const image = document.createElement('img');
      image.setAttribute('src', data.pokemon[i].img);
      /*
      todos los datos
      const pokemon = [data.pokemon[i].name, data.pokemon[i].num];
      const newDiv = document.createElement('div');
      newDiv.innerHTML += pokemon;
     
      // console.log(data.pokemon.name, data.pokemon.num, data.pokemon.img);
      document.querySelector('.generation-I').appendChild(newDiv);
      // newDiv.appendChild(pokemon);
      document.querySelector('.generation-I').appendChild(image);
      // console.log(newDiv);
    }
  }
  */
