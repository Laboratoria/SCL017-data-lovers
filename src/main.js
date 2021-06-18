import { example } from './data.js';
// import data from './data/lol/lol.js';
import data from './data/pokemon/pokemon.js';
// import data from './data/rickandmorty/rickandmorty.js';


console.log(example, data);
console.log("correcto");
const pokemon= data.pokemon;



    document.getElementById("boton").addEventListener("click",bringData);
    const containerRoot= document.getElementById("root");
    function bringData(){


    for (let i=0; i<pokemon.length; i++){
        console.log(pokemon[i].name)
        containerRoot.innerHTML += `       <div class="containerPokemon" id= "pokemon"+ ${pokemon[i].num}> 
                                            <img src=${pokemon[i].img}>
                                            <p class="pokedex">#${pokemon[i].num}</p>
                                            <p>${pokemon[i].name}</p>
                                            <p>${pokemon[i].type}</p>
                                            <p>${pokemon[i].generation.name}</p>
                                            
                                        

                                        </div>
                                    `;

                                    const query = document.querySelector("#pokemon" + `${pokemon[i].num}`);
                                                    
 };                                          
            
    const pokemonContainer = query;
    const flipCard = document.createElement("div");
    flipCard.classList.add("flip-card");

     const cardContainer = document.createElement("div");
    cardContainer.classList.add("card-container");

    flipCard.appendChild(cardContainer);

    console.log(pokemon)

    const card = document.createElement("div");
    card.classList.add ("pokemon-block");

    const cardBack = document.createElement("div");
    cardBack.classList.add("pokemon-block-back");
    cardBack.textContent = "Super poder";

    

    cardContainer.appendChild(card);
        cardContainer.appendChild(cardBack);
        pokemonContainer.appendChild(flipCard); 









    /*const flipCard = document.createElement("div");
    flipCard.classList.add("flip-card");

     const cardContainer = document.createElement("div");
    cardContainer.classList.add("card-container");

    flipCard.appendChild(cardContainer);

    console.log(pokemon)

    const cardBack = document.createElement("div");
    cardBack.classList.add("pokemon-block-back");
    cardBack.textContent = "Super poder";

    cardContainer.appendChild(card);
    cardContainer.appendChild(cardBack);
    containerRoot.appendChild(flipCard); */
    






    //document.querySelector("#boton").addEventListener("click", bringData);

//function bringData(){
 //   console.log("dentro de la funcion")

//let div =document.querySelector("#ddiv");
//div.innetHTML= "";

//document.getElementById("boton").addEventListener("click", () => {
//const show = document.getElementById("ddiv");
 //containerRoot.innerHTML="";


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



