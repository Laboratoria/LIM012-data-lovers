// Las funciones son acciones y las acciones son verbos!
// Cual es el nombre de la funcion: el tipo de dato de sus parmetros y lo que retorna<<<<<<< HE
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
    } if (prev.nombre < next.nombre) {
      return -1;
    } return 0;
  });
  return ascendente;
};
