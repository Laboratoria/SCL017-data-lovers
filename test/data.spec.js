//----------------------------------------------------------------------
// Importamos el objeto pokemons, que contiene los metodos sortData y 
// filterData 

import pokemons from '../src/data.js';

// const test = [
//   { name: "bulbasaur", num: "001", generation: { name: "kanto" }, type: ["grass", "poison"], resistant: ["water", "electric", "grass", "fighting", "fairy"], weaknesses: ["fire", "ice", "flying", "psychic"] },
//   { name: "charmander", num: "004", generation: { name: "kanto" }, type: "fire", resistant: ["fire", "grass", "ice", "bug", "steel"], weaknesses: ["water", "ground", "rock"] },
//   { name: "sunkern", num: "191", generation: { name: "johto" }, type: "grass", resistant: ["water", "electric", "grass", "ground"], weaknesses: ["fire", "ice", "poison", "flying"] },
//   { name: "yamna", num: "193", generation: { name: "johto" }, type: ["bug", "flying"], resistant: ["grass", "figthting", "ground", "bug"], weaknesses: ["fire", "electric", "ice", "flying"] }];

describe('pokemons', () => {
  it('should be an object', () => {
    expect(typeof pokemons).toBe('object');
  });
});

describe('pokemons.sortData', () => {
  it('should be a function', () => {
    expect(typeof pokemons.sortData).toBe('function');
  });
});

describe('pokemons.filterData', () => {
  it('should be a function', () => {
    expect(typeof pokemons.filterData).toBe('function');
  });
});

describe('pokemons.findData', () => {
  it('should be a function', () => {
    expect(typeof pokemons.findData).toBe('function');
  });
});

const ArrayNameTest = ["bulbasaur", "charmander", "sunkern", "yanma"];

describe('pokemons.findData', () => {
  it('should return "bulbasaur,charmander,yanma" when nombrePoke = a', () => {
    expect(pokemons.findData(ArrayNameTest, "a"));
  });
});
