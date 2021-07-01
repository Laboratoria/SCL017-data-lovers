import { example, anotherExample } from '../src/data.js';

/**
 * - DESCRIBE: Sirve para blablabla
 * - IT: Sirve para blablabla
 * - EXPECT: Sirve para blablabla
 * 
 */

describe('results', () => {
  it('deberia tener un for', () => {
    expect( results.toBe('function');
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
