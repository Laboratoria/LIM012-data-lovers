//  Funcionalidad en data
//  muestro la info
export const showInfo = (pokes,input) => {
  const inputVal = input.value;
  let info = '';
  pokes.forEach((poke) => {
    if (inputVal === poke.name) {
      info = `
              <p class="namePok"> ${poke.name}</p>
              <section id=firstRow>
                <div id="imgCont">
                    <span class="circle ft">${poke.num}</span>
                    <img src="${poke.img}" alt="pokemonImage">
                </div>
                <div id="s2info" class="infoCont">
                          <p>Type:<span>${poke.type}</span></p>
                          <p>Weakness:<span>${poke.weaknesses}</span></p>
                          <p>Resistance:<br><span>${poke.resistant}</span></p>
                </div>
              </section>
                    <div id="hW" class="infoCont">
                      <p>Height:<span>${poke.size.height}</span></p>
                      <p>Weight:<span>${poke.size.weight}</span></p>  
                      <p>Base Attack:<span>${poke.stats['base-attack']}</span></p>
                    </div>
                    <p id="about" class="infoCont">${poke.about}</p>
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
        <div id="imgCont" class="item">
            <span class="circle ft">${data.num}</span>
            <img src="${data.img}" alt="pokemonImage">
            <span> ${data.name}</span>
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
