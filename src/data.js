// estas funciones son de ejemplo
export const orderData = (data, sortBy, sortOrder) => {
  let result;
  if (sortOrder === 'ascendente') {
    result = data.sort((a, b) => {
      if (a[sortBy] > b[sortBy]) {
        return 1;
      }
      return -1;
    });
  } else {
    result = data.sort((a, b) => {
      if (a[sortBy] < b[sortBy]) {
        return 1;
      }
      return -1;
    });
  }
  return result;
};
export const searchChampions = (data, searchBy, condition) => {
  const search = data.filter(letter => (letter[searchBy]).toLowerCase().indexOf(condition) !== -1);
  return search;
};
export const orderFilterTags = (item, index, condition) => {
  const championRol = item.filter(el => (el[index][0] === condition || el[index][1] === condition));
  return championRol;
};
export const dataOrdenado = (data) => {
  const arrayOrdenado = data.sort((a, b) => b.promedio - a.promedio).slice(0, 5);
  return arrayOrdenado;
};
