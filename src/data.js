/* eslint-disable no-undef */
/* eslint-disable no-plusplus */
/* eslint-disable import/prefer-default-export */
// export const example = () => 'example';
// export const anotherExample = () => 'OMG';

// AQUI MANEJAMOS LAS FUNCIONES
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

export const filterData = (data, condition) => {
  const filtering = data.filter((obj) => {
    const filterByRole = [];
    for (let i = 0; i < obj.tags.length; i++) {
      if (obj.tags[i] === condition) {
        filterByRole.push(obj.tags[i]);
        return filterByRole;
      }
    }
    return false;
  });
  return filtering;
};

/* export const filterData = (data, condition) => {
  const filteredByRole = [];
  for (let i = 0; i < data.length; i++) {
    for (let e = 0; e < data[i].tags.length; e++) {
      if (data[i].tags[e] === condition) {
        filteredByRole.push(data[i]);
      }
    }
  }
  return filteredByRole;
}; */
