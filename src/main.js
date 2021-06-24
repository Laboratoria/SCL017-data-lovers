import { example } from './data.js';
// import data from './data/lol/lol.js';
import data from './data/pokemon/pokemon.js';
// import data from './data/rickandmorty/rickandmorty.js';



const pokemon= data.pokemon;
const pokemonSearch = "";


//FUNCTION DE BUSCAR//
const containerRoot= document.getElementById("root");
const searchPo = document.getElementById("searchPo");
searchPo.addEventListener("keyup",(e)=> {
    
   const searchString= e.target.value.toLowerCase();
console.log(searchString);
const filteredPokemon = pokemon.filter(element=>{
  
    return element.name.toLowerCase().includes(searchString);
});

for (let i=0; i<filteredPokemon.length; i++){
    containerRoot.innerHTML =`<div class="flip-card" id= "${filteredPokemon[i].num}">
    <div class ="flip-card-inner">
        <div class ="flip-card-front"> 
            <img src=${filteredPokemon[i].img}>
            <p class="pokedex">#${filteredPokemon[i].num}</p>
            <p>${filteredPokemon[i].name}</p>
        </div>
            <div class="flip-card-back">
            <p>${filteredPokemon[i].type}</p>
            <p>${filteredPokemon[i].generation.name}</p>
        </div>
    </div>
</div>`

}

});


    document.getElementById("boton").addEventListener("click",bringData);
    
    function bringData(){
     
    for (let i=0; i<pokemon.length; i++){
        containerRoot.innerHTML += `       <div class="flip-card" id= "pokemon${pokemon[i].num}">
                                            <div class ="flip-card-inner">
                                            <div class ="flip-card-front"> 
                                                <img src=${pokemon[i].img}>
                                                <p class="pokedex">#${pokemon[i].num}</p>
                                                <p>${pokemon[i].name}</p>
                                            </div>
                                            <div class="flip-card-back">
                                            <p>${pokemon[i].type}</p>
                                            <p>${pokemon[i].generation.name}</p>
                                            </div>
                                        </div>
                                        </div>
                                    `;
                                
                            
        
 
} 





 };





