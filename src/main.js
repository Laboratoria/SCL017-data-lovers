import { example } from './data.js';
// import data from './data/lol/lol.js';
import data from './data/pokemon/pokemon.js';
// import data from './data/rickandmorty/rickandmorty.js';
console.log(data);


const start =  document.getElementById('start');

const togo = () => {
    document.getElementById('home').className = " hide container " 
    document.getElementById('second-window').className = "second-window "
<<<<<<< HEAD
    document.getElementById('logo').className = "hide"
=======
    document.getElementById("logo").className = "hide"
>>>>>>> master
}

start.addEventListener("click", togo, false);

