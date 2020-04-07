// Las funciones son acciones y las acciones son verbos!
// Cual es el nombre de la funcion: el tipo de dato de sus parmetros y lo que retorna
export const athletesView = (array) => {
  const newArray = array.map(obj => ({
    nombre: obj.nombre,
    deporte: obj.deporte,
    equipo: obj.equipo,
  }));
  return newArray;
};

export const ordenAs = (p1) => {
  const ascendente = p1.sort((prev, next) => {
    if (prev.nombre > next.nombre) {
      return 1;
    } return -1;
  });
  return ascendente;
};

export const filtrarAtletasPorDeporte = (arrayAtletas, deporteSeleccionado) => {
  const deportesFiltrados = arrayAtletas.filter(atletas => atletas.deporte === deporteSeleccionado);
  return deportesFiltrados;
};

export const totalMedallasOro = (arrayAtletas, pais, olimpiada, anno) => {
  const arrayAtletasPorPais = arrayAtletas.filter(atleta => atleta.equipo === pais);
  /* debugger; */
  const totalMedallasGold = arrayAtletasPorPais.reduce((contador, atleta) => {
    /* debugger; */
    const atletaConMedallaGold = atleta.disciplinas.filter(c => c.ciudad === olimpiada && c.año == anno && c.medalla === 'Gold');

    if (atletaConMedallaGold.length > 0) {
      return contador + 1;
    }
    return contador;
  }, 0);

  return totalMedallasGold;
};

export const totalMedallasPlata = (arrayAtletas, pais, olimpiada, anno) => {
  const arrayAtletasPorPais = arrayAtletas.filter(atleta => atleta.equipo === pais);
  /* debugger; */
  const totalMedallasSilver = arrayAtletasPorPais.reduce((contador, atleta) => {
    /* debugger; */
    const atletaConMedallaSilver = atleta.disciplinas.filter(c => c.ciudad === olimpiada && c.año == anno && c.medalla === 'Silver');

    if (atletaConMedallaSilver.length > 0) {
      return contador + 1;
    }
    return contador;
  }, 0);

  return totalMedallasSilver;
};

export const totalMedallasBronce = (arrayAtletas, pais, olimpiada, anno) => {
  const arrayAtletasPorPais = arrayAtletas.filter(atleta => atleta.equipo === pais);
  /* debugger; */
  const totalMedallasBronze = arrayAtletasPorPais.reduce((contador, atleta) => {
    /* debugger; */
    const atletaConMedallaBronze = atleta.disciplinas.filter(c => c.ciudad === olimpiada && c.año == anno && c.medalla === 'Bronze');

    if (atletaConMedallaBronze.length > 0) {
      return contador + 1;
    }
    return contador;
  }, 0);

  return totalMedallasBronze;
};
