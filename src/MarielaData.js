// estas funciones son de ejemplo
//
// Filtar por generatión
export const filterByGeneration = (data, generation) => {
  const newArray = [];
  for (let i = 0; i < data.length; i += 1) {
    if (data[i].generation.name === generation) {
      newArray.push(data[i]);
    }
  }
  return newArray;
};

// Función para buscar pokemones
export const search = (dataP, inputText) => {
  const result = [];
  // buscando pokemones con las letras ingresadas
  dataP.forEach((eachPokemon) => {
    const namePokemon = eachPokemon.name;
    const lengthText = inputText.length;
    if (namePokemon.slice(0, lengthText) === inputText) {
      result.push(eachPokemon);
    }
  });
  return result;
};
