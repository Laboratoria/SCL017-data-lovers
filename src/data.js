const sortAZ = (a, b) => {
  return a.name > b.name ? 1 : a.name < b.name ? -1 : 0
};
const sortZA = (a, b) => {
  return a.name > b.name ? -1 : a.name < b.name ? 1 : 0
};
const sortAscNum = (a, b) => {
  return a.num > b.num ? 1 : a.num < b.num ? -1 : 0
};
const sortDesNum = (a, b) => {
  return a.num > b.num ? -1 : a.num < b.num ? 1 : 0
};


const filterfunction = (pokemon, selectedType) =>
  pokemon.type.includes(selectedType);


export {sortAZ, sortZA, sortAscNum, sortDesNum, filterfunction};

