// estas funciones son de ejemplo
//entiendo que se trabaja con src/data y se llevan a main.js
/*Ser puras e independientes del DOM. Funciones que serán usadas desde src/main.js, cada vez que el usuario 
interactúe (click, filtrado, ordenado, ...).
 */
/* toda la funcionalidad que corresponda a obtener, procesar y manipular datos (tus funciones). */
/*filterData(data, condition): esta función filter o filtrar recibiría la data, y nos retornaría aquellos datos que sí cumplan con la condición.
sortData(data, sortBy, sortOrder): esta función sort u ordenar recibe tres parámetros. El primer parámetro, data, nos entrega los datos. 
El segundo parámetro, sortBy, nos dice con respecto a cuál de los campos de la data se quiere ordenar. El tercer parámetro, sortOrder, indica si se quiere ordenar de manera ascendente o descendente.
computeStats(data): la función compute o calcular, nos permitirá hacer cálculos estadísticos básicos para ser mostrados de acuerdo a la data proporcionada. */

export const allSelection = (allchampionList, typeRol) => {
  let arrayValuesChampions = Object.values(allchampionList);
  return arrayValuesChampions.filter((championsList) => {
    /*La clave está en que es booleano, entonces es true para arrayValuesChampios..... y al ser false pues según yo no devuelve nada*/
    /*Filter devuelve valores vuleanos */
    /*retorna el array de los values, pero ahora filtremos con el callback*/
    return championsList.tags.indexOf(typeRol) >= 0
    /*De este nuevo array de valores queremos encontrar aquellos que coincidan con el tag equivalente a typeRol que le vamos a pasar, pero este tiene que existir, por tanto tiene que tener un índice mayor a 0, que si al revés pues este no existe*/
  })
}
export const example = () => 'example';

        //export const anotherExample = () => 'OMG'
