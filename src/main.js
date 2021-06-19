// ----------------------------------------------------------
// Manipulacion de la data de Pokemon 
import data from './data/pokemon/pokemon.js';
console.log(data.pokemon[0].evolution["next-evolution"][0]["next-evolution"][0]["candy-cost"]);
console.log(data.pokemon[0].encounter["base-capture-rate"]);


for (let i = 0; i < data.pokemon.length; i++) {

    //Generación de la tarjeta pokemon (página principal)
    let card = document.createElement("article");
    card.className = "pokemon-card";
    // Generación de los elementos de la tarjeta pokemon (página principal)
    let pokemonName = document.createElement("div");
    let capitalizedName = data.pokemon[i].name.charAt(0).toUpperCase() + data.pokemon[i].name.slice(1);
    pokemonName.innerHTML = capitalizedName;
    pokemonName.className = "pokemon-name";

    let pokemonNumber = document.createElement("div");
    pokemonNumber.innerHTML = data.pokemon[i].num;
    pokemonNumber.className = "pokemon-number";

    let pokemonImagediv = document.createElement("div");
    let pokemonImage = document.createElement("img");
    pokemonImage.src = data.pokemon[i].img;
    pokemonImage.className = "pokemon-image";
    pokemonImagediv.className = "pokemon-image-div";
    pokemonImagediv.appendChild(pokemonNumber);
    pokemonImagediv.appendChild(pokemonImage);


    // Generación de la tarjeta emergente de los pokemon 
    let imgBtn = document.createElement("img");
    imgBtn.id = "new-btn-img";
    imgBtn.src = ("/img/pokestop_fix.png");

    let modalBtn = document.createElement("button");
    modalBtn.className = "myBtn";
    modalBtn.innerHTML = "Más";

    //modalBtn.appendChild(imgBtn);


    let modal1 = document.createElement("div");
    modal1.id = "myModal";
    modal1.className = "modal";

    let modalContent = document.createElement("div");
    modalContent.className = "modal-content";

    let modalSpan = document.createElement("span");
    modalSpan.className = "close";
    modalSpan.innerHTML = "&times;";

    let modalInfo = document.createElement("div");
    modalInfo.className = "modal-info";

    data.pokemon[i].type.forEach(function (value) {
        let pokemonType = document.createElement("div");
        let capitalizedType = value.charAt(0).toUpperCase() + value.slice(1);
        capitalizedType = translateType(capitalizedType);
        pokemonType.innerHTML = capitalizedType;
        pokemonType.className = "pokemon-type";
        pokemonType.id = "pokemon-type-" + value;
        card.appendChild(pokemonType);

    })

    // Generación de los elementos de la tarjeta emergente
    let modal11 = document.createElement("div");
    modal11.className = "modal-more";
    let modalInfoPokemon = document.createElement("div");
    modalInfoPokemon.className = "div-pokemon-info";
    

    let modalImg = document.createElement("img");
    modalImg.src = data.pokemon[i].img;
    modalImg.className = "modal-img";
    let modalName = pokemonName.cloneNode(true);
    
    
//    modalName.innerHTML = data.pokemon[i].name;
//    modalName.className = "modal-name";
    let pokemonRarity = document.createElement("div");
    pokemonRarity.textContent = "Rareza: " + data.pokemon[i]["pokemon-rarity"];
    let pokemonEgg = document.createElement("p");
    pokemonEgg.innerHTML = "Egg km: " + data.pokemon[i].egg;
    let pokeBuddy = document.createElement("p");
    pokeBuddy.textContent = "Buddy distance: " + data.pokemon[i]["buddy-distance-km"] + "km";
    let fleeRate = document.createElement("p");
    let flee = data.pokemon[i].encounter["base-flee-rate"];
    fleeRate.textContent = "Tasa de escape: " + Math.floor(flee*100) + "%";
    let captureRate = document.createElement("p");
    let capture = data.pokemon[i].encounter["base-capture-rate"];
    captureRate.textContent = "Tasa de captura: " + Math.floor(capture*100) + "%";

    modalInfoPokemon.appendChild(modalImg);
    modalInfoPokemon.appendChild(modalName);
    modalInfoPokemon.appendChild(pokemonRarity);
    modalInfoPokemon.appendChild(pokemonEgg);
    modalInfoPokemon.appendChild(pokeBuddy);
    modalInfoPokemon.appendChild(fleeRate);
    modalInfoPokemon.appendChild(captureRate);

    let modalMoreInfo = document.createElement("div");
    modalMoreInfo.className = "div-more-info";
    let modalWeak = document.createElement("p");
    modalWeak.innerHTML = "Débil contra: ";
    modalMoreInfo.appendChild(modalWeak);
    data.pokemon[i].weaknesses.forEach(function (value) {
        let pokemonWeak = document.createElement("div");
        let capitalizedType = value.charAt(0).toUpperCase() + value.slice(1);
        capitalizedType = translateType(capitalizedType);
        pokemonWeak.innerHTML = capitalizedType;
        pokemonWeak.className = "pokemon-type";
        pokemonWeak.id = "pokemon-type-" + value;
        modalMoreInfo.appendChild(pokemonWeak);
    })
    
    
    let modalResistant = document.createElement("p");
    modalResistant.innerHTML = "Resistente a: ";
    modalMoreInfo.appendChild(modalResistant);
    data.pokemon[i].resistant.forEach(function (value) {
        let pokemonResistant = document.createElement("div");
        let capitalizedType = value.charAt(0).toUpperCase() + value.slice(1);
        capitalizedType = translateType(capitalizedType);
        pokemonResistant.innerHTML = capitalizedType;
        pokemonResistant.className = "pokemon-type";
        pokemonResistant.id = "pokemon-type-" + value;
        modalMoreInfo.appendChild(pokemonResistant);
    })

    let modalInfoEvolutions = document.createElement("div");
    modalInfoEvolutions.className = "div-evolutions";
    let firstpoke = pokemonImage.cloneNode(true);
    modalInfoEvolutions.appendChild(firstpoke);
    let pokeEvol = document.createElement("p");



    modal11.appendChild(modalInfoPokemon);
    modal11.appendChild(modalMoreInfo);
    modalInfo.appendChild(modal11);
    modalInfo.appendChild(modalInfoEvolutions);
    //modalInfo.appendChild(pokeEvol);
    //modalInfo.appendChild(pokeEvolution);


    // Append all teh cards 
    modalContent.appendChild(modalSpan);
    modalContent.appendChild(modalInfo);
    modal1.appendChild(modalContent);
    //    card.appendChild(pokemonNumber);
    card.appendChild(pokemonImagediv);

    card.appendChild(pokemonName);
    card.appendChild(modalBtn);
    card.appendChild(modal1);

    document.getElementById("container").appendChild(card);
};


