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

export const totalMedallas = (arrayAtletas, pais, olimpiada, tipo) => {
  const arrayAtletasPorPais = arrayAtletas.filter(atleta => atleta.equipo === pais);
  const totalMedallasTipo = arrayAtletasPorPais.reduce((contador, atleta) => {
    const medalla = atleta.disciplinas.filter(c => c.ciudad === olimpiada && c.medalla === tipo);
    if (medalla.length > 0) {
      return contador + 1;
    }
    return contador;
  }, 0);
  return totalMedallasTipo;
};
