import { returnElements } from './data.js';
// import data from './data/lol/lol.js';
import dataPokemon from './data/pokemon/pokemon.js';
// import data from './data/rickandmorty/rickandmorty.js';
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

for(let i = 0; i < dataPokemon.pokemon.length; i++){
    createPokemonDiv(dataPokemon.pokemon[i]);
}
console.log(dataPokemon.pokemon);


