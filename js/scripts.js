let pokemonList = ["Bulbasaur (height: 0.7)", "Sharpedo (height: 1.7)", "Wailord (height: 1)"];
let text = "";
let i = 0;
for (; pokemonList[i];) {
    text = text + " " + pokemonList[i];
    i++;
}
document.write(text);



