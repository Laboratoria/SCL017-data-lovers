function compareObjects(object1, object2, key, direction) {
  const obj1 = object1[key].toUpperCase();
  const obj2 = object2[key].toUpperCase();

  let score = 1;

  if (direction) {
    score *= -1;
  }

  if (obj1 > obj2) {
    return score
  }

  if (obj1 < obj2) {
    return -score
  }

  return 0
}

const pokemons = {
  sortData: (data, sortBy, sortOrder) => {

    let sortDirection;
    if (sortOrder == "upwardFilter") {
      sortDirection = false;
    }
    if (sortOrder == "downwardFilter") {
      sortDirection = true;
    }

    return data.pokemon.sort((object1, object2) => {
      return compareObjects(object1, object2, sortBy, sortDirection)

    })
  },

  filterData: (data, condition) => {

    if (condition[0] == "type") {
      const filteredTypesPokemon = data.filter(d => d.type.some(c => condition.includes(c)));
      return filteredTypesPokemon

    }
    if (condition[0] == "weaknesses") {
      const filteredWeaknesses = data.filter(d => d.weaknesses.some(c => condition.includes(c)));
      return filteredWeaknesses

    }
    if (condition[0] == "generation") {
      const filteredGeneration = data.filter(fila => condition.includes(fila.generation.name));
      return filteredGeneration
    }
  }
}

export default pokemons
