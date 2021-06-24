import data from './data/pokemon/pokemon.js';
import  {}  from './data.js';



const dataPokemon = data.pokemon;

const barraBusqueda = document.getElementById("searchpokemon");
const btnBuscarPokemon = document.getElementById("btn-buscar");
const btnVerlosTodos = document.getElementById("btn-verlosTodos");
const resultado = document.getElementById("resultado");

// Funcion para cambiar a pagina donde se despliegan todos
const verlosTodos = () => {
    document.getElementById("paginaVerTodos").style.display = "block";
    document.getElementById("firstPage").style.display = "none";
};
btnVerlosTodos.addEventListener("click", verlosTodos);

// Funcion para cambiar de pantalla donde aparece info de un pokemon
const cambiarPagina = () => {
    document.getElementById("paginaPokemon").style.display = "block";
    document.getElementById("firstPage").style.display = "none";
};
btnBuscarPokemon.addEventListener("click", cambiarPagina, false);

//Funcion para barra de busqueda
const filtrar = () => {
 
    resultado.innerHTML = " ";

    const pokeElegido = barraBusqueda.value.toLowerCase();
    for( let pokemon of dataPokemon){
        let nombre = pokemon.name.toLowerCase();
        if(nombre.indexOf(pokeElegido) !== -1){
            resultado.innerHTML += `
            <h2 class="nombrePoke">${pokemon.name}</h2>
            <p>${pokemon.type}</p>
            <img src="${pokemon.img}" ></img>
            <p>${pokemon.about}</p>

            `
        }
    }
    if(resultado.innerHTML === " "){
        resultado.innerHTML +=`
        <h2>Pokemon no encontrado</h2>
        `
    }
    
};
btnBuscarPokemon.addEventListener("click", filtrar, false);


