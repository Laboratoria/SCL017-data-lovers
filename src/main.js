import { example } from './data.js';
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
    let newBtnId = document.createElement('button');
    let newImg = document.createElement('img');
    let newBtnType = document.createElement('button');
    let newBtnPower = document.createElement('button');
    newDiv.classList = ('section-pokemon')
    newBtnId.innerText = dataPokemon.num;
    newBtnId.classList = ('pokemon-identifier');
    newImg.src = dataPokemon.img;
    newImg.classList = ('img-pokemon')
    newBtnType.innerText = dataPokemon.type;
    newBtnType.classList = ('type-pokemon')
    newBtnPower.innerText = dataPokemon.type;
    newBtnPower.classList = ('attack')
    newDiv.appendChild(newBtnId);
    newDiv.appendChild(newImg);
    newDiv.appendChild(newBtnType);
    newDiv.appendChild(newBtnPower);
    pokemonList.appendChild(newDiv);
    


}

for(let i = 0; i < dataPokemon.pokemon.length; i++){
    createPokemonDiv(dataPokemon.pokemon[i]);
}
console.log(dataPokemon.pokemon);
