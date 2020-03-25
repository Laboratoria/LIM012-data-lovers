// AQUI MANEJAMOS LAS FUNCIONES

// estas funciones son de ejemplo

export const example = () => 'example';

export const anotherExample = () => 'OMG';


export const orderChampions = (lol, orderBy, orderFrom) => {
  const datesOfChampions = lol;
  if (orderBy === 'name' && orderFrom === 'az') {
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
  if (orderBy === 'name' && orderFrom === 'za') {
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
  // console.log(datesOfChampions);
  return datesOfChampions;
};


/* export const ordenarAscendente = (arrObjetos) => arrObjetos.sort((a, b) => {
  if (a.name > b.name) {
    return 1;
  }
  return -1;

}); */
