// estas funciones son de ejemplo

export const ordenarCampeones = (listaTodos, term) => {
  let ordenarLista;
  if (term === 'az') {
    ordenarLista = Object.values(listaTodos).sort((a, b) => {
      if (a.name > b.name) {
        return 1;
      }
      if (a.name < b.name) {
        return -1;
      }
      // a must be equal to b
      return 0;
    });
  }
  if (term === 'za') {
    ordenarLista = Object.values(listaTodos)
      .sort((a, b) => {
        if (a.name < b.name) {
          return 1;
        }
        if (a.name > b.name) {
          return -1;
        }
        // a must be equal to b
        return 0;
      });
  }
  return ordenarLista;
};


export const filtroNombre = (data, texto) => {
  const longitudcadenaBuscada = texto.length;
  const filtroCampeones = Object.values(data).filter((campeones) => (
    texto === campeones.name.toLowerCase().substring(0, longitudcadenaBuscada)
  ));
  return filtroCampeones; // retornamos el array de objetos encontrados
};

export const filtrarRoles = (data, rolEscogido) => {
  const tipoRol = Object.values(data.tags);
  const filtroRol = Object.values(data).filter((campeones) => (
    rolEscogido === campeones.tags(tipoRol)
  ));
  return filtroRol;
};

export const anotherExample = () => 'OMG';
