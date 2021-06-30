//----------------------------------------------------------------------
// Importamos el objeto pokemons, que contiene los metodos sortData, filterData y findData

import pokemons from '../src/data.js';


describe('pokemons', () => {
  it('should be an object', () => {
    expect(typeof pokemons).toBe('object');
  });
});

// Test con funcion findData
const ArrayNameTestFind = ["bulbasaur", "charmander", "sunkern", "yanma"];
describe('pokemons.findData', () => {
  it('should be a function', () => {
    expect(typeof pokemons.findData).toBe('function');
  });
  it('should return "bulbasaur,charmander,yanma" when nombrePoke = a', () => {
    expect(pokemons.findData(ArrayNameTestFind, "a")).toStrictEqual(["bulbasaur", "charmander", "yanma"]);
  });  it('should return "charmander" when nombrePoke = char', () => {
    expect(pokemons.findData(ArrayNameTestFind, "char")).toStrictEqual(["charmander"]);
  });
});

// Test con funcion sortData
const testSort = {pokemon: [
  { name: "bulbasaur", num: "001", generation: { name: "kanto" }, type: ["grass", "poison"], resistant: ["water", "electric", "grass", "fighting", "fairy"], weaknesses: ["fire", "ice", "flying", "psychic"] },
  { name: "sunkern", num: "191", generation: { name: "johto" }, type: "grass", resistant: ["water", "electric", "grass", "ground"], weaknesses: ["fire", "ice", "poison", "flying"] },
  { name: "charmander", num: "004", generation: { name: "kanto" }, type: "fire", resistant: ["fire", "grass", "ice", "bug", "steel"], weaknesses: ["water", "ground", "rock"] },
  { name: "yamna", num: "193", generation: { name: "johto" }, type: ["bug", "flying"], resistant: ["grass", "figthting", "ground", "bug"], weaknesses: ["fire", "electric", "ice", "flying"] }]
};

const testOrderNameDownward = [
  { name: "yamna", num: "193", generation: { name: "johto" }, type: ["bug", "flying"], resistant: ["grass", "figthting", "ground", "bug"], weaknesses: ["fire", "electric", "ice", "flying"] },
  { name: "sunkern", num: "191", generation: { name: "johto" }, type: "grass", resistant: ["water", "electric", "grass", "ground"], weaknesses: ["fire", "ice", "poison", "flying"] },
  { name: "charmander", num: "004", generation: { name: "kanto" }, type: "fire", resistant: ["fire", "grass", "ice", "bug", "steel"], weaknesses: ["water", "ground", "rock"] },
  { name: "bulbasaur", num: "001", generation: { name: "kanto" }, type: ["grass", "poison"], resistant: ["water", "electric", "grass", "fighting", "fairy"], weaknesses: ["fire", "ice", "flying", "psychic"] } 
];

const testOrderNumUpward =[
  { name: "bulbasaur", num: "001", generation: { name: "kanto" }, type: ["grass", "poison"], resistant: ["water", "electric", "grass", "fighting", "fairy"], weaknesses: ["fire", "ice", "flying", "psychic"] },
  { name: "charmander", num: "004", generation: { name: "kanto" }, type: "fire", resistant: ["fire", "grass", "ice", "bug", "steel"], weaknesses: ["water", "ground", "rock"] },
  { name: "sunkern", num: "191", generation: { name: "johto" }, type: "grass", resistant: ["water", "electric", "grass", "ground"], weaknesses: ["fire", "ice", "poison", "flying"] },
  { name: "yamna", num: "193", generation: { name: "johto" }, type: ["bug", "flying"], resistant: ["grass", "figthting", "ground", "bug"], weaknesses: ["fire", "electric", "ice", "flying"] }
];

describe('pokemons.sortData', () => {
  it('should be a function', () => {
    expect(typeof pokemons.sortData).toBe('function');
  });
  it('should be const test OrderNameDownward', () => {
    expect(pokemons.sortData(testSort.pokemon,"name","downwardFilter")).toStrictEqual(testOrderNameDownward);
  });
  it('should be const test OrderNumUpward', () => {
    expect(pokemons.sortData(testSort.pokemon,"num","upwardFilter")).toStrictEqual(testOrderNumUpward);
  });
});


// Test con funcion filterData
const testFilter =  [
  { name: "bulbasaur", num: "001", generation: { name: "kanto" }, type: ["grass", "poison"], resistant: ["water", "electric", "grass", "fighting", "fairy"], weaknesses: ["fire", "ice", "flying", "psychic"] },
  { name: "sunkern", num: "191", generation: { name: "johto" }, type: ["grass"], resistant: ["water", "electric", "grass", "ground"], weaknesses: ["fire", "ice", "poison", "flying"] },
  { name: "charmander", num: "004", generation: { name: "kanto" }, type: ["fire"], resistant: ["fire", "grass", "ice", "bug", "steel"], weaknesses: ["water", "ground", "rock"] },
  { name: "yamna", num: "193", generation: { name: "johto" }, type: ["bug", "flying"], resistant: ["grass", "figthting", "ground", "bug"], weaknesses: ["fire", "electric", "ice", "flying"] }];

const conditionType =  ["type","fire"];
const pokeTestFilterType = [{ name: "charmander", num: "004", generation: { name: "kanto" }, type: ["fire"], resistant: ["fire", "grass", "ice", "bug", "steel"], weaknesses: ["water", "ground", "rock"] },
];

describe('pokemons.filterData', () => {
  it('should be a function', () => {
    expect(typeof pokemons.filterData).toBe('function');
  });
});

describe('pokemons.filterData', () => {
  it('should be charmander for type fire', () => {
    expect(pokemons.filterData(testFilter,conditionType)).toStrictEqual(pokeTestFilterType);
  });
});