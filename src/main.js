import data from './data/rickandmorty/rickandmorty.js'
import {example}  from './data.js'

// Vamos a hacer que la pagina uno pase a la pagina dos
document.getElementById("pasarPagina").addEventListener("click", function () {
    paginaDos()
    cajasPantalla(data.results)
})

// Buscar personajes por nombre
document.getElementById("txtBuscador").addEventListener("change", function (event) {
    const texto = event.target.value.toLowerCase()
    
    // Buscando con filter
    const nuevasCajas = data.results.filter(personaje => personaje.name.toLowerCase().indexOf(texto) > -1)
    cajasPantalla(nuevasCajas)
})
const paginaDos = () => {
    document.getElementById("paginaUno").style.display = "none";
    document.getElementById("paginaDos").style.display = "block";
}

 const cajasPantalla = (results) => {
    0
    limpiarPantalla()
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
}

export const limpiarPantalla = () => {
    document.getElementById("root").innerHTML = ""
}