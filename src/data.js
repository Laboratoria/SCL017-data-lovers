import dataPokemon from './data/pokemon/pokemon.js';

export let returnElements = function(nombre){
    
}

export let filterTypePokemon = function(typeElement){
  const elements = dataPokemon.pokemon.filter((pokemon) =>  {
      return pokemon.type.indexOf(typeElement) != -1;
  });  
  
  console.log(typeElement);
  return elements;
   
}


 export const selectElementPlants = document.querySelector('.select-dues');

selectElementPlants.addEventListener('change', (event) => {
  let elements = filterTypePokemon(event.target.value);
  returnElements(event.target.value);
  console.log(elements);
  return elements;
  

  
}
);


