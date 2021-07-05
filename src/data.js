const sortAZ = (dataPokemon) => dataPokemon.sort((a, b) => {
  return a.name > b.name ? 1 : a.name < b.name ? -1 : 0
});
const sortZA = (dataPokemon) => dataPokemon.sort((a, b) => {
  return a.name > b.name ? -1 : a.name < b.name ? 1 : 0
});
const sortAscNum = (dataPokemon) => dataPokemon.sort((a, b) => {
  return a.num > b.num ? 1 : a.num < b.num ? -1 : 0
});
const sortDesNum = (dataPokemon) => dataPokemon.sort((a, b) => {
  return a.num > b.num ? -1 : a.num < b.num ? 1 : 0
});






export {sortAZ, sortZA, sortAscNum, sortDesNum};
