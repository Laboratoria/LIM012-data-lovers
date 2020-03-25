// export const example = () => 'example';
// export const anotherExample = () => 'OMG';

// AQUI MANEJAMOS LAS FUNCIONES

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

  return datesOfChampions;
};
