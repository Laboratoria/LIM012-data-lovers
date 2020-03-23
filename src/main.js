/* eslint-disable */
import { example, mostrarAtletasConSuDeporte } from './data.js';
import data from './data/atletas/atletas.js';

const atletasConDeporte = mostrarAtletasConSuDeporte(data);
atletasConDeporte.forEach(element => {
        let ulAtleta = document.createElement("ul");
    
    let liNombre = document.createElement("li");                
    let textNombre = document.createTextNode(element.nombre);  
    liNombre.appendChild(textNombre);
    ulAtleta.appendChild(liNombre);

    let liDeporte = document.createElement("li");                
    let textDeporte = document.createTextNode(element.deporte);        
    liDeporte.appendChild(textDeporte);
    ulAtleta.appendChild(liDeporte);

    let liEquipo = document.createElement("li");                
    let textEquipo = document.createTextNode(element.equipo);        
    liEquipo.appendChild(textEquipo);
    ulAtleta.appendChild(liEquipo);

    document.getElementById("root").appendChild(ulAtleta); 
    console.log (element)

});


console.log(example, data);
