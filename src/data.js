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

export const stabMoves = (attackType, pokemonType, attack) => {
  const resultStab = attackType.map((data) => {
    if (pokemonType[0] === attack || pokemonType[1] === attack) {
      const dañoBase = parseInt(data['base-damage']);
      const porcentaje = parseInt(20*(dañoBase)/100);
      const calculo = dañoBase + porcentaje;
      return calculo;
    }
    return dañoBase;
  });
  return resultStab;
};

export const dpsMoves = (attackType,stab) => {
  const resultDpsMoves = attackType.map((data) => {
    const baseDamage = parseInt(data['base-damage']);
    const time = parseInt(data['move-duration-seg']);
    const calculo = parseInt(baseDamage * stabMoves / time);
    return calculo;
  });
  return resultDpsMoves;
};

export const epsMoves = (attackType) => {
  const resultEpesMoves = attackType.map((data) => {
    const time = parseInt(data['move-duration-seg']);
    const energy = parseInt(data.energy);
    const calculo = parseInt(energy / time);
    return calculo;
  });
  return resultEpesMoves;
};

export const stabAttack = (attackType, pokemonType, attack) => {
  const resultStab = attackType.map((data) => {
    if (pokemonType[0] === attack || pokemonType[1] === attack) {
      const dañoBase = parseInt(data['base-damage']);
      const porcentaje = parseInt(20*(dañoBase)/100);
      const calculo = dañoBase + porcentaje;
      return calculo;
    }
    return dañoBase;
  });
  return resultStab;
};

export const dpsAttack = (attackType, stab) => {
  const result = attackType.map((data) => {
    const res = data['base-damage'];
    const resTime = data['move-duration-seg'];
    return (res * stab) / resTime;
  });
  return result;
};

export const epsAttack = (attackType) => {
  const result = attackType.map(data => data.energy / data['move-duration-seg']);
  return result;
};
