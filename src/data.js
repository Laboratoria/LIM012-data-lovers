export const filterByName = (championList, term) => {
  let filteredChampions = Object.values(championList).filter(champion => {
    //indexof da -1 si no encuentra resultados
    if (champion.name.toLowerCase().indexOf(term) != -1) {
      return champion;
    }
  });
  return filteredChampions;
};

export const filteredbyClass = (championList, term) => {
  let filteredbyClass = Object.values(championList).filter(champion => {
    if (champion.tags.indexOf(term) != -1) {
      return champion;
    }
  });
  return filteredbyClass;
};

export const filteredDifficulty = () => {
  return 'hola';
};

export const anotherExample = () => {
  return 'OMG';
};
