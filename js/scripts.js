
let pokemonRepository = (function(){ 
  let pokemonList = [
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
  ]
    function myLoopFunction(pokemon){
      document.write(pokemon.name + " " + "is" + " " + pokemon.height + " " + "in height");
    document.write("<br>");
    };
    pokemonList.forEach(myLoopFunction);

    function add(pokemon){
      pokemonList.push(pokemon);
    }
    function getAll(){
      return pokemonList;
    }
    return {
      add : add,
      getAll : getAll
      
    };
    })()
  pokemonRepository.add[{
    name: `Scyther`,
    type: [`Bug`, `Flying`],
    height: 4,
    abilities: [`Swarm`, `Slash`]
  }];
  
  document.write(pokemonRepository.getAll())
