
let pokemonRepository = (function () {
  let repository = [
    {
      name: `Bulbasaur`,
      height: 1.7,
      type: [`grass`, `poison`]
    },

    {
      name: `Charizard`,
      height: 0.7,
      type: [`fire`, `flying`]
    },
    {
      name: `Squirtle`,
      height: 1,
      type: [`water`]
    }
  ];
  // This is an old code. I left it for me to remember what I wrote earlier...
  //function myLoopFunction(pokemon) {
  //document.write(pokemon.name + " " + "is" + " " + pokemon.height + " " + "in height");
  //document.write("<br>");
  //};
  //pokemonList.forEach(myLoopFunction);

  //Adjusted addition starts here &...

  function add(pokemon) {

    repository.push(pokemon);
  };
    /*if (
      typeof pokemon === "object" &&
      "name" in pokemon &&
      "height" in pokemon &&
      "types" in pokemon
    ) {
      repository.push(pokemon);
    } else {
      console.log("pokemon is not correct");
    }
  }; */
  //ends here...

  function getAll() {
    return repository;
  };

  function showDetails(pokemon) {
    console.log(pokemon);
  };

  function addListItem(pokemon) {
    let pokemonList = document.querySelector(".pokemon-List");
    let listpokemon = document.createElement("li");
    let button = document.createElement(`button`);
    button.addEventListener(`click`, function (event) {
      showDetails(pokemon);
      button.innerText = "pokemon.name";
      button.classList.add("button-class");
      listpokemon.appendChild(button);
      pokemonList.appendChild(listpokemon);
    });
  };

  return {
    add: add,
    getAll: getAll,
    addListItem: addListItem,
    showDetails: showDetails,
  };
})();

console.log(pokemonRepository.getAll());
pokemonRepository.add({
  name: `Pikachu`,
  height: 0.3,
  type: [`electric`],
});
console.log(pokemonRepository.add());
console.log(pokemonRepository.getAll());
document.write(pokemonRepository.getAll());

//Old code..
/*pokemonRepository.getAll().forEach(function(item){
var size;
if(item.height > 1){
  size = "Wow! that`s big!";
} else {
  size = "It`s a small pokemon";
}
var result;
  item.types.forEach(function (typeItem) {
    if(typeItem == `grass`){
      result = `<span style = "color : green;" >`;
    } else if(typeItem == `fire`) {
      result = `<span style = "color : red;" >`;
    } else if(typeItem == `electric`) {
      result = `<span style = "color : yellow;" >`;
    } else if(typeItem == `poison`) {
      result = `<span style = "color : rgb(106, 42, 106);" >`;
    } else if(typeItem == `psychic`) {
      result = `<span style = "color : orange;" >`;
    }
  });
  document.write(
    `<div class = "box">` +
    item.name +
    "(height: " +
    item.height +
    "m" +
    ")" +
    "<br>" +
    size +
    result +
    "<br>" +
    item.types +
    "<br>" +
    "</div>"
  ); */

pokemonRepository.getAll().forEach(function (pokemon) {

  // I can also change the code by placing the below code inside a function called addListItem in the IIFE above.

  /* let pokemonList = document.querySelector(".pokemon-list");
     let listpokemon = document.createSelector("li");
     let button = document.createElement(".button");
     button.innerText = "pokemon.name";
     button.classList.add("button-class");
     listpokemon.append(button);
     pokemonList.appendChild(listpokemon); */

  pokemonRepository.addListItem(pokemon);
});
