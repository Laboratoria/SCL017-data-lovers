import { example, anotherExample, prueba, filterTypePokemon, sortData,calculator } from '../src/data.js';

describe('test filterTypePokemon', () =>{
  it ('is return object and length 0', () =>{
    let saveArray = filterTypePokemon();
    expect(typeof saveArray).toBe('object')
    expect(saveArray.length).toBe(0)
  });
  it ('is return type', () =>{
    let returnElements = filterTypePokemon("grass");
    expect(returnElements.length > 1).toBe(true)
  });

  it ('is return all', () =>{
    let returnElements = filterTypePokemon("all");
    expect(returnElements.length > 1).toBe(true)
  });
});

describe('test sortNameAlphabetically', () =>{
  it ('is a function as expected', () => {
    expect(typeof sortData).toBe('function');
  it ('is sort by A-Z', () => {

    expect(sortData).toBe('true')

  }); 

  });

});

describe('test calculator',() =>{
  it ('ia a functionas expected', () => {
    expect(typeof calculator).toBe('function');
  });
});





describe('pruebas de funcion', () =>{
  it ('is a function as expected',() => {
    expect(typeof prueba).toBe('function');

  });
  it ('is return holis', () =>{
    expect(prueba()).toBe('Holis')
  });
});


describe('example', () => {
  it('is a function', () => {
    expect(typeof example).toBe('function');
  });

  it('returns `example`', () => {
    expect(example()).toBe('example');
  });
});


describe('anotherExample', () => {
  it('is a function', () => {
    expect(typeof anotherExample).toBe('function');
  });

  it('returns `anotherExample`', () => {
    expect(anotherExample()).toBe('OMG');
  });
});
