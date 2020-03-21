export const mostrarAtletasConSuDeporte = (data) => {
// eslint-disable-next-line arrow-body-style
  const atletasConDeporte = data.atletas.map((a) => {
    return {
      nombre: a.nombre,
      deporte: a.deporte,
      equipo: a.equipo,
    };
  });
  return atletasConDeporte;
};
export const example = () => 'example';
export const anotherExample = () => 'OMG';
