// estas funciones son de ejemplo
//entiendo que se trabaja con src/data y se llevan a main.js
/*Ser puras e independientes del DOM. Funciones que serán usadas desde src/main.js, cada vez que el usuario interactúe (click, filtrado, ordenado, ...).
 */

/* toda la funcionalidad que corresponda a obtener, procesar y manipular datos (tus funciones). */
/*filterData(data, condition): esta función filter o filtrar recibiría la data, y nos retornaría aquellos datos que sí cumplan con la condición.

sortData(data, sortBy, sortOrder): esta función sort u ordenar recibe tres parámetros. El primer parámetro, data, nos entrega los datos. 
El segundo parámetro, sortBy, nos dice con respecto a cuál de los campos de la data se quiere ordenar. El tercer parámetro, sortOrder, indica si se quiere ordenar de manera ascendente o descendente.

computeStats(data): la función compute o calcular, nos permitirá hacer cálculos estadísticos básicos para ser mostrados de acuerdo a la data proporcionada. */

const allSelection = (allchampionList) => {
    let arrayKeysChampions = Object.keys(allchampionList);
    let arrayValuesChampions = Object.values(allchampionList);
    // console.log(prueba2);
    for (let i = 0; i < arrayKeysChampions.length; i += 1) {
      // console.log(prueba3[i][1]);
      // console.log(prueba2[i].tags);
      let roleChampions = arrayValuesChampions[i].tags;
      // console.log(roleChampions);
      for (let j = 0; j < roleChampions.length; j += 1) {
        // console.log(roleChampions[j]) /*aparecen todos los roles */
        if (roleChampions[j] === "Fighter") {

          // console.log(arrayValuesChampions[i].name);
          // console.log(arrayValuesChampions[i].splash);

        }

        // export const example = () => 'example';

        export const anotherExample = () => 'OMG';
