

// Bloque a probar describe
// Prueba unitaria it
// asercion expect -> lo que tengo con lo que espero que sea

import {
  sortedByNameA,
  sortedByNameD,
  FilterTemporada,
  filterMedalla,
  searchInput,
  genderFiler,
  removeDuplicates,
  transformaBandera,
  edad,
} from '../src/data';

const inputTestUNo = [
  {
    name: 'Matteo Bisiani',
  },
  {
    name: 'Nataliya Andrivna Burdeina',
  },
  {
    name: 'Ilario Di Bu',
  },
  {
    name: 'Matteo Bisiani',
  },
];


// filter sort
describe('prueba para la funcion de orden ascendente', () => {
  it('segunda prueba unitaria: probar si sortByName ordena de a-z para los 3 siguinte nombres', () => {
    const ouput = [
      {
        name: 'Ilario Di Bu',
      },
      {
        name: 'Matteo Bisiani',
      },
      {
        name: 'Matteo Bisiani',
      },
      {
        name: 'Nataliya Andrivna Burdeina',
      },
    ];
    expect(sortedByNameA(inputTestUNo)).toEqual(ouput);
  });
});
// sort descendente
describe('prueba para la funcion de orden descendente', () => {
  it('primera prueba unitaria: probar si sortByName ordena de z-a para los 3 siguinte nombres', () => {
    const ouput = [
      {
        name: 'Nataliya Andrivna Burdeina',
      },
      {
        name: 'Matteo Bisiani',
      },
      {
        name: 'Matteo Bisiani',
      },
      {
        name: 'Ilario Di Bu',
      },
    ];
    expect(sortedByNameD(inputTestUNo)).toEqual(ouput);
  });
});

// filtro temporada
describe('prueba para la funcion de filtro por temporada', () => {
  it('primera prueba unitaria: probar si filterTemporada devuelve un array con la temporada que elija el usuario', () => {
    const input = [
      {
        name: 'Matteo Bisiani',
        disciplinas: [{
          temporada: 'Summer',
          age: 2000,
        },
        {
          temporada: 'Summer',
          age: 2015,
        }],
      },
      {
        name: 'Nataliya Andrivna Burdeina',
      },
      {
        name: 'Ilario Di Bu',
        disciplinas: [{
          temporada: 'Summer',
        }],
      },
    ];
    const ouput2 = [
      {
        name: 'Matteo Bisiani',
        disciplinas: [{
          temporada: 'Summer',
          age: 2000,
        },
        {
          temporada: 'Summer',
          age: 2015,
        }],
      },
      {
        name: 'Matteo Bisiani',
        disciplinas: [{
          temporada: 'Summer',
          age: 2000,
        },
        {
          temporada: 'Summer',
          age: 2015,
        }],
      },

      {
        name: 'Ilario Di Bu',
        disciplinas: [{
          temporada: 'Summer',
        }],
      },
    ];
    expect(FilterTemporada(input, 'Summer')).toEqual(ouput2);
  });
});

// filtro medallas
describe('prueba para la funcion de filtro por medalla', () => {
  it('primera prueba unitaria: probar si filterMedalla devuelve un array con los atletas que tengan la medalla que indica el usuario', () => {
    const input = [
      {
        name: 'Matteo Bisiani',
        disciplinas: [{
          temporada: 'Summer',
          age: 2000,
          medalla: 'Gold',
        },
        {
          temporada: 'Summer',
          age: 2015,
          medalla: 'Gold',
        }],
      },
      {
        name: 'Nataliya Andrivna Burdeina',
      },
      {
        name: 'Ilario Di Bu',
        disciplinas: [{
          temporada: 'Summer',
          medalla: 'Silver',
        }],
      },
    ];
    const ouput2 = [
      {
        name: 'Matteo Bisiani',
        disciplinas: [{
          temporada: 'Summer',
          age: 2000,
          medalla: 'Gold',
        },
        {
          temporada: 'Summer',
          age: 2015,
          medalla: 'Gold',
        }],
      },
      {
        name: 'Matteo Bisiani',
        disciplinas: [{
          temporada: 'Summer',
          age: 2000,
          medalla: 'Gold',
        },
        {
          temporada: 'Summer',
          age: 2015,
          medalla: 'Gold',
        }],
      },
    ];
    expect(filterMedalla(input, 'Gold')).toEqual(ouput2);
  });
});

// search for name
describe('prueba para la funcion searchInput', () => {
  it('prueba unitaria, debe devolver el nombre del atleta que coincida con la letra que se ingresa', () => {
    const input = [
      {
        name: 'Matteo Bisiani',
      },
      {
        name: 'Nataliya Andrivna Burdeina',
      },
    ];
    const ouput = [
      {
        name: 'Matteo Bisiani',
      },
    ];
    expect(searchInput(input, 'ma')).toEqual(ouput);
  });
});

// filtro por genero
describe('prueba para la funcion genderFiler', () => {
  it('genderFiler debe retornar un array con el genero segun el valor que ingrese', () => {
    const input = [
      {
        name: 'Matteo Bisiani',
        gender: 'M',
      },
      {
        name: 'Nataliya Andrivna Burdeina',
        gender: 'F',
      },
      {
        name: 'Ilario Di Bu',
        gender: 'M',
      },
    ];
    const ouput = [
      {
        name: 'Nataliya Andrivna Burdeina',
        gender: 'F',
      },
    ];
    expect(genderFiler(input, 'F')).toEqual(ouput);
  });
});

// removeDuplicates
describe('removeDuplivates', () => {
  it('debe eliminar duplicados', () => {
    const input = ['Matteo Bisiani', 'Nataliya Andrivna Burdeina', 'Matteo Bisiani'];
    const ouput = ['Matteo Bisiani', 'Nataliya Andrivna Burdeina'];
    expect(removeDuplicates(input)).toEqual(ouput);
  });
});

// transformaBandera
describe('transformaBandera', () => {
  it('debe devolver solo las dos primeras uniciales de un string', () => {
    const input = 'USA';
    const ouput = 'US';
    expect(transformaBandera(input)).toBe(ouput);
  });
});

// edad
describe('edad', () => {
  it('debe devolver la edad segun el año de nacimiento', () => {
    const input = 1976;
    const ouput = 44;
    expect(edad(input)).toBe(ouput);
  });
});

// describe('anotherExample', () => {
//   it('is a function', () => {
//     expect(typeof anotherExample).toBe('function');
//   });

//   it('returns `anotherExample`', () => {
//     expect(anotherExample()).toBe('OMG');
//   });
// });
