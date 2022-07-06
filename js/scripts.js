let pokemonRepository = (function () {
  let repository = [
    {
      name: `Bulbasaur`,
      height: 1.7,
      type: [`grass`, `poison`],
    },
    {
      name: `Charizard`,
      height: 0.7,
      type: [`fire`, `flying`],
    },
    {
      name: `Squirtle`,
      height: 1,
      type: [`water`],
    },
  ];
  function add(pokemon) {
    repository.push(pokemon);
  }
  function getAll() {
    return repository;
  }
  function showDetails(pokemon) {

    console.log(pokemon,'detail');
  }
  function addListItem(pokemon) {
    const pokemonList = document.querySelector(".pokemon-list");
    const listPokemon = document.createElement("li");
    const container = document.querySelector(".container");
    const button = document.createElement("button");
    button.classList.add('button-class')
    listPokemon.classList.add('list')
    listPokemon.appendChild(button)
    button.innerText = pokemon.name;
    pokemonList.appendChild(listPokemon);
    container.appendChild(pokemonList);
    button.addEventListener("click", () => {
     showDetails(pokemon)
    });
  }
  return {
    add: add,
    getAll: getAll,
    addListItem: addListItem,
    showDetails: showDetails,
  };
})();
pokemonRepository.add({
  name: `Pikachu`,
  height: 0.3,
  type: [`electric`],
});
pokemonRepository.getAll().forEach(function (pokemon) {
  pokemonRepository.addListItem(pokemon);
});












