// estas funciones son de ejemplo

export const ordenarCampeones = (listaTodos, texto) => {
  let ordenarLista;

  if (texto === 'az') {
    ordenarLista = Object.values(listaTodos).sort();
  }
  if (texto === 'za') {
    ordenarLista = Object.values(listaTodos)
      .sort()
      .reverse();
  }
  return ordenarLista;
};


export const filtroNombre = (data, texto) => {
  const longitudcadenaBuscada = texto.length;
  const filtroCampeones = Object.values(data).filter((campeones) => {
    if (texto === campeones.name.toLowerCase().substring(0, longitudcadenaBuscada)) {
      return campeones; // retorna el objeto encontrado
    }
  });

  return filtroCampeones; // retornamos el array de objetos encontrados
};
export const anotherExample = () => 'OMG';
