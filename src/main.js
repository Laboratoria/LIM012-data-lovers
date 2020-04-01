import { example } from './data.js';
// import data from './data/atletas/atletas.js';
 import dataLol from './data/lol/lol.js';
//import data from './data/pokemon/pokemon.js';

let listadoHeroes = [];
let listadoHeroesMostrar = [];

const nombreAscendente = ( a, b) => {
    //debugger;
    if ( a.name < b.name ){
      return -1;

    }
    if ( a.name > b.name ){
      return 1;
    }
    return 0;
}

const nombreDescendente = ( a, b) => {
    // debugger;
    if ( a.name < b.name ){
      return 1;
    }
    if ( a.name > b.name ){
      return -1;
    }
    return 0;
}

const HPorden = ( a, b) => {
  //debugger;
  if ( a.stats.hp < b.stats.hp ){
    return 1;

  }
  if ( a.stats.hp > b.stats.hp ){
    return -1;
  }
  return 0;
}

const RAorden = ( a, b) => {
  //debugger;
  if ( a.stats.attackrange < b.stats.attackrange ){
    return 1;

  }
  if ( a.stats.attackrange > b.stats.attackrange ){
    return -1;
  }
  return 0;
}

  const dataFiltradoRol = (param)=> {

    let rol = param.target == undefined ? param : param.target.value;
    let top = document.getElementById("top");
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

    dataFiltradoTop(top.value);

    // dataFiltradoOrden(listOrden.value);
    // container.innerHTML= stringTemplate;
  }

  const dataFiltradoTop = (param) => {
    // debugger;
    let top = param.target == undefined ? param : param.target.value;
    let orden = document.getElementById("orden");

    if (top != '-1'){
      let listTop = [];
  
      if (top == "HP")
        listTop = listadoHeroes.sort(HPorden);
      else
        listTop = listadoHeroes.sort(RAorden);  
   
      listadoHeroesMostrar = listTop.slice(0, 10);
    }
    else
    {
      listadoHeroesMostrar = listadoHeroes;
    }

    dataFiltradoOrden(orden.value);
  }

  const dataFiltradoOrden = (param) => {

    let orden = param.target == undefined ? param : param.target.value;
    let stringTemplate = '';
    let container = document.getElementById('container');
    let conteo = document.getElementById('conteo');
    let listOrden = [];

    if (orden == "AZ")
      listOrden = listadoHeroesMostrar.sort(nombreAscendente);
    else
      listOrden = listadoHeroesMostrar.sort(nombreDescendente);

      conteo.value = listOrden.length;

    for (const item in listOrden)
    {
          stringTemplate += `
          <div id='box' class="box">
            <img src=${listOrden[item].splash} class="imgCampeon"/>
            <p id='name' class="nameCamp">${listOrden[item].name}</p>
            <p id='title'class="titleCamp">${listOrden[item].title}</p>
          </div>`
    }

    container.innerHTML= stringTemplate;

  }

/* Ejecucion del filtro roles "Todos" */
  dataFiltradoRol('-1'); //Es el primero que se ejecuta cuando se carga la página

/* Agregar eventos */
  let listRoles = document.getElementById("roles");
  let listOrden = document.getElementById("orden");
  let listTop = document.getElementById("top");

  listRoles.addEventListener("change", dataFiltradoRol);
  listOrden.addEventListener("change", dataFiltradoOrden);
  listTop.addEventListener("change", dataFiltradoTop);

