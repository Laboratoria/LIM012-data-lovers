// Las funciones son acciones y las acciones son verbos!
// Cual es el nombre de la funcion: el tipo de dato de sus parmetros y lo que retorna
<<<<<<< HEAD
=======

>>>>>>> e5b21a3af6970e7343a4fd0900e327610d44a277
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
  const deportesFiltrados = arrayAtletas.filter((atleta) => {
    return atleta.deporte === deporteSeleccionado;
  });
  return deportesFiltrados;
};
