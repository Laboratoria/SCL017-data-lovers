// ----------------------------------------------------------
// Manipulacion de la data de Pokemon 
import data from './data/pokemon/pokemon.js';
import initiator from './GeneratorPokemons.js';
import pokemons from './data.js';

let newOrder = data.pokemon;
initiator.loadData(newOrder);

// Manipulación de la tarjeta emergente 

let modals = document.getElementsByClassName("modal");
let btn = document.getElementsByClassName("myBtn");
let span = document.getElementsByClassName("close");

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
// filtro para orden de nombre y número
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
            
       };
    })
}
//Filtro para tipos de pokemones
let listTypes = ["type"];
let filteredPokemons;
let counter = 18;
let index;
for (let c=0; c<18; c++){
    let filterTypes = document.getElementsByName("type")[c]
    filterTypes.addEventListener('click',function(){

        if (!filterTypes.checked){
            index = listTypes.indexOf(filterTypes.value);
            if (index > -1) {
                listTypes.splice(index, 1);
            }   
            oldcards = document.getElementsByClassName("pokemon-card");
            while(oldcards[0]){
                oldcards[0].parentNode.removeChild(oldcards[0]);
            }

            newOrder = pokemons.filterData(newOrder,listTypes)
            initiator.loadData(newOrder);
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

            counter+=1
        
            if (counter==18){
                newOrder = data.pokemon;
                initiator.loadData(newOrder)
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

    if (filterTypes.checked){
         listTypes.push(filterTypes.value);
         oldcards = document.getElementsByClassName("pokemon-card");
            while(oldcards[0]){
                oldcards[0].parentNode.removeChild(oldcards[0]);
            }
            counter-=1
            newOrder = pokemons.filterData(newOrder,listTypes)
            initiator.loadData(newOrder);
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
//Filtro para tipo de debilidad de pokemones
let listWeaknesses = ["weaknesses"];
let filteredPokemons2;
let counter2 = 18;

for (let c=0; c<18; c++){
    let filterWeaknesses = document.getElementsByName("weaknesses")[c]
    filterWeaknesses.addEventListener('click',function(){

        if (!filterWeaknesses.checked){
            index = listWeaknesses.indexOf(filterWeaknesses.value);
            if (index > -1) {
                listWeaknesses.splice(index, 1);
            }   
            oldcards = document.getElementsByClassName("pokemon-card");
            while(oldcards[0]){
                oldcards[0].parentNode.removeChild(oldcards[0]);
            }

            newOrder = pokemons.filterData(newOrder,listWeaknesses)
            initiator.loadData(newOrder);
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

            counter2+=1
            if (counter2==18){
                newOrder = data.pokemon;
                initiator.loadData(newOrder)
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

    if (filterWeaknesses.checked){
        listWeaknesses.push(filterWeaknesses.value);
         oldcards = document.getElementsByClassName("pokemon-card");
            while(oldcards[0]){
                oldcards[0].parentNode.removeChild(oldcards[0]);
            }
            counter2-=1
            newOrder = pokemons.filterData(newOrder,listWeaknesses)
            initiator.loadData(newOrder);
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

// Filtro para las generaciones de pokemones 
let listGeneration = ["generation"];
let filteredPokemons3;
let counter3 = 18;

for (let c=0; c<2; c++){
    let filterGeneration = document.getElementsByName("generation")[c]
    filterGeneration.addEventListener('click',function(){
        if (!filterGeneration.checked){
            index = listGeneration.indexOf(filterGeneration.value);
            if (index > -1) {
                listGeneration.splice(index, 1);
            }   
            oldcards = document.getElementsByClassName("pokemon-card");
            while(oldcards[0]){
                oldcards[0].parentNode.removeChild(oldcards[0]);
            }
            newOrder = pokemons.filterData(newOrder,listGeneration)
            initiator.loadData(newOrder);
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

            counter3+=1
            if (counter3==18){
                newOrder = data.pokemon;
                initiator.loadData(newOrder)
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

    if (filterGeneration.checked){
        listGeneration.push(filterGeneration.value);
         oldcards = document.getElementsByClassName("pokemon-card");
            while(oldcards[0]){
                oldcards[0].parentNode.removeChild(oldcards[0]);
            }
            counter3-=1
            newOrder= pokemons.filterData(newOrder,listGeneration)
            initiator.loadData(newOrder);
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





//Scroll to top btn -----------------------------------------------------------------------------
//Get the button
const mybutton = document.getElementById("top-btn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

mybutton.addEventListener("click", topFunction);

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  }



