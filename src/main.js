// import { example } from './data.js';
import data from './data/pokemon/pokemon.js';

const kanto = document.getElementById('kanto');
const johto = document.getElementById('johto');

for (let i = 0; i < data.pokemon.length; i += 1) {
  if (data.pokemon[i].generation.name === 'kanto') {
    const pokemon = `
        <div class="pokemon-card">
            <p class="pokemon-number left">${data.pokemon[i].num}</p>
            <img class="pokemon-image" src = "${data.pokemon[i].img}">
            <p class="pokemon-name">${data.pokemon[i].name}</p> 
        </div>
      `;
    kanto.innerHTML += pokemon;
  } else {
    const pokemon = `
        <div class="pokemon-card">
            <p class="pokemon-number left">${data.pokemon[i].num}</p>
            <img class="pokemon-image" src = "${data.pokemon[i].img}">
            <p class="pokemon-name">${data.pokemon[i].name}</p> 
        </div>
      `;
    johto.innerHTML += pokemon;
  }
}

window.onscroll = () => {
  if (document.documentElement.scrollTop > 100) {
    document.getElementsByTagName('div')[0].classList.add('show');
  } else {
    document.getElementsByTagName('div')[0].classList.remove('show');
  }
};

document.querySelector('.go-top-container').addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
});


//
// console.log(data);
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
