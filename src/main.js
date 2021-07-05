import { example } from './data.js';
// import data from './data/lol/lol.js';
import data from './data/pokemon/pokemon.js';
import dataTipos from './data/pokemon/tipo.js';
// import data from './data/rickandmorty/rickandmorty.js'


//Filtrar por tipo//
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
                    <p>${ " Spawn Chance : "+ printPokemon[i]['spawn-chance']}%</p>
                    <p>${ " Max CP : " + printPokemon[i].stats['max-cp']}</p>        
           </div>; 
            </div>
        
    </div>`;

      }
       
       
        
    });
// Filtrar por region//

let selectValueRegion = document.getElementById("pokeregion");
selectValueRegion.addEventListener("change",()=>{
    let selectValueRegionRegion = selectValueRegion.value;

        const pokemon = data.pokemon;
        const printRegion= pokemon.filter(element =>{
            return element.generation.name.includes(selectValueRegionRegion);
            
        });

        containerRoot.innerHTML="";
      for (let i=0; i< printRegion.length; i++){
        
        containerRoot.innerHTML +=  `<div class="flip-card" id= "pokemon${printRegion[i].num}">
        <div class ="flip-card-inner">
            <div class ="flip-card-front"> 
                <img src="${printRegion[i].img}" />
                <p class="pokedex">#${printRegion[i].num}</p>
                <p>${printRegion[i].name}</p>
            </div>
                    <div class="flip-card-back">
                    <p>${ " Type : "  +  printRegion[i].type}</p>
                    <p>${ " Region : " + printRegion[i].generation.name}</p>
                    <p>${ " Eggs : " + printRegion[i].egg}<p>
                    <p>${ " Spawn Chance : "+  printRegion[i]['spawn-chance']}%</p>
                    <p>${ " Max CP : " + printRegion[i].stats['max-cp']}</p>        
           </div>; 
            </div>
        
    </div>`;

      }
       
       
        
    });


    //FILTRO POR HUEVOS//

let selectValueEggs = document.getElementById("pokeeggs");
selectValueEggs.addEventListener("change",()=>{
    let selectValueEggsEggs = selectValueEggs.value;
    console.log(selectValueEggsEggs)

        const pokemon = data.pokemon;
        const printEggs= pokemon.filter(element =>{
            return element.egg.includes(selectValueEggsEggs);
            
        });

        containerRoot.innerHTML="";
      for (let i=0; i< printEggs.length; i++){
        
        containerRoot.innerHTML +=  `<div class="flip-card" id= "pokemon${printEggs[i].num}">
        <div class ="flip-card-inner">
            <div class ="flip-card-front"> 
                <img src="${printEggs[i].img}" />
                <p class="pokedex">#${printEggs[i].num}</p>
                <p>${printEggs[i].name}</p>
            </div>
                    <div class="flip-card-back">
                    <p>${ " Type : "  +  printEggs[i].type}</p>
                    <p>${ " Region : " + printEggs[i].generation.name}</p>
                    <p>${ " Eggs : " + printEggs[i].egg}</p>
                    <p>${ " Spawn Chance : "+ printEggs[i]['spawn-chance']}%</p>
                    <p>${ " Max CP : " + printEggs[i].stats['max-cp']}</p>        
           </div>; 
            </div>
        
    </div>`;

      }
       
       
        
    });

//BOTON IR HACIA ABAJO//
const buttonUp = document.getElementById("button-up");
	buttonUp.addEventListener("click",() => {
		window.scrollTo(0,99999);
	});

const pokemon= data.pokemon;

// boton de ir hacia arriba //
//window.onload = () => {
	const buttonDown = document.getElementById("button-down");
	buttonDown.addEventListener("click",() => {
		window.scrollTo(0,0);
	});


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
                  <p>${ " Spawn Chance : "+ filteredPokemon[i]['spawn-chance']}%</p>
                  <p>${ " Max CP : " + filteredPokemon[i].stats['max-cp']}</p>
                </div>
             </div>
            </div>`
    }

}

});

//IMPRIMIR DATA EN CONTAINER ROOT//
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
                        <p>${ " Spawn Chance : "+ pokemon[i]['spawn-chance']}%</p>
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
