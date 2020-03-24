/* eslint-disable id-length */
/* eslint-disable no-magic-numbers */
/* eslint-disable no-plusplus */
// AQUI MANEJAMOS LAS FUNCIONES

// estas funciones son de ejemplo
// export const example = () => 'example';
// export const anotherExample = () => 'OMG';
import data from './data/lol/lol.js';

export const orderChampions = (data, orderBy, orderFrom) => {

    const datesOfChampions = data;

    if (orderBy === "name" && orderFrom === "az") {   

        datesOfChampions.sort((a, b) => {

            if (a.name > b.name) {

                return 1;
            
            }
            if (a.name < b.name) {

                return -1;
            
            }
            
            return 0;
        
        });
    
    }
    if (orderBy === "name" && orderFrom === "za") {

        datesOfChampions.sort((a, b) => {

            if (a.name < b.name) {

                return 1;
            
            }
            if (a.name > b.name) {

                return -1;
            
            }
            
            return 0;
        
        });
    
    }
      
    return datesOfChampions;

};


/*export const ordenarAscendente = (arrObjetos) => arrObjetos.sort((a, b) => {
  if (a.name > b.name) {
    return 1;
  }
  return -1;
  
});*/


