
import dataLol from './data/lol/lol.js';

// let listadoHeroes = []; //Lista de heroes filtrados por roles y por top
// let listadoHeroesMostrar = []; //Son los heroes que se van a filtrar visualmente y
                              //va tomar como base los heroes filtrados

const nombreAscendente = ( a, b) => { //Funcion para ordenar .name
   if ( a.name < b.name ){
      return -1; // a es menor, retorna a
    }
    if ( a.name > b.name ){
      return 1; // b es menor, retorna b
    }
    return 0;
}

const nombreDescendente = ( a, b) => {
    if ( a.name < b.name ){
      return 1; // b es menor, retorna b
    }
    if ( a.name > b.name ){
      return -1; // a es menor, retorna a
    }
    return 0;
}

const HPorden = ( a, b) => { //Funcion para ordenar .stats.hp descendente
  if ( a.stats.hp < b.stats.hp ){
    return 1;

  }
  if ( a.stats.hp > b.stats.hp ){
    return -1;
  }
  return 0;
}

const RAorden = ( a, b) => { //Funcion para ordenar .stats.attackrange descendente
  if ( a.stats.attackrange < b.stats.attackrange ){
    return 1;

  }
  if ( a.stats.attackrange > b.stats.attackrange ){
    return -1;
  }
  return 0;
}
             //este metodo esta declarando un parametro
export const dataFiltradoRol = (rol)=> {  //rol nombre de mi parametro que se ha seleccionado

    // let listadoTop = document.getElementById("top");//Obteniendo el elemento Select que tiene el id top
   
    let listadoHeroes = [];
    //bucle va recorrer dataLol.data, const heroes va almacenar valores por cada vuelta
   
    for (const heroes in dataLol.data){ //Ahri .tags es una propiedad tipo lista.
      //indexOf es una funcion que permite buscar algo por medio de una palabra
      //si el indexOf te devuelve -1 quiere decir que no existe    !diferente
      if (rol == 'todos' || dataLol.data[heroes].tags.indexOf(rol) != -1)
      {//Se va agregar a mi listado (data[Ahri]);
        listadoHeroes.push(dataLol.data[heroes]);
      }
    }
    //Voy a ejecutar un metodo(HP - Nivel de Vida.hp);
    // dataFiltradoTop(listadoTop.value);

    // dataFiltradoTop(top,orden);
    return listadoHeroes;
  }

export const dataFiltradoTop = (listadoHeroes,top) => {
    //Obteniendo el elemento orden
    // let orden = document.getElementById("orden");

    let listadoHeroesMostrar = [];

    if (top != 'todos'){//Si top es diferente a todos, es hp si cumple
      let listTop = [];
  
      if (top == "HP")
        listTop = [].slice.call(listadoHeroes).sort(
            (a,b)=>{
              if ( a.stats.hp < b.stats.hp ){
                return 1;
            
              }
              if ( a.stats.hp > b.stats.hp ){
                return -1;
              }
              return 0;
            }

        );//va ordenar por HP
      else
        listTop = [].slice.call(listadoHeroes).sort(
          (a,b)=>{
            if ( a.stats.attackrange < b.stats.attackrange[0]){
              return 1;
          
            }
            if ( a.stats.attackrange > b.stats.attackrange[1]){
              return -1;
            }
            return 0;
          }

        );//va ordenar por RA  
   
      listadoHeroesMostrar = listTop.slice(0, 10);
    }
    else
    {//listadoHeroesMostrar =  listado de heroes que fue filtrado por el rol
      listadoHeroesMostrar = listadoHeroes;
    }

    return listadoHeroesMostrar;
    // dataFiltradoOrden(orden);//Primer valor que se carga AZ
  }                                //al momento de levantar la página

export const dataFiltradoOrden = (listadoHeroesMostrar,orden) => {
    let stringTemplate = '';
    // let container = document.getElementById('container');
    let listOrden = [];

    if (orden == "AZ")
      listOrden = [].slice.call(listadoHeroesMostrar).sort(nombreAscendente);
    else
      listOrden = [].slice.call(listadoHeroesMostrar).sort(nombreDescendente);

    for (const item in listOrden)
    {    //stringTemplatecadena que va contener los héroes en html 
          stringTemplate += `
          <div id='box' class="box">
            <img src=${listOrden[item].splash} class="imgCampeon"/>
            <p id='name' class="nameCamp">${listOrden[item].name}</p>
            <p id='title'class="titleCamp">${listOrden[item].title}</p>
          </div>`
    }

    return stringTemplate;
            //inyectar html dentro del container
    // container.innerHTML= stringTemplate;
    // mostrarConteo(listOrden.length); //length es el tamaño de la lista
  }

export const mostrarConteo = (listadoHeroesMostrar) =>{
//   let conteo = document.getElementById('conteo');
  let mensaje =  `Cantidad:  ${listadoHeroesMostrar.length}`;
  return mensaje;
//   conteo.value = mensaje;
}

// dataFiltradoRol('todos'); //Es el primer método que se ejecuta por defecto cuando se carga la página


