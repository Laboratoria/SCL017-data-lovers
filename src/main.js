import { example } from './data.js';
// import data from './data/lol/lol.js';
import data from './data/pokemon/pokemon.js';
import dataTipos from './data/pokemon/tipo.js';
// import data from './data/rickandmorty/rickandmorty.js'

const containerRoot= document.getElementById("root");
let selectValue = document.getElementById("poketype");
selectValue.addEventListener("change",()=>{
    let selectValueType = selectValue.value;
    console.log(selectValueType)

        const pokemon = data.pokemon;
        const printPokemon= pokemon.filter(element =>{
            console.log(element.type)
            return element.type.includes(selectValueType);
            
        });

        containerRoot.innerHTML="";
      for (let i=0; i< printPokemon.length; i++){
        
        console.log(printPokemon[i].name);
        

        containerRoot.innerHTML +=  `<div class="flip-card" id= "pokemon${printPokemon[i].num}">
        <div class ="flip-card-inner">
            <div class ="flip-card-front"> 
                <img src="${printPokemon[i].img}" />
                <p class="pokedex">#${printPokemon[i].num}</p>
                <p>${printPokemon[i].name}</p>
            </div>
                    <div class="flip-card-back">
                    <p>${ " Type : "  +  printPokemon[i].type}</p>
                    <p>${ " Region : " + printPokemon[i].generation.name}</p>
                    <p>${ " Eggs : " + printPokemon[i].egg}<p>
                    <p>${ "Candies : " + printPokemon[i].evolution['next-evolution']?.[0]['candy-cost']}</p>
                    <p>${ " Max CP : " + printPokemon[i].stats['max-cp']}</p>        
           </div>; 
            </div>
        
    </div>`;

      }
       
       
        
    });


console.log(selectValue)

const pokemon= data.pokemon;
//const tiposDePokemones = dataTipos.tiposDePokemones;//
const pokemonSearch = "";
// boton de ir hacia arriba //
//window.onload = () => {
	const buttonDown = document.getElementById("button-down");
	buttonDown.addEventListener("click",() => {
		window.scrollTo(0,0);
	});
//};
//FUNCTION DE BUSCAR//
const searchPo = document.getElementById("searchPo");
searchPo.addEventListener("keyup",(e)=> {

    const searchString = e.target.value.toLowerCase(); 
    
    if(searchString==""){
        bringData(); 
        console.log(searchString);
    }
    else{

    
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
                  <p>${ " Type : "  +  filteredPokemon[i].type}</p>
                  <p>${ " Region : " + filteredPokemon[i].generation.name}</p>
                  <p>${ " Eggs : " + filteredPokemon[i].egg}<p>
                  <p>${ "Candies : " + filteredPokemon[i].evolution['next-evolution']?.[0]['candy-cost']}</p>
                  <p>${ " Max CP : " + filteredPokemon[i].stats['max-cp']}</p>
                </div>
             </div>
            </div>`
    }

}

});


window.onload=bringData()

function bringData() {
    containerRoot.innerHTML="";

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
                        <p>${ "Candies : " + pokemon[i].evolution['next-evolution']?.[0]['candy-cost']}</p>
                        <p>${ " Max CP : " + pokemon[i].stats['max-cp']}</p>        
               </div>; 
                </div>
            
        </div>`;
    

 }}; 


/*
 const selectElement=document.querySelector("poketype");
 selectElement.addEventListener("change", (event)=>{
    //for (let i = 0; i < pokemon.length; i++) {
const resultado = document.querySelector("root");
resultado.textContent= `probando si imprime ${event.target.value}`;
 })
/*
 let water = document.getElementById("water");
 water.addEventListener("click",()=> {
          for (let i = 0; i < pokemon.length; i++) {
            containerRoot.innerHTML+=
            `<div class="flip-card" id= "pokemon${pokemon[i].type.water}">
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
                        <p>${ "Candies : " + pokemon[i].evolution['next-evolution']?.[0]['candy-cost']}</p>
                        <p>${ " Max CP : " + pokemon[i].stats['max-cp']}</p>        
               </div>; 
                </div>
            
        </div>`;
          }
        }); 


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

   // return types;}  // */
