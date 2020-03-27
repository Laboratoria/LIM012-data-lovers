/* eslint-disable import/prefer-default-export */
// export const example = () => 'example';
// export const anotherExample = () => 'OMG';

// AQUI MANEJAMOS LAS FUNCIONES

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
  return datesOfChampions;
};
