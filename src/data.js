/* eslint-disable import/prefer-default-export */
// export const example = () => 'example';
// export const anotherExample = () => 'OMG';

// AQUI MANEJAMOS LAS FUNCIONES

export const orderChampions = (array, orderFrom) => {
  const newArray = array;

  if (orderFrom === 'az') {
    newArray.sort((a, b) => {
      if (a.name > b.name) {
        return 1;
      }
      return -1;
    });
  }
  if (orderFrom === 'za') {
    newArray.sort((a, b) => {
      if (a.name < b.name) {
        return 1;
      }
      return -1;
    });
  }
  return newArray;
};
