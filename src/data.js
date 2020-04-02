/* eslint-disable no-plusplus */
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

export const filterAssassin = (data) => {
  const filterOnlyAssassin = data.filter(champion => champion.tags.includes('Assassin'));
  const reduceHpAssassin = filterOnlyAssassin.reduce((total, next) => total + next.stats.hp, 0);
  const avgHpAssassin = reduceHpAssassin / filterOnlyAssassin.length;
  return avgHpAssassin;
};

export const filterFighter = (data) => {
  const filterOnlyFighter = data.filter(champion => champion.tags.includes('Fighter'));
  const reducehpfighter = filterOnlyFighter.reduce((total, next) => total + next.stats.hp, 0);
  const avghpfighter = reducehpfighter / filterOnlyFighter.length;
  return avghpfighter;
};

export const filterMage = (data) => {
  const filterOnlyMage = data.filter(champion => champion.tags.includes('Mage'));
  const reduceHpMage = filterOnlyMage.reduce((total, next) => total + next.stats.hp, 0);
  const avgHpMage = reduceHpMage / filterOnlyMage.length;
  return avgHpMage;
};
export const filterMarksman = (data) => {
  const filterOnlyMarksman = data.filter(champion => champion.tags.includes('Marksman'));
  const reduceHpMarksman = filterOnlyMarksman.reduce((total, next) => total + next.stats.hp, 0);
  const avgHpMarksman = reduceHpMarksman / filterOnlyMarksman.length;
  return avgHpMarksman;
};

export const filterSupport = (data) => {
  const filterOnlySupport = data.filter(champion => champion.tags.includes('Support'));
  const reduceHpSupport = filterOnlySupport.reduce((total, next) => total + next.stats.hp, 0);
  const avgHpSupport = reduceHpSupport / filterOnlySupport.length;
  return avgHpSupport;
};
export const filterTank = (data) => {
  const filterOnlyTank = data.filter(champion => champion.tags.includes('Tank'));
  const reduceHpTank = filterOnlyTank.reduce((total, next) => total + next.stats.hp, 0);
  const avgHpTank = reduceHpTank / filterOnlyTank.length;
  return avgHpTank;
};

// const filterfighter = arrObjetos.filter(champion => champion.tags.includes('Fighter'));
// const reducehpfighter = filterfighter.reduce((total, next) => total + next.stats.hp, 0);
// const avghpfighter = reducehpfighter / filterfighter.length;
// console.log(('promedio de hp de los Fighter'), avghpfighter);
