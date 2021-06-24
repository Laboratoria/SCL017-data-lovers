import { filterTypePokemon } from './data.js';
// import data from './data/lol/lol.js';
import dataPokemon from './data/pokemon/pokemon.js';
// import data from './data/rickandmorty/rickandmorty.js';

let pokemons = dataPokemon.pokemon
console.log(dataPokemon);

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
console.log(dataPokemon.pokemon);

const selectElementPlants = document.querySelector('.select-dues');

selectElementPlants.addEventListener('change', (event) => {
    clearDiv()
pokemons = filterTypePokemon(event.target.value);
  //returnElements(event.target.value);
  console.log(pokemons);
  
  for(let i = 0; i < pokemons.length; i++){
    createPokemonDiv(pokemons[i]);
}
}
);

for(let i = 0; i < pokemons.length; i++){
    createPokemonDiv(pokemons[i]);
}

 const orderingElements = document.getElementById('order') 

 const getOrder= (event) => {

 sortList() 


 orderingElements.addEventListener('change' ,)
}
 

