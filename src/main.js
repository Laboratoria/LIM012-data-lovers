/******************************Eventos*************************************/
/*en el mismo nivel .data*/
import {dataFiltradoRol,dataFiltradoTop,dataFiltradoOrden,mostrarConteo} from './data.js';

let listadoHeroes = []; 
let listadoHeroesMostrar = [];
let top = document.getElementById("top");
let orden = document.getElementById("orden");
let container = document.getElementById('container');
let stringTemplate = '';

/*****************************Elementos************************************/
const selectRoles = document.querySelector('.roles');
const selectTop = document.querySelector('.top');
const selectOrden = document.querySelector('.orden');
const conteo = document.getElementById('conteo');

/**********************Otra manera de crear funciones:*********************/

const eventoRol = (rol) =>{
    listadoHeroes = dataFiltradoRol(rol); //el valor mage se encuentra en target.value
    listadoHeroesMostrar = dataFiltradoTop(listadoHeroes,top.value);
    stringTemplate = dataFiltradoOrden(listadoHeroesMostrar,orden.value);
    container.innerHTML = stringTemplate;
    conteo.value = mostrarConteo(listadoHeroesMostrar);
}
/************/     
//Elemento objeto.funcion   (P1:string, en este caso tipo de evento change,
selectRoles.addEventListener("change", 
//cuando ocurra el evento change se ejecutara la funcion(param)=>{}
(param)=>{      //parametro enviado cuando se ejecute change
                //(este param es objeto.objeto.propiedad) 
                eventoRol(param.target.value);
    }
);

/************/
selectTop.addEventListener("change", (event)=>{
    listadoHeroesMostrar = dataFiltradoTop(listadoHeroes,event.target.value);
    stringTemplate = dataFiltradoOrden(listadoHeroesMostrar,orden.value);
    container.innerHTML = stringTemplate;
    conteo.value = mostrarConteo(listadoHeroesMostrar);
});

/************/
selectOrden.addEventListener("change", (event)=>{
    stringTemplate = dataFiltradoOrden(listadoHeroesMostrar,event.target.value);
    container.innerHTML = stringTemplate;
    conteo.value = mostrarConteo(listadoHeroesMostrar);
});

eventoRol('todos');


/**************************************************************************/
/**********************Otra manera de crear funciones:*********************/

// function ejecutareventoChangeRol(event){
//   dataFiltradoRol(event.target.value);
// }
//Elemento .      funcion   (P1:string, P2:evento que es una funcion);
//selectRoles.addEventListener("change", ejecutarParamChange_Rol);
/**************************************************************************/

/**********************Otra manera de crear funciones:*********************/
//const ejecutarParamChange_Rol = (event)=>{
//  dataFiltradoRol(event.target.value);
//}
//Elemento .      funcion   (P1:string, P2:evento que es una funcion);
//selectRoles.addEventListener("change", ejecutarParamChange_Rol);
/**************************************************************************/
