import { example } from './data.js';
// import data from './data/lol/lol.js';
// import data from './data/pokemon/pokemon.js';
import data from './data/rickandmorty/rickandmorty.js';

document.getElementById("pasarPagina").addEventListener("click", function () {
    document.getElementById("paginaUno").style.display = "none";
    document.getElementById("paginaDos").style.display = "block";
});

const { info, results } = data;
for (let i = 0; i < results.length; i++) {
    const personajes = results[i]

    const caja = document.createElement("div")
    caja.className = "personaje";

    const itemImg = document.createElement("img")
    itemImg.src = personajes.image
    itemImg.className = "imagen"
    caja.appendChild(itemImg);
    
    const cajaNombre = document.createElement("div")
    cajaNombre.className = "nombre";
    const texto = document.createTextNode(personajes.name);
    cajaNombre.appendChild(texto);
    caja.appendChild(cajaNombre)

    const cajaBoton = document.createElement("button")
    cajaBoton.className = "button";
    const textoBoton = document.createTextNode("Ver ficha completa");
    cajaBoton.appendChild(textoBoton);
    caja.appendChild(cajaBoton)

    document.getElementById("root").appendChild(caja)
}
console.log(example, data);