function translateType(capitalized){
    switch (capitalized) {
        case "Water":
            capitalized = "Agua";
            break;
        case "Grass":
            capitalized = "Hierba";
            break;
        case "Poison":
            capitalized = "Veneno";
            break;
        case "Fire":
            capitalized = "Fuego";
            break;
        case "Flying":
            capitalized = "Volador";
            break;
        case "Bug":
            capitalized = "Bicho";
            break;
        case "Electric":
            capitalized = "Eléctrico";
            break;
        case "Ground":
            capitalized = "Tierra";
            break;
        case "Fighting":
            capitalized = "Luchador";
            break;
        case "Psychic":
            capitalized = "Psíquico";
            break;
        case "Rock":
            capitalized = "Roca";
            break;
        case "Ice":
            capitalized = "Hielo";
            break;
        case "Ghost":
            capitalized = "Fantasma";
            break;
        case "Dragon":
            capitalized = "Dragón";
            break;
        case "Fairy":
            capitalized = "Hada";
            break;
        case "Dark":
            capitalized = "Siniestro";
            break;
        case "Steel":
            capitalized = "Metal";
            break;
        default: capitalized;
    }
return capitalized;
}

// ----------------------------------------------------------
// Manipulación de la tarjeta emergente 

// Get the modal
var modals = document.getElementsByClassName("modal");

// Get the button that opens the modal
var btn = document.getElementsByClassName("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close");

for (let ii = 0; ii < data.pokemon.length; ii++) {
    // When the user clicks the button, open the modal 
    btn[ii].onclick = function () {
        modals[ii].style.display = "block";
    }

    // When the user clicks on <span> (x), close the modal
    span[ii].onclick = function () {
        modals[ii].style.display = "none";
    }
    window.onclick = function (event) {
        if (event.target.classList.contains('modal')) {
            for (let modal of modals) {
                if (typeof modal.style !== 'undefined') {
                    modal.style.display = 'none';
                }
            }
        }
    }

    window.onkeydown = function (event) {
        if (event.key == 'Escape') {
            for (let modal of modals) {
                modal.style.display = 'none';
            }
        }
    }
}


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

