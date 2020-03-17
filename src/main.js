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
  const newElement = document.createElement('div'); 
  const img = document.createElement('img');
  img.classList.add('class-img');
  const p = document.createElement('p');
  p.classList.add('class-name');
  newElement.appendChild(img);
  newElement.appendChild(p);
  img.src = `${champion.splash}`
  p.innerHTML = `${champion.name}`         
  let all = document.getElementById('all');
  all.appendChild(newElement);   
});


const btnZA = document.getElementById('btnZA');
btnZA.addEventListener('click', () => {
document.getElementById("all").style.visibility = 'hidden';
const newArray = document.createElement('div'); 
const img = document.createElement('img');
img.classList.add('class-img');
const p = document.createElement('p');
p.classList.add('class-name');
newArray.appendChild(img);
newArray.appendChild(p);
const result = Object.keys(allChampion).sort().reverse();
result.forEach(agregarElementos);
function agregarElementos(item, index){         
  document.getElementById("array").innerHTML += index + ":" + item + "<br>"; 
}
  let array = document.getElementById('array');
array.appendChild(newArray); 
});
/*
const result = Object.keys(allChampion).sort().reverse();
result.forEach(agregarElementos);
function agregarElementos(item, index){
  document.getElementById("array").innerHTML += index + ":" + item + "<br>"; 
}
console.log('Arreglo', result);
});


img.src = `${champion.splash}`
p.innerHTML = `${champion.name}`
*/

/*const result = Object.keys(allChampion).sort().reverse();
//document.getElementById("div").innerHTML = Object.keys(allChampion).sort().reverse();;
console.log('Arreglo', result);

result.forEach(agregarElementos);
function agregarElementos(item, index){
  document.getElementById("array").innerHTML += index + ":" + item + "<br>"; 
}



  var lista=document.getElementById("all"); 
  array.forEach(function(data,index){
  var linew= document.createElement("div");    
  var contenido = document.createTextNode(data.name);
  lista.appendChild(linew);
  linew.appendChild(contenido);
  
  })
  }
  agregarElementos(result);*/