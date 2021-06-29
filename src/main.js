// ----------------------------------------------------------
// Manipulacion de la data de Pokemon 
//----------------------------------------------------
import data from './data/pokemon/pokemon.js';
import initiator from './GeneratorPokemons.js';
import pokemons from './data.js';

let newOrder = data.pokemon; // obtenemos data desde el archivo de datos .js

// Generamos las tarjetas de los pokemon
for (let i = 0; i < data.pokemon.length; i++) {
    initiator.loadData(newOrder[i]);
}

//----------------------------------------------------
// Manipulación de la tarjeta emergente 
//----------------------------------------------------
let modals = document.getElementsByClassName("modal");
let btn = document.getElementsByClassName("myBtn");
let span = document.getElementsByClassName("close");
// Por cada tarjeta emergente que esta aparezca y desaparezca al hacer click
// Tambien cerrar si apretamos escape y si tocamos fuera de la tarjeta
for (let ii = 0; ii < newOrder.length; ii++) {
    btn[ii].onclick = function () {
        modals[ii].style.display = "block";
    }
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

//-------------------------------------------------------
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

//------------------------------------------------------------------------
//Scroll to top button 
const mybutton = document.getElementById("top-btn");

//Cuando se baja mas de 20px se usa la funcion que hace aparecer el boton
window.onscroll = function () { scrollFunction() };

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
}
mybutton.addEventListener("click", topFunction);

// Funcion que lleva al tope de la pagina
function topFunction() {
    document.documentElement.scrollTop = 0;
}


//-----------------------------------------------------------------------------
// Manipulacion de filtros (separamos entre las tarjetas nuevas y antiguas)
//-----------------------------------------------------------------------------
let oldcards = document.getElementsByClassName("pokemon-card");

