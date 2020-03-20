/* eslint-disable */
import { example, buscador } from './data.js';
import data from './data/atletas/atletas.js';

const atletasConDeporte = buscador.mostrarAtletasConSuDeporte(data);

for (let index = 0; index < atletasConDeporte.length; index++) {
    let ulAtleta = document.createElement("ul");
    
    let liNombre = document.createElement("li");                
    let textNombre = document.createTextNode(atletasConDeporte[index].nombre);  
    liNombre.appendChild(textNombre);
    ulAtleta.appendChild(liNombre);

    let liDeporte = document.createElement("li");                
    let textDeporte = document.createTextNode(atletasConDeporte[index].deporte);        
    liDeporte.appendChild(textDeporte);
    ulAtleta.appendChild(liDeporte);

    let liEquipo = document.createElement("li");                
    let textEquipo = document.createTextNode(atletasConDeporte[index].equipo);        
    liEquipo.appendChild(textEquipo);
    ulAtleta.appendChild(liEquipo);

    document.getElementById("root").appendChild(ulAtleta);       
}

console.log(example, data);
