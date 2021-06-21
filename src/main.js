import data from './data/pokemon/pokemon.js';
import  {}  from './data.js';
import pokemon from './data/pokemon/pokemon.js';


const dataPokemon = data.pokemon;
console.log(dataPokemon);

dataPokemon.forEach(function(pokemon){
    console.log(pokemon.name);
});

//Funcion para que boton buscar cambie de pagina
document.getElementById("btn-buscar").addEventListener("click", PokemonPage);
function PokemonPage(){
    document.getElementById("infoPokemonPage").style.display = "block";
    document.getElementById("firstPage").style.display = "none";
    };