//-----------------------------------------------------------------------------
// Filtro para ordenar por nombre y numero del pokemon
for (let e = 0; e < 4; e++) {
    let filter = document.getElementsByName("filter")[e]
    filter.addEventListener('click', function () {
        if (filter.checked) {
            oldcards = document.getElementsByClassName("pokemon-card");
            while (oldcards[0]) {
                oldcards[0].parentNode.removeChild(oldcards[0]);
            }

            newOrder = pokemons.sortData(data, filter.value, filter.className);

            for (let i = 0; i < newOrder.length; i++) {
                initiator.loadData(newOrder[i]);
            }

            modals = document.getElementsByClassName("modal");
            btn = document.getElementsByClassName("myBtn");
            span = document.getElementsByClassName("close");
            for (let ii = 0; ii < newOrder.length; ii++) {
                btn[ii].onclick = function () {
                    modals[ii].style.display = "block";
                }
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

        }
    })
}
//-----------------------------------------------------------------------------
// Filtrando por las generaciones 
let listGeneration = ["generation"];
let counter3 = 18;

for (let c = 0; c < 2; c++) {
    let filterGeneration = document.getElementsByName("generation")[c]
    filterGeneration.addEventListener('click', function () {
        if (!filterGeneration.checked) {
            index = listGeneration.indexOf(filterGeneration.value);
            if (index > -1) {
                listGeneration.splice(index, 1);
            }
            oldcards = document.getElementsByClassName("pokemon-card");
            while (oldcards[0]) {
                oldcards[0].parentNode.removeChild(oldcards[0]);
            }

            newOrder = pokemons.filterData(newOrder, listGeneration)

            for (let i = 0; i < newOrder.length; i++) {
                initiator.loadData(newOrder[i]); // iniciamos el js de GeneratorPokemon el cual hace las tarjetas
            }

            modals = document.getElementsByClassName("modal");
            btn = document.getElementsByClassName("myBtn");
            span = document.getElementsByClassName("close");
            for (let ii = 0; ii < newOrder.length; ii++) {
                btn[ii].onclick = function () {
                    modals[ii].style.display = "block";
                }
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

            counter3 += 1
            if (counter3 == 18) {
                newOrder = data.pokemon;
                for (let i = 0; i < newOrder.length; i++) {
                    initiator.loadData(newOrder[i]); // iniciamos el js de GeneratorPokemon el cual hace las tarjetas
                }
                modals = document.getElementsByClassName("modal");
                btn = document.getElementsByClassName("myBtn");
                span = document.getElementsByClassName("close");
                for (let ii = 0; ii < newOrder.length; ii++) {
                    btn[ii].onclick = function () {
                        modals[ii].style.display = "block";
                    }
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

            }

        }

        if (filterGeneration.checked) {
            listGeneration.push(filterGeneration.value);
            oldcards = document.getElementsByClassName("pokemon-card");
            while (oldcards[0]) {
                oldcards[0].parentNode.removeChild(oldcards[0]);
            }
            counter3 -= 1
            newOrder = pokemons.filterData(newOrder, listGeneration)
            for (let i = 0; i < newOrder.length; i++) {
                initiator.loadData(newOrder[i]); // iniciamos el js de GeneratorPokemon el cual hace las tarjetas
            }
            modals = document.getElementsByClassName("modal");
            btn = document.getElementsByClassName("myBtn");
            span = document.getElementsByClassName("close");
            for (let ii = 0; ii < newOrder.length; ii++) {
                btn[ii].onclick = function () {
                    modals[ii].style.display = "block";
                }
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

        }
    })
}
//-----------------------------------------------------------------------------
//Filtramos por tipo de pokemon
let listTypes = ["type"];
let counter = 18;
let index;
for (let c = 0; c < 18; c++) {
    let filterTypes = document.getElementsByName("type")[c]
    filterTypes.addEventListener('click', function () {

        if (!filterTypes.checked) {
            index = listTypes.indexOf(filterTypes.value);
            if (index > -1) {
                listTypes.splice(index, 1);
            }
            oldcards = document.getElementsByClassName("pokemon-card");
            while (oldcards[0]) {
                oldcards[0].parentNode.removeChild(oldcards[0]);
            }

            newOrder = pokemons.filterData(newOrder, listTypes)

            for (let i = 0; i < newOrder.length; i++) {
                initiator.loadData(newOrder[i]); // iniciamos el js de GeneratorPokemon el cual hace las tarjetas
            }

            modals = document.getElementsByClassName("modal");
            btn = document.getElementsByClassName("myBtn");
            span = document.getElementsByClassName("close");
            for (let ii = 0; ii < newOrder.length; ii++) {
                btn[ii].onclick = function () {
                    modals[ii].style.display = "block";
                }
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

            counter += 1

            if (counter == 18) {
                newOrder = data.pokemon;
                for (let i = 0; i < newOrder.length; i++) {
                    initiator.loadData(newOrder[i]); // iniciamos el js de GeneratorPokemon el cual hace las tarjetas
                }
                modals = document.getElementsByClassName("modal");
                btn = document.getElementsByClassName("myBtn");
                span = document.getElementsByClassName("close");
                for (let ii = 0; ii < newOrder.length; ii++) {
                    btn[ii].onclick = function () {
                        modals[ii].style.display = "block";
                    }
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

            }

        }

        if (filterTypes.checked) {
            listTypes.push(filterTypes.value);
            oldcards = document.getElementsByClassName("pokemon-card");
            while (oldcards[0]) {
                oldcards[0].parentNode.removeChild(oldcards[0]);
            }
            counter -= 1
            newOrder = pokemons.filterData(newOrder, listTypes)
            for (let i = 0; i < newOrder.length; i++) {
                initiator.loadData(newOrder[i]); // iniciamos el js de GeneratorPokemon el cual hace las tarjetas
            }
            modals = document.getElementsByClassName("modal");
            btn = document.getElementsByClassName("myBtn");
            span = document.getElementsByClassName("close");
            for (let ii = 0; ii < newOrder.length; ii++) {
                btn[ii].onclick = function () {
                    modals[ii].style.display = "block";
                }
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

        }
    })
}
//-----------------------------------------------------------------------------
//Filtrando por tipo de debilidades
let listWeaknesses = ["weaknesses"];
let counter2 = 18;

for (let c = 0; c < 18; c++) {
    let filterWeaknesses = document.getElementsByName("weaknesses")[c]
    filterWeaknesses.addEventListener('click', function () {

        if (!filterWeaknesses.checked) {
            index = listWeaknesses.indexOf(filterWeaknesses.value);
            if (index > -1) {
                listWeaknesses.splice(index, 1);
            }
            oldcards = document.getElementsByClassName("pokemon-card");
            while (oldcards[0]) {
                oldcards[0].parentNode.removeChild(oldcards[0]);
            }

            newOrder = pokemons.filterData(newOrder, listWeaknesses)
            for (let i = 0; i < newOrder.length; i++) {
                initiator.loadData(newOrder[i]); // iniciamos el js de GeneratorPokemon el cual hace las tarjetas
            }
            modals = document.getElementsByClassName("modal");
            btn = document.getElementsByClassName("myBtn");
            span = document.getElementsByClassName("close");
            for (let ii = 0; ii < newOrder.length; ii++) {
                btn[ii].onclick = function () {
                    modals[ii].style.display = "block";
                }
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

            counter2 += 1
            if (counter2 == 18) {
                newOrder = data.pokemon;
                for (let i = 0; i < newOrder.length; i++) {
                    initiator.loadData(newOrder[i]); // iniciamos el js de GeneratorPokemon el cual hace las tarjetas
                }

                modals = document.getElementsByClassName("modal");
                btn = document.getElementsByClassName("myBtn");
                span = document.getElementsByClassName("close");
                for (let ii = 0; ii < newOrder.length; ii++) {
                    btn[ii].onclick = function () {
                        modals[ii].style.display = "block";
                    }
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

            }

        }

        if (filterWeaknesses.checked) {
            listWeaknesses.push(filterWeaknesses.value);
            oldcards = document.getElementsByClassName("pokemon-card");
            while (oldcards[0]) {
                oldcards[0].parentNode.removeChild(oldcards[0]);
            }
            counter2 -= 1

            newOrder = pokemons.filterData(newOrder, listWeaknesses);
            for (let i = 0; i < newOrder.length; i++) {
                initiator.loadData(newOrder[i]); // iniciamos el js de GeneratorPokemon el cual hace las tarjetas
            }

            modals = document.getElementsByClassName("modal");
            btn = document.getElementsByClassName("myBtn");
            span = document.getElementsByClassName("close");
            for (let ii = 0; ii < newOrder.length; ii++) {
                btn[ii].onclick = function () {
                    modals[ii].style.display = "block";
                }
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


        }
    })
}

//-----------------------------------------------------------------------------
//Filtrando por tipo de resistencias
let listResistant = ["resistant"];
let counter4 = 18;

for (let c = 0; c < 18; c++) {
    let filterResistant = document.getElementsByName("resistant")[c]

    filterResistant.addEventListener('click', function () {

        if (!filterResistant.checked) {
            index = listResistant.indexOf(filterResistant.value);
            if (index > -1) {
                listResistant.splice(index, 1);
            }
            oldcards = document.getElementsByClassName("pokemon-card");
            while (oldcards[0]) {
                oldcards[0].parentNode.removeChild(oldcards[0]);
            }

            newOrder = pokemons.filterData(newOrder, listResistant);
            
            for (let i = 0; i < newOrder.length; i++) {
                initiator.loadData(newOrder[i]); // iniciamos el js de GeneratorPokemon el cual hace las tarjetas
            }

            modals = document.getElementsByClassName("modal");
            btn = document.getElementsByClassName("myBtn");
            span = document.getElementsByClassName("close");
            for (let ii = 0; ii < newOrder.length; ii++) {
                btn[ii].onclick = function () {
                    modals[ii].style.display = "block";
                }
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

            counter4 += 1
            if (counter4 == 18) {
                newOrder = data.pokemon;

                for (let i = 0; i < newOrder.length; i++) {
                    initiator.loadData(newOrder[i]); // iniciamos el js de GeneratorPokemon el cual hace las tarjetas
                }

                modals = document.getElementsByClassName("modal");
                btn = document.getElementsByClassName("myBtn");
                span = document.getElementsByClassName("close");
                for (let ii = 0; ii < newOrder.length; ii++) {
                    btn[ii].onclick = function () {
                        modals[ii].style.display = "block";
                    }
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

            }

        }

        if (filterResistant.checked) {
            listResistant.push(filterResistant.value);
            oldcards = document.getElementsByClassName("pokemon-card");
            while (oldcards[0]) {
                oldcards[0].parentNode.removeChild(oldcards[0]);
            }
            counter4 -= 1
            newOrder = pokemons.filterData(newOrder, listResistant)

            for (let i = 0; i < newOrder.length; i++) {
                initiator.loadData(newOrder[i]); // iniciamos el js de GeneratorPokemon el cual hace las tarjetas
            }

            modals = document.getElementsByClassName("modal");
            btn = document.getElementsByClassName("myBtn");
            span = document.getElementsByClassName("close");
            for (let ii = 0; ii < newOrder.length; ii++) {
                btn[ii].onclick = function () {
                    modals[ii].style.display = "block";
                }
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


        }
    })
}



//-----------------------------------------------------------------------------
// Filtrar por nombre

const input1 = document.getElementById("find-pokemon");
const contenedor = document.getElementById("container");

let pokeArrayName = [];
for (let x = 0; x < data.pokemon.length; x++) {
    pokeArrayName[x] = (data.pokemon[x].name);
}

input1.addEventListener("keyup", (event) => {
    contenedor.innerHTML = ""

    const nombrePoke = event.target.value;

    const filterPoke = pokemons.findData(pokeArrayName, nombrePoke);
    // const filterPoke = pokeArrayName.filter(pokeArrayName => pokeArrayName.toLowerCase().includes(nombrePoke.toLowerCase()));

    for (let j = 0; j < data.pokemon.length; j++) {

        let idEachPoke = (pokeArrayName[j]);

        for (let jj = 0; jj < filterPoke.length; jj++) {
            if (idEachPoke == filterPoke[jj]) {

                initiator.loadData(newOrder[j]);
            }
            
        }
    }
});


//---------------------------------------------------------------------------------------------
//---------------------------------------------------------------------------------------------
