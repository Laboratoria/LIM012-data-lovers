/* eslint-disable */
import { example, buscador } from './data.js';
import data from './data/atletas/atletas.js';

const atletasConDeporte = buscador.mostrarAtletasConSuDeporte(data);

for (let index = 0; index < atletasConDeporte.length; index++) {
    var ulAtleta = document.createElement("ul");
    
    var liNombre = document.createElement("li");                
    var textNombre = document.createTextNode(atletasConDeporte[index].nombre);  
    liNombre.appendChild(textNombre);
    ulAtleta.appendChild(liNombre);

    var liDeporte = document.createElement("li");                
    var textDeporte = document.createTextNode(atletasConDeporte[index].deporte);        
    liDeporte.appendChild(textDeporte);
    ulAtleta.appendChild(liDeporte);

    document.getElementById("root").appendChild(ulAtleta);       
}

console.log(example, data);
