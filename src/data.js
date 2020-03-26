// estas funciones son de ejemplo

// export const example = () => 'example';
// export const anotherExample = () => 'OMG';
export const ascendente = (listaTodos) => {
  const ordenAZ = listaTodos.sort((campeon1, campeon2) => {
    if (campeon1.name < campeon2.name) return -1;
    if (campeon1.name > campeon2.name) return 1;
    return 0;
  });
  return ordenAZ;
};


export const descendente = (listaTodos) => {
  const ordenZA = listaTodos.sort((campeon1, campeon2) => {
    if (campeon1.name > campeon2.name) return -1;
    if (campeon1.name < campeon2.name) return 1;
    return 0;
  });
  return ordenZA;
};

// export const anotherExample = () => 'OMG';
