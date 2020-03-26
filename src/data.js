export const athletesView = (data) => {
// eslint-disable-next-line arrow-body-style
  const paintAthletes = data.atletas.map((atleta) => {
    return {
      nombre: atleta.nombre,
      deporte: atleta.deporte,
      equipo: atleta.equipo,
    };
  });
  return paintAthletes;
};
export const example = () => 'example';
export const anotherExample = () => 'OMG';
