/* eslint-disable no-plusplus */


// AQUI MANEJAMOS LAS FUNCIONES

// ORDENAR ALFABETICAMENTE

export const sortData = (data, sortBy, sortOrder) => {
  const newArray = data;
  if (sortBy === 'name' && sortOrder === 'ascending') {
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
  if (sortBy === 'name' && sortOrder === 'descending') {
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

// FILTRAR POR ROL
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

// PROMEDIO DE AD (DAÑO POR ATAQUE) DE CADA ROL
export const averageData = (data, role) => {
  const filterOnlyByRole = data.filter(champion => champion.tags.includes(role));
  const reducehpfighter = filterOnlyByRole.reduce((acc, current) => acc + current.stats.attackdamage, 0);
  const avghpfighter = reducehpfighter / filterOnlyByRole.length;
  return avghpfighter;
};
