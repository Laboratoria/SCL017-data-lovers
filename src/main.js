import data from './data/rickandmorty/rickandmorty.js'
import { filterData, sortData }  from './data.js'

// Vamos a hacer que la pagina uno pase a la pagina dos
document.getElementById("pasarPagina").addEventListener("click", function () {
    paginaDos()
    cajasPantalla(data.results)
})

// Buscar personajes por nombre
document.getElementById("txtBuscador").addEventListener("change", function (event) {
    
    const name = event.target.value.toLowerCase()
    const specie = document.getElementById("filtroE").value
    console.log({
        name,
        specie,
        event,
        cajasPantalla: filterData(data.results, {
            name,
            specie
        })
    })
    // Buscando con filter
    // const nuevasCajas = data.results.filter(personaje => personaje.name.toLowerCase().indexOf(texto) > -1)
    // cajasPantalla(nuevasCajas)
    cajasPantalla(filterData(data.results, {
        name,
        specie
    }))
})

const modificaModalSpan = (identificador, valor) => {
    document.getElementById("modal" + identificador).innerText = valor;
}


const abrirModal = (personaje) => {
    document.getElementById('modal').style.display = "block";
    console.log({ personaje })

    document.getElementById("modalTitulo").innerText = personaje.name

    modificaModalSpan("Genero", personaje.gender);
    modificaModalSpan("Estado", personaje.status);
    modificaModalSpan("Origen", personaje.origin.name); // añadir link
    modificaModalSpan("Especie", personaje.species);
    modificaModalSpan("Tipo", personaje.type === "" ? "No especificado" : personaje.type);

    document.getElementById("modalImagen").src = personaje.image;
}

const cerrarModal = () => {
    document.getElementById('modal').style.display = "none";
}

const paginaDos = () => {

    document.getElementById("paginaUno").style.display = "none";
    document.getElementById("paginaDos").style.display = "block";
}

 const cajasPantalla = (results) => {
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
        caja.appendChild(cajaNombre);

        const cajaBoton = document.createElement("button")
        cajaBoton.className = "button";
        const textoBoton = document.createTextNode("Ver ficha completa");
        cajaBoton.appendChild(textoBoton);
        // Abrir modal
        cajaBoton.addEventListener("click", function () {
            abrirModal(personajes)
        })

        caja.appendChild(cajaBoton);


        document.getElementById("root").appendChild(caja)
    }
}

export const limpiarPantalla = () => {
    document.getElementById("root").innerHTML = ""
}

const ordenar = () => {
    const sortOrden = document.getElementById('filtro').value
    const specie = document.getElementById("filtroE").value
    const name = document.getElementById("txtBuscador").value

    cajasPantalla(sortData(filterData(data.results, {
        name,
        specie
    }), 'name', sortOrden))
}

document.getElementById("filtroE").addEventListener("change", ordenar);
document.getElementById('filtro').addEventListener("change", ordenar);

document.getElementById("modalButton").addEventListener("click", cerrarModal)


// console.log(sortData(data.results, 'name', 'ASC'))
