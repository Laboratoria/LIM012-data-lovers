//import { example } from './data.js';
import lol from './data/lol/lol.js';

const listaTodos = lol.data;

let lista = document.querySelector('#galeria');

//aqui solo se crean los nodos
Object.values(listaTodos).forEach(campeones => {
    const casilla = document.createElement('div');
    const foto = document.createElement('img');
    const nombre = document.createElement('p');
    nombre.className = 'nombreCampeon';
    foto.className = 'imagenCampeon';
    nombre.innerHTML = '${campeones.name}';
    foto.src = '${campeones.splach}';
    
    casilla.appendChild(foto);
    casilla.appendChild(nombre);
    lista.appendChild(casilla);
});
/*for (const todos in lol.data) {

    
    casilla.setAttribute('class','contenedorDelCampeon');
    //cuadro de la imagen
    const foto = document.createElement('img');
    foto.src = $(lista.splash);
    foto.setAttribute('src',foto.src); 
    foto.setAttribute('class','imgCampeon');
    //cuadro del nombre
    
    p.innerHTML = $(lista.name);

    casilla.appendChild(foto);
    casilla.appendChild(nombreCampeon);

    const galeria = document.getElementById('galeria');
    galeria.appendChild(casilla);
};*/





















/*console.log("inicia el js");
const imagen = lol.data.Aatrox.splash;
const foto = document.getElementById("foto");
foto.src=imagen;
console.log("sale de la imagen");

const campeon= lol.data.Aatrox.name;
const galeria=document.getElementById("galeria");
galeria.innerHTML = campeon;
console.log("sale del nombre");*/

/*const mostrarNombres= Object.keys(lol.data);
console.log(mostrarNombres);*/


//const mostrarImagen= Object.values(lol.data.src.splash);
//console.log(mostrarImagen);
/*const mostrarTodos= " ";
for (mostrarTodos in lol.data){
    console.log(lol.data[mostrarTodos]);
}*/




/*for (campeon in data){
   console.log (data [campeon];
}*/


//console.log(example, data);
