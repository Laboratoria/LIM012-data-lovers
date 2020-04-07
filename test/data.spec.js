import {dataFiltradoRol,dataFiltradoTop,dataFiltradoOrden} from '../src/metodos2.js';
  

describe('Testear Objeto Funcion', () => {
  it('funcion dataFiltradoRol', () => {
    expect(typeof dataFiltradoRol).toBe('function');
  });

  it('funcion dataFiltradoTop', () => {
    expect(typeof dataFiltradoTop).toBe('function');
  });

  it('funcion dataFiltradoOrden', () => {
    expect(typeof dataFiltradoOrden).toBe('function');
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
