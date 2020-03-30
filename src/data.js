// Función para buscar pokemones
export const filterByGeneration = (data, generation) => (data.filter((pokemon) => (
  pokemon.generation.name === generation))
);

export const search = (data, inputText) => {
  const result = [];
  // buscando pokemones con las letras ingresadas
  data.forEach((eachPokemon) => {
    const namePokemon = eachPokemon.name;
    const lengthText = inputText.length;
    if (namePokemon.slice(0, lengthText) === inputText) {
      result.push(eachPokemon);
    }
  });
  return result;
};

// Funcion para filtrar por tipo
export const filterByType = (pokemonType, typeChose) => {
  const typesResult = [];
  for (let i = 0; i < pokemonType.length; i += 1) {
    for (let z = 0; z < pokemonType[i].type.length; z += 1) {
      if (pokemonType[i].type[z] === typeChose) {
        typesResult.push(pokemonType[i]);
      }
    }
  }
  return typesResult;
};

// Función para ordenar
export const order = (data, parameter) => {
  let newArray = [];
  let result = 0;
  // Ordenando la data de forma alfabética ascendente y descendente
  const sortArray = data.sort((a, b) => {
    if (a.name > b.name) {
      result = 1;
    }
    if (a.name < b.name) {
      result = -1;
    }
    return result;
  });
  if (parameter === 'A-Z') {
    newArray = sortArray;
  } else if (parameter === 'Z-A') {
    newArray = sortArray.reverse();
  } else {
    // Ordenando la data por número para la opción por defecto
    newArray = data.sort((a, b) => {
      if (a.num > b.num) {
        result = 1;
      }
      if (a.num < b.num) {
        result = -1;
      }
      return result;
    });
  }
  return newArray;
};

export const dpsCalculate = (quick, pokemonType) => {
  let dps = 0;
  const baseDamage = Number(quick['base-damage']);
  const time = Number(quick['move-duration-seg']);
  dps = baseDamage / time;
  for (let i = 0; i < pokemonType.length; i += 1) {
    if (pokemonType[i] === quick.type) {
      let stab = 0;
      stab = baseDamage + ((20 * baseDamage) / 100);
      dps = stab / time;
    }
  }
  console.log(dps);
  return dps;
};

export const epsCalculate = (quick) => {
  const energy = Number(quick.energy);
  const time = Number(quick['move-duration-seg']);
  return energy / time;
};
