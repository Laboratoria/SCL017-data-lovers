// ----------------------------------------------------------
// Manipulacion de la data de Pokemon 
import data from './data/pokemon/pokemon.js';
console.log(data);


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
    pokemonImagediv.appendChild(pokemonImage);

    data.pokemon[i].type.forEach(function (value) {
        let pokemonType = document.createElement("div");
        let capitalizedType = value.charAt(0).toUpperCase() + value.slice(1);

        switch (capitalizedType) {
            case "Water":
                capitalizedType = "Agua";
                break;
            case "Grass":
                capitalizedType = "Hierva";
                break;
            case "Poison":
                capitalizedType = "Veneno";
                break;
            case "Fire":
                capitalizedType = "Fuego";
                break;
            case "Flying":
                capitalizedType = "Volador";
                break;
            case "Bug":
                capitalizedType = "Bicho";
                break;
            case "Electric":
                capitalizedType = "Eléctrico";
                break;
            case "Ground":
                capitalizedType = "Tierra";
                break;
            case "Fighting":
                capitalizedType = "Luchador";
                break;
            case "Psychic":
                capitalizedType = "Psíquico";
                break;
            case "Rock":
                capitalizedType = "Roca";
                break;
            case "Ice":
                capitalizedType = "Hielo";
                break;
            case "Ghost":
                capitalizedType = "Fantasma";
                break;
            case "Dragon":
                capitalizedType = "Dragón";
                break;
            case "Fairy":
                capitalizedType = "Hada";
                break;
            case "Dark":
                capitalizedType = "Siniestro";
                break;
            case "Steel":
                capitalizedType = "Metal";
                break;
            default: capitalizedType;
        }

        pokemonType.innerHTML = capitalizedType;
        pokemonType.className = "pokemon-type";
        pokemonType.id = "pokemon-type-" + value;
        card.appendChild(pokemonType);
    })

    // Generación de la tarjeta emergente de los pokemon 
    let modalBtn = document.createElement("button");
    modalBtn.className = "myBtn";
    modalBtn.innerHTML = "Open mod";

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
    modalInfo.innerHTML += pokemonName.outerHTML + pokemonNumber.outerHTML + pokemonImage.outerHTML;


    modalContent.appendChild(modalSpan);
    modalContent.appendChild(modalInfo);
    modal1.appendChild(modalContent);

    card.appendChild(pokemonImagediv);
    card.appendChild(pokemonNumber);
    card.appendChild(pokemonName);
    card.appendChild(modalBtn);
    card.appendChild(modal1);

    document.getElementById("container").appendChild(card);
};

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
    window.onclick = function(event) {
        if(event.target.classList.contains('modal') ) {
            for(let modal of modals) {
                if(typeof modal.style !== 'undefined') {
                    modal.style.display = 'none';    
                }
            }
        }
    }
    
    window.onkeydown = function(event) {
        if (event.key == 'Escape') {
            for(let modal of modals) {
                modal.style.display = 'none';
            }
        }
    }
/*
    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function (event) {
        if (event.target == modal[ii]) {
            modal[ii].style.display = "none";
        }
    }
*/
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
