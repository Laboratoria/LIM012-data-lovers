export const athletesView = (data) => {
  const paintAthletes = data.atletas.map(a => ({
    nombre: a.nombre,
    deporte: a.deporte,
    equipo: a.equipo,
  }));
  return paintAthletes;
};

export const ordenAs = (paintAthletes) => {
  const ascendente = paintAthletes.sort((prev, next) => {
    if (prev.nombre > next.nombre) {
      return 1;
    } if (prev.nombre < next.nombre) {
      return -1;
    } return 0;
  });
  return ascendente;
};

export const anotherExample = () => 'OMG';
