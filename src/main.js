import pokemon from "./data/pokemon/pokemon.js";

const dataPokemon = pokemon.pokemon;
const inputValue = document.getElementById("searchpokemon");
const matchingPokesDiv = document.getElementById("matching");
const buttonClick = document.getElementById("btn");

inputValue.addEventListener("keyup", (event) => {
  matchingPokesDiv.innerHTML = "";
  if (inputValue.value.length >= 1) {
    const inputValueLowerCase = inputValue.value.toLowerCase();
    pokemon.pokemon
      .filter((pkm) => pkm.name.startsWith(inputValueLowerCase))
      .forEach((poke) => {
        let matchingPoke = document.createElement("div");
        matchingPoke.className = "pokeNameStyle";
        //Click a pokemon en barra de busqueda para ir a info Pokemon
        matchingPoke.onclick = function () {
          pokeStats(poke);
          pokeStatsContainer.innerHTML = `
        
            <div class="pokemonCard">
              <p class="poke-card-num">#${poke.num}</p>
              <h2>${poke.name}</h2>
              <img src="${poke.img}">
              <div class="card-square-info">
                <p class="pokemon-card-about"> ${poke.about}</p>
                <p class="poke-card-type"> type: ${poke.type}.<p>
                <p class="poke-card-resistance"> Fuerte frente a: ${poke.resistant}</p>
                <p class="poke-card-resistance"> Debil frente a: ${poke.weaknesses}</p>
              </div>
            </div>
            <button type="button" class="btn" id="btn-volver">Vuelve a atrás</button>
          
          `;
        };
        //Lista en barra de búsqueda
        matchingPoke.innerHTML = `<img class="pokeImgDisplay" src="${poke.img}">
                                  <p class= "pokeTxtDisplay">${poke.name}</p>`;
        matchingPokesDiv.appendChild(matchingPoke);
      });
  }
});

buttonClick.addEventListener("click", (event) => {
  document.getElementById("firstPage").style.display = "none";
  document.getElementById("showAllPokemon").style.display = "block";
    pokemon.pokemon
    .forEach((poke) => {
      let matchingPoke = document.createElement("div");
      matchingPoke.className = "pokeListStyle";
      matchingPoke.onclick = function () {
        pokeStats(poke);
      };
      matchingPoke.innerHTML = `<p class= "pokeNumber">${poke.num}</p>
                              <img class="pokeImgList" src="${poke.img}">`;
      document.getElementById("allPokeContainer").appendChild(matchingPoke);
    });
});

function pokeStats(nameClicked) {
    document.getElementById("firstPage").style.display = "none";
    document.getElementById("showAllPokemon").style.display = "none";
    document.getElementById("pokeStatsContainer").style.display = "block";
}


