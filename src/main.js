import { example } from './data.js';
// import data from './data/lol/lol.js';
import data from './data/pokemon/pokemon.js';
// import data from './data/rickandmorty/rickandmorty.js';

console.log(example, data);
console.log("correcto");
const pokemon= data.pokemon;
//document.querySelector("#boton").addEventListener("click", bringData);

//function bringData(){
 //   console.log("dentro de la funcion")

//let div =document.querySelector("#ddiv");
//div.innetHTML= "";

//document.getElementById("boton").addEventListener("click", () => {
    document.getElementById("boton").addEventListener("click",bringData);
    const containerRoot= document.getElementById("root");
    function bringData(){
    console.log(pokemon)
        //containerRoot.innerHTML="";

    for (let i=0; i<pokemon.length; i++){
        console.log(pokemon[i].name)
        containerRoot.innerHTML += `       <div id= "containerPokemon">
                                           <img src=${pokemon[i].img}>  
                                           <p class="pokedex">#${pokemon[i].num}</p>                                     
                                           <p>${pokemon[i].name}</p>
                                        </div>
                                    `;

    };

//const show = document.getElementById("ddiv");


// for(let item of pokemon){
// console.log(item.name);
 //ddiv.innetHTML += `
 //<div>${item.name}</div>
 //<div>${item.type}</div>
 //`  

//const div = document.createElement("div");
//div.innetHTML= item.name;
//show.appendChild(div);

//const li=document.createElement("li");
//li.innetHTML = item.name;
//show.appendChild(li)
//console.log(li)



}
