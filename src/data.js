
export const athletesView = (data) => {
// eslint-disable-next-line arrow-body-style
  const paintAthletes = data.atletas.map((a) => {
    return {
      nombre: a.nombre,
      deporte: a.deporte,
      equipo: a.equipo,
    };
  });
  return paintAthletes;
};
export const example = () => 'example';
export const anotherExample = () => 'OMG';
 

