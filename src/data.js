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

