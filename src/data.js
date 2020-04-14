export const ordenar = (ordenarData, seleccion) => {
  let resultado = [];
  if (seleccion === 'a-z') {
    resultado = ordenarData.sort((a, b) => {
      if (a.nombre > b.nombre) {
        return 1;
      }
      if (a.nombre < b.nombre) {
        return -1;
      }
      return 0;
    });
  } else {
    resultado = ordenarData.sort((a, b) => {
      if (a.nombre < b.nombre) {
        return 1;
      }
      if (a.nombre > b.nombre) {
        return -1;
      }
      return 0;
    });
  }

  return resultado;
};

export const filtroPorDeporte = (listaCompetidor, sport) => {
  const filteredPorSport = listaCompetidor.filter(x => x.deporte === sport);
  return filteredPorSport;
};

export const filtroResultadoMedallas = (data, ciudad, medalla) => {
  const newArr = [];
  let contando = 0;
  data.forEach((elem) => {
    // eslint-disable-next-line no-prototype-builtins
    if (elem.hasOwnProperty('disciplinas')) {
    // console.log(elem, 'hola');
      return elem.disciplinas.forEach((obj) => {
        if (obj.ciudad === ciudad && obj.medalla === medalla) {
          newArr.push(obj);
          contando += 1;
        }
      });
    }
    return false;
  });
  return contando;
};
