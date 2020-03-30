//  Funcionalidad en data
//  muestro la info
<<<<<<< HEAD
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
=======
export const showAllData = poke => `
              <p class="namePok"> ${poke.name}</p>
              <section id=firstRow>
                <div class="imgCont">
                    <span class="circle">${poke.num}</span>
>>>>>>> ad6771bc932222bf7784eebde4133cc835ab9b3a
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
<<<<<<< HEAD
                      <p>Weight:<span>${poke.size.weight}</span></p>  
=======
                      <p>Weight:<span>${poke.size.weight}</span></p>
>>>>>>> ad6771bc932222bf7784eebde4133cc835ab9b3a
                      <p>Base Attack:<span>${poke.stats['base-attack']}</span></p>
                    </div>
                    <p id="about" class="infoCont">${poke.about}</p>
               </section>
              `;
<<<<<<< HEAD
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
=======
// Muestra solo un poco
export const showInfo = data => `
        <div class="imgCont">
            <span class="circle">${data.num}</span>
            <img src="${data.img}" alt="pokemonImage">
            <span> ${data.name}</span>
            <p id="${data.num}" class="more">More</p>
        </div>
        `;
>>>>>>> ad6771bc932222bf7784eebde4133cc835ab9b3a
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
<<<<<<< HEAD
      else {
        if (nameA < nameB) {
          return -1;
        }
        {
          return 0;
        }
=======

      if (nameA < nameB) {
        return -1;
      }
      {
        return 0;
>>>>>>> ad6771bc932222bf7784eebde4133cc835ab9b3a
      }
      /* return (nameA > nameB) ? 1 : ((nameA < nameB) ? -1 : 0); */
    }
    if (order === 'desc') {
      if (nameA > nameB) {
        return -1;
      }
<<<<<<< HEAD
      else {
        if (nameA < nameB) {
          return 1;
        }
        {
          return 0;
        }
=======

      if (nameA < nameB) {
        return 1;
      }
      {
        return 0;
>>>>>>> ad6771bc932222bf7784eebde4133cc835ab9b3a
      }
    }
    //  numero descendente

    if (order === 'numUp') {
      if (numA > numB) {
        return -1;
      }
<<<<<<< HEAD
      else {
        if (numA < numB) {
        return 1;
        }
        {
         return 0;
        }
=======

      if (numA < numB) {
        return 1;
      }
      {
        return 0;
>>>>>>> ad6771bc932222bf7784eebde4133cc835ab9b3a
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
<<<<<<< HEAD
};
=======
<<<<<<< HEAD
};
// Buscador
export const searcher = (data, value) => {
  let info = '';
  data.forEach((poke) => {
    if (value === poke.name || value === poke.num) {
      info = showAllData(poke);
    }
  });
  if (info) {
    return info;
  }
  return 'El nombre ingresado no es correcto';
};
=======
};
>>>>>>> 10d78910f7b3c0856157af67a2cc55f683689a00
>>>>>>> ad6771bc932222bf7784eebde4133cc835ab9b3a
