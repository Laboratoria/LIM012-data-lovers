// estas funciones son de ejemplo

// entiendo que se trabaja con src/data y se llevan a main.js
/* serán usadas desde src/main.js, cuando se interactúe (click, filtrado, ordenado etc).
 */
/* toda la funcionalidad que corresponda a obtener, procesar y manipular datos (tus funciones). */
/* filterData(data, condition):recibiría la data, retorna datos que cumplan con la condición.
 */

export const allSelection = (allchampionList, typeRol) => {
  const arrayValuesChampions = Object.values(allchampionList);
  return arrayValuesChampions.filter(championsList => championsList.tags.indexOf(typeRol) >= 0);
  /* Es booleano, entonces es true para arrayValuesChampios y al ser false no devuelve nada */
  /* Filter devuelve valores booleanos */
  /* retorna el array de los values, pero ahora filtremos con el callback */
  /* De este nuevo array de valores queremos encontrar aquellos que coincidan con  */
  /* typeRol que le vamos a pasar, pero este tiene que existir, por tanto índice mayor a 0 */
};
// export const example = () => 'example';
