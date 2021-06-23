// ----------------------------------------------------------
// Manipulacion de la data de Pokemon 
import data from './data/pokemon/pokemon.js';
import initiator from './GeneratorPokemons.js';
import pokemons from './data.js';

let newOrder = data.pokemon;
initiator.loadData(newOrder);

// Manipulación de la tarjeta emergente 

// Get the modal
let modals = document.getElementsByClassName("modal");

// Get the button that opens the modal
let btn = document.getElementsByClassName("myBtn");

// Get the <span> element that closes the modal
let span = document.getElementsByClassName("close");

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
let oldcards = document.getElementsByClassName("pokemon-card");

// manipulación del filtro 
for (let e=0; e<4; e++){
    let filter = document.getElementsByName("filter")[e]
    filter.addEventListener('click',function(){
        if ( filter.checked){
            oldcards = document.getElementsByClassName("pokemon-card");
            while(oldcards[0]){
                oldcards[0].parentNode.removeChild(oldcards[0]);
            }

            newOrder= pokemons.sortData(data,filter.value,filter.className);
            initiator.loadData(newOrder);
       };
    })
}

let listTypes = [];
let filteredPokemons;
let counter = 18;

for (let c=0; c<18; c++){
    let filterTypes = document.getElementsByName("type1")[c]
    filterTypes.addEventListener('click',function(){

        if (!filterTypes.checked){
            const index = listTypes.indexOf(filterTypes.value);
            if (index > -1) {
                listTypes.splice(index, 1);
            }   
            oldcards = document.getElementsByClassName("pokemon-card");
            while(oldcards[0]){
                oldcards[0].parentNode.removeChild(oldcards[0]);
            }

            filteredPokemons = pokemons.filterData(newOrder,listTypes)
            initiator.loadData(filteredPokemons);
            counter+=1
            if (counter==18){
                initiator.loadData(newOrder)
            }

        }

    if (filterTypes.checked){
         listTypes.push(filterTypes.value);
         oldcards = document.getElementsByClassName("pokemon-card");
            while(oldcards[0]){
                oldcards[0].parentNode.removeChild(oldcards[0]);
            }
            counter-=1
            filteredPokemons = pokemons.filterData(newOrder,listTypes)
            initiator.loadData(filteredPokemons);

        }
    })
    }

