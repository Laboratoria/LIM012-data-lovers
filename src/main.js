import { example } from './data.js';
// import data from './data/atletas/atletas.js';
 import data from './data/lol/lol.js';
//import data from './data/pokemon/pokemon.js';

//CONSOLE LOGS DE PRUEBA
// prueba erika 2
let stringTemplate = '';
const container=document.getElementById('container');
<<<<<<< HEAD
//const dataTodoCampeones=data.data;

for (const prop in data.data){
=======
const dataTodoCampeones=data.data;
//Prueba
for (const prop in dataTodoCampeones){
>>>>>>> 1cd3ba6042a5b40b829f48972e8f816b81719f09
  //console.log(data.data[prop].name)
  //console.log(data.data[prop].title)
  stringTemplate+=`
  <div id='box'>
  <img src=${data.data[prop].img}/>
  <p id='name'>${data.data[prop].name}</p>
  <p id='title'>${data.data[prop].title}</p>
  </div>
  `
};
container.innerHTML= stringTemplate;


/*console.log(example);
console.log(data);
console.log(data['type']);
console.log(data['data'['Aatrox']]);
console.log(data.data['Aatrox']); //LO LOGRE LLAME SOLO A UN CAMPEÓN
console.log(data.data.Aatrox);
console.log(data.data.Aatrox.img);
console.log(data.data.Aatrox.name);
console.log(data.data.Aatrox.title);
console.log(data.data.Aatrox.tags[0]);
console.log(data.data.Aatrox.tags[1]);

DATA QUE ESTOY USANDO AHORA
document.getElementById('Aatrox-name').innerHTML=data.data.Aatrox.name;
document.getElementById('Aatrox-title').innerHTML=data.data.Aatrox.title;
document.getElementById('Ahri-name').innerHTML=data.data.Ahri.name;
document.getElementById('Ahri-title').innerHTML=data.data.Ahri.title;
document.getElementById('Akali-name').innerHTML=data.data.Akali.name;
document.getElementById('Akali-title').innerHTML=data.data.Akali.title;
document.getElementById('Alistar-name').innerHTML=data.data.Alistar.name;
document.getElementById('Alistar-title').innerHTML=data.data.Alistar.title;
document.getElementById('Amumu-name').innerHTML=data.data.Amumu.name;
document.getElementById('Amumu-title').innerHTML=data.data.Amumu.title;*/
