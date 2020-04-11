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


export const filtrarNombre = (data, texto) => {
  const longitudcadenaBuscada = texto.length;
  const filtroCampeones = Object.values(data).filter((campeones) => (
    texto === campeones.name.toLowerCase().substring(0, longitudcadenaBuscada)
  ));
  return filtroCampeones; // retornamos el array de objetos encontrados
};

export const filtrandoRoles = (data, rolEscogido) => {
  const newArray = [];
  for (let i = 0; i < data.length; i += 1) {
    const arrTags = data[i].tags;
    for (let j = 0; j < arrTags.length; j += 1) {
      if (arrTags[j] === rolEscogido) {
        newArray.push(data[i]);
      }
    }
  }
  return newArray;
};
export const calculoStats = (data, entrada) => {
  let item = 0;
  let result = 0;
  switch (entrada) {
    case 'hp':
      item = data.map((campeones) => campeones.stats);
      result = (item.reduce((sum, value) => (sum + value.hp), 0) / 134).toFixed(2);
      break;
    case 'movespeed':
      item = data.map((campeones) => campeones.stats);
      result = (item.reduce((sum, value) => (sum + value.movespeed), 0) / 134).toFixed(2);
      break;
    case 'attackdamage':
      item = data.map((campeones) => campeones.stats);
      result = (item.reduce((sum, value) => (sum + value.attackdamage), 0) / 134).toFixed(2);
      break;
    default:
      break;
  }
  return result;
};
