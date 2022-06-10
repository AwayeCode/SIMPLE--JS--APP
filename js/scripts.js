let pokemonList = [
  {
    name: "Bulbasaur",
    height: 0.7,
    types: ["grass", "poison"]
  },
  {
    name: "Sharpedo",
    height: 1.7,
    types: ["fire", "flying"]
  }, 
  {
    name: "Wailord",
    height: 1,
    types: ["water"]
  }
]

pokemonList.forEach(function(pokemon) {
  document.write(pokemon.name + " is" + " " + pokemon.height + " in height" + " and is a type of" + " " + pokemon.types);
});



