const initiator = {
    loadData: (datapokemon) => {
        for (let i = 0; i < datapokemon.length; i++) {

            //---------------------------------------------------------------------
            //Generación de la tarjeta pokemon (página principal)
            //---------------------------------------------------------------------
            let card = document.createElement("article");
            card.className = "pokemon-card";

            //---------------------------------------------------------------------            
            // Generación de los elementos de la tarjeta pokemon (página principal)

            // Generación del nombre del pokemon
            let pokemonName = document.createElement("div");
            let capitalizedName = datapokemon[i].name.charAt(0).toUpperCase() + datapokemon[i].name.slice(1); // Primera letra mayuscula
            
            // Quito el parentesis del nombre de estos dos pokemons
            if (capitalizedName=="Nidoran ♀ (female)"){
                capitalizedName = "Nidoran ♀";
            }else if (capitalizedName == "Nidoran ♂ (male)"){
                capitalizedName = "Nidoran ♂"
            }
            
            pokemonName.innerHTML = capitalizedName;
            
            pokemonName.className = "pokemon-name";

            //Generación del numero del pokemon
            let pokemonNumber = document.createElement("div");
            pokemonNumber.innerHTML = datapokemon[i].num;
            pokemonNumber.className = "pokemon-number";

            //Generación de la imagen del pokemon 
            let pokemonImagediv = document.createElement("div");
            let pokemonImage = document.createElement("img");
            pokemonImage.src = datapokemon[i].img;
            pokemonImage.className = "pokemon-image";
            pokemonImagediv.className = "pokemon-image-div";
            pokemonImagediv.appendChild(pokemonNumber); //append el numero a la imagen del pokemon
            pokemonImagediv.appendChild(pokemonImage);

            // Generación de los tipos de pokemon 
            datapokemon[i].type.forEach(function (value) {
                let pokemonType = document.createElement("div");
                let capitalizedType = value.charAt(0).toUpperCase() + value.slice(1); // Primera letra mayuscula
                capitalizedType = translateType(capitalizedType); // Traduzco el tipo del pokemon esta en ingles en la data 
                pokemonType.innerHTML = capitalizedType;
                pokemonType.className = "pokemon-type";
                pokemonType.id = "pokemon-type-" + value;
                card.appendChild(pokemonType); // agrego los tipos a la tarjeta pokemon

            })

            //---------------------------------------------------------------------
            // Generación de la tarjeta emergente de los pokemon (modal)
            //---------------------------------------------------------------------

            // Genero el boton para abrir el modal
            let modalBtn = document.createElement("button");
            modalBtn.className = "myBtn";
            modalBtn.innerHTML = "Más";

            // Genero mi tarjeta emergente
            let modalCard = document.createElement("div");
            modalCard.id = "myModal";
            modalCard.className = "modal";

            // Genero donde ira el contenido 
            let modalContent = document.createElement("div");
            modalContent.className = "modal-content";

            // Genero el boton de cerrado 
            let modalSpan = document.createElement("span");
            modalSpan.className = "close";
            modalSpan.innerHTML = "&times;";

            // Genero donde irá la información 
            let modalInfo = document.createElement("div");
            modalInfo.className = "modal-info";

            //-------------------------------------------------------------
            // Generación de los elementos de la tarjeta emergente

            // Generacion del div que contiene el modalInfo y el modalMoreInfo
            let modalInfoDiv = document.createElement("div");
            modalInfoDiv.className = "modal-info-div";

            // Generacion del div de la info general
            let modalInfoPokemon = document.createElement("div");
            modalInfoPokemon.className = "div-pokemon-info";

            // Generacion del div de la resistencia y debilidad de los pokes
            let modalMoreInfo = document.createElement("div");
            modalMoreInfo.className = "div-more-info";

            // Generacion del div de evoluciones 
            let modalInfoEvolutions = document.createElement("div");
            modalInfoEvolutions.className = "div-evolutions";

            // Clono la imagen del pokemon
            let modalImg = pokemonImage.cloneNode(true);

            // Clono el nombre del pokemon
            let modalName = pokemonName.cloneNode(true);

            // Genero la informacion de la rareza del pokemon
            let pokemonRarity = document.createElement("div");
            pokemonRarity.textContent = "Rareza: " + datapokemon[i]["pokemon-rarity"];

            // Genero la informacion de cuanto caminar con los huevos
            let pokemonEgg = document.createElement("p");
            let pokemonEggInfo = datapokemon[i].egg;
            if (pokemonEggInfo == "not in eggs") {
                pokemonEggInfo = "No en huevos";
            }
            pokemonEgg.innerHTML = "Egg km: " + pokemonEggInfo;


            // Genero la informacion de cuanto caminar con el pokeBuddy para obtener los candies
            let pokeBuddy = document.createElement("p");
            pokeBuddy.textContent = "Buddy distance: " + datapokemon[i]["buddy-distance-km"] + " km";

            // Genero la informacion de la tasa de escape
            let fleeRate = document.createElement("p");
            let flee = datapokemon[i].encounter["base-flee-rate"];
            fleeRate.textContent = "Tasa de escape: " + Math.floor(flee * 100) + "%";

            // Genero la informacion de la tasa de captura
            let captureRate = document.createElement("p");
            let capture = datapokemon[i].encounter["base-capture-rate"];
            captureRate.textContent = "Tasa de captura: " + Math.floor(capture * 100) + "%";

            // Agrego al div de informacion inicial
            modalInfoPokemon.appendChild(modalImg);
            modalInfoPokemon.appendChild(modalName);
            modalInfoPokemon.appendChild(pokemonRarity);
            modalInfoPokemon.appendChild(pokemonEgg);
            modalInfoPokemon.appendChild(pokeBuddy);
            modalInfoPokemon.appendChild(fleeRate);
            modalInfoPokemon.appendChild(captureRate);

            //Genero la informacion de las debilidades del pokemon
            let modalWeak = document.createElement("p");
            modalWeak.nameClass ="modal-weakness";
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

            // Generalo la informacion de las debilidades del pokemon
            let modalResistant = document.createElement("p");
            modalResistant.innerHTML = "Resistente a: ";
            modalResistant.nameClass ="modal-resistant";
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

            // Generacion de la siguiente evolución de los pokemon (solo la siguiente)
            if (datapokemon[i].evolution["next-evolution"] !== undefined) {
                // Genero el elemento de la lista para el nombre de la evolucion (puede haber mas de una evolucion siguiente)
                let contenidoEvolution = document.createElement("ul");
                contenidoEvolution.nameClass ="name-evol";
                contenidoEvolution.textContent = "Evoluciona a:";
                modalInfoEvolutions.appendChild(contenidoEvolution);
                // Busco la informacion de las evoluciones (1 o más) y las pongo en la lista (entrega nombre del pokemon y cuantos candies necesita para evolucionar)
                for (let j = 0; j < datapokemon[i].evolution["next-evolution"].length; j++) {
                    let evolution = document.createElement("li");
                    let evoNamePoke = datapokemon[i].evolution["next-evolution"][j].name;
                    evolution.innerHTML = evoNamePoke.charAt(0).toUpperCase() + evoNamePoke.slice(1) +" con " + datapokemon[i].evolution["next-evolution"][j]["candy-cost"] +" dulces";
                    modalInfoEvolutions.appendChild(evolution);
                }

            }
            //Agrego la informacion al div de informacion general (contiene al modalInfoPokemon y el modalMoreInfo)
            modalInfoDiv.appendChild(modalInfoPokemon);
            modalInfoDiv.appendChild(modalMoreInfo);
            //Aggrego la informacion de los modales de informacion y evolucion 
            modalInfo.appendChild(modalInfoDiv);
            modalInfo.appendChild(modalInfoEvolutions);

            // Agrego las cosas al div de contenido del modal
            modalContent.appendChild(modalSpan);
            modalContent.appendChild(modalInfo);
            modalCard.appendChild(modalContent);

            // Agrego todo a las tarjetas de pokemon (de la pagina principal)
            // El tipo de los pokemones esta agregado antes
            card.appendChild(pokemonImagediv);
            card.appendChild(pokemonName);
            card.appendChild(modalBtn);   // boton para ingresar a la tarjeta emergente  
            card.appendChild(modalCard); // tarjeta emergente

            // Envia las tarjetas al contenedor de tarjetas del HTML
            document.getElementById("container").appendChild(card);
        };

        //-------------------------------------------------------------------------------------
        // FUNCIONES
        //-------------------------------------------------------------------------------------

        // Funcion que hace el cambio de nombre de los tipos al español
        function translateType(capitalized) {
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


    }
}
export default initiator;




