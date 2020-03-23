import lol from './data/lol/lol.js';

const listaTodos = lol.data; // en esta variable guardo los objetos de la data
// console.log(listaTodos);
const lista = document.querySelector('#galeria'); // selecciono la parte donde voy a poner la informacion
// que seleccionaré y lo guardo en una variable
// console.log(lista);

Object.values(listaTodos).forEach((campeones) => {
  const casilla = document.createElement('div');
  const foto = document.createElement('img');
  const nombre = document.createElement('p');
  casilla.className = 'casillaCampeon';
  nombre.className = 'nombreCampeon'; // le pongo un class nombre para editarle los estilos
  foto.className = 'imagenCampeon';
  nombre.innerHTML = `${campeones.name}`;
  foto.src = `${campeones.splash}`;

  casilla.appendChild(foto);
  casilla.appendChild(nombre);
  lista.appendChild(casilla);
});

const buscarCampeon = document.getElementById('botonBuscar');
buscarCampeon.addEventListener('click', (Busqueda) => {
  Busqueda.preventDefault();
  const campeonBuscado = document.getElementById('buscador').value;
  console.log(campeonBuscado);
  const campeonEncontrado = Object.values(listaTodos).filter((campeones) => (campeones.name === campeonBuscado));
  console.log(campeonEncontrado);
});


/* const listaCampeones=lol.data;
console.log(listaCampeones);

const imagen = lol.data.Aatrox.splash;
const foto=document.getElementById("foto");
foto.src=imagen;

const campeon= lol.data.Aatrox.name;
const galeria=document.getElementById("galeria");
galeria.innerHTML = campeon;

const mostrarNombres= Object.keys(lol.data);
console.log(mostrarNombres);


const mostrarImagen= Object.values(lol.data.src.splash);
console.log(mostrarImagen); */


/* const mostrarTodos= " ";
for (mostrarTodos in lol.data){
    console.log(lol.data[mostrarTodos]);
} */


/* for (campeon in data){
   console.log (data [campeon];
} */


// console.log(example, data);