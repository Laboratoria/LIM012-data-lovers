export const filterByName = (championList, term) => {
  let filteredChampions = Object.values(championList).filter(champion => {
    //indexof da -1 si no encuentra resultados
    if (champion.name.toLowerCase().indexOf(term) != -1) {
      return champion;
    }
  });
  console.log(filteredChampions)
  return filteredChampions;
};

export const filteredbyClass = (championList, term) => {
  let filteredbyClass = Object.values(championList).filter(champion => {
    if (champion.tags.indexOf(term) != -1) {
      return champion;
    }
  });
  console.log(filteredbyClass)
  return filteredbyClass;
};

export const filteredByDifficulty = (championList, term) => {
  let filteredByDifficult;
  console.log(term)

  if (term === "1") {
    console.log(term)
    filteredByDifficult = Object.values(championList).filter(champion => {
      if (champion.info.difficulty < 4) {
        return champion
      }
    })
  }

  if (term === "2") {
    console.log(term)
    filteredByDifficult = Object.values(championList).filter(champion => {
      if (champion.info.difficulty > 3 && champion.info.difficulty < 7) {
        return champion
      }
    })
  }

  if (term === "3") {
    console.log(term)
    filteredByDifficult = Object.values(championList).filter(champion => {
      if (champion.info.difficulty > 6) {
        return champion
      }
    })
  }

  console.log(filteredByDifficult.length)
  return filteredByDifficult;
};
