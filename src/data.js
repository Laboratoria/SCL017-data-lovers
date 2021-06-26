import dataPokemon from './data/pokemon/pokemon.js';

export let returnElements = function(nombre){
    
}

export let filterTypePokemon = function(typeElement){
  let elements = dataPokemon.pokemon.filter((pokemon) =>  {
      return pokemon.type.indexOf(typeElement) != -1;
  });
  
  if (typeElement === "all") {
elements = dataPokemon.pokemon 
  } 
  
  console.log(typeElement);
  return elements;
   
} 
// ordenar la data pokemon 
export const sortData = (orderValue) => {

  // Ordenando alfabeticamente de forma ascendente A-Z
const sortNameAlphabetically = dataPokemon.pokemon.sort((a, b) => {
  if(a.name < b.name) return 1;
  if(a.name > b.name) return -1;

  else return 0;
})


// Ordenando alfabeticamente de forma descendente Z-A
const sortAlphabeticallyInReverse= dataPokemon.pokemon.sort((b, a) => {

  if(a.name < b.name) return -1;
  if(a.name > b.name) return 1;

  else return 0; 
})

// Ordenando por numero de ID numero inferior 
const pokemonNumber = dataPokemon.pokemon.sort((a, b) => a.num - b.num)



// Ordenando por numero de ID numero superior
const pokemonNumberReverse = dataPokemon.pokemon.sort((a, b) => b.num - a.num) 
 
if ( orderValue === "ordenarAZ") {
  return sortAlphabeticallyInReverse
    } 
    console.log(orderValue)
}
