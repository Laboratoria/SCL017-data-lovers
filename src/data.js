import dataPokemon from './data/pokemon/pokemon.js';

export let filterTypePokemon = function(typeElement){
  let elements = dataPokemon.pokemon.filter((pokemon) =>  {
      return pokemon.type.indexOf(typeElement) != -1;
  });
  
  if (typeElement === "all") {
elements = dataPokemon.pokemon 
  } 
  
  
  return elements; 
} 

// creando función para ordenar alfabeticamente de forma ascendente A-Z
const sortNameAlphabetically = (dataList) => {

  //creamos otra constante para guardar el resultado de la función
  const result = dataList.sort((a, b) => {
  if(a.name < b.name) return -1;
  if(a.name > b.name) return 1;

  else return 0;
});
return result; 

}

 // creando función para ordenar alfabeticamente de forma descendente Z-A
const sortAlphabeticallyInReverse = (dataList) => {

//creamos otra constante para guardar el resultado de la función
 const result = dataList.sort((a, b) => {
  if(a.name < b.name) return 1;
  if(a.name > b.name) return -1;

  else return 0; 
  
});
return result; 
}

// creando función para Ordenar por numero de ID numero inferior 
const pokemonNumber = (dataList) => {

  //creamos otra constante para guardar el resultado de la función
const result = dataList.sort((a, b) => a.num - b.num);

return result;
}

// creando función para ordenar por numero de ID numero superior
const pokemonNumberReverse = (dataList) => {

//creamos otra constante para guardar el resultado de la función
const result = dataList.sort((a, b) => b.num - a.num);

return result;
}

// sortData ordenar la data pokemon 
export const sortData = (orderValue, pokemons ) => {
 
// Creamos estos if (para decir que si orderValue)  que es el parametro que se le esta dando a "sortData" es === a "ordenarAZ"
// que son mis value que estan en el html , eso me va a retornar el sortNameAlphabetically que son las funicones que se crearon anteriormente.
// y asi con cada uno de los if que siguen 

   if (orderValue === "ordenarAZ") {
  return sortNameAlphabetically(pokemons)
    } 


   else if (orderValue === "ordenarZA") { 
    return sortAlphabeticallyInReverse(pokemons)
   }


   else if (orderValue === "NumeroDeIdinferior") {
   return pokemonNumber(pokemons)
   } 
   
   else if (orderValue === "NumeroDeIdsuperior") {
   return pokemonNumberReverse(pokemons)
   }
   

}

export const calculator = (numberOfTypesOfPokemon) => {

const totalPokemons = dataPokemon.pokemon.length 

const base = 100;

const ruleOfThree = base * numberOfTypesOfPokemon / totalPokemons; 

return ruleOfThree.toFixed(2);
} 
export let filterIdPokemon = function(idElement){
  let elements = dataPokemon.pokemon.filter((pokemonData) => {
   return idElement === pokemonData.num;
  });
  return elements;
}
