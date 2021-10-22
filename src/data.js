
import data from './data/rickandmorty/rickandmorty.js'

export const example = () => {
  return 'example';
};

export const anotherExample = () => {
  return 'OMG';
};
//esta función filter o filtrar recibiría la data, y nos retornaría aquellos datos que sí cumplan con la condición.//


export const filterData = (data, condition) => {
  const nombre = condition.name.toLowerCase() || ''
  const specie = condition.specie || 'NoEspecie'


  return data.filter((personaje) => {
      const esNombre = nombre.trim() !== ''
      const esSpecie = specie !== 'NoEspecie'

      if (esSpecie && personaje.species.indexOf(specie) === -1) {
        return false
      }

      if (esNombre && personaje.name.toLowerCase().indexOf(nombre) === -1) {
        return false
      } 
      return true
    }
  )
}

export const sortData = (data, sortBy, sortOrden) => {
  return data.sort((a, b) => {
    if (sortOrden === 'ASC') {
      // https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
      return a[sortBy] > b[sortBy] ? 1 : -1
    } else {
      return a[sortBy] < b[sortBy] ? 1 : -1
    }
  })
}

// sortData(data, 'name', 'ASC')
// sortData(data, 'name', 'DESC')





//Idea Inicial con modificaciones 
// export const pjsFiltrados = () => results.filter(x => x.species == ["Human", "Alien"])
//Idea Inicial
// const pjsFiltrados = results.filter(x => x.species == "Human") //


