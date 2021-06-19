const initiator = {
    loadData: (datapokemon) => {
        for (let i = 0; i < datapokemon.length; i++) {

//Generación de la tarjeta pokemon (página principal)
            let card = document.createElement("article");
            card.className = "pokemon-card";

// Generación de los elementos de la tarjeta pokemon (página principal)
            let pokemonName = document.createElement("div");
            let capitalizedName = datapokemon[i].name.charAt(0).toUpperCase() + datapokemon[i].name.slice(1);
            pokemonName.innerHTML = capitalizedName;
            pokemonName.className = "pokemon-name";

            let pokemonNumber = document.createElement("div");
            pokemonNumber.innerHTML = datapokemon[i].num;
            pokemonNumber.className = "pokemon-number";

            let pokemonImagediv = document.createElement("div");
            let pokemonImage = document.createElement("img");
            pokemonImage.src = datapokemon[i].img;
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

            datapokemon[i].type.forEach(function (value) {
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
            modalImg.src = datapokemon[i].img;
            modalImg.className = "modal-img";
            let modalName = pokemonName.cloneNode(true);

            let pokemonRarity = document.createElement("div");
            pokemonRarity.textContent = "Rareza: " + datapokemon[i]["pokemon-rarity"];
            let pokemonEgg = document.createElement("p");
            pokemonEgg.innerHTML = "Egg km: " + datapokemon[i].egg;
            let pokeBuddy = document.createElement("p");
            pokeBuddy.textContent = "Buddy distance: " + datapokemon[i]["buddy-distance-km"] + "km";
            let fleeRate = document.createElement("p");
            let flee = datapokemon[i].encounter["base-flee-rate"];
            fleeRate.textContent = "Tasa de escape: " + Math.floor(flee*100) + "%";
            let captureRate = document.createElement("p");
            let capture = datapokemon[i].encounter["base-capture-rate"];
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
            datapokemon[i].weaknesses.forEach(function (value) {
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
            datapokemon[i].resistant.forEach(function (value) {
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
            
 // Append all teh cards 
            modalContent.appendChild(modalSpan);
            modalContent.appendChild(modalInfo);
            modal1.appendChild(modalContent);

//  card.appendChild(pokemonNumber);
            card.appendChild(pokemonImagediv);

            card.appendChild(pokemonName);
            card.appendChild(modalBtn);
            card.appendChild(modal1);

            document.getElementById("container").appendChild(card);

// Cambio de nombre de los tipos en español
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
            
        };
    }
}
export default initiator;
