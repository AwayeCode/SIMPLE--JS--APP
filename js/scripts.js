let pokemonList = [
  {
    name: `Bulbasaur`,
    height: 0.7,
    types: [`grass`, `poison`]
  },
  {
    name: `Sharpedo`,
    height: 1.7,
    types: [`fire`, `flying`]
  },
  {
    name: `Wailord`,
    height: 1,
    types: [`water`]
  }
];

pokemonList.forEach(function (pokemon) {
  document.write(pokemon.name + " is" + " " + pokemon.height + " in height" + " and is a type of" + " " + pokemon.types);
})


let pokemonRepository = (function () {
  let pokemonList = [{
    name: `Bulbasaur`,
    height: 0.7,
    types: [`grass`, `poison`]
  },
  {
    name: `Sharpedo`,
    height: 1.7,
    types: [`fire`, `flying`]
  },
  {
    name: `Wailord`,
    height: 1,
    types: [`water`]
  }]

  function add(pokemon) {
    pokemonList.push(pokemon);
  }

  function getAll() {
    return pokemonList;
  }

  return {
    add: add,
    getAll: getAll
  };
})();
document.write(pokemonRepository.getAll());
console.log(pokemonRepository.getAll());

pokemonRepository.forEach(function (pokemon) {
  document.write(pokemonRepository.name + " is" + " " + pokemon.height + " in height" + " and is a type of" + " " + pokemon.types);
})

