import dataPokemon from './data/pokemon/pokemon.js';

export let returnElements = function(nombre){
    
}

export let filterPlants = function(typeElement){
  const elements = dataPokemon.pokemon.filter((pokemon) =>  {
      return pokemon.type.indexOf(typeElement) != -1;
  });  
  console.log(elements);
  console.log(typeElement); 
}


 export const selectElementPlants = document.querySelector('.select-dues');

selectElementPlants.addEventListener('change', (event) => {
  filterPlants(event.target.value);

  returnElements(event.target.value);
  
}
);


