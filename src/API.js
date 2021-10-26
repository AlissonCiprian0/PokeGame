const baseAPI = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/";
const pokemons = [
    {id: 4, name: 'Charmander', type: 'fire', base_experience: 62, selected: false},
    {id: 7, name: 'Squirtle', type: 'water', base_experience: 63, selected: false},
    {id: 11, name: 'Metapod', type: 'bug', base_experience: 72, selected: false},
    {id: 12, name: 'Butterfree', type: 'flying', base_experience: 178, selected: false},
    {id: 25, name: 'Pikachu', type: 'electric', base_experience: 112, selected: false},
    {id: 39, name: 'Jigglypuff', type: 'normal', base_experience: 95, selected: false},
    {id: 94, name: 'Gengar', type: 'poison', base_experience: 225, selected: false},
    {id: 133, name: 'Eevee', type: 'normal', base_experience: 65, selected: false}
  ];

export {baseAPI, pokemons};