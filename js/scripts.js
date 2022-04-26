let pokemonList = [
    { name: 'pikachu', height: 4, types: ['field','fairy'] },
    { name: 'bulbasaur', height: 7, types: ['monster','grass'] },
    { name: 'paras', height: 3, types: ['bug','grass'] },
    { name: 'seel', height: 11, types: ['water','field'] },
    { name: 'squirtle', height: 5, types: ['monster','water'] }
  ];

  document.write("Pokemon Array List:");
  document.write("<ul>");
  pokemonList.forEach(item => document.write("<li>"+item.name+" "+"(height: "+item.height+")<\/li>"))
  document.write("<\/ul>");