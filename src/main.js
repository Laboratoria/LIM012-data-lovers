import { example } from './data.js';
// import data from './data/atletas/atletas.js';
 import dataLol from './data/lol/lol.js';
//import data from './data/pokemon/pokemon.js';

/*let stringTemplate = '';
let container = document.getElementById('container');

let conteo = 0;

for (const prop in dataLol.data){
  conteo++;
  stringTemplate+= `
  <div id='box'>
  <img src=${dataLol.data[prop].img}/>
  <p id='name' class="ejemplo">${dataLol.data[prop].name}</p>
  <p id='title'>${dataLol.data[prop].title}</p>
  </div>
  `;
}
  console.log(conteo);
 container.innerHTML= stringTemplate;

 conteo = 0;
 for (const prop in dataLol.data){
  if (dataLol.data[prop].tags.indexOf("Tank") != -1){
    conteo++;
   stringTemplate+= `
  <div id='box'>
  <img src=${dataLol.data[prop].img}/>
  <p id='name' class="">${dataLol.data[prop].name}</p>
  <p id='title'>${dataLol.data[prop].title}</p>
  </div>`
       }
   }
   console.log(conteo);

  container.innerHTML= stringTemplate;
  
  console.log(stringTemplate);*/

  const dataFiltradoRol = (evento)=> {
    //debugger;
    // console.log(rol.target.value);
    let rol = evento.target == undefined ? evento : evento.target.value;
    let stringTemplate = '';
    let container = document.getElementById('container');
  
    for (const prop in dataLol.data){
      if (rol == '-1' || dataLol.data[prop].tags.indexOf(rol) != -1){
  
        stringTemplate+= `
        <div id='box' class="box">
          <img src=${dataLol.data[prop].img} class="imgCampeon"/>
          <p id='name' class="nameCamp">${dataLol.data[prop].name}</p>
          <p id='title'class="titleCamp">${dataLol.data[prop].title}</p>
        </div>`
  
      }
    }
    
    container.innerHTML= stringTemplate;
  }

  // dataFiltradoRol('Tank');

  let listRoles = document.getElementById("roles");

  listRoles.addEventListener("change", dataFiltradoRol);

  dataFiltradoRol('-1');