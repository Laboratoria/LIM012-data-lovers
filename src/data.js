//  Funcionalidad en data
import { inputSearchElem } from './main.js';
//  muestro la info
export const showInfo = (pokes) => {
  const inputValue = inputSearchElem.value;
  let info = '';
  pokes.forEach((poke) => {
    if (inputValue === poke.name) {
      info = `
              <p class="namePok"> ${poke.name}</p>
              <section id="imgCont">
                  <span class="circle ft">${poke.num}</span>
                  <img src="${poke.img}" alt="pokemonImage">
              </section>
              <section id="s2about">
                    <p id="about" class="infoCont"> <span>${poke.about}</span></p>
                    <div id="s2info" class="infoCont data">
                        <p>Type:<span>${poke.type}</span></p>
                        <p>Height:<span>${poke.size.height}</span></p>
                        <p>Weight:<span>${poke.size.weight}</span></p>
                    </div>
                    <div id="weakRes" class="infoCont data">
                        <p>Weakness:<span>${poke.weaknesses}</span></p>
                        <p>Resistance:<span>${poke.resistant}</span></p>
                    </div>
               </section>
              `;
    }
  });
  if (info) {
    return info;
  }
  return 'El nombre ingresado no es correcto';
};
export const showAllData = (data) => {
  return `
        <div class="s3">
          <div id="imgCont" class="item">
            <span class="circle">${data.num}</span>
            <img src="${data.img}" alt="pokemonImage">
            <span> ${data.name}</span>
          </div>
          <span class="lor">nel</span>
          <div class="lor">gel</div>
          </div>
        `;
};
// Ordena Alfabeticamente
export const orderBy = (poke, order) => {
  let arrSort = [];
  arrSort = poke.sort((a, b) => {
    const nameA = a.name;
    const nameB = b.name;
    const numA = a.num;
    const numB = b.num;
    if (order === 'asc') {
      if (nameA > nameB) {
        return 1;
      }
      else {
        if (nameA < nameB) {
          return -1;
        }
        {
          return 0;
        }
      }
      /* return (nameA > nameB) ? 1 : ((nameA < nameB) ? -1 : 0); */
    }
    if (order === 'desc') {
      if (nameA > nameB) {
        return -1;
      }
      else {
        if (nameA < nameB) {
          return 1;
        }
        {
          return 0;
        }
      }
    }
    //  numero descendente

    if (order === 'numUp') {
      if (numA > numB) {
        return -1;
      }
      else {
        if (numA < numB) {
        return 1;
        }
        {
         return 0;
        }
      }
    }
  });
  return arrSort;
};
// Filtra por tipo
export const typeFilter = (poke, tipo) => {
  // eslint-disable-next-line no-shadow
  const arrFilt = poke.filter(poke => poke.type.includes(tipo)); // retorna un boolean
  return arrFilt;
};
