import { example } from './data.js';
// import data from './data/atletas/atletas.js';
 import dataLol from './data/lol/lol.js';
//import data from './data/pokemon/pokemon.js';

let listadoHeroes = [];

  const ascendente = ( a, b) => {
    if ( a.name < b.name ){
      return -1;
    }
    if ( a.name > b.name ){
      return 1;
    }
    return 0;
  }

  const descendente = ( a, b) => {
    if ( a.name < b.name ){
      return 1;
    }
    if ( a.name > b.name ){
      return -1;
    }
    return 0;
  }


  const dataFiltradoRol = (evento)=> {

    let rol = evento.target == undefined ? evento : evento.target.value;
    let listOrden = document.getElementById("orden");
    // let stringTemplate = '';
    // let container = document.getElementById('container');
    listadoHeroes = [];

    for (const prop in dataLol.data){
      if (rol == '-1' || dataLol.data[prop].tags.indexOf(rol) != -1)
      {
        listadoHeroes.push(dataLol.data[prop]);
        // stringTemplate += `
        // <div id='box' class="box">
        //   <img src=${dataLol.data[prop].img} class="imgCampeon"/>
        //   <p id='name' class="nameCamp">${dataLol.data[prop].name}</p>
        //   <p id='title'class="titleCamp">${dataLol.data[prop].title}</p>
        // </div>`

      }
    }

    dataFiltradoOrden(listOrden.value);
    // container.innerHTML= stringTemplate;
  }

  const dataFiltradoOrden = (evento) => {

    let orden = evento.target == undefined ? evento : evento.target.value;
    let stringTemplate = '';
    let container = document.getElementById('container');
    let listOrden = [];

    if (orden == "AZ")
      listOrden = listadoHeroes.sort(ascendente);
    else
      listOrden = listadoHeroes.sort(descendente);

    for (const item in listOrden)
    {
          stringTemplate += `
          <div id='box' class="box">
            <img src=${listOrden[item].img} class="imgCampeon"/>
            <p id='name' class="nameCamp">${listOrden[item].name}</p>
            <p id='title'class="titleCamp">${listOrden[item].title}</p>
          </div>`
    }

    container.innerHTML= stringTemplate;

  }


/* Ejecucion del filtro roles "Todos" */
dataFiltradoRol('-1');

/* Agregar eventos */
  let listRoles = document.getElementById("roles");
  let listOrden = document.getElementById("orden");

  listRoles.addEventListener("change", dataFiltradoRol);
  listOrden.addEventListener("change", dataFiltradoOrden);


