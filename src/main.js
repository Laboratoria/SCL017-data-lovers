import pokemon from "./data/pokemon/pokemon.js";

const inputValue = document.getElementById("searchpokemon");
const matchingPokesDiv = document.getElementById("matching");
// const buttonClick = document.getElementById("btn");

inputValue.addEventListener("keyup", (event) => {

    if (inputValue.value.length >= 1) {
    const inputValueLowerCase = inputValue.value.toLowerCase();
    console.log ( pokemon.pokemon
        .filter((pkm) => pkm.name.startsWith(inputValueLowerCase)))
    }
});
