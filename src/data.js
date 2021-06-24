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

export const sortList = (orderValue) => {

const sortNameAlphabetically = dataPokemon.pokemon.sort((a, b) => {
  if(a.name < b.name) return 1;
  if(a.name > b.name) return -1;

  return 0;
})

const sortAlphabeticallyInReverse= dataPokemon.pokemon.sort((a, b) => {

  if(a.name < b.name) return -1;
  if(a.name > b.name) return 1;

  return 0; 
})

const pokemonNumber = dataPokemon.pokemon.sort((a, b) => a.num - b.num)

const pokemonNumberReverse = dataPokemon.pokemon.sort((a, b) => b.num - a.num) 

}


