import { example } from './data.js';
import data from './data/rickandmorty/rickandmorty.js';

const { info, results } = data;
for (let i = 0; i <results.length; i++) {
    const personajes = results[i]

    const caja = document.createElement("div")
    caja.className = "personaje";

    const cajaNombre = document.createElement("div")
    cajaNombre.className = "nombre";
    const texto = document.createTextNode(personajes.name);
    cajaNombre.appendChild(texto);
    caja.appendChild(cajaNombre)

    const itemImg = document.createElement("img")
    itemImg.src = personajes.image
    itemImg.className = "imagen"
    caja.appendChild(itemImg);

    document.getElementById("root").appendChild(caja)
}

console.log(example, data.results);
