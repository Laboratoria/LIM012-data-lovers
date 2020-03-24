/* eslint-disable max-len */
//  AQUI MANEJAMOS EL DOOM

// import { example } from './data.js';
import data from "./data/lol/lol.js";
import {
    orderChampions
} from "./data.js";

// import { crearTemplate } from './data.js';

// import data from './data/atletas/atletas.js';

// import data from './data/pokemon/pokemon.js';
// console.log(example,data);
// console.log(data.data);

const allChampion = data.data,

 arrObjetos = Object.values(allChampion),
    // console.log(arrObjetos);
    /*const contenedor = document.getElementById("contenedor"),*/

        crearTemplate = (data) => {
 
        document.getElementById("box").innerHTML = "";
        const all = [];

        for (let i = 0; i < data.length; i++) {

            all.push(`
    <div class="class-div">  
    <img src="${data[i].splash}" class="class-img" alt="splashChampion">
    <p class="class-name">${data[i].name}</p>
    </div>`);
        
        }
        
return all;
    
    };

document.getElementById("box").innerHTML = crearTemplate(arrObjetos);


document.getElementById("order").addEventListener("change", 
() => {

    document.getElementById("box").innerHTML = crearTemplate(orderChampions(
arrObjetos, 
"name",
        document.getElementById("order").value
)); 

});

/*crearTemplate = (arr) => {

        let stringTemplate = "";

        for (let i = 0; i < arr.length; i++) {

            for (let j = 0; j < arr[i].length; j++) {

                stringTemplate += `
                <div class="class-div">     
                <img class="class-img" alt="Imagen de ${arr[i][j].id}" src=${arr[i][j].splash}>
                <p class="class-name">${arr[i][j].id}</p>
                </div>`;
                // console.log(arr[0][0].id);
                       
            }
        
            return stringTemplate;
    
        }
    
        return stringTemplate;

    };

window.onload = () => {

    contenedor.innerHTML = crearTemplate(arrObjetos);

};*/
