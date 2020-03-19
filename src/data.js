// estas funciones son de ejemplo
//
// Creando card de pokemon
export const pokemonCard = (eachPokemon) => {
  const pokemon = `
    <div class="pokemon-card">
      <p class="pokemon-number left">${eachPokemon.num}</p>
      <img class="pokemon-image" src="${eachPokemon.img}">
      <p class="pokemon-name">${eachPokemon.name}</p> 
    </div>`;
  return pokemon;
};
//
// Función para buscar pokemones
export const search = (element, inputText) => {
  const namePokemon = element.name;
  const lengthText = inputText.length;
  let result = '';
  // buscando pokemones con las letras ingresadas
  if (namePokemon.slice(0, lengthText) === inputText) {
    result = pokemonCard(element);
  }
  return result;
};
