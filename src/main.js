 // ----------------------------------------------------------
 // Manipulacion de la data de Pokemon 
import data from './data/pokemon/pokemon.js';
console.log(data);

for (let i = 0; i < data.pokemon.length; i++) {

    let card = document.createElement("div");
    card.className = "pokemon-card";

    let pokemonName = document.createElement("div");
    pokemonName.innerHTML = data.pokemon[i].name;
    pokemonName.className = "pokemon-name";

    let pokemonNumber = document.createElement("div");
    pokemonNumber.innerHTML = data.pokemon[i].num;
    pokemonNumber.className = "pokemon-number";

    let pokemonImagediv = document.createElement("div");
    let pokemonImage = document.createElement("img");
    pokemonImage.src = data.pokemon[i].img;
    pokemonImage.className = "pokemon-image";
    pokemonImagediv.className = "pokemon-image-div";
    pokemonImagediv.appendChild(pokemonImage);


    data.pokemon[i].type.forEach(function(value){
        let pokemonType = document.createElement("div");
        pokemonType.innerHTML =value;
        pokemonType.className = "pokemon-type-"+value;
        card.appendChild(pokemonType);

    })
    card.appendChild(pokemonImagediv);
    card.appendChild(pokemonNumber);
    card.appendChild(pokemonName); 
    
        document.getElementById("container").appendChild(card);
  
 };



 // ----------------------------------------------------------
 // Manipulacion del menu lateral 

 const openNavBtn = document.getElementById("open-btn");
 const closeNavBtn = document.getElementById("close-btn");
 
 openNavBtn.addEventListener("click", openNav);
 closeNavBtn.addEventListener("click", closeNav);
 
 function openNav() {
     document.getElementById("mySidebar").style.width = "250px";
     document.getElementById("main").style.marginLeft = "250px";
 }
 
 function closeNav() {
     document.getElementById("mySidebar").style.width = "0";
     document.getElementById("main").style.marginLeft = "0";
 }
 
 