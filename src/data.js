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


<<<<<<< HEAD
export {sortAZ};

const sortAZ = (dataPokemon, value) => {
    if (value === 'A-Z') {
      dataPokemon.sort((a, b) => a.name.localeCompare(b.name));
    } else {
      dataPokemon.sort((a, b) => b.name.localeCompare(a.name));
    }
  };


=======
const filterfunction = (pokemon, selectedType) =>
  pokemon.type.includes(selectedType);


export {sortAZ, sortZA, sortAscNum, sortDesNum, filterfunction};
>>>>>>> d53960ce59c659d9f259a7c8a09fa9dbed5dc9ca

