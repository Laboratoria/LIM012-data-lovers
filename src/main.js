import { example } from './data.js';

import lol from './data/lol/lol.js';
const imagen = lol.data.Aatrox.splash;
const foto=document.getElementById("foto");
foto.src=imagen;

const campeon= lol.data.Aatrox.name;
const galeria=document.getElementById("galeria");
galeria.innerHTML = campeon;

const mostrarNombres= Object.keys(lol.data);
console.log(mostrarNombres);


const mostrarImagen= Object.values(lol.data.src.splash);
console.log(mostrarImagen);
/*const mostrarTodos= " ";
for (mostrarTodos in lol.data){
    console.log(lol.data[mostrarTodos]);
}*/




/*for (campeon in data){
   console.log (data [campeon];
}*/


//console.log(example, data);
