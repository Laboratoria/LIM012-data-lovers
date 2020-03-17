// estas funciones son de ejemplo
//
// Creando card de pokemon
export const pokemonCard = (eachPokemon) => {
  const pokemon = `
    <div class="pokemon-card">
      <p class="pokemon-number left">${eachPokemon.num}</p>
      <img class="pokemon-image" src="${eachPokemon.img}">
      <p class="pokemon-name">${eachPokemon.name}</p> 
    </div>
    `;
  return pokemon;
};

export const anotherExample = () => 'OMG';
