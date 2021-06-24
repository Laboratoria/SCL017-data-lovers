import pokemon from "./data/pokemon/pokemon.js";

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
        matchingPoke.onclick = function () {
          pokeStats(poke);
        };
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