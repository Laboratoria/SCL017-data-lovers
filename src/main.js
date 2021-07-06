import pokemon from "./data/pokemon/pokemon.js";
<<<<<<< HEAD
=======
import {sortAZ, sortZA, sortDesNum, sortAscNum, filterfunction} from "./data.js"; 
>>>>>>> d53960ce59c659d9f259a7c8a09fa9dbed5dc9ca

const dataPokemon = pokemon.pokemon;
const inputValue = document.getElementById("searchpokemon");
const matchingPokesDiv = document.getElementById("matching");
const buttonClick = document.getElementById("btn");

//Pagina tarjeta individual

inputValue.addEventListener("keyup", (event) => {
  matchingPokesDiv.innerHTML = "";
  if (inputValue.value.length >= 1) {
    const inputValueLowerCase = inputValue.value.toLowerCase();
    pokemon.pokemon
      .filter((pkm) => pkm.name.startsWith(inputValueLowerCase))
      .forEach((poke) => {
        const matchingPoke = document.createElement("div");
        matchingPoke.className = "pokeNameStyle";
<<<<<<< HEAD
        
=======
>>>>>>> d53960ce59c659d9f259a7c8a09fa9dbed5dc9ca
        //Click a pokemon en barra de busqueda para ir a info Pokemon
        matchingPoke.onclick = function () {
          pokeStats(poke);
        };
        //Lista en barra de búsqueda
        matchingPoke.innerHTML = `<img class="pokeImgDisplay" src="${poke.img}">
                                  <p class= "pokeTxtDisplay">${poke.name}</p>`;
        matchingPokesDiv.appendChild(matchingPoke);
      });
  }
});

  // Pagina con todas las tarjetas
  buttonClick.addEventListener("click", (event) => {
  document.getElementById("firstPage").style.display = "none";
  document.getElementById("showAllPokemon").style.display = "block";
<<<<<<< HEAD
    pokemon.pokemon
    .forEach((poke) => {
      let matchingPoke = document.createElement("div");
      matchingPoke.className = "pokeListStyle";
      matchingPoke.onclick = function () {
        pokeStats(poke);
        pokeStatsContainer.innerHTML = `
        
      <div class="pokemonCard">
        <p class="poke-card-num">#${poke.num}</p> 
        <h2>${poke.name}</h2>
        <img src="${poke.img}">
        <div class="card-square-info">
          <p class="poke-card-type"> Type: ${poke.type}.<p>
          <p class="pokemon-card-about"> ${poke.about}</p>
          <p class="p-resistant">Strong against:</p>
          <div class="poke-card-resistant"></div>
          <p class="p-resistant">Weak against:</p>
          <div class="poke-card-weaknesses"></div>
=======

    loadSelectedPokemon("all");

  document.getElementById("dropdownType").addEventListener("change", (event) => {
      loadSelectedPokemon(event.target.value);
    });

  document.getElementById("sortBy").addEventListener("change", (event) => {
      sortPokemon(event.target.value);
    }); 

  function loadSelectedPokemon(selectedType) {
      document.getElementById("allPokeContainer").innerHTML = "";
      dataPokemon
        .filter((pokemon) => selectedType === "all" || filterfunction(pokemon, selectedType))
        .forEach((poke) => {
          pokeCreation(poke);
        });
  }

  function sortPokemon(selected) {
    let sortSelectedPokemon;
    switch (selected) {
    case "sort__az":
      sortSelectedPokemon = sortAZ;
      break;
    case "sort__za":
      sortSelectedPokemon = sortZA;
      break;
    case "sort__19":
      sortSelectedPokemon = sortAscNum;
      break;
    case "sort__91":
      sortSelectedPokemon = sortDesNum;
      break;
    default:
      sortSelectedPokemon = sortAZ;
  }
    document.getElementById("allPokeContainer").innerHTML = "";
    dataPokemon
      .sort(sortSelectedPokemon)
      .forEach((poke) => {
         pokeCreation(poke);
  });
}
});

const pokeStats = (poke) => {
  document.getElementById("firstPage").style.display = "none";
  document.getElementById("showAllPokemon").style.display = "none";
  document.getElementById("pokeStatsContainer").style.display = "block";

  pokeStatsContainer.innerHTML = `<div class="pokemonCard">
          <p class="poke-card-num">#${poke.num}</p> 
          <h2>${poke.name}</h2>
          <img class="poke-card-img" src="${poke.img}">
          <div class="card-square-info">
            <div class="poke-card-type"> </div>
            <p class="pokemon-card-about"> ${poke.about}</p>
            <p class="p-resistant">Strong against:</p>
            <div class="poke-card-resistant"></div>
            <p class="p-resistant">Weak against:</p>
            <div class="poke-card-weaknesses"></div>
            <p class="poke-card-size"> Height: ${poke.size.height} Weigth:${poke.size.weight}<p>
          </div>
>>>>>>> d53960ce59c659d9f259a7c8a09fa9dbed5dc9ca
        </div>
        <button type="button" class="btn-back" id="btn-back">Vuelve a atrás</button>`;

  document.querySelector(".btn-back").addEventListener("click", (event) => {
    document.getElementById("firstPage").style.display = "block";
    document.getElementById("pokeStatsContainer").style.display = "none";
  });

<<<<<<< HEAD
          document.querySelector(".btn-back").addEventListener("click", goBack);
          function goBack (){
            document.getElementById("firstPage").style.display = "block";
            document.getElementById("pokeStatsContainer").style.display = "none";
            };
           
            //Estos if insertan la imagen de los tipos a los que el pokemon es fuerte
            if (poke.resistant.length == 1){
              document.querySelector(".poke-card-resistant").innerHTML = `
=======
  if (poke.type.length == 1) {
    document.querySelector(".poke-card-type").innerHTML = `
              <img class="imgType" src="./img/${poke.type[0]}.png">`;
  } else if (poke.type.length == 2) {
    document.querySelector(".poke-card-type").innerHTML = `
              <img class="imgType" src="./img/${poke.type[0]}.png">
              <img class="imgType" src="./img/${poke.type[1]}.png">`;
  }

  //Estos if insertan la imagen de los tipos a los que el pokemon es fuerte
  if (poke.resistant.length == 1) {
    document.querySelector(".poke-card-resistant").innerHTML = `
>>>>>>> d53960ce59c659d9f259a7c8a09fa9dbed5dc9ca
              <img class="imgResistant" src="./img/${poke.resistant[0]}.png">`;
  } else if (poke.resistant.length == 2) {
    document.querySelector(".poke-card-resistant").innerHTML = `
              <img class="imgResistant" src="./img/${poke.resistant[0]}.png">
              <img class="imgResistant" src="./img/${poke.resistant[1]}.png">`;
  } else if (poke.resistant.length == 3) {
    document.querySelector(".poke-card-resistant").innerHTML = `
              <img class="imgResistant" src="./img/${poke.resistant[0]}.png">
              <img class="imgResistant" src="./img/${poke.resistant[1]}.png">
              <img class="imgResistant" src="./img/${poke.resistant[2]}.png">`;
  } else if (poke.resistant.length == 4) {
    document.querySelector(".poke-card-resistant").innerHTML = `
              <img class="imgResistant" src="./img/${poke.resistant[0]}.png">
              <img class="imgResistant" src="./img/${poke.resistant[1]}.png">
              <img class="imgResistant" src="./img/${poke.resistant[2]}.png">
              <img class="imgResistant" src="./img/${poke.resistant[3]}.png">`;
  } else if (poke.resistant.length == 5) {
    document.querySelector(".poke-card-resistant").innerHTML = `
              <img class="imgResistant" src="./img/${poke.resistant[0]}.png">
              <img class="imgResistant" src="./img/${poke.resistant[1]}.png">
              <img class="imgResistant" src="./img/${poke.resistant[2]}.png">
              <img class="imgResistant" src="./img/${poke.resistant[3]}.png">
              <img class="imgResistant" src="./img/${poke.resistant[4]}.png">`;
  } else if (poke.resistant.length == 6) {
    document.querySelector(".poke-card-resistant").innerHTML = `
              <img class="imgResistant" src="./img/${poke.resistant[0]}.png">
              <img class="imgResistant" src="./img/${poke.resistant[1]}.png">
              <img class="imgResistant" src="./img/${poke.resistant[2]}.png">
              <img class="imgResistant" src="./img/${poke.resistant[3]}.png">
              <img class="imgResistant" src="./img/${poke.resistant[4]}.png">
              <img class="imgResistant" src="./img/${poke.resistant[5]}.png">`;
  } else if (poke.resistant.length == 7) {
    document.querySelector(".poke-card-resistant").innerHTML = `
              <img class="imgResistant" src="./img/${poke.resistant[0]}.png">
              <img class="imgResistant" src="./img/${poke.resistant[1]}.png">
              <img class="imgResistant" src="./img/${poke.resistant[2]}.png">
              <img class="imgResistant" src="./img/${poke.resistant[3]}.png">
              <img class="imgResistant" src="./img/${poke.resistant[4]}.png">
              <img class="imgResistant" src="./img/${poke.resistant[5]}.png">
              <img class="imgResistant" src="./img/${poke.resistant[6]}.png">`;
  }

  //Estos if insertan la imagen de los tipos a los que el pokemon es debil
  if (poke.weaknesses.length == 1) {
    document.querySelector(".poke-card-weaknesses").innerHTML = `
              <img class="imgResistant" src="./img/${poke.weaknesses[0]}.png">`;
  } else if (poke.weaknesses.length == 2) {
    document.querySelector(".poke-card-weaknesses").innerHTML = `
              <img class="imgResistant" src="./img/${poke.weaknesses[0]}.png">
              <img class="imgResistant" src="./img/${poke.weaknesses[1]}.png">`;
  } else if (poke.weaknesses.length == 3) {
    document.querySelector(".poke-card-weaknesses").innerHTML = `
              <img class="imgResistant" src="./img/${poke.weaknesses[0]}.png">
              <img class="imgResistant" src="./img/${poke.weaknesses[1]}.png">
              <img class="imgResistant" src="./img/${poke.weaknesses[2]}.png">`;
  } else if (poke.weaknesses.length == 4) {
    document.querySelector(".poke-card-weaknesses").innerHTML = `
              <img class="imgResistant" src="./img/${poke.weaknesses[0]}.png">
              <img class="imgResistant" src="./img/${poke.weaknesses[1]}.png">
              <img class="imgResistant" src="./img/${poke.weaknesses[2]}.png">
              <img class="imgResistant" src="./img/${poke.weaknesses[3]}.png">`;
  } else if (poke.weaknesses.length == 5) {
    document.querySelector(".poke-card-weaknesses").innerHTML = `
              <img class="imgResistant" src="./img/${poke.weaknesses[0]}.png">
              <img class="imgResistant" src="./img/${poke.weaknesses[1]}.png">
              <img class="imgResistant" src="./img/${poke.weaknesses[2]}.png">
              <img class="imgResistant" src="./img/${poke.weaknesses[3]}.png">
              <img class="imgResistant" src="./img/${poke.weaknesses[4]}.png">`;
  } else if (poke.weaknesses.length == 6) {
    document.querySelector(".poke-card-weaknesses").innerHTML = `
              <img class="imgResistant" src="./img/${poke.weaknesses[0]}.png">
              <img class="imgResistant" src="./img/${poke.weaknesses[1]}.png">
              <img class="imgResistant" src="./img/${poke.weaknesses[2]}.png">
              <img class="imgResistant" src="./img/${poke.weaknesses[3]}.png">
              <img class="imgResistant" src="./img/${poke.weaknesses[4]}.png">
              <img class="imgResistant" src="./img/${poke.weaknesses[5]}.png">`;
  } else if (poke.weaknesses.length == 7) {
    document.querySelector(".poke-card-weaknesses").innerHTML = `
              <img class="imgResistant" src="./img/${poke.weaknesses[0]}.png">
              <img class="imgResistant" src="./img/${poke.weaknesses[1]}.png">
              <img class="imgResistant" src="./img/${poke.weaknesses[2]}.png">
              <img class="imgResistant" src="./img/${poke.weaknesses[3]}.png">
              <img class="imgResistant" src="./img/${poke.weaknesses[4]}.png">
              <img class="imgResistant" src="./img/${poke.weaknesses[5]}.png">
              <img class="imgResistant" src="./img/${poke.weaknesses[6]}.png">`;
<<<<<<< HEAD
            };
      };
      matchingPoke.innerHTML = `<p class= "pokeNumber"> <img class="pokeballImg" src="img/pokeball.png">  N° ${poke.num}</p>
                                <img class="pokeImgList" src="${poke.img}">
                                <p class= "pokeName">${poke.name}</p>`;
      document.getElementById("allPokeContainer").appendChild(matchingPoke);
    });
});

const pokeStats = () => {
    document.getElementById("firstPage").style.display = "none";
    document.getElementById("showAllPokemon").style.display = "none";
    document.getElementById("pokeStatsContainer").style.display = "block";
}
=======
  }
};

const pokeCreation = (poke) => {
  let matchingPoke = document.createElement("div");
  matchingPoke.className = "pokeListStyle";
  matchingPoke.onclick = function () {
    pokeStats(poke);
  };
  matchingPoke.innerHTML = `<p class= "pokeNumber">${poke.num}</p>
                              <img class="pokeImgList" src="${poke.img}">
                              <p class= "pokeName">${poke.name}</p>`;
  document.getElementById("allPokeContainer").appendChild(matchingPoke);
};
>>>>>>> d53960ce59c659d9f259a7c8a09fa9dbed5dc9ca
