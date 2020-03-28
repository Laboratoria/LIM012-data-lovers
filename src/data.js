/* eslint-disable import/prefer-default-export */
// export const example = () => 'example';
// export const anotherExample = () => 'OMG';

// AQUI MANEJAMOS LAS FUNCIONES

// Funcion de ordenar alfabeticamente
export const orderChampions = (property, orderFrom) => {
  const datesOfChampions = property;

  if (orderFrom === 'az') {
    datesOfChampions.sort((a, b) => {
      if (a.name > b.name) {
        return 1;
      }
      return -1;
    });
  }
  if (orderFrom === 'za') {
    datesOfChampions.sort((a, b) => {
      if (a.name < b.name) {
        return 1;
      }
      return -1;
    });
  }
  /* if (orderFrom === 'TODOS') {
    datesOfChampions.sort((a, b) => {
      if (a.name > b.name) {
        return 1;
      }
      return -1;
    });
  } */
  return datesOfChampions;
};

// funcion de filtrar incompleta
let entradasInvalidas = 0;
export const filtrarPorTags = (obj) => {
  if (obj.tags.includes('Mage')) {
    return true;
  }
  // eslint-disable-next-line no-plusplus
  entradasInvalidas++;
  return false;
};
console.log('Número de Entradas Invalidas = ', entradasInvalidas);
