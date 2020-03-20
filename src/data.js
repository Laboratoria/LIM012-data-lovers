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
//   let result = [];
//   // buscando pokemones con las letras ingresadas
//   if (parameter === 'A-Z') {
//     result = data.sort((a, b) => {
//       if (a.name > b.name) {
//         return 1;
//       }
//       if (a.name < b.name) {
//         return -1;
//       }
//       return 0;
//     });
//   } else if (parameter === 'Z-A') {
//     result = data.sort((a, b) => {
//       if (a.name < b.name) {
//         return 1;
//       }
//       if (a.name > b.name) {
//         return -1;
//       }
//       return 0;
//     });
//   } else {
//     result = data.sort((a, b) => {
//       if (a.num > b.num) {
//         return 1;
//       }
//       if (a.num < b.num) {
//         return -1;
//       }
//       return 0;
//     });
//   }
//   return result;
// };
