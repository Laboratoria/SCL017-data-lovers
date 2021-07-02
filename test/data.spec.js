import { filterTypePokemon, calculator, sortNameAlphabetically, sortAlphabeticallyInReverse, pokemonNumber, pokemonNumberReverse, sortData, filterIdPokemon } from '../src/data.js';
import dataPokemon from '../src/data/pokemon/pokemon.js';

describe('test filterTypePokemon', () => {
  it('is return object and length 0', () => {
    let saveArray = filterTypePokemon();
    expect(typeof saveArray).toBe('object')
    expect(saveArray.length).toBe(0)
  });
  it('is return type', () => {
    let returnElements = filterTypePokemon("grass");
    expect(returnElements.length > 1).toBe(true)
  });

  it('is return all', () => {
    let returnElements = filterTypePokemon("all");
    expect(returnElements.length > 1).toBe(true)
  });
});

describe('test sortNameAlphabetically', () => {
  it('is return object and length 0', () => {

    const result = sortNameAlphabetically([])

    expect(typeof result).toBe('object')
    expect(result.length).toBe(0)



  });
  it('is sort name pokemon by A-Z', () => {
    const result = sortNameAlphabetically(dataPokemon.pokemon)

    expect(typeof result).toBe('object')
    expect(result.length).toBe(251)
  });
});

describe('test sortAlphabeticallyInReverse', () => {
  it('is return object and length 0', () => {

    const result = sortAlphabeticallyInReverse([])

    expect(typeof result).toBe('object')
    expect(result.length).toBe(0)

  });
  it('is sort name pokemon by Z-A', () => {
    const result = sortAlphabeticallyInReverse(dataPokemon.pokemon)

    expect(typeof result).toBe('object')
    expect(result.length).toBe(251)
  });
});

describe('test pokemonNumber', () => {
  it('is return object and length 0', () => {

    const result = pokemonNumber([])

    expect(typeof result).toBe('object')
    expect(result.length).toBe(0)

  });
  it('is sort number id 1 - N', () => {
    const result = pokemonNumber(dataPokemon.pokemon)

    expect(typeof result).toBe('object')
    expect(result.length).toBe(251)
  });
});


describe('test pokemonNumberReverse', () => {
  it('is return object and length 0', () => {

    const result = pokemonNumberReverse([])

    expect(typeof result).toBe('object')
    expect(result.length).toBe(0)

  });
  it('is sort number id N - 1', () => {
    const result = pokemonNumberReverse(dataPokemon.pokemon)

    expect(typeof result).toBe('object')
    expect(result.length).toBe(251)
  });
});

describe('test sortData', () => {
  it('is return object and length 0', () => {

    const result = sortData("ordenarAZ", [])

    expect(typeof result).toBe('object')
    expect(result.length).toBe(0)

  });
  it('is sort ordenarAZ', () => {
    const result = sortData("ordenarAZ", dataPokemon.pokemon)

    expect(typeof result).toBe('object')
    expect(result.length).toBe(251)
  });

  it('is sort ordenarZA', () => {
    const result = sortData("ordenarZA", dataPokemon.pokemon)

    expect(typeof result).toBe('object')
    expect(result.length).toBe(251)
  });

  it('is sort NumeroDeIdinferior', () => {
    const result = sortData("NumeroDeIdinferior", dataPokemon.pokemon)

    expect(typeof result).toBe('object')
    expect(result.length).toBe(251)
  });

  it('is sort NumeroDeIdsuperior', () => {
    const result = sortData("NumeroDeIdsuperior", dataPokemon.pokemon)

    expect(typeof result).toBe('object')
    expect(result.length).toBe(251)
  });


});

describe('test calculator', () => {
  it('is a float expected', () => {
    const result = calculator(251)
    expect(typeof result).toBe("string");
  });

  it('is a float expected', () => {
    const result = calculator(251)
    expect(result).toBe("100.00");
  });

  it('is a float expected', () => {
    const result = calculator(0)
    expect(result).toBe("0.00");
  });
});

describe('test filterIdPokemon', () => {
  it('is return object and length 0', () => {

    const result = filterIdPokemon(0)

    expect(typeof result).toBe('object')
    expect(result.length).toBe(0)

  });
  it('is pokemon', () => {
    const result = filterIdPokemon("001")

    expect(typeof result).toBe('object')
    expect(result.length).toBe(1)
  });
});



