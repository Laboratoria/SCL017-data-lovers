import { example } from './data.js';
// import data from './data/lol/lol.js';
import data from './data/pokemon/pokemon.js';
import dataTipos from './data/pokemon/tipo.js';
// import data from './data/rickandmorty/rickandmorty.js';

const pokemon= data.pokemon;
//const tiposDePokemones = dataTipos.tiposDePokemones;//
const pokemonSearch = "";
// boton de ir hacia arriba //
window.onload = () => {
	const buttonDown = document.getElementById("button-down");
	buttonDown.addEventListener("click",() => {
		window.scrollTo(0,0);
	});
};
//FUNCTION DE BUSCAR//
const containerRoot= document.getElementById("root");
const searchPo = document.getElementById("searchPo");
searchPo.addEventListener("keyup",(e)=> {

    const searchString = e.target.value.toLowerCase(); 
    console.log(searchString);
    const filteredPokemon = pokemon.filter(element=> {
        return element.name.toLowerCase().includes(searchString);
    });
    for (let i= 0; i<filteredPokemon.length; i++) {
        containerRoot.innerHTML = `<div class="flip-card" id= "${filteredPokemon[i].num}">
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


window.onload=bringData()

function bringData() {

    for (let i = 0; i < pokemon.length; i++) {
        //const tiposDelPokemonActual = getTipos(pokemon[i].type);//
        containerRoot.innerHTML += 
        `<div class="flip-card" id= "pokemon${pokemon[i].num}">
            <div class ="flip-card-inner">
                <div class ="flip-card-front"> 
                    <img src="${pokemon[i].img}" />
                    <p class="pokedex">#${pokemon[i].num}</p>
                    <p>${pokemon[i].name}</p>
                </div>
                        <div class="flip-card-back">
                        <p>${ " Type : "  +  pokemon[i].type}</p>
                        <p>${ " Region : " + pokemon[i].generation.name}</p>
                        <p>${ " Eggs : " + pokemon[i].egg}<p>
                        <p>${ "Candys : " + pokemon[i].evolution['next-evolution']?.[0]['candy-cost']}</p>
                        <p>${ " Max CP : " + pokemon[i].stats['max-cp']}</p>        
               </div>; 
                </div>
            
        </div>`;
    

 }}; 


 
     //    for(let i = 0; i<tiposDelPokemonActual.length; i++){
          //  containerRoot.innerHTML =   // 

        // tipos = el arreglo de los tipos de un pokemon
//function getTipos(types) {// 
  //  types = tiposDePokemones.filter(tipoPokemon => {
       // types.includes(tipoPokemon.types)
   // })
   // .map(tipoPokemon => {//
      //  return {
          //  type: tipoPokemon.tipo,//
          //  img: tipoPokemon.img,
      //  };//
      
  //  });// 

   // return types;}  // 
