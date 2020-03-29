/* eslint-disable import/prefer-default-export */
// export const example = () => 'example';
// export const anotherExample = () => 'OMG';

// AQUI MANEJAMOS LAS FUNCIONES

// Funcion de ordenar alfabeticamente
export const sortData = (data, sortBy, sortOrder) => {
  const newArray = data;

  if (sortBy === 'name' && sortOrder === 'ascendente') {
    newArray.sort((a, b) => {
      if (a.name > b.name) {
        return 1;
      }
      if (a.name < b.name) {
        return -1;
      }
      return 0;
    });
  }
  if (sortBy === 'name' && sortOrder === 'descendente') {
    newArray.sort((a, b) => {
      if (a.name < b.name) {
        return 1;
      }
      if (a.name > b.name) {
        return -1;
      }
      return 0;
    });
  }
  return newArray;
};

/* ************************************************** */
// funcion de filtrar
export const filterData = (data, condition) => {
  const filtering = data.filter((obj) => {
    const filterByRole = [];
    if (condition !== 'all') {
      for (let i = 0; i < obj.tags.length; i += 1) {
        if (obj.tags[i] === condition) {
          filterByRole.push(obj.tags[i]);
          return filterByRole;
        }
      }
    }
    return false;
  });
  return filtering;
};
