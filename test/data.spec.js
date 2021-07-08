import { sortAZ, sortZA, sortAscNum, sortDesNum, filterfunction} from '../src/data.js';
import pokemon from "../src/data/pokemon/pokemon.js";


describe('sortAZ', () => {
  it('is a function', () => {
    expect(typeof sortAZ).toBe('function');
  });

  it('returns 1', () => {
    expect(sortAZ(pokemon.pokemon[24], pokemon.pokemon[1])).toBe(1);
  });

  it('returns -1', () => {
    expect(sortAZ(pokemon.pokemon[1], pokemon.pokemon[24])).toBe(-1);
  });
});

describe('sortZA', () => {
  it('is a function', () => {
    expect(typeof sortZA).toBe('function');
  });

  it('returns 1', () => {
    expect(sortZA(pokemon.pokemon[1], pokemon.pokemon[24])).toBe(1);
  });
  
  it('returns -1', () => {
    expect(sortZA(pokemon.pokemon[24], pokemon.pokemon[1])).toBe(-1);
  });
});

describe('sortAscNum', () => {
  it('is a function', () => {
    expect(typeof sortAscNum).toBe('function');
  });

  it('returns 1', () => {
    expect(sortAscNum(pokemon.pokemon[24], pokemon.pokemon[1])).toBe(1);
  });

  it('returns -1', () => {
    expect(sortAscNum(pokemon.pokemon[1], pokemon.pokemon[24])).toBe(-1);
  });
});

describe('sortDesNum', () => {
  it('is a function', () => {
    expect(typeof sortDesNum).toBe('function');
  });

  it('returns 1', () => {
    expect(sortDesNum(pokemon.pokemon[1], pokemon.pokemon[24])).toBe(1);
  });
  
  it('returns -1', () => {
    expect(sortDesNum(pokemon.pokemon[24], pokemon.pokemon[1])).toBe(-1);
  });
});

describe('filterfunction', () => {
  it('is a function', () => {
    expect(typeof filterfunction).toBe('function');
  });

  it('returns true', () => {
    expect(filterfunction(pokemon.pokemon[24], 'electric')).toBe(true);
  });

  it('returns true', () => {
    expect(filterfunction(pokemon.pokemon[0], 'grass')).toBe(true);
  });

  it('returns false', () => {
    expect(filterfunction(pokemon.pokemon[0], 'water')).toBe(false);
  });
});