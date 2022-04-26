let pokemonRepository = (function () {
  let pokemonList = [
    { name: 'pikachu', height: 4, types: ['field','fairy'] },
    { name: 'bulbasaur', height: 7, types: ['monster','grass'] },
    { name: 'paras', height: 3, types: ['bug','grass'] },
    { name: 'seel', height: 11, types: ['water','field'] },
    { name: 'squirtle', height: 5, types: ['monster','water'] }
  ];
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

document.write("Pokemon Array List:");
let pokemonGetList = pokemonRepository.getAll();
document.write("<ul>");
pokemonGetList.forEach(item => document.write("<li>"+item.name+" "+"(height: "+item.height+")<\/li>"))
document.write("<\/ul>");