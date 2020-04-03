/* eslint-disable no-plusplus */

// Order alphabetically
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
  /* if (sortOrder === 'todos') {
    newArray.sort((a, b) => {
      if (a.name > b.name) {
        return 1;
      }
      return -1;
    });
  } */
  return newArray;
};

// Filter by Role
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

// Average HP (Health Points) of each role
export const averageData = (data, role) => {
  const filterOnlyByRole = data.filter(champion => champion.tags.includes(role));
  const reducehpfighter = filterOnlyByRole.reduce((acc, current) => acc + current.stats.hp, 0);
  const avghpfighter = reducehpfighter / filterOnlyByRole.length;
  return avghpfighter;
};
