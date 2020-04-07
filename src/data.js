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
  const deportesFiltrados = arrayAtletas.filter(atleta => atleta.deporte === deporteSeleccionado);
  return deportesFiltrados;
};

export const totalMedallasOroPorOlimpiadaPais = (arrayAtletas, pais, olimpiada, anno) => {
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

/*
export const totalMedallasPlataPorOlimpiadaPais = (arrayAtletas, olimpiada, pais) => {

};

export const totalMedallasBroncePorOlimpiadaPais = (arrayAtletas, olimpiada, pais) => {

};

/*
  let contadorOro = 0;
  let contadorPlata = 0;
  let contadorBronce = 0;

  for (let i = 0; i < arrayAtletas.length; i += 1) {
    if (arrayAtletas[i].equipo === 'Mexico') {
      for (let j = 0; j < arrayAtletas[i].disciplinas.length; j += 1) {
        if (arrayAtletas[i].disciplinas[j].anio === 2000) {
          if (arrayAtletas[i].disciplinas[j].medalla === 'Gold') {
            contadorOro += 1;
          } else if (arrayAtletas[i].disciplinas[j].medalla === 'Silver') {
            contadorPlata += 1;
          } else if (arrayAtletas[i].disciplinas[j].medalla === 'Bronze') {
            contadorBronce += 1;
          }
        }
      }
      return contadorOro;
    }
    return contadorPlata;
  }
  return contadorBronce;
}; */
