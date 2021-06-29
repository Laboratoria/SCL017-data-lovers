import { filterTypePokemon, sortData , calculator } from './data.js';
// import data from './data/lol/lol.js';
import dataPokemon from './data/pokemon/pokemon.js';
// import data from './data/rickandmorty/rickandmorty.js';

const start =  document.getElementById('start');

const togo = () => {
    document.getElementById('home').className = " hide container " 
    document.getElementById('second-window').className = "second-window "
    document.getElementById('logo').className = "hide"
}

start.addEventListener("click", togo, false);

let pokemonList = document.getElementById('pokemonList');


let createPokemonDiv = function(dataPokemon){
    let newDiv = document.createElement('div');
    let newBtnId = document.createElement('section');
    let newImg = document.createElement('img');
    let newBtnType = document.createElement('section');
    let newBtnPower = document.createElement('section');
    let newName = document.createElement('section');
    newDiv.classList = ('section-pokemon')
    newBtnId.innerText = dataPokemon.num;
    newBtnId.classList = ('pokemon-identifier');
    newImg.src = dataPokemon.img;
    newImg.classList = ('img-pokemon')
    newBtnType.innerText = dataPokemon.type;
    newBtnType.classList = ('type-pokemon')
    newBtnPower.innerText = dataPokemon.type;
    newBtnPower.classList = ('attack')
    newName.innerText = dataPokemon.name;
    newName.classList = ('namePokemon');
    newDiv.appendChild(newBtnId);
    newDiv.appendChild(newImg);
    newDiv.appendChild(newBtnType);
    newDiv.appendChild(newBtnPower);
    newDiv.appendChild(newName);
    pokemonList.appendChild(newDiv);
    


}
const clearDiv = () => {
    const selector = document.querySelectorAll('.section-pokemon');
    selector.forEach(element => {
        element.remove()
      });
    
}


const selectElementPlants = document.querySelector('.select-dues');

// se crea esta función para mostrar los pokemos show es "mostrar" , y decimos que :
// showPokemons , recibe un parametro (pokemonsList) que ese parametro se esta mandando a recorrer con el forEach.
const showPokemons = (pokemonList) => { 
    //clearDiv es para limpiar la lista completa de los pokemons , y por eso se le agregar el createPokemonDiv para que los vaya creando uno a uno.
    clearDiv() 
    // a pokemonList, se le hace el recorrido con un forEach donde se crea un nuevo div de cada pokemon.
    pokemonList.forEach(pokemon => createPokemonDiv(pokemon)) ;
     
}

selectElementPlants.addEventListener('change', (event) => { 
    
const pokemons = filterTypePokemon(event.target.value);
  //returnElements(event.target.value);
  console.log(pokemons);
  
  showPokemons(pokemons) 

 const percentage = calculator(pokemons.length);
  console.log(percentage);
 
}
);
// aqui llamamos la función y le decimos que nos muestre los pokemon de la dataPokemon.Pokemon 
showPokemons(dataPokemon.pokemon) 
 
//Creamos esta función para ordenar los elementos , que estamos llamando del html de id order
 const orderingElements = document.getElementById('order') 

// permite mostrar los pokemon ordenados en la pantalla, y le pasamos el parametro del event que es el cambio 'change' que el usuario quiere ver.
const showPokemonSorted = (event) => {

// en esta función le decimos a sortData que nos ordene, en este caso el event es cuando cada vez que hago click  me cambie a lo que quiero ordenar
// el target es el objetivo que quiero que me traiga desde el html con su value que es el orden que quiere ver el usuario . ejemplo "ordenarAZ"
const pokemons = sortData(event.target.value);  

console.log(pokemons)
showPokemons(pokemons)
}




 
orderingElements.addEventListener('change' , showPokemonSorted , false)


 


