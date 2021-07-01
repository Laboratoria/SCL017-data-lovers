import data from './data/rickandmorty/rickandmorty.js'
import { cajasPantalla, paginaDos }  from './data.js'

// Vamos a hacer que la pagina uno pase a la pagina dos
document.getElementById("pasarPagina").addEventListener("click", function () {
    paginaDos()
    cajasPantalla(data.results)
})

// Buscar personajes por nombre
document.getElementById("txtBuscador").addEventListener("change", function (event) {
    const texto = event.target.value.toLowerCase()
    
    // Buscando con filter
    const nuevasCajas = data.results.
    filter(personaje => personaje.name.toLowerCase().indexOf(texto) > -1)
    cajasPantalla(nuevasCajas)
})
