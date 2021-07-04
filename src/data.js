

export {sortAZ};

const sortAZ = (dataPokemon, value) => {
    if (value === 'A-Z') {
      dataPokemon.sort((a, b) => a.name.localeCompare(b.name));
    } else {
      dataPokemon.sort((a, b) => b.name.localeCompare(a.name));
    }
  };



