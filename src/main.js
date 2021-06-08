import { example } from './data.js';
// import data from './data/lol/lol.js';
import data from './data/pokemon/pokemon.js';
// import data from './data/rickandmorty/rickandmorty.js';

console.log(example, data);


let eventWindow = function(event){
    event.preventDefault();
    let element = event.target;
    let removerHide = element.closset("#second-window");
    removerHide.classList.remove("hide");


}

send.addEventListener("click", eventWindow, false);