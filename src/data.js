// estas funciones son de ejemplo
/* import {
  filterTempSummer
} from './data'; */

export const filtrarProductosPorValor = (array, number, string) => {
  const newArray = [];
  for (let i = 0; i < array.length; i++) {
    if (string === 'menor') {
      if (array[i].valor < number) {
        newArray.push(array[i]);
      }
    }

    if (string === 'mayor') {
      if (array[i].valor > number) {
        newArray.push(array[i]);
      }
    }
  }

  return newArray;
};

/* filtrado por tipo de medalla plata */
export const filterMedallaSilver = () => {
  const medallaSilver = [];
  data.forEach((elem) => {
    if (elem.hasOwnProperty('disciplinas')) {
      elem.disciplinas.forEach((obj) => {
        if (obj.medalla === 'Silver') {
          medallaSilver.push(elem);
        }
      });
    }
  });
  return medallaSilver;
};
/* filtrado por tipo de medalla bronce */
export const filterMedallaBronze = () => {
  const medallaBronze = [];
  data.forEach((elem) => {
    if (elem.hasOwnProperty('disciplinas')) {
      elem.disciplinas.forEach((obj) => {
        if (obj.medalla === 'Bronze') {
          medallaBronze.push(elem);
        }
      });
    }
  });
  return medallaBronze;
};

/* filtrado por tipo de medalla oro */
export const filterMedallaGold = () => {
  const medallaGold = [];
  data.forEach((elem) => {
    if (elem.hasOwnProperty('disciplinas')) {
      elem.disciplinas.forEach((obj) => {
        if (obj.medalla === 'Gold') {
          medallaGold.push(elem);
        }
      });
    }
  });
  return medallaGold;
};

/* filtrado  por temporada Verano */
export const filterTempSummer = () => {
  const tempSummer = [];
  data.forEach((elem) => {
    if (elem.hasOwnProperty('disciplinas')) {
      elem.disciplinas.forEach((obj) => {
        if (obj.temporada === 'Summer') {
          tempSummer.push(elem);
        }
      });
    }
  });
  return tempSummer;
};

/* filtrado por temporada Invierto */
export const filterTempWinter = () => {
  const tempWinter = [];
  data.forEach((elem) => {
    if (elem.hasOwnProperty('disciplinas')) {
      elem.disciplinas.forEach((obj) => {
        if (obj.temporada === 'Winter') {
          tempWinter.push(elem);
        }
      });
    }
    return tempWinter;
  });
};
