import data from './data/pokemon/pokemon.js';
console.log(data);

for (let i = 0; i < data.pokemon.length; i++) {

    let card = document.createElement("article");
    card.className = "pokemon-card";

    let pokemonName = document.createElement("h1");
    pokemonName.innerHTML = data.pokemon[i].name;

    let pokemonNumber = document.createElement("h2");
    pokemonNumber.innerHTML = data.pokemon[i].num;

    let pokemonImage = document.createElement("img");
    pokemonImage.src = data.pokemon[i].img;

    card.appendChild(pokemonName);
    card.appendChild(pokemonNumber);
    card.appendChild(pokemonImage);

    document.getElementById("container").appendChild(card);

}