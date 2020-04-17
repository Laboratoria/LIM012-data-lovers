// export const sumar = (a, b) => a + b;
// export const restar = (a, b) => a - b;
// export const multiplicar = (a, b) => a * b;
// export const dividir = (a, b) => a / b;
export const transformaBandera = initial => initial.slice(0, -1);

export const removeDuplicates = array => [...new Set(array)];

export const edad = birthDate => new Date().getFullYear() - birthDate;


// ascendente
export const sortedByNameA = (data) => {
  let result = '';
  result = data.sort((a, b) => {
    if (a.name > b.name) {
      return 1;
    }
    if (b.name > a.name) {
      return -1;
    }
    return 0;
  });
  return result;
};

// descendente
export const sortedByNameD = (data) => {
  const result = data.reverse();
  return result;
};

// filtro por temporada
export const FilterTemporada = (data, valor) => {
  const filterSeasonArr = [];
  data.forEach((elem) => {
    // eslint-disable-next-line no-prototype-builtins
    if (elem.hasOwnProperty('disciplinas')) {
      elem.disciplinas.forEach((obj) => {
        if (obj.temporada === valor || valor === 'All') {
          filterSeasonArr.push(elem);
        }
      });
    }
  });
  return filterSeasonArr;
};

// filtro por tipo de medalla
export const filterMedalla = (data, valor) => {
  const filterMedalArr = [];
  data.forEach((elem) => {
    // eslint-disable-next-line no-prototype-builtins
    if (elem.hasOwnProperty('disciplinas')) {
      elem.disciplinas.forEach((obj) => {
        if (obj.medalla === valor || valor === 'All') {
          filterMedalArr.push(elem);
        }
      });
    }
  });
  return filterMedalArr;
};

// // search
export const searchInput = (data, value) => {
  const buscador = data.filter(el => el.name.toLowerCase().includes(value.toLowerCase()));
  return buscador;
};
// // filtro por genero
export const genderFiler = (data, valor) => {
  const filterGenderArr = data.filter(items => (items.gender === valor || valor === 'All'));
  return filterGenderArr;
};
